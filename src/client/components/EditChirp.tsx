import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState} from "react";

import moment from 'moment'
import { RiChatFollowUpFill  } from 'react-icons/ri'

import Home from "./Home";
import { ChirpToEdit, IChirp } from "../types";
import ChirpCard, { ChirpCardProps } from "./ChirpCard";



 const EditChirp = () => {

    const nav = useNavigate();
  const [content, setContent] = useState<string>("");
  const [username, setUsername] = useState<string>('');
  const [chirps, setChirps] = useState<IChirp[]>([]);

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
     </main> 
      ) }

      export default EditChirp;