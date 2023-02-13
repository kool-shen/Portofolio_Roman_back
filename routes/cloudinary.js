var express = require('express');
var router = express.Router();
const cloudinary = require('cloudinary').v2;
const cloud_name = process.env.cloud_name
const api_key = process.env.api_key
const api_secret = process.env.api_secret

console.log(cloud_name)

cloudinary.config({
    cloud_name: cloud_name,
    api_key: api_key,
    api_secret: api_secret
  });


/* GET users listing. */
router.get('/', function(req, res) {
  cloudinary.api.resources().then(data => console.log(data))
});

module.exports = router;
