const TelegramBot = require('node-telegram-bot-api');

const token = 'token bot'; #token

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const name = msg.from.first_name || "друг";

  const text = `<b>Привет, ${name}!</b>\n\n` +
             `BIO - <b>absolute fqwfdcv</b> 👤\n\n` +
             `Называйте <b>Илюша</b>\n\n` +
             `Команды:\n\n` +
             `📁 Проекты — /projects\n` +
             `❓ FAQ — /faq\n` +
             `🧠 Скиллы — /skills\n\n` +
             `Вот мои ссылки и проекты ↓`;


  const options = {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "🌐 Сайт", url: "https://fqwfdcv.github.io/fqwfdcv/" }
        ],
        [
          { text: "💬 Telegram", url: "https://t.me/absolute_fqwfdcv" },
          { text: "📸 Instagram", url: "https://instagram.com/fqwfdcv" },
          { text: "💎 Telegram Channel", url: "https://t.me/logovo_ilyshi" },
        ],
        [
          { text: "🎮 Steam", url: "https://steamcommunity.com/id/fqwfdcv/" },
          { text: "💻 GitHub", url: "https://github.com/fqwfdcv" }
        ],
        [
          { text: "🧩 Minecraft Bot (проект)", url: "https://github.com/absolute-fqwfdcv/minecraft-telegram-bot" }
        ]
      ]
    }
  };

  bot.sendMessage(chatId, text, options);
});


bot.onText(/\/faq/, (msg) => {
  const chatId = msg.chat.id;
  const photoPath = './images/ploxo_zaebuc.jpg';

  bot.sendPhoto(chatId, photoPath, {
    caption: '❓ <b>FAQ</b>\n\nПрочитай, потом пиши!',
    parse_mode: 'HTML'
  });
});

bot.onText(/\/projects/, (msg) => {
  const chatId = msg.chat.id;

  const text = `
<b>📁 Мои проекты:</b>

1️⃣ <b>Minecraft Telegram Bot</b>  
🔗 <a href="https://github.com/absolute-fqwfdcv/minecraft-telegram-bot">GitHub</a>  
💬 Контроль сервера через Telegram

2️⃣ <b>Портфолио-сайт</b>  
🔗 <a href="https://fqwfdcv.github.io/fqwfdcv/">Открыть</a>  
🎨 Минимализм, анимации, ссылки на соцсети

3️⃣ <b>Портфолио-бот</b>  
🔗 <i>(скоро выложу)</i>  
🕊 Удобность, практичность
  `;

  bot.sendMessage(chatId, text, { parse_mode: 'HTML', disable_web_page_preview: true });
});

bot.onText(/\/skills/, (msg) => {
  const chatId = msg.chat.id;

  const text = `
<b>🧠 Навыки</b>

🔹 <b>HTML</b> — верстаю, семантично  
🔹 <b>CSS</b> — анимации, адаптив, flex/grid  
🔹 <b>JavaScript</b> — от ботов до сайтов  
🔹 <b>Python</b> — скрипты
  `;

  bot.sendMessage(chatId, text, { parse_mode: 'HTML' });
});


console.log('Бот успешно запущен!');
