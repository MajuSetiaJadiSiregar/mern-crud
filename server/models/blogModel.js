import mongoose from 'mongoose';

const blogSchema = mongoose.Schema({
   title : { type : String, required : true },
   message : { type : String, required : true },
   image : { type : String, required : true },
   penulis : { type : String, required : true }
});

const blogModel = mongoose.model('Blog', blogSchema);

export default blogModel;