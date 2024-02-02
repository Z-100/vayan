/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.{ts,tsx,js,jsx}',
        './public/**/*.{html}'
    ],
    darkMode: 'class',
    theme: {
        colors: {
            'primary': '#D3D9E9',
            'secondary': '#A6A9C8',
            'layerTwo': '#796EA8',
            'layerOne': '#554D74',
            'background': '#31293F',
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
