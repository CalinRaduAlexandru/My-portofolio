import CrownGif from "./../../Assets/crownGifCut.gif";
import SearcFace from "./../../Assets/search-face-app.gif";
import friends from "./../../Assets/work2.gif";
import gratefulGIF from "./../../Assets/gratefulGIF.gif";
import Face from "./../../Assets/Face.svg";
import Lotus from "./../../Assets/Lotus.svg";
import MagnifyingGlass from "./../../Assets/MagnifyingGlass.svg";
import Crownfeel from "./../../Assets/Crownfeel.svg";

export const SlideData = [
  {
    logo: `${MagnifyingGlass}`,
    title: "Search friends",
    subtitle: "React | NodeJs | Postgres",
    text:
      "Full-stack app in which you can add custom users and search through them.",
    websiteRef: "https://filter-cards-app2.herokuapp.com/",
    githubRef: "https://github.com/CalinRaduAlexandru/Filter-cards-app",
    gif: `${friends}`,
  },
  {
    logo: `${Lotus}`,
    title: "Gratefulness",
    subtitle: "React | CSS",
    text:
      "Create a gratefulness list. Plus a random quote generator for inspiration!",
    websiteRef: "https://greatfulness-app.herokuapp.com/",
    githubRef: "https://github.com/CalinRaduAlexandru/Greatfulness-app",
    gif: `${gratefulGIF}`,
  },
  {
    logo: `${Crownfeel}`,
    title: "CrownFeel Ltd.",
    subtitle: "React | Redux | Stripe",
    text: "The front-end of an e-commerce platform with online payment.",
    websiteRef: "https://crownfeelapp.herokuapp.com/",
    githubRef:
      "https://github.com/CalinRaduAlexandru/CrownFeel/tree/masterbranch",
    gif: `${CrownGif}`,
  },
  {
    logo: `${Face}`,
    title: "Recognize faces",
    subtitle: "React | NodeJs | Postgres",
    text:
      "Full-stack app in which you can add photos URL`s and accumulate points for each face.",
    websiteRef: "https://search-face-app.herokuapp.com/",
    githubRef: "https://github.com/CalinRaduAlexandru/Search-face",
    gif: `${SearcFace}`,
  },
];
