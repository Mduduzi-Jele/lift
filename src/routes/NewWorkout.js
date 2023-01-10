import { Link } from "react-router-dom";

const NewWorkout = () => {
  return (
    <>
      <div className="nav">
        <img
          className="logo"
          src={require("../assets/logo.png")}
          width="50"
          alt="logo"
        />
      </div>
      <button className="workout-buttons">
        <img
          className="exercise-image"
          src={require("../assets/chest.png")}
          width="100"
          alt="exercise"
        />
        <br />
        <Link to={`1`}>Chest</Link>
      </button>
      <br />
      <button className="workout-buttons">
        <img
          className="exercise-image"
          src={require("../assets/arms.png")}
          width="100"
          alt="exercise"
        />
        <br />
        <Link to={`2`}>Arms</Link>
      </button>
      <br />
      <button className="workout-buttons">
        <img
          className="exercise-image"
          src={require("../assets/back.png")}
          width="100"
          alt="exercise"
        />
        <br />
        <Link to={`3`}>Back</Link>
      </button>
      <br />
      <button className="workout-buttons">
        <img
          className="exercise-image"
          src={require("../assets/leg.png")}
          width="100"
          alt="exercise"
        />
        <br />
        <Link to={`4`}>Legs</Link>
      </button>
      <br />
      <button className="workout-buttons">
        <img
          className="exercise-image"
          src={require("../assets/cardio.png")}
          width="100"
          alt="exercise"
        />
        <br />
        <Link to={`5`}>Cardio</Link>
      </button>
    </>
  );
};

export default NewWorkout;
