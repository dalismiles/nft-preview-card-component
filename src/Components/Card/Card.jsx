import "./index.css";
import Equilibrium from "../../images/image-equilibrium.jpg";
import View from "../../images/icon-view.svg";
import Ethereum from "../../images/icon-ethereum.svg";
import Clock from "../../images/icon-clock.svg";
import Avatar from "../../images/image-avatar.png";

const Card = () => {
  return (
    <div className="Card">
      <div className="Card__image">
        <img className="main-image" src={Equilibrium} alt="Equilibrium" />
        <div className="overlay">
          <img className="overlay-image" src={View} alt="View icon" />
        </div>
      </div>
      <div className="Card__text">
        <p className="Card__text-title">
          Equilibrium <span className="Card__text-title-nr">#3429</span>{" "}
        </p>
        <p className="Card__text-subtitle">
          Our Equilibrium collection promotes balance and calm{" "}
        </p>
      </div>
      <hr className="Card__line" />
      <div className="Card__pricedays">
        <div className="Card__price">
          <img src={Ethereum} alt="eth icon" className="Card__price-icon" />
          <p className="Card__price-text">0.041 ETH</p>
        </div>
        <div className="Card__days">
          <img src={Clock} alt="clock icon" className="Card__days-icon" />
          <p className="Card__days-text">3 days left</p>
        </div>
      </div>
      <div className="Card__author">
        <img src={Avatar} alt="" className="Card__author-avatar" />
        <p className="Card__author-text">
          Creation of <a href="#">Jules Wyvern</a>
        </p>
      </div>
    </div>
  );
};

export default Card;
