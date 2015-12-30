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

data.projects = {
    featured: [
        {
            name: 'Fashion Group', link: '//fashiongroup.com',
            description: 'The world leader in online services for fashion professionals. Fashion Group operates FashionJobs.com, FashionMag.com and FashionNetwork.com around the world available in 10 languages. '
        },

        {
            name: 'Attractive World', link: '//attractiveworld.net',
            description: 'Attractive World is a web dating site that was the first to propose a principle of selective admission.'
        },

        {
            name: 'SensCritique', link: '//senscritique.com',
            description: 'SensCritique lets you discover, note and share movies, series, books, comics, games and music.'
        },

        {
            name: 'HereWeStyle', link: '//herewestyle.com',
            description: 'HereWeStyle is a personalized online styling service. Our professional stylists will find your style according to your body, your taste and personality.'
        },

        {
            name: 'Gamdle', link: '//gamdle.com',
            description: 'Gamdle lets you share your love of video games while staying informed.'
        }
    ],
    other: [
        { name: 'mnml', link: '//joulse.com/mnml', description: 'Web Design Principles' },
    ]
};

fs.writeFileSync('index.json', JSON.stringify(data));
