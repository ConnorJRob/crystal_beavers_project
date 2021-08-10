import React from "react";

const Answers = function({answers}) {

    const allAnswers = answers.map((answer) => {
        return(
            <>
                    <label>{answer.text}</label>
                    <input type="radio" ></input>
            </>
        );
    });

    //all radio inputs need to be wrapped in the one container
    return(
        <>
       <form>{allAnswers}</form>
        </>
    )
}

export default Answers;