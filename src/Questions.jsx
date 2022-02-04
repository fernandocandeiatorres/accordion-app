import React, { useState } from "react";
import questions from "./data";
import Question from "./Question";

const Questions = () => {
  const [questionData, setQuestionData] = useState(questions);

  return (
    <div>
      {questionData.map((question) => (
        <div
          key={question.id}
          className="border-0 shadow rounded text-lg font-medium m-4 p-2 mb-5"
        >
          <Question question={question} />
        </div>
      ))}
    </div>
  );
};

export default Questions;
