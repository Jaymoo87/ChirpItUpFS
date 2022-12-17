import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment'
import { RiChatFollowUpFill  } from 'react-icons/ri'

import { IChirp } from "../types";
import OneChirp from "./OneChirp";
import ChirpCard from "./ChirpCard";


const maxChars = 280



const Home = () => {
  
  const nav = useNavigate();
  const [content, setContent] = useState<string>("");
  const [username, setUsername] = useState<string>('');
  const [chirps, setChirps] = useState<IChirp[]>([]);
  
  
  const handleSubmitChirp = () => {
    if (!content) return alert('write a message dummy')

    fetch(`/db/chirps/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(content),
    })
    .then(res => res.json())
    .then(data => {
      nav(`db/chirps/${data.id}`)
    })
  }
  const handleChirpInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  setUsername(e.target.value);
};
const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {


  if (content === "" || username === "") {
    alert("Missing some Input");
    e.preventDefault();
  } else {
    e.preventDefault();
    setChirps([{userid: username, username, content }, ...chirps]);
    setUsername('');
    setContent("");
    setUsername("");
  }
};

useEffect(() => {
  fetch("/db/chirps")
    .then(res => res.json())
    .then(data => setChirps(data))
    .catch((e) => alert(e.message));
    
}, []);
  return (
    <main className="row justify-content-center ">
      <div className="col-12 col-md-6 offset-1">
        <form className="rounded shadow-lg bg-primary p-3">
          <div className="d-flex justify-content-start">
            <label className="btn btn-info m-3 disabled">Chirper Username $8.00</label>
          </div>
          <input
            className="form-control p-2 mb-2"
            placeholder="Username Here"
            value={username}
            onChange={handleUserInput}
          />
          <textarea
            className="form-control bg-light p-3 text-muted"
            placeholder="Chirp Here"
            value={content}
            onChange={handleChirpInput}
          />
          <div className="d-flex justify-content-end">
            <button onClick={handleButtonClick} className="btn btn-primary border border-dark m-3 shadow-md" id="chirpButton">
              Chirp Chirp
            </button>
          </div>
        </form>
      </div>
      <div className="row justify-content-center">
        {chirps.map(c  => (
          <ChirpCard chirp={c} key={`chrp-${c.id}`}  />
          
        ))}
      </div>
    </main>
  );
};

export default Home;
