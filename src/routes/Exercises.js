import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getExercises } from "../data";
import NewWorkoutDetails from "./NewWorkoutDetails";

export async function loader({ params }) {
  const exercises = await getExercises(params.type);
  return { exercises };
}

const Exercises = () => {

  const { exercises } = useLoaderData();
  const [selected, setSelected] = useState([]);
  const [clicked, setClicked] = useState(0);
 
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
      {!clicked ? (
        <>
            {exercises.length ? (
              exercises.map((exercise) => (
                <div
                  className="exercise"
                  id={exercise.exercise_id}
                  key={exercise.exercise_id}
                  onClick={() => {
                    document
                      .getElementById(exercise.exercise_id)
                      .classList.toggle("selected");
                    if (
                      document
                        .getElementById(exercise.exercise_id)
                        .classList.contains("selected")
                    ) {
                      selected.push(exercise);
                    } else {
                      selected.map((item, index) => {
                        if (item.exercise_id === exercise.exercise_id) {
                          selected.splice(index, 1);
                        }
                      });
                    }
                  }}
                >
                  <p>{exercise.name}</p>
                  <img className="exe_img" src={`https://liftapi.onrender.com/image/${exercise.name}`} alt=""></img>
                </div>
              ))
            ) : (
              <div>No exercises</div>
            )}
          <br />
          <div className="action-ter">
            <button className="action" onClick={() => setClicked(1)}>
              next
            </button>
          </div>
        </>
      ) : (
        <NewWorkoutDetails
          selected={selected}
          setSelected={setSelected}
          setClicked={setClicked}
        />
      )}
    </>
  );
};

export default Exercises;
