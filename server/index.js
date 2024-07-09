const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const UserModel = require('./models/tbl');

const app = express();

app.use(cors());
app.use(express.json());

// Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Serve static files from the "images" directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// DB Connection
mongoose.connect("mongodb+srv://diyadivya079:AJlao1jTLjGzyX6q@cluster0.axlaqmd.mongodb.net/Website?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Getting Carousel Data
app.get('/api/carousel', async (req, res) => {
  try {
    const carousel = await UserModel.find({});
    console.log(carousel); // Log the query results
    res.json(carousel);
  } catch (err) {
    console.error(err); // Log the error
    res.status(500).json({ error: err.message });
  }
});


//  Get id   
// app.get('api/get/:id', (req, res) => {
//   const id = req.params.id;
//   UserModel.findById(id)
//       .then(user => res.json(user))
//       .catch(err => res.json(err));
// });
// PUT route to update an existing carousel item
app.put('/api/carousel/:id', upload.single('carousel_img_1'), async (req, res) => {
  try {
    const updatedData = {
      carousel_des_1: req.body.carousel_des_1
    };
    if (req.file) {
      updatedData.carousel_img_1 = req.file.filename;
    }
    const result = await UserModel.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// POST Carousel Details
app.post("/api/carousel", upload.single('carousel_img_1'), (req, res) => {
  const newdata = new UserModel({
    carousel_img_1: req.file ? req.file.filename : null,
    carousel_des_1: req.body.carousel_des_1
  });
  newdata.save()
    .then(user => res.json(user))
    .catch(err => res.status(500).json(err));
});

// delete
app.delete('/api/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
      .then(res => res.json(res))
      .catch(err => res.json(err))

})


// login
const LoginSchema = new mongoose.Schema({
  email: String,
  password: String
});
const LoginModel = mongoose.model("login", LoginSchema);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  LoginModel.findOne({ email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Login Successfully");
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("No record existed");
      }
    })
    .catch(err => res.status(500).json("Server Error"));
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
