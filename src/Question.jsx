import React, { useState } from "react";

const Question = ({ question }) => {
  const [showInfo, setShowInfo] = useState(false);
  const { id, info, title } = question;
  return (
    <div className="p-1 text-left">
      <div className="flex justify-between">
        {title}
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="mr-2 w-7 rounded-full bg-slate-200 hover:bg-slate-300 text-red-600"
        >
          {showInfo ? "-" : "+"}
        </button>
      </div>

      {showInfo && ( // ADD TRANSITION.
        <p className="text-sm font-normal pt-3">{info}</p>
      )}
    </div>
  );
};

export default Question;
