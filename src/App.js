import Footer from "./Components/Footer";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Blogmain from "./Components/Blogmainpage";
import Homepage from "./Components/Homepage";
import Errorpage from "./Components/Errorpage";
import TeamsY20 from "./pages/TeamsY20";
import TeamsY19 from "./pages/TeamsY19";
import Credits from "./pages/CreditsPage";
import Events from "../src/Components/Events/Events";
import SingleBlog from "./Components/SingleBlog";
import { Triangle } from "react-loader-spinner";
import JoinUs from "./Components/JoinUs";
import AdminLogin from "./Components/AdminLogin";
import { useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Infobotics from "./Components/Infobotics";
import AdminDashboard from "./pages/AdminDashboard";
import AddEvent from "./pages/AddEvent";
import AddBlog from "./pages/AddBlog";
import AllEvents from "../src/Components/AllEvents";
import AllBlogs from "../src/Components/AllBlogs";
import AllJoinUs from "../src/Components/AllJoinUs";
import AllSubscribers from "../src/Components/AllSubscribers";


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  let [isActive1, SetIsActive1] = useState(false);
  let Test3;

  const Test1 = (isActive) => {
    SetIsActive1(isActive);
  };
  const Test2 = (handleToggle) => {
    Test3 = handleToggle;
  };
  const DisableNav = () => {
    if (isActive1) {
      Test3();
    }
  };

  //Particle Bg
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  // .......................

  let [isY20, setisY20] = useState(true);

  const setY20false = () => {
    setisY20(false);
  };
  const setY20true = () => {
    setisY20(true);
  };

  return (
    <div>
      {loading ? (
        <Triangle
          height="100"
          width="100"
          color="#FDBB1B"
          ariaLabel="triangle-loading"
          wrapperStyle={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        <div>
          <Navbar Test1={Test1} Test2={Test2} />
          <Routes>
            <Route
              path="/"
              element={
                <div onClick={DisableNav}>
                  <Homepage />
                </div>
              }
            />
            <Route
              path="/blogs"
              element={
                <div onClick={DisableNav}>
                  <Blogmain />
                </div>
              }
            />
            <Route
              path="/blogs/:blogID"
              element={
                <div onClick={DisableNav}>
                  <SingleBlog />
                </div>
              }
            />
            <Route
              path="/our_team_y20"
              element={
                <div onClick={DisableNav}>
                  <TeamsY20
                    isY20={isY20}
                    setY20false={setY20false}
                    setY20true={setY20true}
                  />
                </div>
              }
            />
            <Route
              path="/our_team_y19"
              element={
                <div onClick={DisableNav}>
                  <TeamsY19
                    isY20={isY20}
                    setY20false={setY20false}
                    setY20true={setY20true}
                  />
                </div>
              }
            />
            <Route
              path="/credits"
              element={
                <div onClick={DisableNav}>
                  <Credits />
                </div>
              }
            />
            <Route
              path="/events"
              element={
                <div onClick={DisableNav}>
                  <Events />
                </div>
              }
            />
            <Route
              path="/infobotics"
              element={
                <div onClick={DisableNav}
                style={{
                  backgroundColor: "#000000", // White background
                  backgroundSize: "cover", // Cover the entire area
                  minHeight: "100vh", // Ensure it covers the full viewport height
                  padding: "20px", // Optional padding around the AddEvent component
                }}
                >
                  <Infobotics />
                </div>
              }
            />
            <Route
              path="/*"
              element={
                <div onClick={DisableNav}>
                  <Errorpage />
                </div>
              }
            />
            <Route
              path="/joinUs"
              element={
                <div onClick={DisableNav}>
                  <JoinUs />
                </div>
              }
            />
            <Route
              path="/admin"
              element={
                <div onClick={DisableNav}>
                  <AdminLogin />
                </div>
              }
            />
            <Route
              path="/adminDashboard"
              element={
                <div onClick={DisableNav}>
                  <AdminDashboard />
                </div>
              }
            />
            <Route
              path="/addEvent"
              element={
                <div
                  onClick={DisableNav}
                  style={{
                    backgroundColor: "#ffffff", // White background
                    backgroundSize: "cover", // Cover the entire area
                    minHeight: "100vh", // Ensure it covers the full viewport height
                    padding: "20px", // Optional padding around the AddEvent component
                  }}
                >
                  <AddEvent />
                </div>
              }
            />

            <Route
              path="/addBLog"
              element={
                <div
                  onClick={DisableNav}
                  style={{
                    backgroundColor: "#ffffff", // White background
                    backgroundSize: "cover", // Cover the entire area
                    minHeight: "100vh", // Ensure it covers the full viewport height
                    padding: "20px", // Optional padding around the AddEvent component
                  }}
                >
                  <AddBlog />
                </div>
              }
            />
            <Route
              path="/getBlogs"
              element={
                <div
                  onClick={DisableNav}
                  style={{
                    backgroundColor: "#ffffff", // White background
                    backgroundSize: "cover", // Cover the entire area
                    minHeight: "100vh", // Ensure it covers the full viewport height
                    padding: "20px", // Optional padding around the AddEvent component
                  }}
                >
                  <AllBlogs />
                </div>
              }
            />
            <Route
              path="/getEvents"
              element={
                <div
                  onClick={DisableNav}
                  style={{
                    backgroundColor: "#ffffff", // White background
                    backgroundSize: "cover", // Cover the entire area
                    minHeight: "100vh", // Ensure it covers the full viewport height
                    padding: "20px", // Optional padding around the AddEvent component
                  }}
                >
                  <AllEvents/>
                </div>
              }
            />
            <Route
              path="/subscribers"
              element={
                <div
                  onClick={DisableNav}
                  style={{
                    backgroundColor: "#ffffff", // White background
                    backgroundSize: "cover", // Cover the entire area
                    minHeight: "100vh", // Ensure it covers the full viewport height
                    padding: "20px", // Optional padding around the AddEvent component
                  }}
                >
                  <AllSubscribers/>
                </div>
              }
            />
            <Route
              path="/getJoinUs"
              element={
                <div
                  onClick={DisableNav}
                  style={{
                    backgroundColor: "#ffffff", // White background
                    backgroundSize: "cover", // Cover the entire area
                    minHeight: "100vh", // Ensure it covers the full viewport height
                    padding: "20px", // Optional padding around the AddEvent component
                  }}
                >
                  <AllJoinUs/>
                </div>
              }
            />
          </Routes>
          <Footer />

          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              particles: {
                number: {
                  value: 18,
                  density: {
                    enable: true,
                    value_area: 473.51100518494565,
                  },
                },
                color: {
                  value: ["#fec31c", "#F9A105", "#FEC423"],
                },

                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000",
                  },
                  polygon: {
                    nb_sides: 5,
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100,
                  },
                },
                opacity: {
                  value: 0.4,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 0.5,
                    opacity_min: 0,
                    sync: false,
                  },
                },
                size: {
                  value: 40,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.3,
                    sync: false,
                  },
                },
                line_linked: {
                  enable: false,
                  distance: 544.8194083902193,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 2,
                },
                move: {
                  enable: true,
                  speed: 2.5,
                  direction: "none",
                  random: true,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                detect_on: "window",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                  onclick: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 0.5,
                    },
                  },
                  bubble: {
                    distance: 400,
                    size: 4,
                    duration: 0.3,
                    opacity: 1,
                    speed: 3,
                  },
                  repulse: {
                    distance: 150,
                    duration: 0.4,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              fullScreen: {
                enable: true,
                zIndex: -20,
              },
              retina_detect: true,
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
