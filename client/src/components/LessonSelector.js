import React from 'react';

const LessonSelector = function({lessons, chooseLesson, selectedLesson}) { //lessons array, chooseLesson function and selectedLesson object are passed down for LessonSelector to use

    const listOfLessons = lessons.map((lesson) => { //listOfLessons creates a new array of Lesson objects, with the following properties pulled out
        return <option selected={selectedLesson && selectedLesson._id===lesson._id} value={lesson._id} key={lesson._id}>{lesson.lesson_title}</option>
            //the selected tag transaltes to the following
                //is there a selectedLesson currently (i.e not null) AND does the selectedLesson._id match the lesson._id of the lesson in this iteration of the loop
    })

    const handleChange = (event) => { //when a change is detected in the select form, the chooseLesson function (from the container) is called using the lessons _id
        chooseLesson(event.target.value) // this is the lessons id because in listOfLessons key={lesson._id}
    };

    return(
        <>
        <p>Pick your Sub-Topic</p>
        <select required onChange={handleChange}>
        {/* The first option given is a blank option, and is automatically selected on startup, but is also disabled so it can't be selected once changed */}
        <option selected disabled></option>
        {/* the other options come from the listOfLessons array defined above */}
            {listOfLessons}
        </select>
        </>
    )
};

export default LessonSelector;