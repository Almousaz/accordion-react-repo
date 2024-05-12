//  single selection
// multiple selection

import { useState } from "react";
import data from "./data";

export default function Accordian() {
  const [selected, setSlected] = useState(null);

  function handleSingleSelection (getCurrentId){
    // console.log(getCurrentId);
    setSlected(getCurrentId === selected ? null : getCurrentId);
  }

  console.log(selected);

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div onClick={()=>handleSingleSelection(dataItem.id)} className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                selected === dataItem.id ? 
                <div className="content">{dataItem.answer}</div>
                : null
              }
            </div>
          ))
        ) : (
          <div>No data Found !</div>
        )}
      </div>
    </div>
  );
}
