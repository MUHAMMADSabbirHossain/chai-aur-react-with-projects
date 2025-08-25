import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.static("dist"));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  res.send([
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "Another joke",
      content: "This is another joke",
    },
    {
      id: 3,
      title: "A third joke",
      content: "This is a third joke",
    },
    {
      id: 4,
      title: "A fourth joke",
      content: "This is a fourth joke",
    },
    {
      id: 5,
      title: "A fifth joke",
      content: "This is a fifth joke",
    },
  ]);
});

const port = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
