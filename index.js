var fs = require('fs');

var data = {};

data.name = 'Joulse';
data.username = 'Joulse';
data.title = 'Front End Developer';
data.byline = 'Front End Developer at Fashion Group. Based in Paris, France.';
data.homepage = '//joulse.com';

data.social_networks = [
    { name: 'Twitter', link: '//twitter.com/joulse_' },
    { name: 'Github', link: '//github.com/joulse' },
    { name: 'Soundcloud', link: '//soundcloud.com/joulse' }
];

data.projects = [
    {
        category: 'featured',
        links: [
            {
                name: 'Fashion Group',
                href: '//fashiongroup.com',
                description: 'The world leader in online services for fashion professionals. Fashion Group operates FashionJobs.com, FashionMag.com and FashionNetwork.com around the world available in 10 languages.',
                keywords: 'HTML5, Sass, JavaScript ES5/6, NPM, Webpack'
            },
            {
                name: 'Attractive World',
                href: '//attractiveworld.net',
                description: 'Attractive World is a web dating site that was the first to propose a principle of selective admission.',
                keywords: 'HTML5, Sass, JavaScript, NPM, Gulp'
            },

            {
                name: 'SensCritique',
                href: '//senscritique.com',
                description: 'SensCritique lets you discover, note and share movies, series, books, comics, games and music.',
                keywords: 'HTML5, Less/Sass, JavaScript, ExtJS, NPM, Grunt'
            },

            {
                name: 'HereWeStyle',
                href: '//herewestyle.com',
                description: 'HereWeStyle is a personalized online styling service. Our professional stylists will find your style according to your body, your taste and personality.',
                keywords: 'HTML5, Sass, JavaScript, NPM, Gulp'
            }
        ],
    }, {
        category: 'others',
        links: [
            {
                name: 'SquareSound',
                href: '//beta.squaresound.eu',
                description: 'The only way to track and share your wishlist.',
                keywords: 'React, Apollo, Express, Sass, NPM, Webpack'
            },

            {
                name: 'MisterGift',
                href: '//mistergift.io',
                description: 'The only way to track and share your wishlist.',
                keywords: 'React, Redux, Sagas, Express, Sass, NPM, Webpack'
            },

            {
                name: 'Lightning CSS',
                href: '//www.joulse.com/lightning-css',
                description: 'Sass Framework',
                keywords: 'Sass'
            },

            {
                name: 'Gamdle',
                href: '//gamdle.com',
                description: 'Gamdle lets you share your love of video games while staying informed.',
                keywords: 'React, Node, MongoDB, Express, Sass, NPM, Webpack'
            }
        ]
    }
];

fs.writeFileSync('index.json', JSON.stringify(data));
