import React from 'react';

const LessonSelector = function({lessons, chooseLesson, selectedLesson}) {

    const listOfLessons = lessons.map((lesson) => { //listOfLessons creates a new array of Lesson objects, with the following properties pulled out
        return <option selected={selectedLesson && selectedLesson._id===lesson._id} value={lesson._id} key={lesson._id}>{lesson.lesson_title}</option>
        // return <Lesson lesson={lesson} key={lesson._id} title={lesson.lesson_title} selected={selectedLesson && selectedLesson._id===lesson._id}/>
    })

    const handleChange = (event) => { //when the select option is changed, the chooseLesson function is called using the lessons _id
        chooseLesson(event.target.value)
    };

    return(
        <>
        <p>Pick your Sub-Topic</p>
        <select required onChange={handleChange}>
        <option selected disabled></option>
            {listOfLessons}
        </select>
        </>
    )
};

export default LessonSelector;