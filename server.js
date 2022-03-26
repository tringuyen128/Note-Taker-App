const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;
// configure express use
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.listen(PORT, () => {
    console.log(`Now listening on PORT: ${PORT}`);
});