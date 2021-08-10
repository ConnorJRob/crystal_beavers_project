import React from "react";
import Question from "./Question.js";
import Answers from "./Answers.js";

const QuestionContainer= function({questions}) {

    const listOfQuestions = questions.map((question) => {

        return(
            <>
            <Question question={question}/>
            <Answers answers={question.answers}/>
            </>
        )
    })
        // for each question
        // display question text
        // loop through answers for question
        // for each answer, generate a radio input line
        // each radio input line should display the answer option and hold the answer value (i.e 0 or 1)
        //onChange of each radio option will update the state when progressing (integer/increment +=1)

    return (
        <>
        {listOfQuestions}
        </>
    )
    
}


export default QuestionContainer;