import React from "react";
import '../../src/index.css';

function OurStory() {
  return (
    <div className="OurStory">
    <h1 className="text-center">Our Story</h1>
    <section className="AboutBox border-2" > 
    <p className="p-8">
      Founder, Jonathan Li, shares a passion for board games, boba, and
      delicious food, so he combined them all to become Sip & Play, Park
      Slope&apos;s first board game cafe. It is a straightforward concept,
      come in with your friends and family to play any board game from our
      library of 300+ games! We hope when you visit, you also enjoy our
      coffee, espresso, boba, sandwiches, and snacks!
    </p>
    </section>
    <div className="OwnerPic">
    <img  className="w-5/5" src="../assets/ownersipnplay.png" alt="Owner of Sip & Play standing in front of establishment"></img>
    </div>
    <div className="PressBox">
    <h4 className="text-center border-2 w-80">Press</h4>
    </div>
    <aside className="Article">
      <img className="w-2/5" src="../assets/articleimgone.webp"></img>
      <h5><a href="https://www.timeout.com/newyork/news/this-new-board-game-cafe-in-park-slope-has-over-200-games-010720">This new board game cafe in park slop has over 200 games</a></h5>
      <p className="p-8">Shaye Weaver from TimeOut  Sip & Play&apos;s affordable food options and flexible space.
              &apos;Sip & Play has a full cafe that whips up coffee and specialty drinks, including boba tea, and tasty bites like chicken tenders, fries, avocado toast and bagels mostly priced under $10.
              Sip & Play isn&apos;t just for gamers, though... it&apos;s for everyone who needs place to get their morning coffee or to just sit and read, study or work.</p>
      </aside>

    <aside className="">
    <div>
        <img className="w-2/5" src="../assets/articleimgtwo.webp"></img>
        <h5><a href="https://patch.com/new-york/parkslope/board-game-cafe-opens-park-slopes-fifth-avenue">&apos;Board Game Cafe&apos; Opens On Park Slope&apos;s Fifth Avenue</a></h5>
        <p className="p-8">Anna Quinn from Patch discusses how Sip & Play plans to build upon the foundation it has laid for the concept.
        &quot;He spent the last few months completely revamping the space inside, adding large tables for optimal game play and building out a menu he says offers more than many board game cafes ...&quot;&quot;The 200-game catalogue of board games available to borrow might also grow... Customers are welcome to make suggestions about games they&apos;d like to see him add.&quot;</p>
      </div>
      </aside>
    </div>
      
  );
}

export default OurStory;




