import Repository from "../Repository/register.js";
import Alien from "../Repository/alien.js";

async function checkIn(customer) {
  const alien = await Alien.getAlienById(customer.alienId);

  if (getAge(alien.earthBirthday) < 25) {
    throw new Error(`O alien ${alien.name} é menor de 25 anos terraqueos`);
  }

  return await Repository.insertRegister(customer);
}

async function checkOut(id) {
  await Repository.deleteRegister(id);
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
