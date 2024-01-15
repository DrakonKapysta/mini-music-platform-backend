import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import musicRouter from "./routers/musicRouter.js";

const app = express();
const PORT = 5000;
const DB_URL =
  "mongodb+srv://mini-music-platform:hMJ46CErvsLpoDZl@cluster0.zspjrmi.mongodb.net/?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));
app.use(fileUpload({}));
app.use("/", musicRouter);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}
startApp();
