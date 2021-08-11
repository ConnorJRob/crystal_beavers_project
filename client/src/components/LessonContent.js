import React from 'react'; 

const lessonContent = ({contents, advanceLesson}) => { //contents and advanceLesson function are passed down to lessonContent from container to be used

    if (contents === null) { //if conents is null (i.e there is no selected lesson) the lesson content component will not generate
        return null
    }

    //otherwise - the lesson component simply display details from the contents prop passed down
    return(
        <>
        <h3>{contents.title}</h3>
        <p>{contents.text}</p>
        <button onClick={advanceLesson}>Continue</button>
        {/* the button used the advanceLesson functionthat was passed down from the container to progress to the next tile in the lesson when the user is ready */}
        </>
    )
}

export default lessonContent;