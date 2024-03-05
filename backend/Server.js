const express = require("express");

const PORT = 8000;
const cors = require('cors');
const blogRouter = require('./Routes/blog'); // Change 'blogROuter' to 'blogRouter'

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", blogRouter); // Corrected the variable name to blogRouter

app.get("/", (req, res) => {
    res.send("Server started on " + PORT);
});

app.listen(PORT, () => {
    console.log(`Server started on: http://localhost:${PORT}`);
});
