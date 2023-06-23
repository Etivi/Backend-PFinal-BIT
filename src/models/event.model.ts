import mongoose, { Schema, version } from "mongoose"

const event = new Schema({
    id: {type: String, required: true},
    tittle: {type: String, required: true, unique: true},
    dateStart: {type: String, required: true},
    dateEnd : {type: String, required: true, unique:true},
    description : {type: String, required: true, unique:true},
    active: {type: Boolean, default: false},
},
{
    timestamps: true,
    versionKey : false
})

export default mongoose.model("event", event)