import FileService from "../services/FileService.js";
import MusicService from "../services/MusicService.js";
class MusicController {
  async create(req, res) {
    if (!req.files) {
      return res.status(500).json({ message: "File not uploaded." });
    }
    try {
      const files = await FileService.saveFiles(req.files);
      if (!files) {
        return res.status(500).json({ message: "File was not saved." });
      }
      const createdMusic = await MusicService.create({
        author: req.body.author,
        info: req.body.info,
        poster: files.image,
        audio: files.audio,
      });
      res.json(createdMusic);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getAll(req, res) {
    try {
      const allMusic = await MusicService.getAll();
      res.json(allMusic);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getById(req, res) {
    const id = req.params.id;
    try {
      const music = await MusicService.getById(id);
      res.json(music);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async update(req, res) {
    if (!req.files) {
      return res.status(500).json({ message: "File not uploaded." });
    }
    try {
      const files = await FileService.saveFiles(req.files);
      const { image: poster, audio } = files;
      const updated = await MusicService.update(
        req.body,
        poster.fileName,
        audio.fileName
      );
      res.json({ message: "Updated successfuly", previousMusic: updated });
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async delete(req, res) {
    const id = req.params.id;
    try {
      const deletedMusic = await MusicService.delete(id);
      res.json(deletedMusic);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new MusicController();
