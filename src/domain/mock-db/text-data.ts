import {TextSection} from "../models";

export const aboutMeTexts: TextSection[] = [
    {
        title: 'Hi there, Marin here',
        text: 'I\'m a backend dev from Switzerland, the land of the cows and the cheese and the more cows',
        subSection: [
            {
                title: 'Stuff I like',
                text: [
                    'Motorcycles',
                    'Programming',
                    'Games',
                    'Programming Games',
                    'Food (non cheesy stuff as well)',
                ]
            },
            {
                title: 'I am...',
                text: [
                    '...a passionate backend developer in love with Spring Boot',
                    '...experimenting with OpenGL, Android Apps & Unity',
                    '...trying my best with Vayan in the web',
                    '...looking for jobs (there\'s a contact form)',
                    '...constantly learning new stuff',
                ]
            },
        ],
    },
]

export const aboutWebsiteTexts: TextSection[] = [
    {
        title: 'What even is this website tho?',
        text:
            'TL;DR: Backend dev doing frontend\n' +
            '\n' +
            'I\'m a anything-but-UI developer in need of a website.\n' +
            'And what better way is there to cut costs - I mean to learn new stuff - than by doing it myself?\n' +
            '\n' +
            'This is part CV, part learning experience on how to frontend.\n' +
            'So don\'t judge Vayan too hard :)',
    },
]

export const skillsTexts: TextSection[] = [
    {
        title: 'Tech stack',
        text: 'A rough overview of the stuff I\'ve used so far',
        subSection: [
            {
                title: 'Java',
                text: [
                    'I started writing Java back in 2021 and have been using it ever since',
                    'Both professionally and for my own projects',
                    'In the past few years especially \'low-level\', with less frameworks',
                    'It\'s a good language, and I like it, but...',
                    'I also discovered Kotlin, which I used for both Android and Spring Boot',
                ],
            },
            {
                title: 'C & OpenGL',
                text: [
                    'Currently C is easily my favourite language :P',
                    'I use it alongside OpenGL (and some C++) to create my very own game engine',
                    'This is also where my current focus lays on, and where I invest my free time',
                ]
            },
            {
                title: 'Special interests / Side projects',
                text: [
                    'C# along Unity, for... well, Unity Games',
                    'C++ for an Arduino/M5Stack project',
                ],
            },
            {
                title: 'Web development',
                text: [
                    'React, Typescript',
                    'JavaScript, HTML, CSS',
                    'PHP',
                ],
            },
            {
                title: 'Other technologies',
                text: [
                    'Git, GitHub, GitLab, BitBucket',
                    'Jira, GitHub Projects',
                    'IntelliJ, VSCode, SSMS, Azure Data Studio',
                    'GitHub Actions, GitLab CI, ArgoCD',
                    'OpenShift, Kubernetes',
                    'Fedora, Ubuntu (server)'
                ],
            },
        ],
    },
]

export const privacyPolicyTexts: TextSection[] = [
    {
        title: 'Website Analytics Statement for Vayan',
        text: 'Vayan utilizes web analytics provided by Vercel solely for personal purposes and to better understand its usage.\n' +
            ' This analytics service is integrated directly into Vayan by Vercel - Vayan\'s hosting provider - and does not transmit any data externally to third parties nor does it use any cookies.\n' +
            '\n' +
            'The use of web analytics is intended to gather insights into how visitors interact with Vayan, such as which pages are most popular, how long visitors stay on each page, and how they navigate through our site.\n' +
            'This information helps improving the user experience and tailor the content to better meet the needs of Vayan\'s audience.\n' +
            '\n' +
            'Rest assured that the data collected through the use of Vercel\'s built-in analytics is anonymized and aggregated, meaning it cannot be used to identify individual users.\n' +
            'Additionally, this data is not shared with any other parties and is not used for any other purposes beyond improving this website.\n' +
            '\n' +
            'If you have any questions or concerns about our use of web analytics on Vayan, please don\'t hesitate using the contact form.\n' +
            '\n' +
            'Thank you for visiting Vayan!',
    }
]
