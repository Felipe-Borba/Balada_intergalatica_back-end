import Costumer from "../DataBase/models/costumer.js";

async function insertCostumer(costumer) {
  return await Costumer.create(costumer);
}

async function getCostumer() {
  return await Costumer.findAll();
}

async function getCostumer(id) {
  return await Costumer.findByPk(id);
}

async function updateCostumer(costumer) {
  await Costumer.update(costumer, {
    where: {
      costumerId: costumer.costumerId,
    },
  });

  return await getCostumer(costumer.costumerId);
}

async function deleteCostumer(id) {
  await Costumer.destroy({
    where: {
      costumerId: id,
    },
  });

  return `costumer id=${id} deleted`;
}

export default {
  insertCostumer,
  getCostumer,
  updateCostumer,
  deleteCostumer,
};
