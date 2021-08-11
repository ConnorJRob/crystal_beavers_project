import React, {useState, useEffect} from "react";
import LessonSelector  from "../components/LessonSelector.js";
import LessonContent from "../components/LessonContent.js";
import QuestionContainer from "../components/questions/QuestionContainer.js";
import {getLessons} from "../services/LessonServices.js";
import ResultsPage from "../components/ResultsPage.js";

const Container = function() {

    const [elementState, setElementState] = useState(0); //sets up a state that tracks lesson stages - modifying this allows us to iterate through them
    const [lessons, setLessons] = useState([]); // this state stores the data from our api (lessons collection)
    const [selectedLesson, setSelectedLesson] = useState(null); // this state is used in conjunction with the LessonSelector to define the currently selected lesson
    const [questionScore, setQuestionScore] = useState(0);
    const [potentialScore, setPotentialScore] = useState(0);

    useEffect(() => { // this runs when the page loads
        getLessons() // it calls the get Lessons function from LessonServices
        .then((allLessons) => { // the data returned from getLessons is then use to setLessons to that array of data
            setLessons(allLessons);
        })
    }, []);

    const chooseLesson = (lesson_id) => { // this function takes the lesson_id from the lessons selector when changed 
        setSelectedLesson(lessons.filter(lesson => lesson_id === lesson._id)) // the filter function then returns ONLY the lesson with a matching _id from the lessons state - which becomes the selectedLesson
    };

    const advanceLesson = function() { 
        setElementState(elementState + 1);//this function increments the element state which allows us to progress through the lesson
    };

    const returnHome = function() {
        setSelectedLesson(null)
        setElementState(0)
        setQuestionScore(0)
        setPotentialScore(0)
    }

    const questionSubmit = function (answerValue) {
        setPotentialScore(potentialScore + 1)
        setQuestionScore(questionScore + parseInt(answerValue));
        advanceLesson();
    }

    const elementList = []

    const sectionGenerator = function() {

        if (selectedLesson) {
            selectedLesson[0].sections
                .forEach((section) => {
                    const content = <LessonContent contents={section.contents} advanceLesson={advanceLesson}/>
                    elementList.push(content);

                    section.questions.forEach(question => {
                        const questionToAdd = <QuestionContainer question={question} questionSubmit={questionSubmit}/>
                        elementList.push(questionToAdd);    
                        //for each question add its answer values together and store in state 
                    })
                })
                const results = <ResultsPage questionScore={questionScore} potentialScore={potentialScore} returnHome={returnHome}/>
                elementList.push(results);
            };
        };
        
    //Changes made:
    //added QuestionContainer
    //refactored LessonContent props and subsequent references
    //SUGGESTION: Add a "summary" page after all the sections to display the score?
    //SUGGESTION: This could be expanded later on to display which questions were right and wrong

    // Add to sectionGenerator:
    // Results page inserted at last index of elementList
    // Work out the maximum possible score

    sectionGenerator();
    
    let selectorDisplay = null;
    if (selectedLesson === null) {
        selectorDisplay = <LessonSelector lessons={lessons} chooseLesson={chooseLesson} selectedLesson={selectedLesson} key={selectedLesson}/>
    } else {
        selectorDisplay = <h2>{selectedLesson[0].lesson_title}</h2>
    }

    return (
        <>
            <h1>BBC 5 Minute Learning Challenge</h1>
            <h2>Space</h2>
            {selectorDisplay}
            {elementList[elementState]}
        </>
        )
    
}

export default Container;