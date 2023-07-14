export interface Theme {
    [key: string]: string
}

export interface Themes {
    [key: string]: Theme
}

export interface MappedTheme {
    [key: string]: string | null
}

export const mapTheme = (variables: Theme): MappedTheme => {
    return {
        '--color-primary': variables.primary || '',
        '--color-secondary': variables.secondary || '',
        '--color-positive': variables.positive || '',
        '--color-negative': variables.negative || '',
        '--color-text-primary': variables.textPrimary || '',
        '--background-primary': variables.backgroundPrimary || '',
        '--background-sec': variables.backgroundSecondary || '',
    };
};
