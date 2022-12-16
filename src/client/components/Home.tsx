import { Link } from "react-router-dom";
import React, { useEffect, useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment'
import { RiChatFollowUpFill  } from 'react-icons/ri'

import { IChirp } from "../types";

const Home = () => {

  const [message, setMessage] = useState<string>("");
  const [username, setUsername] = useState<string>('');
  const [chirps, setChirps] = useState<IChirp[]>([]);

  
  const handleChirpInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  setUsername(e.target.value);
};
const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  if (message === "" || username === "") {
    alert("Missing some Input");
    e.preventDefault();
  } else {
    e.preventDefault();
    setChirps([...chirps, { userid: uuidv4(), username, content: 'hey' }]);
    setUsername('');
    setMessage("");
    setUsername("");
  }
};

useEffect(() => {
  fetch("/api/chirps")
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
            value={message}
            onChange={handleChirpInput}
          />
          <div className="d-flex justify-content-end">
            <button onClick={handleButtonClick} className="btn btn-success m-3" id="chirpButton">
              Chirp Chirp
            </button>
          </div>
        </form>
      </div>
      <div className="row justify-content-center">
        {chirps.map(c  => (
          <div key={`chrp-${c.userid}`} className="col-12 col-md-6 offset-1 mt-4">
            <div className="mb-2 card shadow-lg">
              <span className=" d-flex justify-content-end text-muted card-text fst-italic fw-lighter mx-3 mt-1">
                {moment().toNow()}
              </span>
              <div className="card-body col-12"></div>
              <h3 className="card-title mx-5 ">
                {c.username} 
              </h3>

              <p className=" m-5 card-text ">{c.content}</p>
              <div className="d-flex justify-content-between mx-2">
                <h6 className=" text-muted d-flex card-text fst-italic">{moment().format("LLLL")} </h6>
                <h6 className=" text-muted d-flex card-text fst-italic">
                 
                  {c.username}
                  
                  <RiChatFollowUpFill />
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
