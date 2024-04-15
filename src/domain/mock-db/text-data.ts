import {TextSection} from "../models";

export const aboutMeTexts: TextSection[] = [
    {
        title: 'Hi there, Marvin here',
        text: 'I\'m a backend dev from Switzerland, the land of the cows and the cheese and the more cows',
        subSection: [
            {
                title: 'Stuff I like',
                text: [
                    'Motorcycles',
                    'Programming',
                    'Games',
                    'Programming Games',
                    'Food (non cheesey stuff as well)',
                ]
            },
            {
                title: 'I am...',
                text: [
                    '...a passionate backend developer in love with Spring Boot',
                    '...trying my best with Vayan in the web',
                    '...experimenting with Android apps, Arduino & Unity',
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
            'I\'m a passionate backend developer in need of a website.\n' +
            'And what better way is there to cut costs - I mean to learn new stuff - than by doing it myself?\n' +
            '\n' +
            'Basically, I\'m a backend dev who is currently learning how to frontend.\n' +
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
                    'It\'s a good language, and I like it, but...',
                ],
            },
            {
                title: 'Kotlin',
                text: [
                    'Easily my favourite language',
                    'Mostly, I\'ve used Kotlin for Android apps',
                    'But as time went on, I started using it in other use cases as well, e.g. Spring Boot',
                    'Going forward I definitely wanna improve my skills in that language!',
                ],
            },
            {
                title: 'Web development',
                text: [
                    'React/Typescript',
                    'JavaScript, HTML, CSS',
                    'PHP',
                ],
            },
            {
                title: 'Other languages',
                text: [
                    'C# along Unity, for... well, Unity Games',
                    'C++ for an Arduino/M5Stack project',
                ],
            },
            {
                title: 'Other technologies',
                text: [
                    'Git, GitHub, GitLab, BitBucket',
                    'Jira, GitHub Projects',
                    'IntelliJ, VSCode, Ubuntu',
                    'GitHub Actions, GitLab CI',
                    'Kubernetes (learning)',
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
