const jimp = require('jimp'); 

/*
  * Shrinks image to specified width
  *
  * @param {file} image Image
  * @param {number} width=30 Width of the file
  * @returns {string} The shrunk file
*/
module.exports = (data, api) => {
  jimp.read(data.image.file, (err, image) => {
    if(err) api.error(err);
    image.resize(data.width, jimp.AUTO);
    image.getBuffer(jimp.AUTO, (err, buffer) => {
      if(err) api.error(err);
      api.success(buffer);
    })
  });
};
