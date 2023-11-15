const products = require("../models/products.js");

const searchController = {
  showMessage: (req, res) => res.send("EStás en la ruta de búsqueda"),
  searchProducts: (req, res) => {
    for (let i = 0; i < products.length; i++) {
      if (
        products[i].product.toLowerCase() === req.params.product.toLowerCase()
      ) {
        return res.json({
          message: "Producto encontrado",
          detail: products[i],
        });
      }
    }
    res.json({ message: "Producto no encontrado" });
  },
};

module.exports = searchController;
