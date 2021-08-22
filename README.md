![Banner](https://cdn.discordapp.com/attachments/791493944751423540/876726126079258624/banner.png)

# Terimg

A small library for displaying images in the terminal

# Usage

Installation (`npm i terimg`)

```js
const terimg = require("terimg");
terimg(input, options); // Returns Promise<string>

terimg.attach(); // Allows for console.image(input, options)
console.image(input, options); // Returns Promise<void>

terimg.defaultPixel; // "▄▄" (\u2584\u2584)
terimg.defaultBlank; // "  " (2 Spaces)
terimg.defaultWidth; // Max width of the terminal
terimg.defaultHeight; // Max height of the terminal
terimg.defaultDivider; // "\n" Default line splitter
```

Ways to print an image to the terminal

```js
terimg("./banner.png").then(console.log);
terimg(
  "https://cdn.discordapp.com/attachments/791493944751423540/876726126079258624/banner.png"
).then(console.log);

terimg.attach();
console.image(
  "https://cdn.discordapp.com/attachments/791493944751423540/876726126079258624/banner.png"
);
```

Inputs

```js
// Note: Uses jimp (https://www.npmjs.com/package/jimp) so accepts anything jimp accepts

terimg("./banner.png");
terimg("https://cdn.discordapp.com/attachments/791493944751423540/876726126079258624/banner.png");
terimg(jimpInstance);
terimg(buffer);
```

Options

```js
// Note: Images will always scale to fit width and height

{
  width: 25, // Maxmimum width in rows (Defaults to terminal's full width)
  height: 25, // Maximum height in columns (Default's to terminal's full height)
  pixel: "B", // Change character it uses as a pixel (Default's to ▄▄ "\u2584\u2584")
  blank: " ", // Change character it uses as transparency (Default's to 2 spaces "  "),
  divider: "\n" // Change line divider (Try "​\n" if you are having issues, it uses a zero-width character behind the \)
}
```
