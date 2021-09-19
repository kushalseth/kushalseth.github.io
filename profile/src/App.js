import React from "react";
import logo from "./logo.svg";
import "./App.css";
/*import profile from "./images/profile.jpg";*/

function App() {
  return (
    <div className="App">
{ /*<!-- Navbar --> */}
<nav className="navbar navbar-default" style={{display: "none"}}>
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="#">Me</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">WHO</a></li>
        <li><a href="#">WHAT</a></li>
        <li><a href="#">WHERE</a></li>
      </ul>
    </div>
  </div>
</nav>

{ /*<!-- First Container  --> */}
<div className="container-fluid bg-1 text-center">
  <h1 className="margin">KUSHAL SETH</h1>
  <img src="" className="img-responsive img-circle margin" style={{display: "inline" }} alt="Bird" width="550" height="550" />
  <h3>Transforming myself towards [#abc_vi] [ AI | ML | Blockchain | Cloud, Quantum & Distributed Systems | VR | IOT ]
  </h3>
  <h5>
  <p>I am a guy whose search history is filled with content of entrepreneurs / startups 
    / motivational talks / standup comedy / blockchain / Quantum / Algorithms / architecture / hackathons / Google / Microsoft / Cars / Food / History. I Love life and enjoy to the fullest.</p>
  </h5>
</div>

{ /*<!-- Second Container  --> */}
<div className="container-fluid bg-2 text-center">
  <h3 className="margin">PROFESSTIONAL CAREER</h3>
  <p>Professionally, I am working as a .Net Full Stack Technical Lead in BOLD Limited (products: Zety, LiveCareer, Myperfectresume, RN and many more) having around 9+ years of experience in developing enterprise and consumer focused applications using multiple design patterns both on frontend and backend. </p>
  <a href="https://www.linkedin.com/in/sethkushal/" className="btn btn-default btn-lg">
    <span className="glyphicon"></span> Linkedin
  </a>
</div>

{ /*<!-- Third Container (Grid)  --> */}
<div className="container-fluid bg-3 text-center">    
  <h3 className="margin">Connect with me at</h3>
  <div className="row">
    { /*
        <div className="col-sm-4">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <img src="birds1.jpg" className="img-responsive margin" style={{ width : 100 }} alt="Image" />
    </div>
    <div className="col-sm-4"> 
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <img src="birds2.jpg" className="img-responsive margin" style={{ width : 100 }} alt="Image" />
    </div>
    <div className="col-sm-4"> 
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <img src="birds3.jpg" className="img-responsive margin" style={{ width : 100 }} alt="Image" />
    </div>
    */}
    <a href="https://stackoverflow.com/users/4393351/kushalseth" className="btn btn-default btn-lg wdth">
      <span className="glyphicon"></span> Stack overflow
    </a>
    
    <a href="https://github.com/kushalseth" className="btn btn-default btn-lg wdth">
      <span className="glyphicon"></span> GitHub
    </a>
    <a href="https://twitter.com/KushalSeth14" className="btn btn-default btn-lg wdth">
      <span className="glyphicon"></span> Twitter
    </a>
    <a href="https://www.instagram.com/kushalseth1408/" className="btn btn-default btn-lg wdth">
      <span className="glyphicon"></span> Instagram
    </a>
    <br/> <br/>
    <h3> Directly write to me at my email address: kushalseth1408@gmail.com </h3>
  </div>
</div>
    </div>
  );
}

export default App;
