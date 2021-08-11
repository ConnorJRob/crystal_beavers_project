import React from 'react';

const ResultsPage = function ({questionScore, potentialScore, returnHome}) {
    return(
        <>
        <h3>Your results!</h3>

        <h4>{questionScore}/{potentialScore}</h4>
        <button onClick={returnHome}>Return Home</button>
        </>
    )
}

export default ResultsPage;

