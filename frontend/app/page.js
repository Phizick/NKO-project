"use client";
import { useEffect, useState } from "react";
import api from '../src/utils/Api';

import "../styles/Home.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Promo from "../components/Promo/Promo";
import Programs from "../components/Programs/Programs";
import Partners from "../components/Partners/Partners";
import Questions from "../components/Questions/Questions";
import Donation from "../components/Donation/Donation";
import Gallery from "../components/Gallery/Gallery";
function Page() {

  const [about, setAbout] = useState([]);
  const [activities, setActivities] = useState([]);
  const [activityTypes, setActivityTypes] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [events, setEvents] = useState([]);
  const [files, setFiles] = useState([]);
  const [news, setNews] = useState([]);
  const [partners, setPartners] = useState([]);
  const [projects, setProjects] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    Promise.all([
			api.getInfo('about'),
      api.getInfo('activities'),
      api.getInfo('activity-types'),
      api.getInfo('addresses'),
      api.getInfo('answers'),
      api.getInfo('contacts'),
      api.getInfo('events'),
      api.getInfo('files'),
      api.getInfo('news'),
      api.getInfo('partners'),
      api.getInfo('projects'),
      api.getInfo('questions')
		])
				.then(([aboutInfo, activitiesInfo, activityTypesInfo, addressesInfo, 
          answersInfo, contactsInfo, eventsInfo, filesInfo, newsInfo, partnersInfo, projectsInfo, questionsInfo]) => {
            setAbout(aboutInfo.results);
            setActivities(activitiesInfo.results);
            setActivityTypes(activityTypesInfo.results);
            setAddresses(addressesInfo.results);
            setAnswers(answersInfo.results);
            setContacts(contactsInfo.results);
            setEvents(eventsInfo.results);
            setFiles(filesInfo.results);
            setNews(newsInfo.results);
            setPartners(partnersInfo.results);
            setProjects(projectsInfo.results);
            setQuestions(questionsInfo.results);
          }).catch((err) => console.log(err.message));
  }, [])

  console.log(about);


  return (
    <div className="App">
      <Header />
      <Promo />
      <Partners />
      <Programs />
      <Donation root />
      <Questions />
      <Footer />
    </div>
  );
}

export default Page;
