
import React from "react";
import logo1 from "./images/Jonas.jpg";
import logo2 from "./images/Matin.jpg";
import logo3 from "./images/DEAMN3.jpg";
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bulma-social/bin/bulma-social.min.css';


const Top= () =>{
    return (
  <body>
    <div className = "container">
        <p><br></br>このサイトではサイト制作者の独断と偏見で3人の海外DJのおすすめ曲を紹介するサイトです。</p>
        <div className="logo width=100%" width="100%">
            <br></br>
            <section className="hero  is-black ">  
                <div className="hero-body ">
                    <h1 className="title ">Jonas Blue</h1>
                </div>
            </section>
            <img src={logo1} style={{ width: "100%" }} />
            <a href="https://www.instagram.com/jonasblue/?hl=ja">
            <a class="button is-medium is-instagram">
                <span class="icon">
                <i class="fab fa-instagram fa-lg"></i>
                </span>
                </a>
                
            </a>
            <section className="hero  is-black ">  
                <div className="hero-body ">
                    <h1 className="title ">Martin Garrix</h1>
                </div>
            </section>
            <img src={logo2} style={{ width: "100%" }} /> 
            <a href="https://www.instagram.com/martingarrix/?hl=ja">
            <a class="button is-medium is-instagram">
                <span class="icon">
                <i class="fab fa-instagram fa-lg"></i>
                </span>
                </a>
                
            </a>
            
            <section className="hero  is-black ">  
                <div className="hero-body ">
                    <h1 className="title ">Deamn</h1>
                </div>
            </section>
            <img src={logo3} style={{ width: "100%" }} /> 
            <a href="https://www.instagram.com/deamnmusic/?hl=ja">
            <a class="button is-medium is-instagram">
                <span class="icon">
                <i class="fab fa-instagram fa-lg"></i>
                </span>
                </a>
                
            </a>
        </div>
    </div>

  </body>
  );
};


export default Top;
