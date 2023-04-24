import TelegramBot from "node-telegram-bot-api";

export const ChooseLanguageKeyboard: TelegramBot.InlineKeyboardMarkup = {
    inline_keyboard: [
        [
            {
                text: "🇬🇧 EN",
                callback_data: "en",
            },
            {
                text: "🇷🇺 RU",
                callback_data: "ru",
            },
            {
                text: "🇰🇷 KO",
                callback_data: "ko",
            },
        ],
        [
            {
                text: "🇸🇦 AR",
                callback_data: "ar",
            },
            {
                text: "🇰🇿 KZ",
                callback_data: "kk",
            },
            {
                text: "🇹🇷 TR",
                callback_data: "tr",
            },
        ],
    ],
};
