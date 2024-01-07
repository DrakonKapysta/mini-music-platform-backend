import FileService from "../services/FileService.js";
import MusicService from "../services/MusicService.js";
class MusicController{
    async create(req,res){
        if(!req.files){
            return res.status(500).json({message:"File not uploaded."})
        }
        try {
            const files = await FileService.saveFiles(req.files);
            if(!files){
                return res.status(500).json({message:"File was not saved."})
            }
            const createdMusic = await MusicService.create({author:req.body.author, info:req.body.info,poster: files.image, audio:files.audio})
            res.json(createdMusic);
        }catch (e){
            res.status(500).json(e);
        }
    }
    async getAll(req,res){
        try {
            const allMusic = await MusicService.getAll();
            res.json(allMusic);
        }catch (e){
            res.status(500).json(e);
        }
    }
    async getById(req,res){
        const id = req.params.id;
        try {
            const music = await MusicService.getById(id);
        }catch (e) {

        }

    }
    async update(req,res){

    }
    async delete(req,res){

    }

}

export default new MusicController()