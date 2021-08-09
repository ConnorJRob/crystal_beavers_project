import React from 'react';

const lessonContent = ({lesson}) => {

    if (lesson === null) {
        return null
    }

    return(
        <>
        {/* <h2>{lesson.lesson.section_1.contents.title}</h2>
        <p>{lesson.lesson.section_1.contents.text}</p> */}
        </>
    )
}

export default lessonContent;