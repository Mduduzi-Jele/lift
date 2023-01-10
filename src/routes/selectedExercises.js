import { useLoaderData } from "react-router-dom";
import { getWorkoutExercises } from "../data";

export async function loader({ params }) {
  const workouts = await getWorkoutExercises(params.workout_id);
  return { workouts };
}

const SelectedExercises = () => {
  const { workouts } = useLoaderData();
  console.log(workouts);
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
      {workouts.length
        ? workouts.map((workout, index) => (
            <div className="exercise" key={index}>
              {workout.name}
              <button className="action-sec">More</button>
            </div>
          ))
        : ""}
    </>
  );
};

export default SelectedExercises;
