import mongoose from "mongoose";

// Settings lib promise used mongoose.
mongoose.Promise = Promise;

// Settings connection database.
mongoose.connect(process.env.URL_DB, { useNewUrlParser: true });