import {Image, TextSection} from '../models';


export const y5DescriptionTexts: TextSection[] = [
    {
        title: 'Wtf even is y5?',
        text: 'y5 is a cutsie little game engine in active development. It\'s written in pure C, OpenGL and GLSL (yes there\'s C++ but it\'s basically C anyway). And not only is everything written from the ground up, but: It houses its very own Entity Component System (ECS), along a custom rendering pipeline and much more!',
        subSection: [
            {
                title: 'Entity Component System (ECS)',
                text: [
                    'Entities are IDs',
                    'Components exist',
                    'Systems do stuff',
                    'The rest is magic',
                ]
            },
            {
                title: 'Rendering pipeline',
                text: [
                    'Uses the GPU (I think)',
                    'OpenGL at its base',
                ]
            },
            {
                title: 'Why C & OpenGL?',
                text: [
                    'Because C makes everything faster',
                    'Memory leaks are an urban myth',
                    'Vulkan is scary',
                    '...and of course to learn about system level stuff :P',
                ]
            },
        ],
    },
]

export const y5ImageData: Image[] = [
    {
        name: 'y5 - 2026-05',
        shortDesc: 'y5 "Engine" state in May\nAfter a little break for school stuff we not only have Audio, but also: Components :)',
        url: 'https://raw.githubusercontent.com/Z-100/y5/main/doc/y5-demo-202605.png',
    },
    {
        name: 'y5 - 2025-11',
        shortDesc: 'y5 "Engine" state in November\nMonkey🐒 - Model Object loading is now a thing',
        url: 'https://raw.githubusercontent.com/Z-100/y5/main/doc/y5-demo-202511.png',
    },
    {
        name: 'y5 - 2025-10',
        shortDesc: 'y5 "Engine" state in October\nNow with pretty fancy schmancy imgui stuff\nObv it\'s still pure C :)\nSome minor compiler changes happened tho',
        url: 'https://raw.githubusercontent.com/Z-100/y5/main/doc/y5-demo-202510.png',
    },
    {
        name: 'y5 - 2025-09',
        shortDesc: 'y5 "Engine" state in September\nRotating cubes and a light source. Hell yeah',
        url: 'https://raw.githubusercontent.com/Z-100/y5/main/doc/y5-demo-202509.png',
    },
];
