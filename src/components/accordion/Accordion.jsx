import { useState } from "react";
import { data } from "./data.js";
import './styles.css';

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    let copyMultiple = [...multiple];
    const findIndexOfCurrent = copyMultiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrent);
    if (findIndexOfCurrent === -1) {
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(findIndexOfCurrent, 1);
    }

    setMultiple(copyMultiple);
  };

  console.log(selected, multiple);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {
          data && data.length > 0 ?
            data.map(dataItem => (
              <div className="item" key={dataItem.id}>
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.title}</h3>
                  <span>+</span>
                </div>
                {
                  enableMultiSelection
                    ? multiple.indexOf(dataItem.id) !== -1 && (
                        <div className="content">{dataItem.content}</div>
                      )
                    : selected === dataItem.id && (
                        <div className="content">{dataItem.content}</div>
                      )
                }
              </div>
            ))
            : <div>No data found</div>
        }
      </div>
    </div>
  );
}


export default Accordion;
