const mongoose = require('mongoose');

const connectDB = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('DB connected');
  } catch (error) {
    console.log('DB Connection Error');
    console.log(error);
  }
};

module.exports = connectDB;
