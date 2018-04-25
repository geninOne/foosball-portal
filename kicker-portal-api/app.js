const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// load routes
require('./routes')(app);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));