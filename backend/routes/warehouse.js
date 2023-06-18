const Warehouse = require("../models/warehouse");


const router = require("express").Router();

//CREATE

// router.post("/", verifyToken, async (req, res) => {
router.post("/", async (req, res) => {
  const newWarehouse = new Warehouse(req.body);

  try {
    const savedWarehouse = await newWarehouse.save();
    res.status(200).json(savedWarehouse);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedWarehouse = await Warehouse.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedWarehouse);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Warehouse.findByIdAndDelete(req.params.id);
    res.status(200).json("Warehouse has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});
// //GET ALL

router.get("/",async (req, res) => {
  try {
    const warehouse = await Warehouse.find();
    res.status(200).json(warehouse);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
