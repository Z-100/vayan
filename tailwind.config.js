/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.{ts,tsx,js,jsx}',
        './public/**/*.html'
    ],
    theme: {
        colors: {
            'dark-0': '#0F0F0F',
            'dark-1': '#191919',
            'dark-2': '#252525',
            'dark-3': '#313131',
            'dark-4': '#353535',
            'dark-5': '#3c3c3c',
            'light-0': '#787878',
            'light-1': '#b5b5b5',
            'light-2': '#d5d5d5',
            'light-3': '#f5f5f5',
            'link-1': '#3f35cf',
            'link-2': '#356DCF',
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
