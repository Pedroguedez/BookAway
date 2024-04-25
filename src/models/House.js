import { Schema, model } from "mongoose";

const HouseSchema = new Schema({
   thumbnail: String,
   descripton: String,
   price: Number,
   location: String,
   status: Boolean,
   user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
   }
})
export default model('House', HouseSchema);