"use client";
import "./EventCard.component.css";
import Image from "next/image";
import preview from "../../images/event_preview.png";

const EventCard = ({
  name,
  description,
  picture,
  start_timestamp,
  checkEvent,
  is_online,
  setModal,
  cardInfo,
}) => {
  console.log(checkEvent);

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
      <p className="card-body">{description}</p>
      <div className="footer-container">
        <div className="card-footer">
          <p className="item-left">
            {checkEvent === true
              ? "Текущее мероприятия"
              : "Прошедшее мероприятия"}
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
