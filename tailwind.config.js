/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/components/**/*.{ts,tsx}',
        './src/*.{ts,tsx}',
        './src/'
    ],
    darkMode: 'class',
    theme: {
        colors: {
            'primary': '#a991f7',
            'secondary': '#f6d860',
            'accent': '#37cdbe',
            'neutral-primary': '#3d4451',
            'neutral-secondary': '#556072',
            'neutral-third': '#3d4451',
            'base-100': '#ffffff',
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
