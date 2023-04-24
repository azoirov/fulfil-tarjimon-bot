import TelegramBot, { CallbackQuery, Message } from "node-telegram-bot-api";
import { ChatId } from "node-telegram-bot-api";
import { MessageText } from "./enums/message-text.enum";
import { ChooseLanguageKeyboard } from "./keyboards/choose-language.keyboard";
import translateFromUz from "./utils/translator";
import { Language } from "./enums/language.enum";

const bot = new TelegramBot(process.env.BOT_API_TOKEN as string, {
    polling: true,
});

let textToTranslate: string;

bot.on("message", async (message: Message) => {
    const chatId: ChatId = message.chat.id;
    const text: string | undefined = message.text;

    if (!text) return bot.sendMessage(chatId, "Matn yuboring");

    if (text === MessageText.Start) {
        return bot.sendMessage(
            chatId,
            `<b>Assalomu alaykum!</b>\nTarjima qilish uchun istalgan matingizni yuboring`,
            {
                parse_mode: "HTML",
            }
        );
    }

    await bot.sendMessage(chatId, `Qaysi tilga tarjima qilmoqchisiz`, {
        reply_markup: ChooseLanguageKeyboard,
    });

    textToTranslate = text;
});

bot.on("callback_query", async (callback: CallbackQuery) => {
    const chatId: ChatId = callback.message?.chat.id as ChatId;
    const callbackData: Language = callback.data as string as Language;

    const text = await translateFromUz(textToTranslate, callbackData);

    await bot.sendMessage(chatId, text);
});
