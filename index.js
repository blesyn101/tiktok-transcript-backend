import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import transcriptRoutes from "./routes/transcript.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Transcript Api running");
});
app.use("/api/transcript", transcriptRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
