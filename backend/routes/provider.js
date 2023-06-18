const Provider = require("../models/Provider");


const router = require("express").Router();

//CREATE

// router.post("/", verifyToken, async (req, res) => {
router.post("/", async (req, res) => {
  const newProvider = new Provider(req.body);

  try {
    const savedProvider = await newProvider.save();
    res.status(200).json(savedProvider);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedProvider = await Provider.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProvider);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Provider.findByIdAndDelete(req.params.id);
    res.status(200).json("Provider has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});
// //GET ALL

router.get("/",async (req, res) => {
  try {
    const provider = await Provider.find();
    res.status(200).json(provider);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
