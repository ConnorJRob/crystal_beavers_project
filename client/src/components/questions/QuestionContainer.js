import React, {useState} from "react";

const QuestionContainer= function({question, questionSubmit}) {

    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleRadioSelect = function (event) {
        setSelectedAnswer(event.target.value)
    }

    const handleAnswerSubmit = function () {
        if (selectedAnswer) {
            questionSubmit(selectedAnswer);
        } else {
            alert("Please select answer")
        }
    }

    const clearForm = function(event) {
        event.preventDefault();
        event.target.reset();
    }
    
    const allAnswers = question.answers.map((answer) => {
        return(
            <>
                    <label>{answer.text}
                    <input type="radio" name="answer" value={answer.value} onChange={handleRadioSelect}></input>
                    </label>
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