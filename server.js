const express = require('express');

const path = require('path');

const app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./Develop/routes/apiRoutes")(app);
require("./Develop/routes/htmlRoutes")(app);

app.listen(PORT, () => console.log("Server is running on " + PORT));