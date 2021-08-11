import React from 'react';
import './ResultsPage.css';

const ResultsPage = function ({questionScore, potentialScore, returnHome}) { // is given questionScore, potentialScore and the returnHome function to use
    return(
        <>
        <section class="results-section">
        <h3 class="score">Your results!</h3>

        {/* This results page displays the question score / and the potential score for this lesson */}
        <h4 class="score">{questionScore}/{potentialScore}</h4>
        {/* The button triggers the returnHome function that was passed down from the container - ending the lesson and resetting the app */}
        <button onClick={returnHome}>Return Home</button>
        </section>
        </>
    )
}

export default ResultsPage;

