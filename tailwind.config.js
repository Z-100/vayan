/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.{ts,tsx,js,jsx}',
        './public/**/*.html'
    ],
    theme: {
        colors: {
            'primary': '#D3D9E9',
            'secondary': '#A6A9C8',
            'layerTwo': '#796EA8',
            'layerOne': '#554D74',
            'background': '#31293F',
            'dark-0': '#0F0F0F',
            'dark-1': '#191919',
            'dark-2': '#252525',
            'dark-3': '#313131',
            'light-0': '#787878',
            'light-1': '#b5b5b5',
            'light-2': '#d5d5d5',
            'light-3': '#f5f5f5',
        },
        future: {
            hoverOnlyWhenSupported: true,
        },
        fontFamily: {
            'Montserrat': ['Montserrat', 'sans-serif'],
        },
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
