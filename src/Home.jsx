import './Pages.css';

function Home() {
  return (
    <>    
    <div className="px-4 pb-4 my-5 text-center hero">
      <img className="d-block mx-auto col-6 col-md-4 col-lg-3" src="src/assets/img/hero.png" alt="An AI-generated pixel drawing of Liam" />
        <h1 className="display-5 fw-bold " id="greeting">Hi, I'm Liam</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-3">My portfolio coming soon </p>
        </div>
          <div className="container col-6 col-md-4 col-lg-3">
            <div className="row">
              <div className="col"><a href="https://github.com/lico27" target="_blank"><i className="fab fa-github fa-3x socials"></i></a> </div>
              <div className="col"><a href="https://twitter.com/liamco27" target="_blank"><i className="fab fa-twitter fa-3x socials"></i></a></div>
              <div className="col"><a href="https://www.linkedin.com/in/liam-cottrell-a1837272/" target="_blank"><i className="fab fa-linkedin fa-3x socials"></i></a></div>
            </div>
          </div>
      </div>
    </>
  );
}

export default Home;