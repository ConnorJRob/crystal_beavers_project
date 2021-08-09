import React, {useState, useEffect} from "react";
import Element from "../components/Element.js";
import LessonElement from "../components/LessonElement.js";
import LessonSelector  from "../components/LessonSelector.js";
import LessonContent from "../components/LessonContent.js";
import {getLessons} from "../services/LessonServices.js";

const Container = function() {

    const [elementState, setElementState] = useState(0); //sets up a state that tracks lesson stages - modifying this allows us to iterate through them
    const [lessons, setLessons] = useState([]); // this state stores the data from our api (lessons collection)
    const [selectedLesson, setSelectedLesson] = useState(null); // this state is used in conjuection with the LessonSelector to define the currently selected lesson
    const [selectedLessonSection1, setSelectedLessonSection1] = useState(null); 
    const [selectedLessonSection2, setSelectedLessonSection2] = useState(null); 
    const [selectedLessonSection3, setSelectedLessonSection3] = useState(null); 

    useEffect(() => { // this runs when the page loads
        getLessons() // it calls the get Lessons function from LessonServices
        .then((allLessons) => { // the data returned from getLessons is then use to setLessons to that array of data
            setLessons(allLessons);
        })
    }, []);

    const chooseLesson = (lesson_id) => { // this function takes the lesson_id from the lessons selector when changed 
        setSelectedLesson(lessons.filter(lesson => lesson_id === lesson._id)) // the filter function then returns ONLY the lesson with a matching _id from the lessons state - which becomes the selectedLesson
        setSelectedLessonSection1(lessons[0]);
        setSelectedLessonSection2(lessons[1]);
        setSelectedLessonSection3(lessons[2]);
    };

    const incrementState = function() { 
        setElementState(elementState + 1);//this function increments the element state which allows us to progress through the lesson
    }

    const lessonSectionOneContents = <LessonContent lesson={selectedLessonSection1}/>
    const lessonSectionOneQuestion = <LessonQuestion lesson={selectedLessonSection1}/>
    // const lessonSectionTwoContents
    // const lessonSectionTwoQuestion
    // const lessonSectionThreeContents
    // const lessonSectionThreeQuestion
    
    // const elementZero = <Element props="Hello Mate, this is the first element" />;
    // const elementOne = <Element props="This is the 2nd element mate" />;
    // const elementTwo = <Element props="Third element now" />;
    const elementList = []

    elementList.push(lessonSectionOneContents)
    // elementList.push(elementOne)
    // elementList.push(elementTwo)

    return (
        <>
            <h1>BBC 5 Minute Learning Challenge</h1>
            <h2>Space</h2>
            <LessonSelector lessons={lessons} chooseLesson={chooseLesson}/>
            <LessonElement />
            {elementList[elementState]}
            <button onClick={incrementState}>Next</button>
            <p>Click to see the next element</p>
        </>
        )
    
}

export default Container;