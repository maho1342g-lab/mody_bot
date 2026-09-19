const mineflayer = require("mineflayer");

const bot = mineflayer.createBot({
  host: "ضع_عنوان_السيرفر_هنا",
  port: 25565,
  username: "ModyBot",
  version: false
});

bot.on("login", () => {
  console.log("البوت دخل السيرفر ✅");
});

bot.on("end", () => {
  console.log("البوت خرج من السيرفر ❌");
});

bot.on("error", (err) => {
  console.log("خطأ:", err.message);
});
