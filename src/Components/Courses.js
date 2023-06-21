import React, { useState } from 'react';
import clogo from "../Components/download.jpeg";
import "../Components/Courses.css";
import { Link } from 'react-router-dom';

function Courses() {
  const [isPlayable, setIsPlayable] = useState(false);

  const handleEnrollClick = () => {
    setIsPlayable(true);
  };

  return (
    <>
      <nav id="navbar">
        <Link to="/"><h2 id="son">E-Shiksha</h2></Link>
        <img src={clogo} height="30%" width="80%" alt="Wisflux Logo" />
        <ul className="list">
          <li>
            <a className="link" href="#webd">Web Development</a>
          </li>
          <li>
            <a className="link" href="#android">Android Development</a>
          </li>
          <li>
            <a className="link" href="#python">Python</a>
          </li>
        </ul>
      </nav>

      <main id="main-doc">
        <section className="main-section" id="webd">
          <div className="card-container">
            <div className="card">
              <div className="card-body">
                <div className="iframe-container">
                  {isPlayable ? (
                   <iframe width="560" height="515" src="https://www.youtube.com/embed/videoseries?list=PLwGdqUZWnOp2jmYb2TQGYgBYp0xGwj9V1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  ) : (
                    <div className="play-button">
                      <p>Enroll to watch the video</p>
                    </div>
                  )}
                </div>
                <h3 className="card-title">WEB DEVELOPMENT</h3>
                <p className="card-description">Course Description</p>
                <button className="enroll-button" onClick={handleEnrollClick}>
                  Enroll in Course
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="iframe-container">
                  {isPlayable ? (
                   <iframe width="560" height="515" src="https://www.youtube.com/embed/videoseries?list=PLwGdqUZWnOp2jmYb2TQGYgBYp0xGwj9V1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  ) : (
                    <div className="play-button">
                      <p>Enroll to watch the video</p>
                    </div>
                  )}
                </div>
                <h3 className="card-title">WEB DEVELOPMENT</h3>
                <p className="card-description">Course Description</p>
                <button className="enroll-button" onClick={handleEnrollClick}>
                  Enroll in Course
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="main-section" id="android">
          <div className="card-container">
            <div className="card">
              <div className="card-body">
                <div className="iframe-container">
                  {isPlayable ? (
                   <iframe width="560" height="315" src="https://www.youtube.com/embed/mXjZQX3UzOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  ) : (
                    <div className="play-button">
                      <p>Enroll to watch the video</p>
                    </div>
                  )}
                </div>
                <h3 className="card-title">ANDROID DEVELOPMENT</h3>
                <p className="card-description">Course Description</p>
                <button className="enroll-button" onClick={handleEnrollClick}>
                  Enroll in Course
                </button>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="iframe-container">
                  {isPlayable ? (
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/mXjZQX3UzOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  ) : (
                    <div className="play-button">
                      <p>Enroll to watch the video</p>
                    </div>
                  )}
                </div>
                <h3 className="card-title">ANDROID DEVELOPMENT</h3>
                <p className="card-description">Course Description</p>
                <button className="enroll-button" onClick={handleEnrollClick}>
                  Enroll in Course
                </button>
              </div>
            </div>
          </div>
        </section>

        

      </main>
    </>
  );
}

export default Courses;
