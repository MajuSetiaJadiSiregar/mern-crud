const Product = require('../models/productsModel');

module.exports = {
   createProduct : async (req, res) => {
      try {
         const { name, price } = req.body;
         const findProduct = await Product.findOne({name}).exec();
         if(findProduct) return res.status(400).json({ msg : 'Produk nya sudah ada ..!!!'});
         
         const newProduct = new Product({ name, price});
         await newProduct.save();

         res.json({ success : newProduct });

      } catch (err) {
         return res.status(500).json({ msg : err.message});
      };
   },

   readProduct : async (req, res) => {
      try {
         const readProduct = await Product.find();
         res.json({ products : readProduct});
      } catch (err) {
         return res.status(500).json({ msg : err.message});
      };
   },

   updateProduct : async (req, res) => {
      try {
         const { name, price } = req.body;
         const updateProduct = await Product.findByIdAndUpdate(req.params.id, { name, price}, { new : true });
         res.json({ success : updateProduct});
      } catch (err) {
         return res.status(500).json({ msg : err.message});
      };
   },

   deleteProduct : async (req, res) => {
      try {
         const deleteProduct = await Product.findByIdAndDelete(req.params.id);
         res.json({ success : deleteProduct});
      } catch (err) {
         return res.status(500).json({ msg : err.message});
      };
   }
}