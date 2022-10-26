const skills = [
  "React/Redux",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SCSS",
  "Ruby",
  "Ruby on Rails",
];
const ToolsAndMethods = [
  "Git",
  "GitHub",
  "Netlify",
  "Responsive development",
  "RSpec",
  "TDD",
  "VScode",
  "Chrome Dev Tools",
];
const professional = [
  "Remote Pair programming",
  "TeamWork",
  "Mentoring",
  "Communication Skills",
];

const experiences = [
  {
    id: 1,
    company: "Bahir Dar University",
    role: "Assistant Lecturer",
    duration: "Oct, 2021 - present",
  },
  {
    id: 2,
    company: "Microverse",
    role: "Mentor",
    duration: "June, 2022 - present",
  },
];

const projects = [
  {
    id: 1,
    title: "Meetup",
    builtWith: ["React", "CSS3", "Firebase"],
    github: "https://github.com/degisew/meetup",
    live: "https://degisew-meetup.netlify.app/",
    description:
      "Meetup is a simple website built with react, css, and firebase that allows the user to see all the recent meetups, to add meetups, and select favorite meetup.",
  },
  {
    id: 2,
    title: "Meal App",
    builtWith: ["HTML5", "CSS3", "JavaScript", "TheMealDBAPI"],
    github: "https://github.com/degisew/TheMealDB-API",
    live: "https://degisew.github.io/TheMealDB-API/dist/",
    description:
      "This project is created using HTML5,SCSS and JavaScript with TheMealDB API that accesses the meals from the api and displays it. some of the features are: user can see the meals and add and see his/her comment. The user can also reserve the meals.",
  },
  {
    id: 3,
    title: "Math Magicians",
    builtWith: ["React", "SCSS"],
    github: "https://github.com/degisew/Math-Magicians-React-App",
    live: "https://degisew-calculator-app.netlify.app/",
    description:
      "'Math magicians' is a website for all fans of mathematics. It is a Single Page App (SPA) built with React that allows users to: make simple calculations and read a random math-related quote.",
  },
  {
    id: 4,
    title: "LeaderBoard API",
    builtWith: ["HTML5", "SCSS", "JavaScript", "Leaderboard API"],
    github: "https://github.com/degisew/Leaderboard-API",
    live: "https://degisew.github.io/Leaderboard-API/dist/",
    description:
      "This is a website built with HTML5, SCSS, modern JavaScript and WebPack bundler that displays scores submitted by different players. It also allows you to submit your score and all data is preserved on the external Leaderboard API service.",
  },
  {
    id: 5,
    title: "Awesome Books",
    builtWith: ["HTML5", "JavaScript", "CSS3"],
    github: "https://github.com/degisew/awesome-books",
    live: "https://degisew.github.io/awesome-books/",
    description:
      "A website developed with html, CSS and JavaScript that adds and removes awesome books dynamically. one of the best feature is that, all the data are stored in a browser local storage.",
  },
  {
    id: 6,
    title: "To-Do List",
    builtWith: ["React", "CSS3"],
    github: "https://github.com/degisew/React-To-Do-List-App",
    live: "#",
    description:
      "A To-Do List app built with React and CSS that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete and remove the selected item.",
  },
];

const testimonals = [];

const contact = {
  address: "Bahir Dar, Ethiopia",
  Phone: "+251953059021",
  postalCode: "Postal code: 6000",
  email: "degisew.mengist21@gmail.com",
};

export {
  skills,
  ToolsAndMethods,
  professional,
  experiences,
  projects,
  testimonals,
  contact,
};
