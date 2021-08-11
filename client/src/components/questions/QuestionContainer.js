import React, {useState} from "react"; //import useState
import './QuestionContainer.css';

const QuestionContainer= function({question, questionSubmit}) { //this function is given question and questionSubmit as props to be used

    const [selectedAnswer, setSelectedAnswer] = useState(null); //this container has a state that allows us to keep track of the selectedAnswer

    const handleRadioSelect = function (event) { //this function triggers when a radio button is selected from the available answers
        setSelectedAnswer(event.target.value) //the selectedAnswer state becomes the value of the radio button answer clicked (which we know to be either 0 or 1)
    }

    const handleAnswerSubmit = function () { // this function triggers when the submit button is clicked from within the answers form
        if (selectedAnswer) { // IF there is a selected answer, 
            questionSubmit(selectedAnswer); // it then rurns the questionSubmit function passed down from the container using selectedAnswer (either 0 or 1)
        } else {
            alert("Please select answer") // however if the button is clicked while there IS NO selected answer, the question submit function will not trigger and an error message will be displayed instead
        }
    };

    const clearForm = function(event) { 
        event.preventDefault();//this function clears the radio button form on the submit of the answers form
        event.target.reset();// it also prevents the page from reloading as this would exit the lesson
    };
    
    const allAnswers = question.answers.map((answer) => { // allAnswers takes the question prop given, then maps all the answers into a new array, which is html radio button inputs - we used allAnswers later to populate the answers form
        return(
            <>
                    {/* each answer is created with the following */}
                    <div class="answer">
                    <label class="answer-text">{answer.text}</label> 
                    <input type="radio" name="answer" value={answer.value} onChange={handleRadioSelect} class="radio-button"></input>
                    <br></br>
                    </div>
            </>
        );
    });

    const displayQuestion = () => { // this function takes the question text, then create a form for the answers where the input options come from the allAnswers array defined above

        return(
            <>
            <p class="question">{question.text}</p>
            <form onSubmit={clearForm} name="answer-form">
                <div class="answers">{allAnswers}</div>
                <button for="answer-form" onClick={handleAnswerSubmit} class="continue-lesson-button">Continue</button>
            </form>
            </>
        )
    }


    return ( //finally the questionContainer simply displays the result of the displayQuestion() function
        <>
        <div class="questions-answers">{displayQuestion()}</div>
        </>
    )
    
}

export default QuestionContainer;