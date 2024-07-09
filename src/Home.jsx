import Carousel from 'react-bootstrap/Carousel';
import HeadImg from './assets/HeadImg.png';
import Pfp from './assets/pfp.jpeg';
import './Pages.css';

function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={HeadImg} text="First slide" className='carousel-img d-block w-100' />
        <Carousel.Caption>
          <div className="container">
          <img src={Pfp} style={{ height: "200px", borderRadius: "125px" }}/>
          <div className="carouselText">
          <h1 className="h1c">Liam Cottrell</h1>
          <p className="p1c">Web developer based in the UK<br />Welcome to my portfolio</p>
          </div>
        </div>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;