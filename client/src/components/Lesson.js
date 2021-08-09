import React from 'react';

const Lesson = ({lesson, title}) => {
    return(
        <option value={lesson._id}>{title}</option>
    );
};

export default Lesson;

