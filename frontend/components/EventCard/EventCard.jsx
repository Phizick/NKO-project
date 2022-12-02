"use client";
import "./EventCard.component.css";
import Image from "next/image";
import preview from "../../images/event_preview.png";

const EventCard = ({
  name,
  description,
  start_datetime,
  is_finished,
  setModal,
  cardInfo,
}) => {
  return (
    <div className="card" onClick={() => setModal({ ...cardInfo })}>
      <div className="event-preview">
        <Image src={preview} alt="Image" />
      </div>
      <h3 className="card-title">{name}</h3>
      <p className="card-body">{description}</p>
      <div className="footer-container">
        <div className="card-footer">
          <p className="item-left">
            {is_finished === false
              ? "Текущие мероприятия"
              : "Прошедшие мероприятия"}
          </p>
          <p className="item-right">{start_datetime}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
