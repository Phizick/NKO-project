"use client";
import React, { useEffect, useState } from "react";
import style from "./Programs.module.css";
import picture from "../../images/children-drawing-02.jpg";
import Image from "next/image";
import api from "../../src/utils/Api";
import Project from '../Project/Project'

function Programs() {
  const [isScreenBig, setIsScreenBig] = useState(true);
  const [activityTypes, setActivityTypes] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    Promise.all([
      api.getInfo('activities'),
      api.getInfo('activity-types')
    ])
    .then(([activitiesInfo, activityTypesInfo]) => {
      setActivities(activitiesInfo.results);
      setActivityTypes(activityTypesInfo.results);
    })
    .catch(err => console.log(err))
  }, [])

  const events = []

  // console.log(activities);
  // console.log(activityTypes);

  activities.map(project => {
    activityTypes.map(type => {

      if(project.activity_type === type.id) {
        events.push({
          name: project.name,
          description: project.description,
          type: type.name,
          id: project.id
        })
      }
    })
  });

  // console.log(events)
  // console.log(events.slice(-3))

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
  return (
    <>
      <section className={style.programs}>
        {" "}
        {isScreenBig ? (
          <>
            <h1 className={style.title}>Наши программы</h1>
            {(events !== undefined && events.slice(-3).map(data => {
              return(
                <Project 
                  data={data} 
                  key={data.id}/>
              )
            }))}
            <div className={style.square}>
              <Image
                src={picture}
                alt="Рисунок детей"
                className={style.img}
              />
            </div>
          </>
        ) : (
          <>
            <h1 className={style.title}>Наши программы</h1>
            {(events !== undefined && events.slice(-3).map(data => {
              return(
                <Project 
                  data={data} 
                  key={data.id}/>
              )
            }))}
          </>
        )}
      </section>
    </>
  );
}

export default Programs;
