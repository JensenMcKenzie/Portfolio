import './App.css';
import logo from './menu.png';
import cloud1 from './cloud1.png';
import cloud2 from './cloud2.png';
import one from './one.png';
import two from './two.png';
import three from './three.png';
import four from './four.png';
import Sun from './sun.js'


let value;
function App() {
  function handleMouseEnter(e) {
    let contact = document.getElementById('contact');
    let sun = document.getElementById('sun');
    
    if (value > 1200 && sun.style.transform){
      sun.style.top = "55%";
      contact.style.top = "50%";
      contact.style.opacity = "1";
    }
  }
  function handleMouseLeave(e) {
    let contact = document.getElementById('contact');
    let sun = document.getElementById('sun');
    if (value > 1200){
      sun.style.top = "75%";
      contact.style.top = "100%";
      contact.style.opacity = "0";
    }
  }
  return (
    <div className="App">
      <header className="menu">
        <button id="menu-button"><img src={logo} alt="logo"/></button>
      </header>
      <div id="body">
      <div className="sun" id ="sun" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><label className="grad" id='hello'>Hello.</label><div id="contact">
          <label className='grad' id="contact-label">Contact Me</label>
        </div></div>
        <img src={cloud1} alt="cloud1" className="cloud" id="cloud1"/><img src={cloud2} alt="cloud2" className="cloud" id="cloud2"/>
        <img src={one} alt="one" id="one" className="background"/><img src={two} alt="two" id="two" className="background"/><img src={three} alt="three" id="three" className="background"/><img src={four} alt="four" id="four" className="background"/>
        <div id="into">
          <label className='grad' id="first">Hey</label>
        </div>
      </div>
    </div>
  );
}

export default App;
window.addEventListener("scroll", function() {
  let sun = document.getElementById("sun");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let hello = document.getElementById("hello");
let contact = document.getElementById("contact");
let lab = document.getElementById("contact-label");
    value = window.scrollY;
    one.style.bottom = value * .10 + "px";
    two.style.bottom = value * .13 + "px";
    three.style.bottom = value * .22 + "px";

    four.style.bottom = value * .45 + "px";
    console.log("s" + (parseInt(value) + parseInt(sun.offsetTop)));
    if (value <= 1200){
      sun.style.removeProperty("transform");
      sun.style.removeProperty("left");
      sun.style.top = value * .0166667 + "vh";
      hello.style.top = "30%";
      contact.style.opacity = 0;
    }
    else if (value === 0){
      sun.style.top = "0vh";
    }
    else if (value > 2000){
      console.log("X");
    }
    else if (value > 1200){
      sun.style.top = "75%";
      sun.style.transform = "rotate(360deg)";
      hello.style.top = "10%";
    }
});