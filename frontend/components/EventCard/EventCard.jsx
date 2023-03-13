"use client";
import "./EventCard.component.css";
import Image from "next/image";

const EventCard = ({
  name,
  short_description,
  picture,
  start_timestamp,
  checkEvent,
  is_online,
  setModal,
  cardInfo,
}) => {

  const dayEvent = start_timestamp.slice(0, 10);

  return (
    <div className="card" onClick={() => setModal({ ...cardInfo })}>
      <div className="event-preview">
        <Image 
          src={picture} 
          width = '400' 
          height='250'
          alt="Image" 
          priority
        />
      </div>
      <h3 className="card-title">{name}</h3>
      <p className="card-body">{short_description}</p>
      <div className="footer-container">
        <div className="card-footer">
          <p className="item-left">
            {checkEvent === false
              ? "Текущее мероприятия"
              : "Мероприятие завершилось"}
          </p>
          <p className="item-online">
            {is_online === true
              ? 'online'
              : 'offline'
            }
          </p>
          <p className="item-right">{dayEvent}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
