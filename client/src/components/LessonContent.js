import React from 'react';

const lessonContent = ({contents, advanceLesson}) => {

    if (contents === null) {
        return null
    }

    return(
        <>
        <h2>{contents.title}</h2>
        <p>{contents.text}</p>
        <button onClick={advanceLesson}>Continue</button>
        </>
    )
}

export default lessonContent;