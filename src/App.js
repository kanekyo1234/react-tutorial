
import React from "react";
import Top from "./Top";
import Jonas from "./Jonas";
import Martin from "./Martin";
import Deamn from "./Deamn";
import logo from "./images/Top.jpg";

import logo1 from "./images/Jonas.jpg";

import logo2 from "./images/Matin.jpg";

import logo3 from "./images/DEAMN3.jpg";

import SimpleImageSlider from "react-simple-image-slider";



import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const TabLink = ({ to, children, exact }) => (
  <Route
    path={to}
    exact={exact}
    children={({ match }) => {
      return (
        <li className={match ? 'is-active' : ''}>
          <Link to={to} style={{ color: match ? 'rgb(32,88,90)' : 'white' }}>
            {children}
          </Link>
        </li>
      )
    }}
  />
)


const App = () => {
  const images = [
        { url: logo1 },
        { url: logo2 },
        { url: logo3 },
    ];
  return (
    <Router>
    <section className="hero is-primary">
      <div className="hero-body">
        <h1 className="title">DJ Selection</h1>
        <h2 className="subtitle">konokadaihakekkousukidawa</h2>
      </div>

      <div className="logo width=100%" width="100%">
        <SimpleImageSlider
            width={896}
            height={504}
            images={images}
        />
      </div>

      <div className="logo width=100%" width="100%">
        <img src={logo} style={{ width: "100%" }} /> 
      </div>
      <div className='hero-foot'>
          <nav className='tabs is- is-fullwidth'>
            <div className='container'>
              <ul>
                <TabLink to='/react-tutorial' exact>
                  Top
                </TabLink>
                <TabLink to='/react-tutorial/Jonas'>Jonas Blue</TabLink>
                <TabLink to='/react-tutorial/Martin'>Martin</TabLink>
                <TabLink to='/react-tutorial/Deamn'>Deamn</TabLink>
              </ul>
            </div>
          </nav>
        </div>
    </section>
  
    <div>
      <Route exact path="/react-tutorial" component={Top} />
      <Route path="/react-tutorial/Jonas" component={Jonas} />
      <Route path="/react-tutorial/Martin" component={Martin} />
      <Route path="/react-tutorial/Deamn" component={Deamn} />
    </div>
    <br>
    </br>
    
    <div className = "container">
      <div className = "columns">
        <div className = "column is-12 ">
        <a href ="/react-tutorial">
          <div class="buttons">
            <button class="button is-primary">
              Topに戻る
            </button>
          </div> 
          </a>
        </div>
      </div>
    </div>
  
    
    <footer className="footer">
      <div className="content has-text-centered">
        <p>&copy; 2020 Kyohei Kaneko</p>
      </div>
    </footer>
  </Router>
  );
};


export default App;

/*
import React from "react";

import logo from "./Title.jpg";



const Title = () => {
  return (
    <body>
    <section className="hero is-primary">
      <div className="hero-body">
        <h1 className="title">Jonas Blue</h1>
        <h2 className="subtitle">
          konokadaihakekkousukidawa
        </h2>
      </div>
      
      <div className="logo width=100%" width="100%">
          <img src={logo} style={{ width: "100%" }} /> 
      </div>
      <div class="tabs is-centered is-full">
      <ul>
        <li class="is-active"><a href="/">Top</a></li>
        <li class>  <a href="/Jonas">Jonas Blue</a></li>
        <li class><a href="/Martin">Martin Garrix</a></li>
        <li class><a href="/Deamn">Deamn</a></li>
      </ul>
    </div>
      
      

    </section>
  </body>
  );
};

const Section = () => {
  return(
    <body>
  <section className="section">
    <div className="container">
      <h1 className="title">Section</h1>
      <h2 className="subtitle">
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
      </h2>
    </div>
  </section>
</body>
  )
} 

const Footer = () => {
  return (
    
    <footer className="footer">
      <div className="content has-text-centered">
        <p>&copy; 2020 Kyohei Kaneko</p>
      </div>
    </footer>
  );
};


const Top1 = () => {
  return (
    <body>
    <section className="hero  is-black ">
      
    <div className="hero-body ">
        <h1 className="title ">No.1 By Your Side</h1>
    </div>
    </section>
    <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/AQ4MQ_uhBSs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    <a>aaa</a>
    </body>
  );
};

const Top2 = () => {
  return (
    <body>
      <section className="hero is-black">
        <div className="hero-body ">
          <h1 className="title is-pulled-right">No.2 Polaroid</h1>
        </div>
      </section>
      
    <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/gbxxpSNE5o4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <a>aaa</a>
    </body>

  );
};

const Top3 = () => {
  return (
    <body>
      <section className="hero is-black">
        <div className="hero-body">
          <h1 className="title">No.3 Rise</h1>
        </div>
      </section>
      
    <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/btrzs54s1Rc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <a>aaa</a>
    </body>
  );
};

const Top4 = () => {
  return (
    <body>
    <section className="hero is-black">
      <div className="hero-body">
        <h1 className="title">No.4 We Could Go Back</h1>
      </div>
      </section>
      
    <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/k3H_CvAkR_s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <a calssName = "Introduction is-black">これは日本でPVの撮影をしています</a>
    </body>
  );
};

const Top5 = () => {
  return (
    <body>
    <section className="hero is-black">
      <div className="hero-body">
        <h1 className="title">No.5 Mama</h1>
      </div>
      </section>
      
    <div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/qPTfXwPf_HM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </body>
  );
};



const App = () => {
  return (
    <div>
      <Title />
      <Top1 />
      <Top2 />
      <Top3 />
      <Top4 />
      <Top5 />
      <Footer />
    </div>
  );
};

export default App;

*/