import React, {useState} from "react";
import Element from "../components/Element";

const Container = function() {

    const [elementState, setElementState] = useState(0);

    const incrementState = function() {
        setElementState(elementState + 1);
    }

    const elementZero = <Element props="Hello Mate, this is the first element"/>;
    const elementOne = <Element props="This is the 2nd element mate" />;
    const elementTwo = <Element props="Third element now" />;
    const elementList = []

    elementList.push(elementZero)
    elementList.push(elementOne)
    elementList.push(elementTwo)

    return (
        <>
            {elementList[elementState]}
            <button onClick={incrementState}>Next</button>
            <p>Click to see the next element</p>
        </>
        )
    
    
}

export default Container;