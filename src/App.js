import React from "react";

const Title = () => {
  return (
    <body>
    <section className="hero is-primary">
      <div className="hero-body">
        <h1 className="title">Jonas Blue</h1>
        <h2 className="subtitle">
          konokadaihakekkousukidaha
        </h2>
      </div>
    </section>
  </body>
  );
};

const Section = () => {
  return(
    <body>
  <section class="section">
    <div class="container">
      <h1 class="title">Section</h1>
      <h2 class="subtitle">
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
    <section className="hero is-black">
      <div className="hero-body ">
        <h1 className="title ">No.1 By Your Side</h1>
      </div>
    </section>
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
      <a>aaa</a>
    </body>

  );
};

const Top3 = () => {
  return (
    <body>
    <section className="hero is-black">
      <div className="hero-body">
        <h1 className="title has-background-warning">No.3 Rise</h1>
      </div>
      </section>
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
      <Section />
    </div>
  );
};

export default App;