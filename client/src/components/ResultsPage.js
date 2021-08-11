import React from 'react';

const ResultsPage = function ({questionScore, potentialScore}) {
    return(
        <>
        <h3>Your results!</h3>

        <h4>{questionScore}/{potentialScore}</h4>
        </>
    )
}

export default ResultsPage;

