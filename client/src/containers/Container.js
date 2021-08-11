import React, {useState, useEffect} from "react";
import LessonSelector  from "../components/LessonSelector.js";
import LessonContent from "../components/LessonContent.js";
import QuestionContainer from "../components/questions/QuestionContainer.js";
import {getLessons} from "../services/LessonServices.js";
import ResultsPage from "../components/ResultsPage.js";
import './Container.css';

const Container = function() {

    const [elementState, setElementState] = useState(0); //sets up a state that tracks lesson stages - modifying this allows us to iterate through them
    const [lessons, setLessons] = useState([]); // this state stores the data from our api (lessons collection)
    const [selectedLesson, setSelectedLesson] = useState(null); // this state is used in conjunction with the LessonSelector to define the currently selected lesson
    const [questionScore, setQuestionScore] = useState(0); // this state is used to keep track of the amount of right answers selected by the user throught a lesson
    const [potentialScore, setPotentialScore] = useState(0); // this state is used to keep track of the total score possible based on the number of questions

    useEffect(() => { // this runs when the page loads - it does this because of the ,[] at the end of this function
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

    const returnHome = function() { // this function is run at the end of the lesson to essentially reset all states and take the user back to the starting point
        setSelectedLesson(null)
        setElementState(0)
        setQuestionScore(0)
        setPotentialScore(0)
    };

    const questionSubmit = function (answerValue) { 
        setPotentialScore(potentialScore + 1)// function increase potential score by 1 for every question submitted as part of a lesson (right OR wrong)
        setQuestionScore(questionScore + parseInt(answerValue));// function also increase actual score by 1 for every correct answer submitted (i.e has a 1 value)
        advanceLesson(); // triggers the advance lesson function defined above
    };

    const elementList = []; // this array houses the lesson content/questioncontainercomponents in the order they stored in the API, the results page is added at the end

    const sectionGenerator = function() {

        if (selectedLesson) { //when a lesson is selected, this function will:
            selectedLesson[0].sections 
                .forEach((section) => {//for each section, generate a <LessonContent /> component
                    const content = <LessonContent contents={section.contents} advanceLesson={advanceLesson}/>
                    elementList.push(content);
                    
                    section.questions.forEach(question => { // for each question in the section.questions[array] generate a <QuestionContainer /> component with the question object properties
                        const questionToAdd = <QuestionContainer question={question} questionSubmit={questionSubmit}/>
                        elementList.push(questionToAdd); //this component is added to the list of elements
                    })// this ensures that the elements are stored in the correct order so they can be accessed by [index]
                })
                const results = <ResultsPage questionScore={questionScore} potentialScore={potentialScore} returnHome={returnHome}/>
                elementList.push(results); //finally, the <ResultsPage /> component is added as the last item in the array - this is executed after the forEach() statements are completed
            };
        };
        
    sectionGenerator();  //this calls the function to generate all required elements and populate the elementList
    
    let selectorDisplay = null;  //selectorDisplay starts as null
    if (selectedLesson === null) { // if seelected lesson is null, then create the lesson selector component, which is what will be displayed as selectorDisplay
        selectorDisplay = <LessonSelector lessons={lessons} chooseLesson={chooseLesson} selectedLesson={selectedLesson} key={selectedLesson}/>
    } else { //if there is a currently selected lesson, then display the lesson_title of the selected lesson as an H2 tag
        selectorDisplay = <h2>{selectedLesson[0].lesson_title}</h2>
    }

    return (
        <>  <div id="page-header"><h1>BBC 5-Minute Learning Challenge</h1></div>
            <h2 id="page-subheader">Space</h2>
            {selectorDisplay}
            {elementList[elementState]}
        </>
        )
    
}

export default Container;