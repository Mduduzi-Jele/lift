export async function login(email, password) {
  let user_id;
  let msg;
  await fetch("https://liftapi.onrender.com/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      if(data.id && data.auth){
        user_id = data.id;
      } else {
        msg = data.msg
      }
    });
  return { user_id, msg }
}

export async function signup(name, lastname, email, password) {
  let user_id;
  let msg;
  await fetch("https://liftapi.onrender.com/signup", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, lastname, email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      if(data.user_id){
        user_id = data.user_id;
      } else {
        msg = data.msg
      }
    });
  return  { user_id, msg };
}

export async function getWorkouts(user_id) {
  let workouts;
  await fetch(`https://liftapi.onrender.com/workouts/${user_id}`, {
    method: "GET",
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => {
      workouts = data;
    });
  return workouts;
}

export async function getExercises(type) {
  let exercises;
  await fetch(`https://liftapi.onrender.com/exercises/${type}`, {
    method: "GET",
    credentials: "include",
  })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      exercises = data;
    });
    console.log(exercises)
  return exercises;
}

export async function getWorkoutExercises(workout_id) {
  let exercises;
  await fetch(`https://liftapi.onrender.com/workout/exercises/${workout_id}`, {
    method: "GET",
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => {
      exercises = data;
    });
  return exercises;
}

export async function addWorkout(data) {
  let response;
  await fetch(`https://liftapi.onrender.com/create/workout`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      response = data
    });
    return response
}
