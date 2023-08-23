const express = require("express");
const electronics = express.Router();
const {
  getAllElectronics,
  getElectronic,
  createElectronic,
  deleteElectronic,
  updateElectronic,
} = require("../queries/electronics");


// INDEX
electronics.get("/", async (req, res) => {
  try {
    const allElectronics = await getAllElectronics();
    // console.log("in get all electronics", allElectronics)
    console.log(allElectronics)
    res.json(allElectronics);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: error.message});
  }
});


// SHOW
electronics.get("/:id", async (req, res) => {
  const { id } = req.params;
  const electronic = await getElectronic(id);
  if (electronic) {
    res.json(electronic);
  } else {
    res.status(404).json({ error: "not found" });
  }
});


// CREATE
electronics.post("/", async (req, res) => {
  try {
    const electronic = await createElectronic(req.body);
    res.json(electronic);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});


// DELETE
electronics.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedElectronic = await deleteElectronic(id);
  if (deletedElectronic.id) {
    res.status(200).json(deletedElectronic);
  } else {
    res.status(404).json({ error: "Electronic not found" });
  }
});

// UPDATE
electronics.put("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.body)
  const updatedElectronic= await updateElectronic(id, req.body);
  res.status(200).json(updatedElectronic);
});


module.exports = electronics;