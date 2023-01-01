const skills = [
  'React/Redux',
  'JavaScript',
  'HTML5',
  'CSS3',
  'SCSS',
  'Ruby',
  'Ruby on Rails',
];
const ToolsAndMethods = [
  'Git',
  'GitHub',
  'Netlify',
  'Responsive development',
  'RSpec',
  'TDD',
  'VScode',
  'Chrome Dev Tools',
];
const professional = [
  'Remote Pair programming',
  'TeamWork',
  'Mentoring',
  'Communication Skills',
];

const experiences = [
  {
    id: 1,
    company: 'Bahir Dar University',
    role: 'Assistant Lecturer',
    duration: 'Oct, 2021 - present',
  },
  {
    id: 2,
    company: 'Microverse',
    role: 'Front-end Developer',
    duration: 'June, 2022 - present',
  },
];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Shop App',
    url: 'screenshoots/commerce.png',
    builtWith: ['React', 'CSS3', 'Material-UI', 'Commercejs-API', 'Stripe'],
    github: 'https://github.com/degisew/E-commerce',
    live: 'https://degisew-commerce.netlify.app/',
    description:
      'A full-stack E-Commerce app for your shopping business. It allows users to buy products, add to the cart, remove from the cart, choose the shipping process, and make payments.',
  },
  {
    id: 2,
    title: "Space Travelers' Hub",
    url: 'screenshoots/space.png',
    builtWith: ['React', 'Redux', 'CSS3', 'Material-UI', 'SpaceX-API'],
    github: 'https://github.com/degisew/Space-travelers-hub',
    live: 'https://degisew-space-travelers-hub.netlify.app/',
    description:
      'A website built with React, Redux, MUI, SpaceX API, and CSS. Some of the features are: a user can reserve rockets, can register and join missions, and can see his/her reservation details in his profile section. The user can also cancel the reservation any time.',
  },
  {
    id: 3,
    title: 'Meal App',
    url: 'screenshoots/meal.png',
    builtWith: ['HTML5', 'CSS3', 'JavaScript', 'TheMealDBAPI'],
    github: 'https://github.com/degisew/TheMealDB-API',
    live: 'https://degisew.github.io/TheMealDB-API/dist/',
    description:
      'This project is created using HTML5,SCSS and JavaScript with TheMealDB API that accesses the meals from the api and displays it. some of the features are: user can see the meals and add and see his/her comment. The user can also reserve the meals.',
  },
  {
    id: 4,
    title: 'Math Magicians',
    url: 'screenshoots/calculator.png',
    builtWith: ['React', 'SCSS'],
    github: 'https://github.com/degisew/Math-Magicians-React-App',
    live: 'https://degisew-calculator-app.netlify.app/',
    description:
      "'Math magicians' is a website for all fans of mathematics. It is a Single Page App (SPA) built with React that allows users to: make simple calculations and read a random math-related quote.",
  },
  {
    id: 5,
    title: 'Crypto Real-time Pricing',
    url: 'screenshoots/crypto.png',
    builtWith: ['React', 'Redux', 'CSS', 'CoinCapAPI'],
    github: 'https://github.com/degisew/crypto-real-time-pricing',
    live: 'https://degisew-crypto.netlify.app/',
    description:
      'A website used for real-time pricing and market activity for over 1,000 cryptocurrencies. It fetchs Data from CoinCap API 2.0 and offer transparent and accurate data on asset price and availability.',
  },
  {
    id: 6,
    title: 'Awesome Books',
    url: 'screenshoots/awesome.png',
    builtWith: ['HTML5', 'JavaScript', 'CSS3'],
    github: 'https://github.com/degisew/awesome-books',
    live: 'https://degisew.github.io/awesome-books/',
    description:
      'A website developed with html, CSS and JavaScript that adds and removes awesome books dynamically. one of the best feature is that, all the data are stored in a browser local storage.',
  },
];

const contact = {
  address: 'Bahir Dar, Ethiopia',
  Phone: '+251953059021',
  postalCode: 'Postal code: 6000',
  email: 'degisew.mengist21@gmail.com',
};

export {
  skills,
  ToolsAndMethods,
  professional,
  experiences,
  projects,
  contact,
};
