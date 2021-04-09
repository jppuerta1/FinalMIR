const mongoose = require('mongoose');

mongoose
  .connect('mongodb+srv://final_project:1234@mircourse.ooyii.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    dbName: 'projects',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.warn('mongodb connected'))
  .catch((err) => console.warn(err.message));
