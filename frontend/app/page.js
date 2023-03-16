"use client";
import "../styles/Home.css";
import Promo from "../components/Promo/Promo";
import Programs from "../components/Programs/Programs";
import Partners from "../components/Partners/Partners.jsx";
import Questions from "../components/Questions/Questions";
import Donation from "../components/Donation/Donation";
import { useState } from "react";
import ProgramsModal from "../components/ProgramsModal/ProgramsModal";

function Page() {
  const [modal, setModal] = useState("");

  return (
    <div className="App">
      {modal && <ProgramsModal modal={modal} setModal={setModal} />}
      <Promo />
      <Partners />
      <Programs setModal={setModal} />
      <Donation root />
      <Questions />
    </div>
  );
}

export default Page;
