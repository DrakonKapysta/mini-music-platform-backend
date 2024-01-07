import {Schema, model} from "mongoose";

const Music = new Schema({
    author:{type:String},
    info:{type:String},
    poster:{type:String},
    audio:{type:String}
})

export default model('Music', Music)