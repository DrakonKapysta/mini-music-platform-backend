import Router from 'express';
import MusicController from "../controllers/MusicController.js";

const musicRouter = new Router();

musicRouter.post('/musics', MusicController.create);
musicRouter.get('/musics', MusicController.getAll);
musicRouter.get('/musics/:id', MusicController.getById);
musicRouter.put('/musics', MusicController.update);
musicRouter.delete('/musics/:id', MusicController.delete);

export default musicRouter;