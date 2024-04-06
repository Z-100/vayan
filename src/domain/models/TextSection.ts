export interface TextSection {
    title: string,
    text: string | string[],
    subTexts?: TextSection[],
}
