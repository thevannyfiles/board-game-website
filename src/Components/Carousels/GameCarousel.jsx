import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // will add later

// import images from their locations in the repo
import Arkham-Horror-LCG.jpg from 'src/assets/Game Images/Arkham-Horror-LCG.jpg'; 
import Roll-for-the-Galaxy.png from 'src/assets/Game Images/Roll-for-the-Galaxy.png'; 
import Spirit-Island.jpg from 'src/assets/Game Images/Spirit-Island.jpg'; 
import Stone-Age.jpg from 'src/assets/Game Images/Stone-Age.jpg'; 
import Survive.jpg from 'src/assets/Game Images/Survive.jpg'; 


function GamesImageCarousel() {
  return (
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
      <div>
        <img src="Arkham-Horror-LCG.jpg" alt="First slide" />
        <p className="legend">First Slide</p>
      </div>
      <div>
        <img src="Roll-for-the-Galaxy.png" alt="Second slide" />
        <p className="legend">Second Slide</p>
      </div>
      <div>
        <img src="Spirit-Island.jpg" alt="Third slide" />
        <p className="legend">Third Slide</p>
      </div>
      <div>
        <img src="Stone-Age.jpg" alt="Fourth slide" />
        <p className="legend">Fourth Slide</p>
      </div>
      <div>
        <img src="Survive.jpg" alt="Fifth slide" />
        <p className="legend">Fifth Slide</p>
      </div>
   
      
    </Carousel>
  );
}

export default GamesImageCarousel;
