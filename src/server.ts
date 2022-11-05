import express from "express";
import path from "path";

const server = express();

server.use(express.static(path.resolve(__dirname, "../dist/public/")));

server.set("views", path.resolve(__dirname, "../public/views/"));
server.set("view engine", "ejs");

server.get("/", (req, res) => {
    res.render("home");
});

server.listen(8080, () => {
    console.log("Listening to :8080");
});
