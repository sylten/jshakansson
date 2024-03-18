'use server'

import { PortfolioItem, MediaType } from "./PortfolioItem";

const portfolioItems: ReadonlyArray<PortfolioItem> = [
    {
      name: "Crypto New Tab",
      uniqueName: "crypto-new-tab",
      url: "https://chrome.google.com/webstore/detail/crypto-new-tab/iggdnocohklfkhjngbeodhkngohncogg",
      intro: "A Chrome extension that adds a crypto market overview to your new tab page.",
      description:
          "Shows current prices for the top 10 cryptocurrencies on the Chrome new tab page. Also provides some additional stats like market cap, volume and total- and circulating supply for each token.",
      tech: ["React", "NextJS"],
      year: 2021,
      largeMedia: {
        type: MediaType.Image,
        url: "/crypto-new-tab/crypto-new-tab-large.png",
        width: 1280,
        height: 800
      },
      smallMedia: {
        type: MediaType.Image,
        url: "/crypto-new-tab/crypto-new-tab-large.png",
        width: 1280,
        height: 800
      },
      itemLogo: {
        url: "/crypto-new-tab/crypto-new-tab-logo.png",
        width: 512,
        height: 512
      },
      showNameNextToLogo: true,
      companies: [
        { name: "Personal", mediaUrl: "/jshakansson-650-min.png", mediaWidth: 650, mediaHeight: 650 }
      ]
    },
    {
      name: "MiBreaker",
      uniqueName: "mibreaker",
      url: "https://mibreaker.com/",
      intro: "Microbreak reminder software.",
      description:
          `
          MiBreaker is a small software that helps you remember to take breaks when working. I created it to remind myself when working from home during the Covid-19 pandemic.
          <br>
          The software was created in Electron, using React. I also made a landing website in NextJS, hosted in Vercel where others may download the application and purchase it for professional use.
          `,
      tech: ["React", "Electron", "NextJS", "Vercel"],
      year: 2020,
      largeMedia: {
        type: MediaType.Image,
        url: "/mibreaker/mibreaker-large.jpg",
        width: 1668,
        height: 1080
      },
      smallMedia: {
        url: "/mibreaker/mibreaker-small.jpg",
        width: 600,
        height: 388
      },
      itemLogo: {
        url: "/mibreaker/mibreaker-full-logo.png",
        width: 300,
        height: 75
      },
      companies: [
        { name: "Personal", mediaUrl: "/jshakansson-650-min.png", mediaWidth: 650, mediaHeight: 650 }
      ]
    },
    {
      name: "Signe",
      uniqueName: "signe",
      url: "https://signe.io/",
      intro: "Crowdfunding platform for concerts.",
      description:
          `
          Signe is a platform for crowdfunding concert events. Anyone can suggest an artist that they want to crowdfund and the team will look into options for making an event happen. In December of 2017, Signe received the Test Drive MusicTech Award for best pitch and became part of the Amplify Sweden family of startups at Sting.
          <br>
          I worked on the the initial version of Signe. I worked on the business development and branding, and I developed a proof of concept using Node JS, MySQL, React and  Stripe as a payment solution.
          `,
      tech: ["React", "JavaScript", "Node JS", "MySQL"],
      year: 2016,
      largeMedia: {
        type: MediaType.Image,
        url: "/signe/signe-large.jpg",
        width: 1600,
        height: 1067
      },
      smallMedia: {
        url: "/signe/signe-small.jpg",
        width: 600,
        height: 400
      },
      itemLogo: {
        url: "/signe/signe-logo-text.png",
        width: 570,
        height: 200
      },
      companies: [
        { name: "Signe", mediaUrl: "/signe/signe-logo.png", mediaWidth: 50, mediaHeight: 50 }
      ]
    },
    {
      name: "Inkamisu",
      uniqueName: "inkamisu",
      intro: "Modern web shop for small tattoos.",
      description:
          `
          Inkamisu was a sister site of Tattoomigo. Inkamisu was designed to make the process of buying small tattoos as quick and easy as possible. Users can browse among thousands of small tattoo designs. When a user finds the design he or she wants, the user can instantly book a timeslot with an artist to make the tattoo.
          <br>
          Inkamisu uses the same tech as Tattoomigo and the sites share the same backend. That way artists can use the same profile for Inkamisu and Tattoomigo. Just like Tattoomigo, Inkamisu was developed by me and my friend Joakim. To handle payments from customers we implemented Swish payments for Inkamisu.
          `,
      tech: ["Business", "Branding", "Architecture", "Angular", "TypeScript", ".NET", "C#", "SQL", "Azure", "Node"],
      year: 2018,
      largeMedia: {
        type: MediaType.GoogleDrive,
        url: "1RTCYdT_IZ9XzG2-9vQkVftrSBlyRx55b",
        width: 1920,
        height: 1080
      },
      smallMedia: {
        url: "/inkamisu/inkamisu-small.jpg",
        width: 600,
        height: 400
      },
      itemLogo: {
        url: "/inkamisu/inkamisu-logo.png",
        width: 300,
        height: 300
      },
      showNameNextToLogo: true,
      companies: [
        { name: "Tattoomigo", mediaUrl: "/tattoomigo/tattoomigo-logo.png", mediaWidth: 300, mediaHeight: 300 }
      ]
    },
    {
      name: "Tattoomigo",
      uniqueName: "tattoomigo",
      intro: "Platform that connects tattoo artists and tattoo lovers.",
      description: `
          Tattoomigo was a platform where tattoo artists can showcase their work. It's also a one-stop-shop for people looking to book tattoos. The website offers users a neat way of browsing inspirational pictures of tattoos, view the profiles of the artists that made them and locate the studio where the artist resides. When a user has decided on what tattoo to get and potential artists to tattoo it, users can easily book the tattoo via Tattoomigo.
          <br>
          I built the website together with a good friend of mine, Joakim. We designed the architecture and built the entire website together. To be more effective I focused on building the front end and Joakim focused on the back end. The backend consists of an api built using .NET Core and SQL Server. It was hosted in Azure. The frontend framework used is Angular, written in TypeScript. The frontend is hosted on a Node JS server and implements Angular Universal for server-side rendering.
          `,
      tech: ["Business", "Branding", "Architecture", "Angular", "TypeScript", ".NET", "C#", "SQL", "Azure", "Node JS"],
      year: 2017,
      largeMedia: {
        type: MediaType.YouTube,
        url: "v78dIOQ9K9A",
        width: 1920,
        height: 1080
      },
      smallMedia: {
        url: "/tattoomigo/tattoomigo-small.jpg",
        width: 600,
        height: 216
      },
      itemLogo: {
        url: "/tattoomigo/tattoomigo-text.png",
        width: 1000,
        height: 225
      },
      companies: [
        { name: "Tattoomigo", mediaUrl: "/tattoomigo/tattoomigo-logo.png", mediaWidth: 300, mediaHeight: 300 }
      ]
    },
    {
      name: "KTH project: Klang",
      uniqueName: "klang",
      intro: "Advanced audio engine for interactive web sites.",
      description: `
          Klang was my examination project for my Bachelor's degree in Computer Science. It's an advanced audio engine for playing and manipulating sounds on websites. It uses the Web Audio API when available and falls back on HTML5 audio when needed. Klang was developed in the then newly released TypeScript language.
          `,
      tech: ["TypeScript", "Web Audio API", "HTML5 Audio"],
      year: 2013,
      largeMedia: {
        type: MediaType.Image,
        url: "/klang/klang-large.jpg",
        width: 1500,
        height: 900
      },
      smallMedia: {
        url: "/klang/klang-small.jpg",
        width: 600,
        height: 400
      },
      showNameNextToLogo: true,
      companies: [
        { name: "Plan8", mediaUrl: "/logos/plan8-small.png", mediaWidth: 250, mediaHeight: 250 }
      ]
    },
    {
      name: "Strawberry Theme",
      uniqueName: "strawberry-theme",
      url: "https://marketplace.visualstudio.com/items?itemName=sylten.strawberry-theme",
      intro: "Some personal VS Code themes",
      description: `
          Three color themes for VS Code, inspired by berries! Available on the Visual Studio marketplace.
          `,
      tech: ["Json"],
      year: 2018,
      largeMedia: {
        type: MediaType.Image,
        url: "/theme/strawberry.jpg",
        width: 650,
        height: 275
      },
      smallMedia: {
        type: MediaType.Image,
        url: "/theme/strawberry.jpg",
        width: 650,
        height: 275
      },
      showNameNextToLogo: true,
      companies: [
        { name: "Personal", mediaUrl: "/jshakansson-650-min.png", mediaWidth: 650, mediaHeight: 650 }
      ]
    },
    {
      name: "Tetris 3D",
      uniqueName: "tetris3d",
      url: "https://cdn.jshakansson.se/Tetris3D.exe",
      urlButtonText: "Download",
      intro: "Game created for a school project",
      description: `
        A 3D tetris game I created for a school project. Written in C++ with DirectX.
        `,
      tech: ["C++", "DirectX"],
      year: 2010,
      largeMedia: {
        type: MediaType.YouTube,
        url: "fYWUUwYM5tk",
        width: 1980,
        height: 1080
      },
      smallMedia: {
        type: MediaType.Image,
        url: "/tetris3d/tetris3d-min.jpg",
        width: 1280,
        height: 898
      },
      showNameNextToLogo: true,
      companies: [
        { name: "Personal", mediaUrl: "/jshakansson-650-min.png", mediaWidth: 650, mediaHeight: 650 }
      ]
    }
  ];
 
export async function getPortfolioItems() {
  return portfolioItems;
}