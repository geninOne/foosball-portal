const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// load models
require('./associations');

// load authentication
require('./authentication');

// load routes
require('./routes')(app);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));