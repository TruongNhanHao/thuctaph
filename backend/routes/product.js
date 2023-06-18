const Product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();
//CREATE

router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET SEARCH
router.get("/find/search/product", async (req, res) => {
  const qSearch = req.query.search;
  console.log(qSearch)
  try {
    if (qSearch) {
      const product = await Product.find({
        // title: { $regex: qSearch, $options: "$i" },
      })
        .sort({ createdAt: -1 })
        .limit(3);
      console.log(product);
      res.status(200).json(product);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
//GET FILLTER
router.get("/find/categories/products", async (req, res) => {
  const { categories, tinhnang, hieunang, hang, price, counts, color, ram } =
    req.query;
  const page = Number(req.query.page) || 1;
  const obtest = [categories, tinhnang, hieunang, hang, color, ram];
  let queryObject = {};
  if (counts) {
    queryObject.counts = counts === "true" ? true : false;
  }
  if (categories) {
    queryObject.categories = {
      $in: categories.split("-").join(" ").split(","),
    };
  }
  console.log(obtest, counts);
  if (tinhnang) {
    queryObject.tinhnang = {
      $in: tinhnang.split("-").join(" ").split(","),
    };
  }
  if (hieunang) {
    queryObject.hieunang = {
      $in: hieunang.split("-").join(" ").split(","),
    };
  }
  if (color) {
    queryObject.color = {
      $in: color.split("-").join(" ").split(","),
    };
  }
  if (ram) {
    queryObject.ram = {
      $in: ram.split("-").join(" ").split(","),
    };
  }
  if (hang) {
    queryObject.hang = {
      $in: hang.split("-").join(" ").split(","),
    };
  }
  const test = [];
  if (price) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = price.replace(regEx, (match) => `-${operatorMap[match]}-`);
    let ArrEven = [];
    ArrEven = filters
      .split(",")
      .filter((e) => e !== "count-$lte-2000000" && e !== "count-$gte-13000000");
    const ArrOdd = filters
      .split(",")
      .filter((e) => e === "count-$lte-2000000" || e === "count-$gte-13000000");
    if (ArrOdd.length !== 0) {
      let sum = {},
        sum1 = {},
        sum2 = {};
      if (ArrOdd.length === 1) {
        if (ArrOdd[0] === "count-$lte-2000000") {
          sum = {
            count: { $lte: Number(2000000) },
          };
        } else {
          sum = {
            count: { $gte: Number(13000000) },
          };
        }
        test.push(sum);
      } else {
        sum1 = {
          count: { $lte: Number(2000000) },
        };
        sum2 = {
          count: { $gte: Number(13000000) },
        };
        test.push(sum1);
        test.push(sum2);
      }
    }
    let arr2 = [];
    ArrEven
      ? ArrEven.forEach((item) => {
          const h = item.split("-");
          arr2.push({ num: h[2] });
        })
      : ArrEven;
    let i;
    if (arr2.length !== 0) {
      for (i = 0; i < arr2.length; i++) {
        if (i % 2 === 0) {
          const sum = {
            count: { $gte: Number(arr2[i].num), $lte: Number(arr2[i + 1].num) },
          };
          test.push(sum);
        }
      }
    }
  }
  console.log(queryObject, { $or: test });
  try {
    if (page) {
      const pages = 10 + (page - 1) * 5;
      const carts = counts
        ? test.length !== 0
          ? await Product.find(
              {
                $and: [
                  queryObject,
                  {
                    $or: test.length !== 0 ? test : [],
                  },
                ],
              }
              // queryObject
            ).count()
          : await Product.find(queryObject).count()
        : test.length !== 0
        ? await Product.find(
            {
              $and: [
                queryObject,
                {
                  $or: test.length !== 0 ? test : [],
                },
              ],
            }
            // queryObject
          ).limit(pages)
        : await Product.find(queryObject).limit(pages);
      res.status(200).json(carts);
    }
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});
//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const page = Number(req.query.page) || 1;
  try {
    let products;
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (page) {
      const pages = 10 + (page - 1) * 5;
      products = await Product.find().limit(pages);
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
