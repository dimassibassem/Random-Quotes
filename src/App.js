import React from "react";
import "./App.css";
import { FaTumblr, FaTwitter, FaQuoteLeft } from "react-icons/fa";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomIndex: Math.floor(Math.random() * Math.floor(12)),
      bgIndex: Math.floor(Math.random() * Math.floor(143)),
      bg: [
        "AntiqueWhite",
        "Aqua",
        "Aquamarine",
        "Black",
        "Blue",
        "BlueViolet",
        "Brown",
        "BurlyWood",
        "CadetBlue",
        "Chartreuse",
        "Chocolate",
        "Coral",
        "CornflowerBlue",
        "Crimson",
        "Cyan",
        "DarkBlue",
        "DarkCyan",
        "DarkGoldenRod",
        "DarkGray",
        "DarkGrey",
        "DarkGreen",
        "DarkKhaki",
        "DarkMagenta",
        "DarkOliveGreen",
        "DarkOrange",
        "DarkOrchid",
        "DarkRed",
        "DarkSalmon",
        "DarkSeaGreen",
        "DarkSlateBlue",
        "DarkSlateGray",
        "DarkSlateGrey",
        "DarkTurquoise",
        "DarkViolet",
        "DeepPink",
        "DeepSkyBlue",
        "DimGray",
        "DimGrey",
        "DodgerBlue",
        "FireBrick",
        "FloralWhite",
        "ForestGreen",
        "Fuchsia",
        "Gainsboro",
        "Gold",
        "GoldenRod",
        "Gray",
        "Grey",
        "Green",
        "GreenYellow",

        "HotPink",
        "IndianRed",
        "Indigo",
        "Khaki",
        "LawnGreen",

        "LightBlue",
        "LightCoral",

        "LightGrey",
        "LightGreen",
        "LightPink",
        "LightSalmon",
        "LightSeaGreen",
        "LightSkyBlue",
        "LightSlateGray",
        "LightSlateGrey",
        "LightSteelBlue",
        "LightYellow",
        "Lime",
        "LimeGreen",

        "Magenta",
        "Maroon",
        "MediumAquaMarine",
        "MediumBlue",
        "MediumOrchid",
        "MediumPurple",
        "MediumSeaGreen",
        "MediumSlateBlue",
        "MediumSpringGreen",
        "MediumTurquoise",
        "MediumVioletRed",
        "MidnightBlue",

        "Moccasin",
        "NavajoWhite",
        "Navy",
        "Olive",
        "OliveDrab",
        "Orange",
        "OrangeRed",
        "Orchid",
        "PaleGoldenRod",
        "PaleGreen",
        "PaleTurquoise",
        "PaleVioletRed",

        "PeachPuff",
        "Peru",
        "Pink",
        "Plum",
        "PowderBlue",
        "Purple",
        "RebeccaPurple",
        "Red",
        "RosyBrown",
        "RoyalBlue",
        "SaddleBrown",
        "Salmon",
        "SandyBrown",
        "SeaGreen",

        "Sienna",
        "Silver",
        "SkyBlue",
        "SlateBlue",
        "SpringGreen",
        "SteelBlue",
        "Tan",
        "Teal",
        "Thistle",
        "Tomato",
        "Turquoise",
        "Violet",
        "Wheat",
        "Yellow",
        "YellowGreen",
      ],
      quotes: [
        "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        "Be yourself, everyone else is already taken",
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
        "So many books, so little time",
        "A room without books is like a body without a soul",
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        "You only live once, but if you do it right, once is enough.",
        "Be the change that you wish to see in the world.",
        "In three words I can sum up everything I've learned about life: it goes on.",
        "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        "Don’t walk in front of me… I may not follow, Don’t walk behind me… I may not lead, Walk beside me… just be my friend",
      ],
      author: [
        "Marilyn Monroe",
        "Oscar Wilde",
        "Albert Einstein",
        "Frank Zappa",
        "Marcus Tullius Cicero",
        "Bernard M. Baruch",
        "William W. Purkey",
        "Dr. Seuss",
        "Mae West",
        "Mahatma Gandhi",
        "Robert Frost",
        "J.K. Rowling, Harry Potter and the Goblet of Fire",
        "Albert Camus",
      ],
    };
    this.click = this.click.bind(this);
  }
  click() {
    this.setState({
      randomIndex: Math.floor(
        Math.random() * Math.floor(this.state.quotes.length - 1)
      ),
      bgIndex: Math.floor(Math.random() * Math.floor(this.state.bg.length - 1)),
    });
  }

  render() {
    return (
      <div
        id="fill"
        style={{ backgroundColor: this.state.bg[this.state.bgIndex] }}
      >
        <div id="wrapper">
          <div id="quote-box">
            <div className="quote-text">
              <FaQuoteLeft className="fa fa-quote-left" />
              <span
                id="text"
                style={{ color: this.state.bg[this.state.bgIndex] }}
              >
                {" "}
                {this.state.quotes[this.state.randomIndex]}
              </span>
            </div>
            <div className="quote-author">
              -{" "}
              <span
                id="author"
                style={{ color: this.state.bg[this.state.bgIndex] }}
              >
                {this.state.author[this.state.randomIndex]}
              </span>
            </div>
            <div className="buttons">
              <a href="twitter.com/intent/tweet" target="blank">
                <FaTwitter
                  className="button"
                  id="tweet-quote"
                  title="Tweet this quote!"
                  target="_top"
                  style={{ backgroundColor: this.state.bg[this.state.bgIndex] }}
                />
              </a>
              <a
                href="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DJesus%26content%3DAsk%2Band%2Bit%2Bwill%2Bbe%2Bgiven%2Bto%2Byou%253B%2Bsearch%252C%2Band%2Byou%2Bwill%2Bfind%253B%2Bknock%2Band%2Bthe%2Bdoor%2Bwill%2Bbe%2Bopened%2Bfor%2Byou.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button"
                target="blank"
              >
                <FaTumblr
                  className="button"
                  id="tumblr-quote"
                  title="Post this quote on tumblr!"
                  target="_blank"
                  style={{ backgroundColor: this.state.bg[this.state.bgIndex] }}
                />
              </a>
            </div>

            <button
              className="button"
              id="new-quote"
              style={{ backgroundColor: this.state.bg[this.state.bgIndex] }}
              onClick={this.click}
            >
              New quote
            </button>
          </div>
        </div>
        <div className="App">
          by{" "}
          <a href="https://codepen.io/bassem-dimassi" target="blank">
            Bassem
          </a>
        </div>
      </div>
    );
  }
}
export default App;
