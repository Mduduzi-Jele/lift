import { Form, useNavigate, useParams } from "react-router-dom";
import { addWorkout } from "../data";

const NewWorkoutDetails = ({ selected, setSelected, setClicked }) => {
  const navigate = useNavigate()
  console.log(selected)
  const { user_id } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const element = document.getElementById("details-form");
    const formData = new FormData(element);
    const data = {
      title: formData.get("title"),
      duration: formData.get("duration"),
      date: formData.get("date"),
      time: formData.get("time"),
      user_id: user_id,
      exercises: selected,
    };
    const response = await addWorkout(data);
    console.log(response)
    if(response.status){
      console.log("hey", response)
      navigate(`/workouts/${user_id}`)
    }
  };
  return (
    <>
    {selected.map((exercise, index) => (
      <div className="selected-exercises" key={index}>{exercise.name}</div>
    ))}
      <Form method="post" id="details-form" onSubmit={handleSubmit} className="input-area">
        <label>Enter title :</label>
        <br />
        <select
          id="title"
          aria-label="Enter title"
          placeholder="title"
          type="text"
          name="title"
          className="input-button"
        >
          <option value="Chest">Chest</option>
          <option value="Arms">Arms</option>
          <option value="Back">Back</option>
          <option value="Legs">Legs</option>
          <option value="Cardio">Cardio</option>
        </select>
        <br />
        <label>Enter duration :</label>
        <br />
        <input
          id="duration"
          aria-label="Enter duration"
          placeholder="duration"
          type="time"
          name="duration"
          className="input-button"
        />
        <br />
        <label>Enter date :</label>
        <br />
        <input
          id="date"
          aria-label="Enter date"
          placeholder="title"
          type="date"
          name="date"
          className="input-button"
        />
        <br />
        <label>Enter time :</label>
        <br />
        <input
          id="time"
          aria-label="Enter time"
          placeholder="time"
          type="time"
          name="time"
          className="input-button"
        />
        <br />
        <button type="submit" className="action">Add workout</button>
        <br />
        <button
        onClick={() => {
          setSelected([]);
          setClicked(0);
        }}
        className="action"
      >
        Previous
      </button>
      </Form>
    </>
  );
};

export default NewWorkoutDetails;
