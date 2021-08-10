import React from "react";

const Answers = function({answers}) {

    const allAnswers = answers.map((answer) => {
        return(
            <>
                <form>
                    <label>{answer.text}</label>
                    <input type="radio" ></input>
                </form>
            </>
        );
    });

    return(
        <>
        <p>{allAnswers}</p>
        </>
    )
}

export default Answers;