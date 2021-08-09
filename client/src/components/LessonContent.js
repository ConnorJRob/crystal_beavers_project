import React from 'react';

const lessonContent = ({lesson}) => {

    if (lesson === null) {
        return null
    }

    return(
        <>
        <h2>{lesson.contents.title}</h2>
        <p>{lesson.contents.text}</p>
        </>
    )
}

export default lessonContent;