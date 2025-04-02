const express = require("express");
const numberRoutes = require("./src/routes/numberRoutes");
const cors=require("cors")
const app = express();
const PORT = process.env.PORT || 9076;
app.use(cors());
app.use(express.json());
app.use("/numbers", numberRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));