import { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getWorkouts } from "../data";

export async function loader({ params }) {
  const workouts = await getWorkouts(params.user_id);
  return { workouts };
}

const createDate = (val) => {
  let date;
  if (val) {
    date = new Date(val);
  } else {
    date = new Date();
  }
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${year}-${month}-${day}`;
  return currentDate;
};

const image = (title) => {
  if (title === "Chest") {
    return (
      <img
        className="exercise-image"
        src={require("../assets/chest.png")}
        width="100"
        alt="exercise"
      />
    );
  }
  if (title === "Arms") {
    return (
      <img
        className="exercise-image"
        src={require("../assets/arms.png")}
        width="100"
        alt="exercise"
      />
    );
  }
  if (title === "Back") {
    return (
      <img
        className="exercise-image"
        src={require("../assets/back.png")}
        width="100"
        alt="exercise"
      />
    );
  }
  if (title === "Legs") {
    return (
      <img
        className="exercise-image"
        src={require("../assets/leg.png")}
        width="100"
        alt="exercise"
      />
    );
  }
  if (title === "Cardio") {
    return (
      <img
        className="exercise-image"
        src={require("../assets/cardio.png")}
        width="100"
        alt="exercise"
      />
    );
  }
};

const Workouts = () => {
  const { workouts } = useLoaderData();
  const navigate = useNavigate();
  const [today,setToday] = useState(false);

  const handleClick = (workout_id) => {
    console.log();
    navigate(`selectedexercises/${workout_id}`);
  };

  return (
    <>
      <nav className="nav">
        <img
          className="logo"
          src={require("../assets/logo.png")}
          width="50"
          alt="logo"
        />
        <button className="action">
          <Link to={`neworkout`}>New workout</Link>
        </button>
      </nav>
      <div className="workouts-heading">
        <h4>Today's workouts</h4>
      </div>
      <div>
        {workouts.length ? (
          workouts.map((workout) => (
            <div
              className="workouts"
              key={workout.workout_id}
              onClick={() => handleClick(workout.workout_id)}
            >
              {createDate(workout.date) === createDate() ? (
                <>
                  <div>{image(workout.title)}</div>
                  <div className="workout-details-text">
                    <h4>Title : {workout.title}</h4>
                    <p>duration: {workout.duration}</p>
                    <p>Time : {workout.time}</p>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          ))
        ) : (
          <div style={{ color: "white" }}>No workouts</div>
        )}
      </div>
    </>
  );
};

export default Workouts;
