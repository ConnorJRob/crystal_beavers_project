import React from "react";

const LessonQuestion = function({questions}) {

    console.log(questions[0].text)

    const questionDisplay = questions.map((question) => {
        return (
                <>
                    <h3>{question.text}</h3>
                    <p>Answer Area Goes Here!</p>
                </>
                )
    })


    return (
        <>
        {questionDisplay}
        </>
    )
}

export default LessonQuestion;