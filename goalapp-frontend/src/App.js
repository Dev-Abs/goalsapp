import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AllGoals from "./components/AllGoals";
import CreateGoal from "./components/CreateGoal";
import UpdateGoal from "./components/UpdateGoal";
import Home from "./components/Home";

const App = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  });
  const [goals, setGoals] = useState([]);
  const [id, setID] = useState('')
  const [navbarMain, setNavbarMain ] = useState(false)
  const [updatedGoal, setUpdatedGoal] = useState({
    id: null,
    title: "",
    description: "",
  });

  const addGoal = (goal) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newGoal = { id, ...goal };
    setGoals([...goals, newGoal]);
  };

  const removeGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  const updateGoalCall = (id) => {
    setID(id)
    // const goal = goals.find((goal) => goal.id === id);
    // setUpdatedGoal({
    //   id: goal.id,
    //   title: goal.title,
    //   description: goal.description,
    // });
    // console.log(updatedGoal)
    // setGoals(goals.map((goal) => (goal.id === id ? updatedGoal : goal)))
  };

  const updateGoal = (updatedGoalFinal) => {
    // setGoals(
    //   goals.map((goal) =>
    //     goal.id === updatedGoalFinal.id ? updatedGoalFinal : goal
    //   )
    
  };
  const toggleNavbar = () =>{
    if(!token){
    setNavbarMain(false)
    } else {
      setNavbarMain(true)
    }
  }
  return (
    <Router>
      <Navbar navbarMain={navbarMain} toggleNavbar={toggleNavbar} />
      <Routes>
        <Route path="/" element={<Login toggleNavbar={toggleNavbar} />} />

        <Route path="/signup" element={<Signup />} />
        <Route
          path="/allgoals"
          element={
            <AllGoals
              goals={goals}
              removeGoal={removeGoal}
              updateGoalCall={updateGoalCall}
              setGoals={setGoals}
            />
          }
        />

        <Route path="/creategoal" element={<CreateGoal addGoal={addGoal} />} />

        <Route
          path="/updategoal"
          element={<UpdateGoal id={id} goal={updatedGoal} updateGoal={updateGoal} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
