import {MediaType} from './media-type';

export const portfolioItems = [
      { 
        name: 'Mibreaker',
        uniqueName: 'mibreaker',
        hidden: false,
        url: 'https://mibreaker.com/',
        intro: 'Microbreak reminder software.',
        description:
        `
        Mibreaker is a small software that helps you remember to take breaks when working. I created it to remind myself when working from home during the Covid-19 pandemic.
        <br>
        The software was created in Electron, using React. I also made a website in NextJS, hosted in Vercel where others may download the application.
        `,
        tech: ['React', 'Electron', 'NextJS', 'Vercel'],
        year: 2020,
        largeMediaUrl: '/mibreaker/mibreaker-large.jpg',
        largeMediaType: MediaType.Image,
        smallMediaUrl: '/mibreaker/mibreaker-small.jpg',
        itemLogo: '/mibreaker/mibreaker-full-logo.png',
        showNameNextToLogo: false,
        companies: [
          { name: 'Personal', mediaUrl: '/jshakansson-650-min.png' }
        ]
    },
    { 
        name: 'Signe',
        uniqueName: 'signe',
        hidden: false,
        url: 'https://signe.io/',
        intro: 'Crowdfunding platform for concerts.',
        description:
        `
        Signe is a platform for crowdfunding concert events. Anyone can suggest an artist that they want to crowdfund and the team will look into options for making an event happen. In December of 2017, Signe received the Test Drive MusicTech Award for best pitch and became part of the Amplify Sweden family of startups at Sting.
        <br>
        I developed the first version of Signe using a Node JS server, a MySQL database and a React frontend. I also implemented Stripe as a payment solution.
        `,
        tech: ['React', 'JavaScript', 'Node JS', 'MySQL'],
        year: 2016,
        largeMediaUrl: '/signe/signe-large.jpg',
        largeMediaType: MediaType.Image,
        smallMediaUrl: '/signe/signe-small.jpg',
        itemLogo: '/signe/signe-logo-text.png',
        showNameNextToLogo: false,
        companies: [
            { name: 'Signe', mediaUrl: '/signe/signe-logo.png' }
        ]
    },
    { 
        name: 'Google Santa Tracker',
        uniqueName: 'santatracker',
        hidden: true,
        parentProject: 'klang',
        url: 'https://santatracker.google.com/village.html',
        intro: 'Fun christmas calendar full of games.',
        description: `
        Google Santa Tracker is a christmas calendar created by the Google Maps team. It features videos, games and other interactive elements.
        <br>
        Since 2013 Google Santa Tracker uses my Klang engine to handle audio and implement an interactive soundscape. When working with Google, we had to tweak the engine to make it more secure. Me and my colleagues at Plan8 implemented the audio for Santa Tracker.
        `,
        tech: ['Klang', 'JavaScript'],
        year: 2013,
        largeMediaUrl: 'nXLNcfNsWAY',
        largeMediaType: MediaType.YouTube,
        smallMediaUrl: '/klang/santatracker/santatracker-small.jpg',
        itemLogo: null,
        showNameNextToLogo: true,
        companies: [
            { name: 'Plan8', mediaUrl: '/logos/plan8-small.png' },
            { name: 'Google', mediaUrl: '/logos/google.png' }
        ]
    },
    { 
        name: 'Inkamisu',
        uniqueName: 'inkamisu',
        hidden: false,
        url: null,
        intro: 'Modern web shop for small tattoos.',
        description: 
        `
        Inkamisu was a sister site of Tattoomigo. Inkamisu was designed to make the process of buying small tattoos as quick and easy as possible. Users can browse among thousands of small tattoo designs. When a user finds the design he or she wants, the user can instantly book a timeslot with an artist to make the tattoo.
        <br>
        Inkamisu uses the same tech as Tattoomigo and the sites share the same backend. That way artists can use the same profile for Inkamisu and Tattoomigo. Just like Tattoomigo, Inkamisu was developed by me and my friend Joakim. To handle payments from customers we implemented Swish payments for Inkamisu.
        `,
        tech: ['Angular2', 'TypeScript', '.NET', 'C#', 'SQL Server', 'Azure', 'Node JS'],
        year: 2018,
        largeMediaUrl: '1RTCYdT_IZ9XzG2-9vQkVftrSBlyRx55b',
        largeMediaType: MediaType.GoogleDrive,
        smallMediaUrl: '/inkamisu/inkamisu-small.jpg',
        itemLogo: '/inkamisu/inkamisu-logo.png',
        showNameNextToLogo: true,
        companies: [
            { name: 'Tattoomigo', mediaUrl: '/tattoomigo/tattoomigo-logo.png' }
        ]
    },
    { 
        name: 'Tattoomigo',
        uniqueName: 'tattoomigo',
        hidden: false,
        url: null,
        intro: 'Platform that connects tattoo artists and tattoo lovers.',
        description: `
        Tattoomigo was a platform where tattoo artists can showcase their work. It's also a one-stop-shop for people looking to book tattoos. The website offers users a neat way of browsing inspirational pictures of tattoos, view the profiles of the artists that made them and locate the studio where the artist resides. When a user has decided on what tattoo to get and potential artists to tattoo it, users can easily book the tattoo via Tattoomigo.
        <br>
        I built this website together with a good friend of mine, Joakim. We designed the architecture and built the entire website together. To be more effective I focused on building the front end and Joakim focused on the back end. The backend consists of an api built using .NET Core and SQL Server. It was hosted in Azure. The frontend framework used is Angular2, written in TypeScript. The frontend is hosted on a Node JS server and implements Angular Universal for server-side rendering.
        `,
        tech: ['Angular2', 'TypeScript', '.NET', 'C#', 'SQL Server', 'Azure', 'Node JS'],
        year: 2017,
        largeMediaUrl: 'v78dIOQ9K9A',
        largeMediaType: MediaType.YouTube,
        smallMediaUrl: '/tattoomigo/tattoomigo-small.jpg',
        itemLogo: '/tattoomigo/tattoomigo-text.png',
        showNameNextToLogo: false,
        companies: [
            { name: 'Tattoomigo', mediaUrl: '/tattoomigo/tattoomigo-logo.png' }
        ]
    },
    { 
        name: 'Big Web Quiz',
        uniqueName: 'big-web-quiz',
        hidden: true,
        parentProject: 'klang',
        url: 'https://www.thinkwithgoogle.com/intl/en-145/perspectives/global-articles/big-web-quiz-chromecast/',
        intro: 'A quiz game for Chromecast.',
        description: `
        Big Web Quiz was developed to showcase how Chromecast can also be used for gaming.
        <br>
        Big Web Quiz uses my Klang engine for the audio implementation. We had to make some tweaks to the engine to make it run on the Chromecast.
        `,
        tech: ['Klang', 'JavaScript'],
        year: 2013,
        largeMediaUrl: '/klang/big-web-quiz/big-web-quiz-large.jpg',
        largeMediaType: MediaType.Image,
        smallMediaUrl: '/klang/big-web-quiz/big-web-quiz-small.jpg',
        itemLogo: null,
        showNameNextToLogo: true,
        companies: [
            { name: 'Plan8', mediaUrl: '/logos/plan8-small.png' },
            { name: 'Google', mediaUrl: '/logos/google.png' }
        ]
    },
    { 
        name: 'Smartwater Explore the Sky',
        uniqueName: 'smartwater-explore-the-sky',
        hidden: true,
        parentProject: 'klang',
        url: 'http://old.plan8.se/project/smartwater-inspired-by-the-clouds/',
        intro: 'Interactive web experience.',
        description: `
        Explore the Sky is an advanced interactive web experience. It allows the user to fly through the clouds and play mini games. There's a game where the user paints clouds and another one where the clouds act as a sequencer, for example.
        <br>
        My Klang engine was used to create the audio effects for Explore the Sky. Explore the Sky uses many of the advanced features of Klang, such as the sequencer and adaptive audio effects.
        `,
        tech: ['Klang', 'JavaScript'],
        year: 2014,
        largeMediaUrl: '97435872',
        largeMediaType: MediaType.Vimeo,
        smallMediaUrl: '/klang/smartwater/smartwater-small.jpg',
        itemLogo: '/klang/smartwater/smartwater-logo.png',
        showNameNextToLogo: false,
        companies: [
            { name: 'Plan8', mediaUrl: '/logos/plan8-small.png' },
            { name: 'Glacéau', mediaUrl: '/logos/smartwater.png' }
        ]
    },
    { 
        name: 'Take the Throne',
        uniqueName: 'take-the-throne',
        hidden: true,
        parentProject: 'klang',
        url: 'http://old.plan8.se/project/takethethrone-com/',
        intro: 'Advanced 3D positional audio.',
        description: `
        For the launch of one of the seasons of Game of Thrones, HBO wanted an interactive website where all tweets about the series would be represented by a sword in the Iron Throne. 
        <br>
        Plan8 created the audio environment for the scene using my Klang engine. We worked on improving the 3D positional audio part of the Klang engine for this project.
        `,
        tech: ['Klang', 'JavaScript'],
        year: 2014,
        largeMediaUrl: '94404878',
        largeMediaType: MediaType.Vimeo,
        smallMediaUrl: '/klang/take-the-throne/small.jpg',
        itemLogo: null,
        showNameNextToLogo: true,
        companies: [
            { name: 'Plan8', mediaUrl: '/logos/plan8-small.png' },
            { name: 'HBO', mediaUrl: '/logos/hbo.png' },
        ]
    },
    { 
        name: 'Nissan Passion Genome',
        uniqueName: 'passion-genome',
        hidden: true,
        parentProject: 'klang',
        url: 'http://old.plan8.se/project/nissan-passion-genome/',
        intro: 'Interactive website.',
        description: `
        Nissan created a website that shows what likes you have in common with other people, they called in passion genome.
        <br>
        Plan8 created the audio environment for this project using my Klang engine.
        `,
        tech: ['Klang', 'JavaScript'],
        year: 2014,
        largeMediaUrl: '86994403',
        largeMediaType: MediaType.Vimeo,
        smallMediaUrl: '/klang/passion-genome/small.jpg',
        itemLogo: null,
        showNameNextToLogo: true,
        companies: [
            { name: 'Plan8', mediaUrl: '/logos/plan8-small.png' },
            { name: 'Nissan', mediaUrl: '/logos/nissan.png' },
        ]
    },
    { 
        name: 'H&M Summer \'14',
        uniqueName: 'hm-summer-14',
        hidden: true,
        parentProject: 'klang',
        url: 'http://old.plan8.se/project/hm-summer-14/',
        intro: 'Advanced web video implementation.',
        description: `
        To showcase H&M's summer collection of 2014, they wanted an interactive video on hm.com. The video showed off some of the new clothes for the season and allowed users to pause the video and check out the clothes further.
        <br>
        The video was a music video for Giselle and Bob Sinclair's cover of Heart of Glass. Me and my coworker at Plan8 implemented the audio part of the interactive video. The advanced part of this project was syncing the audio to the video, allowing users to pause the video but continuing to play a more toned down version of the music. It's difficult to explain and it's a shame this video is no longer hosted. Making this work on all browsers was not easy and I'm still impressed of the fact that we pulled it off. My Klang engine needed to be upgraded to better handle old browsers for this project.
        `,
        tech: ['Klang', 'JavaScript'],
        year: 2013,
        largeMediaUrl: '97435874',
        largeMediaType: MediaType.Vimeo,
        smallMediaUrl: '/klang/hm/hm-small.jpg',
        itemLogo: null,
        showNameNextToLogo: true,
        companies: [
            { name: 'Plan8', mediaUrl: '/logos/plan8-small.png' },
            { name: 'Hennes & Mauritz', mediaUrl: '/logos/hm.png' },
        ]
    },
    { 
        name: 'Clouds Piano',
        uniqueName: 'clouds-piano',
        hidden: true,
        parentProject: 'klang',
        url: 'http://labs.plan8.se/cloudspiano/',
        intro: 'Web based playable MIDI piano.',
        description: `
        Clouds Piano is a website where users can play the piano using their computer keyboard or a plugged in MIDI-keyboard. Users can record their playing and allow others to listen to what they recorded.
        <br>
        My Klang engine was used for audio playback and the recordings are saved in a MySQL database. PHP was used for the backend.
        `,
        tech: ['Klang', 'JavaScript', 'PHP', 'MySQL'],
        year: 2013,
        largeMediaUrl: '/klang/cloudspiano/cloudspiano-large.jpg',
        largeMediaType: MediaType.Image,
        smallMediaUrl: '/klang/cloudspiano/cloudspiano-small.jpg',
        itemLogo: '/klang/cloudspiano/cloudspiano-logo.png',
        showNameNextToLogo: false,
        companies: [
            { name: 'Plan8', mediaUrl: '/logos/plan8-small.png' }
        ]
    }, 
    { 
        name: 'Sound Tennis',
        uniqueName: 'sound-tennis',
        hidden: true,
        parentProject: 'klang',
        url: 'http://old.plan8.se/project/sound-tennis/',
        intro: 'Mobile tennis game.',
        description: `
        Sound tennis was a demo app to showcase the Klang engine. It allowed to players to connect their mobile phones and play tennis using their phones. Players had to listen to how the ball bounced and swing their phone in the right time to hit the ball.
        <br>
        Sound tennis used Socket IO for real time communication between the mobile phones and a Node JS server.
        `,
        tech: ['Klang', 'JavaScript', 'Node JS', 'Socket IO'],
        year: 2013,
        largeMediaUrl: '68149257',
        largeMediaType: MediaType.Vimeo,
        smallMediaUrl: '/klang/soundtennis/soundtennis-small.jpg',
        itemLogo: null,
        showNameNextToLogo: true,
        companies: [
            { name: 'Plan8', mediaUrl: '/logos/plan8-small.png' }
        ]
    },
    { 
        name: 'KTH project: Klang',
        uniqueName: 'klang',
        hidden: false,
        url: null,
        intro: 'Advanced audio engine for interactive web sites.',
        description: `
        Klang was my examination project for my Bachelor's degree in Computer Science. It's an advanced audio engine for playing and manipulating sounds on websites. It uses the Web Audio API when available and falls back on HTML5 audio when needed. Klang was developed in the then newly released TypeScript language.
        `,
        tech: ['TypeScript', 'Web Audio API', 'HTML5 Audio'],
        year: 2013,
        largeMediaUrl: '/klang/klang-large.jpg',
        largeMediaType: MediaType.Image,
        smallMediaUrl: '/klang/klang-small.jpg',
        itemLogo: null,
        showNameNextToLogo: true,
        companies: [
            { name: 'Plan8', mediaUrl: '/logos/plan8-small.png' }
        ]
    },
    { 
        name: 'Multi-Device Sync',
        uniqueName: 'multi-device-sync',
        hidden: true,
        parentProject: 'klang',
        url: 'http://old.plan8.se/project/multiple-web-device-sync-with-midi/',
        intro: 'Syncing audio across multiple devices.',
        description: `
        We used the Klang engine to sync audio playback across multiple devices. We created an app that allowed a keyboard player to play an arpeggio that would play each note on a separate device.
        `,
        tech: ['Klang', 'JavaScript'],
        year: 2013,
        largeMediaUrl: '69734592',
        largeMediaType: MediaType.Vimeo,
        smallMediaUrl: '/klang/multi-device-sync/small.jpg',
        itemLogo: null,
        showNameNextToLogo: true,
        companies: [
            { name: 'Plan8', mediaUrl: '/logos/plan8-small.png' }
        ]
    },
    { 
        name: 'Racer',
        uniqueName: 'racer',
        hidden: true,
        url: 'http://g.co/racer',
        intro: 'Racer: A Chrome Experiment',
        description: `
        A car racing game where the track is built by the players' phones and tables.
        `,
        tech: ['JavaScript'],
        year: 2013,
        largeMediaUrl: 'KOCM9_qGccY',
        largeMediaType: MediaType.YouTube,
        smallMediaUrl: '/racer/racer-small.jpg',
        itemLogo: null,
        showNameNextToLogo: true,
        companies: [
            { name: 'Plan8', mediaUrl: '/logos/plan8-small.png' },
            { name: 'Google', mediaUrl: '/logos/google.png' }
        ]
    },
    { 
        name: 'Strawberry Theme',
        uniqueName: 'strawberry-theme',
        hidden: false,
        url: 'https://marketplace.visualstudio.com/items?itemName=sylten.strawberry-theme',
        intro: 'Some personal VS Code themes',
        description: `
        Three color themes for VS Code, inspired by berries! Available on the Visual Studio marketplace.
        `,
        tech: ['Json'],
        year: 2018,
        largeMediaUrl: '/theme/strawberry.jpg',
        largeMediaType: MediaType.Image,
        smallMediaUrl: '/theme/strawberry.jpg',
        itemLogo: null,
        showNameNextToLogo: true,
        companies: [
            { name: 'Personal', mediaUrl: '/jshakansson-650-min.png' }
        ]
    },
    { 
      name: 'Tetris 3D',
      uniqueName: 'tetris3d',
      hidden: false,
      url: 'https://cdn.jshakansson.se/Tetris3D.exe',
      urlButtonText: 'Download',
      intro: 'Game created for a school project',
      description: `
      A 3D tetris game I created for a school project. Written in C++ with DirectX.
      `,
      tech: ['C++', 'DirectX'],
      year: 2010,
      largeMediaUrl: 'fYWUUwYM5tk',
      largeMediaType: MediaType.YouTube,
      smallMediaUrl: '/tetris3d/tetris3d-min.jpg',
      itemLogo: null,
      showNameNextToLogo: true,
      companies: [
          { name: 'Personal', mediaUrl: '/jshakansson-650-min.png' }
      ]
  }
];
