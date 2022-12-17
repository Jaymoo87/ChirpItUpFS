import { Link } from "react-router-dom";
import React from "react";
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment'
import { RiChatFollowUpFill  } from 'react-icons/ri'

import { IChirp } from "../types";



const ChirpCard = ({chirp}: ChirpCardProps) => {

    

    return (
        <div  className="col-12 col-md-6 offset-1 mt-4">
        <div className="mb-2 card shadow-lg">
          <span className=" d-flex justify-content-end text-muted card-text fst-italic fw-lighter mx-3 mt-1">
            {moment().toNow()}
          </span>
          <div className="card-body col-12"></div>
          <h3 className="card-title mx-5 ">
            {`>`}{chirp.userid}
          </h3>
          <p className=" m-5 card-text ">{`->`}{chirp.content}{`-->--->---->`}</p>
          <div className="d-flex justify-content-between mx-2">
            <h6 className=" text-muted d-flex card-text fst-italic">{moment().format("LLLL")} </h6>
            <h6 className=" text-muted d-flex card-text fst-italic">
             
              {chirp.userid}{`-->`} <RiChatFollowUpFill />
              </h6> 
              <Link to={`chirps/${chirp.id}`} className=" shadow-lg border-radius btn btn-sm btn-info btn-outline-dark">
                Look at this Chirp
              </Link>
              
             
            
          </div>
        </div>
      </div>
    )

    
}
export interface ChirpCardProps {

           chirp: IChirp
    }

export default ChirpCard;
