const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_PATH, {useNewUrlParser: true, useUnifiedTopology: true});

