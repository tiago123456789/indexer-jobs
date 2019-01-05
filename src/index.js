import app from "./config/Server";

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server started on address: http://localhost:${PORT}`));
