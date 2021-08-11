import React from 'react';

const lessonContent = ({contents, advanceLesson}) => {

    if (contents === null) {
        return null
    }

    return(
        <>
        <h3>{contents.title}</h3>
        <p>{contents.text}</p>
        <button onClick={advanceLesson}>Continue</button>
        </>
    )
}

export default lessonContent;