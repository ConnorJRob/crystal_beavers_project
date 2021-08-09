import React from 'react';

const lessonContent = ({contents}) => {

    if (contents === null) {
        return null
    }

    return(
        <>
        <h2>{contents.title}</h2>
        <p>{contents.text}</p>
        </>
    )
}

export default lessonContent;