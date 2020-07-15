const multer = require('multer');
const fs = require('fs');

exports.checkUploadPath = (req, res, next) => {
  fs.exists('./uploads/', (exists) => {
    if (exists) {
      next();
    } else {
      fs.mkdir('./uploads/', function (err) {
        if (err) {
          console.log('Error in folder Creation');
          next();
        }
        next();
      });
    }
  });
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    //cb(null, file.filename);
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  //reject a file
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/png'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

exports.upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5 MB
  },
  fileFilter: fileFilter,
});
