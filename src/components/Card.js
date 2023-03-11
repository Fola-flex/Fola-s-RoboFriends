import React from "react";
import Image from "./Image";

const Card = ({ name, email, id, img, loadState, load, keys}) => {
    return (
        <div className="tc hover-bg-light-purple bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 ">  
           <Image id={id} img={img} load={load} loadState={loadState} keys={keys} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;