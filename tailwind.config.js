/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.{ts,tsx,js,jsx}',
        './public/**/*.{html}'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'light-primary': '#9070f4',
                'light-secondary': '#f6d446',
                'light-accent': '#68f1e5',
                'light-neutral-primary': '#92a6c5',
                'light-neutral-secondary': '#8391ae',
                'light-neutral-third': '#6c788e',
                'light-base-100': '#ffffff',
            },
        },
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
