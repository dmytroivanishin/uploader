import mongoose from "mongoose";

const Schema = mongoose.Schema;

const photosSchema = Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model("Photos", photosSchema);