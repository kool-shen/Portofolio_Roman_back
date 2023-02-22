var express = require("express");
var router = express.Router();
const cloudinary = require("cloudinary").v2;
const cloud_name = process.env.cloud_name;
const api_key = process.env.api_key;
const api_secret = process.env.api_secret;

console.log(cloud_name);

cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
});
/// get folder + useful resources ///
router.get("/", function (req, res) {
  cloudinary.api.resources({ max_results: 500 }).then((data) => {
    const filteredData = data.resources.map((item) => {
      const urlOptions = { quality: "auto" };
      const url = cloudinary.url(item.public_id, urlOptions);
      return {
        collection: item.folder.split("/").pop(),
        src: url,
        height: item.height,
        width: item.width,
      };
    });
    res.json(filteredData);
    console.log(filteredData);
  });
});

/// get folder / album names for index page

router.get("/", function (req, res) {
  cloudinary.api.resources({ max_results: 500 }).then((data) => {
    const filteredData = data.resources.map((item) => {
      const urlOptions = { quality: "auto", upload_prefix: "q_auto/" };
      const url = cloudinary.url(item.public_id, urlOptions);
      return {
        collection: item.folder.split("/").pop(),
        src: url,
        height: item.height,
        width: item.width,
      };
    });
    res.json(filteredData);
    console.log(filteredData);
  });
});

module.exports = router;
