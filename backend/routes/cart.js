const Cart = require("../models/Cart");
const Product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

// router.post("/", verifyToken, async (req, res) => {
router.post("/", async (req, res) => {
  const newCart = new Cart(req.body);
  const savedCart = await newCart.save();
  res.status(200).json(savedCart);
});

router.put("/insert/:id", async (req, res) => {
  const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
    $push: {
      products: req.body,
    },
  });
  const savedCart = await updatedCart.save();
  res.status(200).json(savedCart);
});

router.put("/updateQuantity", async (req, res) => {
  const cart = await Cart.updateOne(
    {
      userId: req.body.userId,
      "products.productId": req.body.productId,
    },
    {
      $set: {
        "products.$.quantity": req.body.quantity,
      },
    },
    { new: true }
  );
  res.status(200).json(cart);
});

//UPDATE
// router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
router.put("/:id", async (req, res) => {
  const updatedCart = await Cart.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  );
  res.status(200).json(updatedCart);
});

//DELETE ARRAY
router.put("/find/deleteProduct", async (req, res) => {
  const cart = await Cart.updateOne(
    {
      userId: Object(req.body.userId),
    },
    {
      $pull: {
        products: { productId: req.body.productId },
      },
    },
    { new: true }
  );
  res.status(200).json(cart);
});
//DELETE
// router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
router.delete("/:id", async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.status(200).json("Cart has been deleted...");
});
router.get("/find/products/quantity", async (req, res) => {
  try {
    const carts = await Cart.find(
      {},
      {
        products: { $elemMatch: req.body },
      }
    );
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET USER CART
// router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
router.get("/find/:userId", async (req, res) => {
  const cart = await Cart.findOne({ userId: req.params.userId });
  res.status(200).json(cart);
});
// //GET ALL
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const carts = await Cart.find();
  res.status(200).json(carts);
});

//TOTAL
router.get("/total", async (req, res) => {
  try {
    const total = await Cart.aggregate([
      {
        $project: {
          userId: 1,
          TotalQuantity: {
            $sum: "$products.quantity",
          },
        },
      },
    ]);
    res.status(200).json(total);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET PRODUCTS PRICE
router.get("/find/products/id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Product.find({
      _id: {
        $in: ["624d222f35def4eb4bba2960", "624d22c135def4eb4bba2964"],
      },
    });
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//TOTAL QUANTITY
router.get("/total/user/cart/product/:id", async (req, res) => {
  try {
    let total = await Cart.aggregate([
      {
        $unwind: {
          path: "$products",
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "products.productId",
          foreignField: "_id",
          as: "products.product",
        },
      },
      {
        $unwind: {
          path: "$products.product",
        },
      },
      {
        $group: {
          _id: "$_id",
          products: {
            $push: "$products",
          },
        },
      },
      {
        $lookup: {
          from: "carts",
          localField: "_id",
          foreignField: "_id",
          as: "cartDetails",
        },
      },
      {
        $unwind: {
          path: "$cartDetails",
        },
      },
      {
        $addFields: {
          "cartDetails.products": "$products",
        },
      },
      {
        $match: {
          $expr: { $eq: ["$_id", { $toObjectId: req.params.id }] },
        },
      },
      {
        $replaceRoot: {
          newRoot: "$cartDetails",
        },
      },
    ]);
    res.status(200).json(total);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
