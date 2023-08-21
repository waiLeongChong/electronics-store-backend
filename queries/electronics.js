const db = require("../db/dbConfig");

// All Electronics
const getAllElectronics = async () => {
  try {
    const allElectronics = await db.any("SELECT * FROM electronics");
    return allElectronics;
  } catch (error) {
    return error;
  }
};

// ONE Electronic
const getElectronic = async (id) => {
  try {
    const oneElectronic = await db.oneOrNone("SELECT * FROM electronic WHERE id=$1", id);
    return oneElectronic;
  } catch (error) {
    return error;
  }
};

// CREATE
const createElectronic = async (electronic) => {
  try {
    const newElectronic = await db.one(
      "INSERT INTO electronics (name, brand, category, description, image_url, price) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [electronic.name, electronic.brand, electronic.category, electronic.description, electronic.image_url, electronic.price]
    );
    return newElectronic;
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteElectronic = async (id) => {
  try {
    const deletedElectronic = await db.one(
      "DELETE FROM electronics WHERE id=$1 RETURNING *",
      id
    );
    return deletedElectronic;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updateElectronic = async (id, electronic) => {
  try {
    const updatedElectronic= await db.one(
      "UPDATE electronics SET name=$1, brand=$2, category=$3, description=$4, image_url=$5 price=$6 WHERE id=$7 RETURNING *",
      [electronic.name, electronic.brand, electronic.category, electronic.description, electronic.image_url, electronic.price, id]
    );
    return updatedElectronic;
  } catch (error) {
    return error;
  }
};

module.exports = { 
  getAllElectronics, 
  getElectronic, 
  createElectronic, 
  deleteElectronic, 
  updateElectronic 
};