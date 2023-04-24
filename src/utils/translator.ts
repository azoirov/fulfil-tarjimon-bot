import { translate } from "@vitalets/google-translate-api";
import { Language } from "../enums/language.enum";

export default async function translateFromUz(
    text: string,
    language: Language
): Promise<string> {
    const translation = await translate(text, { from: "uz", to: language });
    return translation.text;
}
