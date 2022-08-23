import React, { useState } from 'react'
import './QuizG.css'
import Start from './Start'
import Quiz from './Quiz'

function Quizmain() {

  const [start, setStart] = useState(false);

  return (
    <div className="quiz">
      { start ? <Quiz /> : <Start props={setStart} />} 
    </div>
  );
}

export default Quizmain;