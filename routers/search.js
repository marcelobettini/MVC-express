const router = require("express").Router();
const searchController = require("../controllers/search.js");
router.get("/", searchController.showMessage);
router.get("/:product", searchController.searchProducts);
module.exports = router;
