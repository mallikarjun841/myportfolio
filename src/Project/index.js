import React from "react";
import Projectlist from "./Projectitem";
import "./index.css";
import Headers from "../Header";
import Sidemenu from "../sidemenu";
import { Javascript } from "@mui/icons-material";
import SwitchList from "./switch";

const coursellist = [
  {
    lid: 1,
    imgurl: "projectphotos/shoppingapp1.png",
    arr: [
      { url: "projectphotos/foodapp.png" },
      { url: "projectphotos/foodapp1.png" },
      { url: "projectphotos/foodapp2.png" },
      { url: "projectphotos/foodapp3.png" },
      { url: "projectphotos/foodapp4.png" },
    ],
    title: "NxtTrendz shopping app",
    cat: "All",
    technologies:
      "React.js, Javascript, HTML, Restapi, Node.js, CSS, authendication",
    description:
      "This is shopping webapplication.where you find different cateogry Product and Item",
    viewproject: "https://mallikarjunshop.ccbp.tech/",
    githubcode: "https://github.com/mallikarjun841/shoppingtrendz.git",
  },
  {
    lid: 2,
    imgurl: "projectphotos/foodapp.png",
    cat: "All",
    arr: [
      { url: "projectphotos/foodapp.png" },
      { url: "projectphotos/foodapp1.png" },
      { url: "projectphotos/foodapp2.png" },
      { url: "projectphotos/foodapp3.png" },
      { url: "projectphotos/foodapp4.png" },
    ],
    title: "tastykitchens restaurant app",
    description:
      "Implemented a responsive Online Food Ordering System like Swiggy/Zomato where users can see popular restaurants with sort by rating, specific restaurant details, adding or removing food",
    technologies:
      "React.js, Javascript, HTML, Restapi, Node.js, CSS, authendication",
    viewproject: "https://mallikarjunapp2.ccbp.tech/",
    githubcode:
      "https://github.com/mallikarjun841/TastyKitchen-zomato-swiggy-.git",
  },
  {
    lid: 3,
    imgurl: "projectphotos/foodmunch.png",
    cat: "Responsive",
    title: "food munch",
    description:
      "Responsive website of foodapp.where it is design with different section",
    technologies: "Javascript, HTML, CSS",
    viewproject: "https://foodmunchboot.ccbp.tech/",
    githubcode:
      "https://github.com/mallikarjun841/Dynamic-project-javascript/tree/main/more%20javascript/foodmunch",
  },
  {
    lid: 4,
    imgurl: "projectphotos/bombdefuser.png",
    cat: "Dynamic",
    title: "Bomb Defuser",
    description:
      "It is bomb and we need defuse it by Entering the right key in input",
    technologies: "Javascript, HTML, CSS, DOM",
    viewproject: "https://bombdefusemal.ccbp.tech/",
    githubcode:
      "https://github.com/mallikarjun841/Dynamic-project-javascript/tree/main/more%20javascript/bombdefuser",
  },
  {
    lid: 5,
    imgurl: "projectphotos/buttonamaker.png",
    cat: "Dynamic",
    title: "Button Maker",
    description:
      "It is button maker.where you need to give correct value for it.then it make button with that values accordingly",
    technologies: "Javascript, HTML, CSS, DOM",
    viewproject: "https://mallbuttonmaker.ccbp.tech/",
    githubcode:
      "https://github.com/mallikarjun841/Dynamic-project-javascript/tree/main/more%20javascript/buttonmaker",
  },
  {
    lid: 6,
    imgurl: "projectphotos/clock.png",
    cat: "Dynamic",
    title: "Clock",
    description: "This is Real time clock",
    technologies: "Javascript, HTML, CSS",
    viewproject: "https://mallikarjunclock.netlify.app",
    githubcode: "https://github.com/mallikarjun841/clock.git",
  },
  {
    lid: 7,
    imgurl: "projectphotos/colochanger.png",
    cat: "Dyanmic",
    title: "Color Picker",
    description: "colorchanges when you click on respectd button accordingly",
    technologies: " Javascript, HTML, CSS",
    viewproject: "https://malcolorpicker.ccbp.tech/",
    githubcode:
      "https://github.com/mallikarjun841/Dynamic-project-javascript/tree/main/more%20javascript/colorpicker",
  },
  {
    lid: 8,
    imgurl: "projectphotos/fontsizeandstylechager.png",
    cat: "Dynamic",
    title: "Random style and size changer",
    description:
      "It create a random font with Random fontfamily and size .when text is enter in it",
    technologies: " Javascript, HTML, CSS",
    viewproject: "https://mallikwordcloud.ccbp.tech/",
    githubcode:
      "https://github.com/mallikarjun841/Dynamic-project-javascript/tree/main/more%20javascript/wordcloud",
  },
  {
    lid: 9,
    imgurl: "projectphotos/jokesteller.png",
    cat: "Dynamic",
    title: "Jokes Teller",
    description:
      "This is joke teller.That generate a joke when you click on the joke button.",
    technologies: "Javascript, HTML, Restapi, CSS",
    viewproject: "https://apirandomjokes.ccbp.tech/",
    githubcode:
      "https://github.com/mallikarjun841/Dynamic-project-javascript/tree/main/more%20javascript/apirandomjokes",
  },
  {
    lid: 10,
    imgurl: "projectphotos/mini wikipedia.png",
    cat: "Dynamic",
    title: "Mini wikipedia",
    description:
      "mini wikipedia help find details of what you want and enter value in search get output accordingly",
    technologies: " Javascript, HTML, Restapi,  CSS",
    viewproject: "https://malwikipedia.ccbp.tech/",
    githubcode:
      "https://github.com/mallikarjun841/Dynamic-project-javascript/tree/main/more%20javascript/wikipedia",
  },
  {
    lid: 11,
    imgurl: "projectphotos/numbergame.png",
    cat: "Dynamic",
    title: "Idenfing the sum",
    description:
      "Here you need to find sum of two value.if you found correctly you win,else you need try once again.",
    technologies: "Javascript, HTML, Restapi,  CSS",
    viewproject: "https://addgamemallik.ccbp.tech/",
    githubcode:
      "https://github.com/mallikarjun841/Dynamic-project-javascript/tree/main/more%20javascript/addgame",
  },
  {
    lid: 12,
    imgurl: "projectphotos/numbermagic.png",
    cat: "Dyanmic",
    title: "Number Game",
    description:
      "Here you need enter any number in it. so it generate some sentence of that value which matcher it.",
    technologies: "Javascript, HTML,  CSS",
    viewproject: "https://malnumbergame.ccbp.tech/",
    githubcode:
      "https://github.com/mallikarjun841/Dynamic-project-javascript/tree/main/more%20javascript/numbergame",
  },
  {
    lid: 13,
    imgurl: "projectphotos/popularrespository.png",
    cat: "All",
    title: "Popular Respository",
    description:
      "It react project.where it simple explain switch from one category to other and there respected item displayed below.",
    technologies: "React.js, Javascript, HTML, Restapi, Node.js, CSS",
    viewproject: "https://mallikarjunlist.ccbp.tech",
    githubcode: "https://github.com/mallikarjun841/popularrespositors.git",
  },
  {
    lid: 14,
    imgurl: "projectphotos/searchflag.png",
    cat: "Dynamic",
    title: "Find Flag",
    description:
      "Basically it search where N number country are given.find the flag by search in the input field.",
    technologies: " Javascript, HTML, Restapi,CSS",
    viewproject: "https://mcountrysearch.ccbp.tech/",
    githubcode:
      "https://github.com/mallikarjun841/Dynamic-project-javascript/tree/main/more%20javascript/countrysearch",
  },

  {
    lid: 15,
    imgurl: "projectphotos/seasonchanger.png",
    cat: "Dynamic",
    title: "Season Changer",
    description:
      "By this seasonchanger you change switch one season to other season by click on respected button.",
    technologies: "Javascript, HTML, CSS",
    viewproject: "https://malseason.ccbp.tech/",
    githubcode:
      "https://github.com/mallikarjun841/Dynamic-project-javascript/tree/main/more%20javascript/seasonchanger",
  },
  {
    lid: 16,
    imgurl: "projectphotos/secondsconverter.png",
    cat: "Dynamic",
    title: "Seconds Converter",
    description:
      "Here we need to provide hours and minutes.It make calculate it convert to seconds.",
    technologies: "Javascript, HTML, CSS",
    viewproject: "https://secondsconveter.ccbp.tech/",
    githubcode:
      "https://github.com/mallikarjun841/Dynamic-project-javascript/tree/main/more%20javascript/secondconveter",
  },
  {
    lid: 17,
    imgurl: "projectphotos/speedtypingtest.png",
    cat: "Dynamic",
    title: "Speed Typing Test",
    description:
      "TO find speed of typing this is build.this help to find how fast you have typed that text.",
    technologies: " Javascript, HTML, Restapi, CSS",
    viewproject: "https://speedtypingmal.ccbp.tech/",
    githubcode:
      "https://github.com/mallikarjun841/Dynamic-project-javascript/tree/main/more%20javascript/speedtyping",
  },
  {
    lid: 18,
    imgurl: "projectphotos/static project.png",
    cat: "static",
    title: "Static Website",
    description:
      "This sample project of static.where you can find different section.",
    technologies: " HTML, CSS",
    viewproject: "https://mastaticwebsite.ccbp.tech/",
    githubcode:
      "https://github.com/mallikarjun841/Dynamic-project-javascript/tree/main/more%20javascript/staticwebsite",
  },
  {
    lid: 19,
    imgurl: "projectphotos/tabswitch.png",
    cat: "Dynamic",
    title: "Tab Switch",
    description:
      "Tab switch is used to find description according to value that we click. ",
    technologies: "Javascript, HTML,  CSS, Dom",
    viewproject: "https://malliktabswitch.ccbp.tech/",
    githubcode:
      "https://github.com/mallikarjun841/Dynamic-project-javascript/tree/main/more%20javascript/tabswitcher",
  },
  {
    lid: 20,
    imgurl: "projectphotos/textvalue.png",
    cat: "Dynamic",
    title: "keyCode Finder",
    description: "It help to find code of textvalue.",
    technologies: "Javascript, HTML,  CSS, Dom",
    viewproject: "https://keycodesmall.ccbp.tech/",
    githubcode:
      "https://github.com/mallikarjun841/Dynamic-project-javascript/tree/main/more%20javascript/keycode",
  },
  {
    lid: 21,
    imgurl: "projectphotos/themechanger.png",
    cat: "Dynamic",
    title: "Theme Changer",
    description:
      "This is theme changer.if you enter value in search and enter then theme changes accordingly.",
    technologies: "Javascript, HTML,  CSS, Dom",
    viewproject: "https://switchermal.ccbp.tech/",
    githubcode:
      "https://github.com/mallikarjun841/Dynamic-project-javascript/tree/main/more%20javascript/themechanger",
  },
  {
    lid: 22,
    imgurl: "projectphotos/timer.png",
    cat: "Dynamic",
    title: "Add Time",
    description:
      "This is a add on timer.that help to start time accordingly when you click on respected button",
    technologies: "Javascript, HTML,  CSS, Dom",
    viewproject: "https://timermomentmall.ccbp.tech/",
    githubcode:
      "https://github.com/mallikarjun841/Dynamic-project-javascript/tree/main/more%20javascript/addtimer",
  },
  {
    lid: 23,
    imgurl: "projectphotos/todoapp.png",
    cat: "Dynamic",
    title: "Todo Website",
    description: "",
    technologies: "Javascript, HTML,  CSS, localstorage",
    viewproject: "https://malliktodoapp.ccbp.tech/",
    githubcode: "https://github.com/mallikarjun841/todoapplication.git",
  },
  {
    lid: 24,
    imgurl: "projectphotos/Trafficsignal.png",
    cat: "Dynamic",
    title: "Traffic lights",
    description:
      "This is a traffic lights.when you click on respected button.then light on accordingly.",
    technologies: "Javascript, HTML,  CSS",
    viewproject: "https://maltrafficlight.ccbp.tech/",
    githubcode:
      "https://github.com/mallikarjun841/Dynamic-project-javascript/tree/main/more%20javascript/Traffic-signal",
  },
  {
    lid: 25,
    imgurl: "projectphotos/responsivenavbar.png",
    cat: "Responsive Navbar",
    title: "Responsive",
    description:
      "This sample navbar.which is build using bootstrap.which is responsive navbar.",
    technologies: "Javascript, HTML,  CSS, Bootstrap",
    viewproject: "https://responsivenavb.ccbp.tech/",
    githubcode:
      "https://github.com/mallikarjun841/Dynamic-project-javascript/tree/main/more%20javascript/responsivenavbar",
  },
];

const categories = [
  { id: "All", type: "All Fullstack Projects" },
  { id: "Dynamic", type: "Dynamic" },
  { id: "static", type: "static" },
  { id: "Responsive", type: "Responsive" },
];

class Projects extends React.Component {
  state = { status: "All" };

  makestatus = (id) => {
    this.setState({ status: id });
  };

  render() {
    const { status } = this.state;
    console.log(status);
    return (
      <>
        <Headers />
        <div className="project-main-container">
          <Sidemenu />
          <h1 className="maintitle">Projects</h1>
          <div className="catergories">
            {categories.map((element) => (
              <SwitchList
                key={element.id}
                element={element}
                makestatus={this.makestatus}
                active={status}
              />
            ))}
          </div>
          <div className="project-sub">
            <ul className="projectunorder">
              {coursellist.map(
                (ele) =>
                  ele.cat === status && (
                    <Projectlist key={ele.lid} objects={ele} />
                  )
              )}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default Projects;
