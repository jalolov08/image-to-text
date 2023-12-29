const Tesseract = require("tesseract.js");

const imagePath = "./test.png";
Tesseract.recognize(imagePath, "eng", {
  logger: (info) => {
    console.log(info);
  },
})
  .then(({ data: { text } }) => {
    console.log("Распознанный текст:", text);
  })
  .catch((error) => {
    console.error("Ошибка при распознавании текста:", error);
  });
