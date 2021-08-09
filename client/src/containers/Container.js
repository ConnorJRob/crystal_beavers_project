import React, {useState, useEffect} from "react";
import LessonSelector  from "../components/LessonSelector.js";
import LessonContent from "../components/LessonContent.js";
import {getLessons} from "../services/LessonServices.js";

const Container = function() {

    const [elementState, setElementState] = useState(0); //sets up a state that tracks lesson stages - modifying this allows us to iterate through them
    const [lessons, setLessons] = useState([]); // this state stores the data from our api (lessons collection)
    const [selectedLesson, setSelectedLesson] = useState(null); // this state is used in conjuection with the LessonSelector to define the currently selected lesson
    const [lessonElements, setLessonElements] = useState([])


    useEffect(() => { // this runs when the page loads
        getLessons() // it calls the get Lessons function from LessonServices
        .then((allLessons) => { // the data returned from getLessons is then use to setLessons to that array of data
            setLessons(allLessons);
        })
    }, []);


    const incrementState = function() { 
        setElementState(elementState + 1);//this function increments the element state which allows us to progress through the lesson
    }

    // const lessonSectionOneContents = <LessonContent lesson={selectedLessonSection1}/>
    // // const lessonSectionOneQuestion = <LessonQuestion lesson={selectedLessonSection1}/>
    // const lessonSectionTwoContents = <LessonContent lesson={selectedLessonSection2}/>
    // // const lessonSectionTwoQuestion = <LessonQuestion lesson={selectedLessonSection2}/>
    // const lessonSectionThreeContents = <LessonContent lesson={selectedLessonSection3}/>
    // // const lessonSectionThreeQuestion = <LessonContent lesson={selectedLessonSection3}/>
    
    //map sections of selected lesson, creating an element for each with a unique ID and pushing it to the elementList

    const elementList = []

    const sectionGenerator = function(lesson) {
        lesson.sections.forEach((section, index) => {
            const contents = <LessonContent lesson={section} />
            elementList.push(contents)
        })
    }

    sectionGenerator(selectedLesson)
    
    

    return (
        <>
            <h1>BBC 5 Minute Learning Challenge</h1>
            <h2>Space</h2>
            <LessonSelector lessons={lessons} chooseLesson={chooseLesson}/>
            {elementList[elementState]}
            <button onClick={incrementState}>Next</button>
            <p>Click to see the next element</p>
        </>
        )
    
}

export default Container;