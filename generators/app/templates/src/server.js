import express from "express";
import setupMiddleware from "./middleware";

const app = express();
setupMiddleware(app);

app.all("*", (req, res) => {
	res.json({ ok: "hello" });
});

export default app;
