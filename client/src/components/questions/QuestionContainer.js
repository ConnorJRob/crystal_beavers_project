import React, {useState} from "react";
import Question from "./Question.js";
import Answers from "./Answers.js";

const QuestionContainer= function({question, questionSubmit}) {

    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleRadioSelect = function (event) {
        setSelectedAnswer(event.target.value)
    }

    const handleAnswerSubmit = function () {
        questionSubmit(selectedAnswer);
    }

    const clearForm = function(event) {
        event.preventDefault();
        event.target.reset();
    }
    
    const allAnswers = question.answers.map((answer) => {
        return(
            <>
                    <label>{answer.text}</label>
                    <input type="radio" name="answer" value={answer.value} onChange={handleRadioSelect}></input>
                    <br></br>
            </>
        );
    });

    const displayQuestion = () => {

        return(
            <>
            <p>{question.text}</p>
            <form onSubmit={clearForm} name="answer-form">
                {allAnswers}
                <button for="answer-form" onClick={handleAnswerSubmit}>Continue</button>
            </form>
            </>
        )
    }
        // for each question
        // display question text
        // loop through answers for question
        // for each answer, generate a radio input line
        // each radio input line should display the answer option and hold the answer value (i.e 0 or 1)
        // onChange of each radio option will update the state when progressing (integer/increment +=1)

    return (
        <>
        {displayQuestion()}
        </>
    )
    
}

export default QuestionContainer;