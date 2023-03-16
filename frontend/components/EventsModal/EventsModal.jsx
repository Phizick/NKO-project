"use client";

import "./EventsModal.component.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import api from "../../src/utils/Api";

const EventsModal = ({ modal, setModal }) => {
  const [address, setAddress] = useState(null)
  const moment = require('moment');
  const nowTime = moment().format('DD.MM.YYYY h:mm:ss');
  const currentDay = nowTime.toString().slice(0, 20);

  useEffect(() => {
    api.getInfo('addresses')
    .then(res => setAddress(res.results))
    .catch(err => console.log(err))
  }, [])

  const checkEvent = () => {
    const dayOfEvent = modal.start_timestamp;
    if(dayOfEvent === currentDay || dayOfEvent < currentDay) {
      return true
    }
    return false
  }

  const checkAddress = address !== null && address.filter(item => item.id === modal.addresses[0]);
  const addressEvent = checkAddress !== false && checkAddress.length && checkAddress[0].address;

  return (
    <div
      className={"modal" + (modal.length === 0 ? " hide" : "")}
      onClick={(e) => (e.target.className === "modal" ? setModal("") : null)}
    >
      <div className="modal-window">
        <button className="closeIcon" type="button" aria-label="Закрыть окно" onClick={() => setModal("")}></button>
        <div className="card-holder">
          <Image src={modal.picture} width = '600' height='420' alt="Image" priority />
        </div>
        <h3 className="modal-title">{modal.name}</h3>
        <p className="modal-body">{modal.description}</p>
        <div className="modal-footer">
          <p className="modal-date">
            {checkEvent() === false
              ? `Старт: ${modal.start_timestamp}` 
              : 'Мероприятие завершилось'
            }
          </p>
          <p className="modal-date">
            {modal.is_online === true
              ? 'Online' 
              : addressEvent !== false && `Адрес: ${addressEvent}`
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsModal;
