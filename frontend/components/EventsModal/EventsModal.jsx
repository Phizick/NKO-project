"use client";

import "./EventsModal.component.css";
import Image from "next/image";
import img from "../../images/card_preview.png";

const EventsModal = ({ modal, setModal }) => {
  return (
    <div
      className={"modal" + (modal.length === 0 ? " hide" : "")}
      onClick={(e) => (e.target.className === "modal" ? setModal("") : null)}
    >
      <div className="modal-window">
        <div className="card-holder">
          <Image src={img} alt="Image" />
        </div>
        <h3 className="modal-title">{modal.name}</h3>
        <p className="modal-body">{modal.description}</p>

        <div className="modal-footer">
          <button className="back-btn" onClick={() => setModal("")} />
          <p className="modal-date">{modal.start_datetime}</p>
        </div>
      </div>
    </div>
  );
};

export default EventsModal;
