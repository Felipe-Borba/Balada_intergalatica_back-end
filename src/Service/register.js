import Repository from "../Repository/register.js";
import Alien from "../Repository/alien.js";

async function checkIn(customer) {
  const alien = await Alien.getAlienById(customer.alienId);

  checkAge(alien.earthBirthday);

  return await Repository.insertRegister(customer);
}

async function checkOut(id) {
  //TODO check out implementation
}

function checkAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  if (age < 25) {
    throw new Error(`O alien ${alien.name} é menor de 25 anos terraqueos`);
  }

  return age;
}

export default {
  checkIn,
  checkOut,
};
