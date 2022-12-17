import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState} from "react";

import moment from 'moment'
import { RiChatFollowUpFill  } from 'react-icons/ri'

import { ChirpToEdit, IChirp } from "../types";
import ChirpCard, { ChirpCardProps } from "./ChirpCard";




const OneChirp = () => {

    const { id } = useParams()
    const [oneChirp, setOneChirp] = useState<IChirp>();

useEffect(() => {
    fetch(`/db/chirps/${id}`)
      .then(res => res.json())
      .then(data => setOneChirp(data))
      .catch((e) => alert(e.message));
      
  }, [id]);

  return(
      <div className="justify-content-center">
      
     {oneChirp && <ChirpCard chirp={oneChirp} />}
    
     <div className="d-flex col-6 justify-content-end">
     <Link to={`chirp/${id}/edit`} className=" shadow-lg border-radius btn btn-sm btn-dark btn-outline-secondary">
             Edit Chirp
           </Link>
  </div> </div >
  )

}

export default OneChirp;