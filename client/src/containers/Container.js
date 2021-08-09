import React, {useState, useEffect} from "react";
import Element from "../components/Element.js";
import LessonElement from "../components/LessonElement.js";
import LessonSelector  from "../components/LessonSelector.js";
import {getLessons} from "../services/LessonServices.js";

const Container = function() {

    const [elementState, setElementState] = useState(0);
    const [lessons, setLessons] = useState([]);
    const [selectedLesson, setSelectedLesson] = useState(null);

    useEffect(() => {
        getLessons()
        .then((allLessons) => {
            setLessons(allLessons);
        })
    }, []);

    const chooseLesson = (lesson_id) => {
        setSelectedLesson(lessons.filter(lesson => lesson_id === lesson._id))
    };

    const incrementState = function() {
        setElementState(elementState + 1);
    }

    const elementZero = <Element props="Hello Mate, this is the first element" />;
    const elementOne = <Element props="This is the 2nd element mate" />;
    const elementTwo = <Element props="Third element now" />;
    const elementList = []

    elementList.push(elementZero)
    elementList.push(elementOne)
    elementList.push(elementTwo)

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