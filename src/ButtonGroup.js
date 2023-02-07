import { useState } from "react";

// border: none;
//   padding: 5px 15px;
//   color: #745e5e;

const ALT_STYLES = {
  border: "none",
  color: "black",
  background: "white"
};

const BUTTON_TEXT = ["$500", "$1k", "No limit"];

export default function ButtonGroup({ buttons }) {
  const [selectedButton, setSelectedButton] = useState(2);

  return (
    <div className="btn-group">
      <button
        onClick={() => setSelectedButton(0)}
        style={selectedButton === 0 ? ALT_STYLES : {}}
      >
        $500
      </button>
      <button
        onClick={() => setSelectedButton(1)}
        style={selectedButton === 1 ? ALT_STYLES : {}}
      >
        $1k
      </button>
      <button
        onClick={() => setSelectedButton(2)}
        style={selectedButton === 2 ? ALT_STYLES : {}}
      >
        No limit
      </button>
    </div>
  );
}
