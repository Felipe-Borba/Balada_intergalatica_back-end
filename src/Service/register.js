import RegisterRepository from "../Repository/register.js";
import BacklogRepository from "../Repository/backlog.js";
import AlienRepository from "../Repository/alien.js";
import PartyRepository from "../Repository/party.js";

async function checkIn(customer) {
  let alien = await AlienRepository.getAlienById(customer.alienId);
  const party = await PartyRepository.getPartyById(customer.partyId);
  const alreadyIn = await RegisterRepository.getRegisterByAlienId(
    customer.alienId
  );

  if (getAge(alien.earthBirthday) < 25) {
    throw new Error(`O alien ${alien.name} é menor de 25 anos terraqueos`);
  }

  if (alien.banned) {
    throw new Error(`alien ${alien.name} está banido`);
  }

  if (alreadyIn.length) {
    alien = { ...alien.dataValues, banned: true };
    await AlienRepository.updateAlien(alien);
    await RegisterRepository.deleteRegister(customer.alienId);
    throw new Error(`alien ${alien.name} já está em uma balada e foi  banido `);
  }

  customer.objects.forEach((item) => {
    if (party.restrictedItems.find((restrict) => restrict == item)) {
      throw new Error(`${alien.name} tem um item proibido`);
    }
  });

  return await RegisterRepository.insertRegister(customer);
}

async function checkOut(id) {
  const register = await RegisterRepository.getRegisterByAlienId(id);

  minimumTime(register[0]);

  const backlog = {
    checkIn: register[0].checkIn,
    alienId: register[0].alienId,
    partyId: register[0].partyId,
    checkOut: new Date(),
  };

  await BacklogRepository.insertBacklog(backlog);

  await RegisterRepository.deleteRegister(id);
}

function minimumTime(register) {
  const checkIn = new Date(register.checkIn).getMinutes();
  const currentTime = new Date().getMinutes();
  if (currentTime - checkIn < 1) {
    throw new Error("Esperar pelomenos 1 minuto para fazer o check out");
  }
}

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

export default {
  checkIn,
  checkOut,
};
