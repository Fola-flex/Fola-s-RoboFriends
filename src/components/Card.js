import React from "react";
import Image from "./Image";

const Card = ({ name, email, id, imgType, loadState, load, keys}) => {
    return (
        <div className="tc hover-bg-light-purple bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 ">  
           <Image id={id} imgType={imgType} load={load} loadState={loadState} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;