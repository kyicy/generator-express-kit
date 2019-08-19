import express from 'express';

const app = express();

app.all("*", (req, res) => {
  res.json({
    greetings: "hello world!"
  });
});

export default app;
