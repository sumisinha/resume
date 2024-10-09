import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Profile from './components/profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './about';
import Education from './education';
import ProfileSummary from './profileSummary';
import Skills from './skill';
import Projects from './projects';
import WorkExp from './workExperience';
import Details from './components/detail';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Router >
          <div className='deskView'>
            <Navbar/>
            <div className="container-fluid my-3" style={{ textAlign:'left'}}>
              <div className='row '>
                <div className='col'> 
                  <Profile/>
                  <div className='detailContainer'>
                    <Routes>
                      <Route exact path="/" element={<About />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/education" element={<Education />} />
                      <Route path="/profile-summary" element={<ProfileSummary />} />
                      <Route path="/skills" element={<Skills />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/workexp" element={<WorkExp />} />
                      {/*  <Route path="*" element={<NoPage />} /> */}
                    </Routes>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile View */}
          <div className='mobView'>
            <div className="App">
              <Navbar/>
              <div className="container-fluid my-3" style={{ textAlign:'left'}}>
                <div className='row '>
                    <div className='col'> <Profile/></div>
                </div>
                <div className='row '>
                    <div className='col'> <Details/></div>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </React.StrictMode>
    </div>
    );
}

export default App;
