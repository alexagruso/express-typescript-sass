import express, { Express, Request, Response } from "express";
import path from "path";

import ejsLayouts from "express-ejs-layouts";

const server: Express = express();

server.use(express.static(path.resolve(__dirname, "../dist/public/")));
server.use(ejsLayouts);

server.set("views", path.resolve(__dirname, "../public/views/"));
server.set("view engine", "ejs");

server.get("/", (req: Request, res: Response) => {
    res.render("home");
});

const port: number = parseInt(process.env.PORT!) || 8080;

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
