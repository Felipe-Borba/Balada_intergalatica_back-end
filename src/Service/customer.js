import CustomerRepository from "../Repository/customer.js";

async function createCustomer(customer) {
  return await CustomerRepository.createCustomer(customer);
}

async function getCustomer() {
  return await CustomerRepository.getCustomer();
}

async function getCustomerById(id) {
  return await CustomerRepository.getCustomerById(id);
}

async function updateCustomer(customer) {
  return await CustomerRepository.updateCustomer(customer);
}

async function deleteCustomer(id) {
  return await CustomerRepository.deleteCustomer(id);
}

export default {
  createCustomer,
  getCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
