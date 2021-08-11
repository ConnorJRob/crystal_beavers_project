import React from 'react';
import './ResultsPage.css';

const ResultsPage = function ({questionScore, potentialScore, returnHome}) { // is given questionScore, potentialScore and the returnHome function to use
    return(
        <>
        <h3>Your results!</h3>

        {/* This results page displays the question score / and the potential score for this lesson */}
        <h4>{questionScore}/{potentialScore}</h4>
        {/* The button triggers the returnHome function that was passed down from the container - ending the lesson and resetting the app */}
        <button onClick={returnHome}>Return Home</button>
        </>
    )
}

export default ResultsPage;

