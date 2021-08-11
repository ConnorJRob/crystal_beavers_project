import React from 'react';

const Lesson = ({lesson, title, selected}) => {
    return(
        <option selected={selected} value={lesson._id}>{title}</option>
    );
};

export default Lesson;

