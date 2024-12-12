const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
app.use("/api", routes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
