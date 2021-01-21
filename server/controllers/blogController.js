import blogModel from '../models/blogModel.js';


export const readBlog = async (req, res) => {
   try {
      const readBlog = await blogModel.find();
      res.status(201).json({ success : readBlog });
   } catch (error) {
      console.log(error)
   };
};

export const createBlog = async (req, res) => {
   try {
      const { title, message, image, penulis } = req.body;
      const newBlog = new blogModel({ title, message, image, penulis });
      await newBlog.save();
      res.status(201).json({ success : newBlog });
   } catch (error) {
      console.log(error);
   };
};