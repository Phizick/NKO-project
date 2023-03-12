"use client";

import "./NewsModal.component.css";
import Image from "next/image";

const NewsModal = ({ modal, setModal }) => {

  return (
    <div
      className={"modal" + (modal.length === 0 ? " hide" : "")}
      onClick={(e) => (e.target.className === "modal" ? setModal("") : null)}
    >
      <div className="modal-window">
        <button className="closeIcon" type="button" aria-label="Закрыть окно" onClick={() => setModal("")}></button>
        <div className="card-holder">
          <Image src={modal.picture} width = '400' height='350' alt="Image" priority />
        </div>
        <h3 className="modal-title">{modal.name}</h3>
        <p className="modal-body">{modal.description}</p>
        <div className="modal-footer">
          <p className="modal-date">
            {modal.created_at ? modal.created_at.slice(0, 10) : null}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsModal;
