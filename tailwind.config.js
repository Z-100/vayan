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
