export interface TextSection {
    title: string,
    text: string | string[],
    subSection?: TextSection[],
}
