const chalk = require("chalk");
const jimp = require("jimp");

const defaultDivider = "\n";
const defaultPixel = "\u2584".repeat(2);
const defaultBlank = " ".repeat(2);

const consoleWidth = process.stdout.columns || 25;
const consoleHeight = process.stdout.rows || 25;

const defaultWidth = consoleWidth / 2;
const defaultHeight = consoleHeight - 2;

module.exports = function (
  path,
  { pixel = defaultPixel, blank = defaultBlank, width = defaultWidth, height = defaultHeight, divider = defaultDivider } = {
    pixel: defaultPixel,
    blank: defaultBlank,
    width: defaultWidth,
    height: defaultHeight,
    divider: defaultDivider
  }
) {
  return jimp.read(path).then((image) => {
    image.scaleToFit(width, height);

    let res = "";
    for (let y = 0; y < image.getHeight(); y++) {
      for (let x = 0; x < image.getWidth(); x++) {
        const { r, g, b, a } = jimp.intToRGBA(image.getPixelColor(x, y));
        res += a === 0 ? chalk.reset(blank) : chalk.rgb(r, g, b).bgRgb(r, g, b)(pixel);
      }

      res += "\n";
    }

    return res;
  });
};

module.exports.attach = function () {
  console.image = function (
    path,
    { pixel = defaultPixel, blank = defaultBlank, width = defaultWidth, height = defaultHeight, divider = defaultDivider } = {
      pixel: defaultPixel,
      blank: defaultBlank,
      width: defaultWidth,
      height: defaultHeight,
      divider: defaultDivider
    }
  ) {
    return module.exports(path, { pixel, blank, width, height, divider }).then(console.log);
  };
};

module.exports.defaultPixel = defaultPixel;
module.exports.defaultBlank = defaultBlank;
module.exports.defaultWidth = defaultWidth;
module.exports.defaultHeight = defaultHeight;
module.exports.defaultDivider = defaultDivider
