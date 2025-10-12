import React from 'react';

const Play = () => (
  <div className="play-page">
      <div className="opponent-hand">
        <div className="card small back"></div>
        <div className="card small back"></div>
        <div className="card small back"></div>
        <div className="card small back"></div>
      </div>

      <div className="play-area">
        <div className="card tiny">icon</div>
        <div className="card tiny">icon</div>
      </div>

      <div className="user-hand">
        <div className="card medium">icon</div>
        <div className="card medium">icon</div>
        <div className="card medium">icon</div>
        <div className="card medium">icon</div>
      </div>
    </div>
);

export default Play;