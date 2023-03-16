"use client";
import React, { useEffect, useState } from "react";
import style from "./Programs.module.css";
import picture from "../../images/children-drawing-02.jpg";
import Image from "next/image";
import api from "../../src/utils/Api";
import Project from '../Project/Project'

function Programs({setModal}) {
  const [isScreenBig, setIsScreenBig] = useState(true);
  const [activityTypes, setActivityTypes] = useState([]);
  const [activities, setActivities] = useState([]);
  const [counter, setCounter] = useState(3)

  useEffect(() => {
    Promise.all([
      api.getInfo('projects'),
      api.getInfo('project-types')
    ])
    .then(([activitiesInfo, activityTypesInfo]) => {
      setActivities(activitiesInfo.results);
      setActivityTypes(activityTypesInfo.results);
    })
    .catch(err => console.log(err))
  }, [])

  const events = []

  activities.map(project => {
    activityTypes.map(type => {

      if(project.project_type === type.id) {
        events.push({
          name: project.name,
          description: project.description,
          short_description: project.short_description,
          type: type.name,
          id: project.id,
          src: project.photo
        })
      }
    })
  });

  useEffect(() => {
    window.addEventListener("resize", listenerCallback);
    return () => {
      window.removeEventListener("resize", listenerCallback);
    };
  }, []);

  useEffect(() => {
    resizedEnded();
  }, []);

  let resizeDisplay;

  function listenerCallback() {
    clearTimeout(resizeDisplay);
    resizeDisplay = setTimeout(resizedEnded, 500);
  }

  function resizedEnded() {
    const width = window.innerWidth;
    if (width > 840) {
      setIsScreenBig(true);
    } else {
      setIsScreenBig(false);
    }
  }

  function handlePrograms () {
    setCounter(counter + 3)
  }

  return (
    <>
      <section className={style.programs}>
        {" "}
        {isScreenBig ? (
          <>
            <h1 className={style.title}>Наши программы</h1>
            {(events !== undefined && events.slice(0, counter).map(data => {
              return(
                <Project 
                  {...data} 
                  key={data.id}
                  projectInfo={data}
                  setModal={setModal}
                />
              )
            }))}
            <div className={style.square}>
              <Image
                src={picture}
                alt="Рисунок детей"
                className={style.img}
                width='320'
                height='320'
                priority
              />
            </div>
          </>
        ) : (
          <>
            <h1 className={style.title}>Наши программы</h1>
            {(events !== undefined && events.slice(0, counter).map(data => {
              return(
                <Project 
                  {...data} 
                  key={data.id}
                  projectInfo={data}
                  setModal={setModal}
                />
              )
            }))}
          </>
        )}
        <button 
          type="button" 
          className={style.button} 
          onClick={handlePrograms}
          disabled={events !== undefined && counter >= events.length}
        >Показать еще</button>
      </section>
    </>
  );
}

export default Programs;
