import React from 'react';
import './about.css';

const About = () => (
  <main className="content">
    <p>This startup is a competitive card game where you can collect cards with different unique abilities and use them in battles with your friends. Each card you collect will be added to your deck, from which you can trade or destroy them to optimize your build. You then use them in battles against other players to collect more, and the cycle continues.</p>
    <p>It is part of an ongoing project by Josh Phister for the CS260 Web Programming Class at Brigham Young University. Below is a design concept diagram of what the final product should look like.</p>
    <div id="picture" className="picture-box"><img src="startup_design.jpg" alt="random" /></div>
  </main>
);

export default About;