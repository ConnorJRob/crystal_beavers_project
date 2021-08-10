import React from "react";

const QuestionContainer= function({questions}) {


        // for each question
        // display question text
        // loop through answers for question
        // for each answer, generate a radio input line
        // each radio input line should display the answer option and hold the answer value (i.e 0 or 1)
        //onChange of each radio option will update the state when progressing (integer/increment +=1)

    const questionDisplay = []
    const answerDisplay = []
    const questionMapping = questions.forEach(question => {
        
            
      
    })

    return (
        <>
        {questionDisplay}
        {answerDisplay}
        </>
    )
    
}


export default QuestionContainer;