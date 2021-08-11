import React from 'react'; 
import './LessonContent.css';

const lessonContent = ({contents, advanceLesson}) => { //contents and advanceLesson function are passed down to lessonContent from container to be used

    if (contents === null) { //if conents is null (i.e there is no selected lesson) the lesson content component will not generate
        return null
    }

    //otherwise - the lesson component simply display details from the contents prop passed down
    return(
        <>
        <section class="lesson-content">
        <h3 class="content-title">{contents.title}</h3>
        <p class="content-text">{contents.text}</p>
        <button class="continue-lesson-button" onClick={advanceLesson}>Continue</button>
        {/* the button used the advanceLesson functionthat was passed down from the container to progress to the next tile in the lesson when the user is ready */}
        </section>
        </>
    )
}

export default lessonContent;