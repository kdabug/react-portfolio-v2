import StaticTraitor from "./projectImages.js/static-traitor.png";
import TraitorGif from "./projectImages.js/traitor.gif";
import StaticGypsy from "./projectImages.js/static-gypsy.png";
import GypsyGif from "./projectImages.js/gypsy.gif";
import StaticTrial from "./projectImages.js/static-trial.png";
import TrialGif from "./projectImages.js/trial.gif";
import StaticAllergenius from "./projectImages.js/static-allergenius.png";
import AllergeniusGif from "./projectImages.js/allergenius.gif";
import StaticSubrats from "./projectImages.js/static-subrats.png";
import SubratsGif from "./projectImages.js/subrats.gif";
import DammadGif from "./projectImages.js/dammad.gif";
import StaticDammad from "./projectImages.js/static-dammad.png";
import GivhrGif from "./projectImages.js/givhr.gif";
import StaticGivhr from "./projectImages.js/static-givhr.png";
import FarmersDogGif from "./projectImages.js/farmers-dog.gif";
import StaticFarmersDog from "./projectImages.js/static-farmers-dog.png";

export const projectData = [
  {
    still: StaticTrial,
    vid: TrialGif,
    giturl: "https://github.com/kdabug/trial-project",
    weburl: "http://judging-eyes.surge.sh",
    title: "Trial",
    about:
      "quiz show game - users can create their own questions and categories or play the traditional game",
    tech: "rails, react, html, css, apis, third-party apis"
  },
  {
    still: StaticGypsy,
    vid: GypsyGif,
    giturl: "https://github.com/kdabug/GA-project1-game",
    weburl: " https://gypsy-in-red.surge.sh",
    title: "Gypsy",
    about:
      "a game - help the woman collect her dropped gems and receive a 'fortunate' surprise. implemented first with onClick events - then added collision detection",
    tech: "vanilla javascript, dom manipulation, css, html, collision detection"
  },
  {
    still: StaticTraitor,
    vid: TraitorGif,
    giturl: "https://github.com/kdabug/project-api",
    weburl: "https://gallant-haibt-6c9b60.netlify.com/",
    title: "Traitor",
    about:
      "kid-friendly stock market app with a pirate theme, because not all 'traders' are 'traitors'",
    tech:
      "react, third party apis, mapping and charting libraries, wip - redux and express, postgres backend"
  },
  {
    still: StaticSubrats,
    vid: SubratsGif,
    giturl: "https://github.com/kdabug/subrats",
    weburl: "https://subrats.netlify.com/",
    title: "Subrats",
    about:
      "dev team project - patrons of the MTA can 'rat' out subway stations in terms of cleanliness, wait-time, and business",
    tech: "react, node.js/express, html, css"
  },
  {
    still: StaticAllergenius,
    vid: AllergeniusGif,
    giturl: "https://github.com/kdabug/allergenius",
    weburl: "http://aboard-good-bye.surge.sh/",
    title: "Allergenius",
    about:
      "created with a team of UX designers and devs, this app helps travelers communicate their food allergies abroad",
    tech: "react, node.js/express, html, css"
  },
  {
    still: StaticGivhr,
    vid: GivhrGif,
    giturl: "https://github.com/cameronbarker/givhr-public",
    weburl: "https://givhr.com",
    title: "Givhr",
    about:
      "Givhr is an application that automates giveaways and surveys in Slack. I created the marketing page (givhr.com) with semantic HTML5 and BEM structured CSS and Javascript. I work primarily creating reusable and performant React components leveraging the new hooks API, defining Redux store structure all with Typescript. **full application beta coming soon**",
    tech: "vanilla Javascript, CSS, HTML, bootstrap-grid, BEM style naming"
  },
  {
    still: StaticDammad,
    vid: DammadGif,
    giturl: "https://github.com/dam-mad/magistrate",
    weburl: "https://www.dammad.io",
    title: "DAM-MAD",
    about:
      "DAM-MAD is a landing/contact page for web engineering inquiries - the focus was on deployment, netlify, netlify forms, https",
    tech: "gatsby, netlify, netlify forms, google domains, https, hosting"
  },
  {
    still: StaticFarmersDog,
    vid: FarmersDogGif,
    giturl: "https://github.com/kdabug/farmers-dog-clone",
    weburl: "https://www.clone-farmers-dog-mills.surge.sh",
    title: "CLONE - Farmer's Dog - CLONE",
    about:
      "this is a very quickly spun-up CLONE of the Farmer's Dog site - https://www.thefarmersdog.com/ - because I love puppies.",
    tech: "react, styling, cloning"
  }
];
