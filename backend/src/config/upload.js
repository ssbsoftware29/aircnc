const multer = require('multer');
const path = require('path') // usado para ajustar a localização dos SOs

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,path.resolve(__dirname,'../../uploads'));
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = path.basename(file.originalname, ext)

    cb(null, `${name}-${Date.now()}${ext}`);
  }
})

var upload = multer({ storage });

module.exports = upload;