const Stock = require("../models/Stock");


const router = require("express").Router();

//CREATE

// router.post("/", verifyToken, async (req, res) => {
router.post("/", async (req, res) => {
  const newStock = new Stock(req.body);

  try {
    const savedStock = await newStock.save();
    res.status(200).json(savedStock);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedStock = await Stock.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedStock);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Stock.findByIdAndDelete(req.params.id);
    res.status(200).json("Stock has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});
// //GET ALL

router.get("/",async (req, res) => {
  try {
    const stock = await Stock.find();
    res.status(200).json(stock);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
