import express from "express";
import "./config/LoaderEnvironmentConfig";

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started on address: http://localhost:${PORT}`));
