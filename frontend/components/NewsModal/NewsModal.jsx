"use client";

import "./NewsModal.component.css";
import Image from "next/image";
import img from "../../images/news-preview.png";

const NewsModal = ({ modal, setModal }) => {
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
          <p className="modal-date">
            {modal.created_at ? modal.created_at.slice(0, 10) : null}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsModal;
