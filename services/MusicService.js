import Music from "../models/Music.js";
import mongoose from "mongoose";
class MusicService {
  async create(music) {
    const { author, poster, info, audio } = music;
    return await Music.create({
      author,
      info,
      poster: poster.fileName,
      audio: audio.fileName,
    });
  }
  async getAll() {
    return await Music.find({});
  }
  async getById(id) {
    const music = await Music.findById(id);
    return music;
  }
  async update(music, poster, audio) {
    const updatedMusic = await Music.findByIdAndUpdate(music.id, {
      author: music.author,
      info: music.info,
      poster: poster,
      audio: audio,
    });
    return updatedMusic;
  }
  async delete(id) {
    const deletedMusic = await Music.findByIdAndDelete(id);
    return deletedMusic;
  }
}

export default new MusicService();
