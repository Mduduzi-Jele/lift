import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './routes/ErrorPage';
import Workouts, { loader as workoutsLoader } from './routes/Workouts';
import Login from './routes/Login';
import Root from './routes/Root';
import NewWorkout from './routes/NewWorkout';
import Exercises, { loader as exercisesLoader } from './routes/Exercises';
import './App.css'
import SignUp from './routes/SignUp';
import SelectedExercises, { loader as workoutExercisesLoader } from './routes/selectedExercises';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/loginwithlift",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/workouts/:user_id",
    element: <Workouts />,
    loader: workoutsLoader
  },
  {
    path: "/workouts/:user_id/selectedexercises/:workout_id",
    element: <SelectedExercises />,
    loader: workoutExercisesLoader
  },
  {
    path: "/workouts/:user_id/neworkout",
    element: <NewWorkout />,
  },
  {
    path: "/workouts/:user_id/neworkout/:type",
    element: <Exercises />,
    loader: exercisesLoader
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);