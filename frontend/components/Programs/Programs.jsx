"use client";
import React, { useEffect, useState } from "react";
import style from "./Programs.module.css";
import picture from "../../images/children-drawing-02.jpg";
import Link from "next/link";
import Image from "next/image";
import api from "../../src/utils/Api";
import Project from '../Project/Project'

function Programs() {
  const [isScreenBig, setIsScreenBig] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.getInfo('projects')
    .then(res => setProjects(res.results))
    .catch(err => console.log(err))
  }, [])

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
            {(projects !== undefined && projects.map(data => {
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
            {(projects !== undefined && projects.map(data => {
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
