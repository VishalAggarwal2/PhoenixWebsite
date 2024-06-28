import Footer from "./Components/Footer";
import React ,{useState} from "react";
import Navbar from "./Components/Navbar";
import {Routes,Route } from 'react-router-dom';
import Blogmain from "./Components/Blogmainpage";
import Homepage from "./Components/Homepage";
import Errorpage from "./Components/Errorpage";
import Fest from "./Components/google_form";
import TeamsY20 from "./pages/TeamsY20"
import TeamsY19 from "./pages/TeamsY19"
import Credits from "./pages/CreditsPage"
import Events from '../src/Components/Events/Events';
import SingleBlog from "./Components/SingleBlog";
import { Triangle } from 'react-loader-spinner';

  // Particle Background
  import { useCallback , useEffect } from "react";
  import Particles from "react-tsparticles";
  import { loadFull } from "tsparticles";
// import Drone from "./Components/google_form";
import Infobotics from "./Components/Infobotics";

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
  }
  const Test2 = (handleToggle) => {
    Test3=handleToggle;
  }
  const DisableNav = () => {
    if(isActive1){
      Test3();
    }
  }

  //Particle Bg
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  // .......................

  let [isY20, setisY20]=useState(true);

  const setY20false = () => {
    setisY20(false);
  }
  const setY20true = () => {
    setisY20(true);
  }
  
  return (
  <div>
    {loading?<Triangle
  height="100"
  width="100"
  color="#FDBB1B"
  ariaLabel="triangle-loading"
  wrapperStyle={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  }}
  wrapperClassName=""
  visible={true}
/>:<div>
    <Navbar Test1={Test1} Test2={Test2} />
    <Routes>
      
      <Route  path = "/" element={<div onClick={DisableNav}><Homepage/></div>}/>
      <Route  path = "/blogs" element={<div onClick={DisableNav}><Blogmain/></div>}/>
      <Route  path = "/blogs/:blogID" element={<div onClick={DisableNav}><SingleBlog/></div>}/>
      <Route  path = "/our_team_y20" element={<div onClick={DisableNav}><TeamsY20 isY20={isY20} setY20false={setY20false} setY20true={setY20true} /></div>}/>
      <Route  path = "/our_team_y19" element={<div onClick={DisableNav}><TeamsY19 isY20={isY20} setY20false={setY20false} setY20true={setY20true} /></div>}/>
      <Route  path = "/credits" element={<div onClick={DisableNav}><Credits /></div>}/>
      <Route  path = "/events" element={<div onClick={DisableNav}><Events /></div>}/>
      <Route  path = "/infobotics" element={<div onClick={DisableNav}><Infobotics /></div>}/>
      {/* <Route  path = "/recruitment" element={<div onClick={DisableNav}><Fest DisableNav={DisableNav}/></div>}/> */}
      <Route  path = "/*" element={<div onClick={DisableNav}><Errorpage/></div>}/>
      
    </Routes>

    <Footer/>

    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={
        {
          particles: {
            number: {
              value: 18,
              density: {
                enable: true,
                value_area: 473.51100518494565
              }
            },
            color: {
              value: ["#fec31c","#F9A105","#FEC423"]
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 5
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 0.3,
              random: true,
              anim: {
                enable: true,
                speed: 0.3,
                opacity_min: 0,
                sync: false
              }
            },
            size: {
              value: 48,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.3,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 544.8194083902193,
              color: "#ffffff",
              opacity: 0.4,
              width: 2
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
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              },
              onclick: {
                enable: true,
                mode: "repulse"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 0.5
                }
              },
              bubble: {
                distance: 400,
                size: 4,
                duration: 0.3,
                opacity: 1,
                speed: 3
              },
              repulse: {
                distance: 150,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          fullScreen: {
            enable: true,
            zIndex: -20
          },
          retina_detect: true
        }
      }
    />

    </div> }
    
    
  </div>
  );
}

export default App;
