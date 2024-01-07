import Music from "../models/Music.js";
import mongoose from "mongoose";
class MusicService{
    async create(music){
        const {author, poster, info, audio} = music;
        return await Music.create({author, info, poster:poster.fileName, audio:audio.fileName});
    }
    async getAll(){
        return await Music.find({});
    }
    async getById(id){

    }
    async update(){

    }
    async delete(id){

    }
}

export default new MusicService();