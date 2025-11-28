import React from 'react';
import './about.css';

function About() {
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then(res => res.json())
      .then(data => setCatFact(data.fact))
      .catch(err => console.error("Error fetching cat fact:", err));
  }, []);

  return (
    <div>
      <p>This startup is a competitive card game where you can collect cards with different unique abilities and use them in battles with your friends. Each card you collect will be added to your deck, from which you can trade or destroy them to optimize your build. You then use them in battles against other players to collect more, and the cycle continues.</p>
      <p>It is part of an ongoing project by Josh Phister for the CS260 Web Programming Class at Brigham Young University. Below is a design concept diagram of what the final product should look like.</p>
      <div id="picture" className="picture-box"><img src="startup_design.jpg" alt="random" /></div>

      <h3>Random Cat Fact</h3>
      <p>{catFact || "Loading cat fact..."}</p>
    </div>
  );
}

export default About;