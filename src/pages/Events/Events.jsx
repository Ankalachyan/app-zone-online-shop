import { useState } from "react";

function Events() {

    const [text, setText] = useState('');

    // const Clicks = ()=>{
    //     alert('j');
    // };

    const Changes = (evt)=>{
        setText(evt.target.value); 
    };

    return(
        <>
        {/* <button onClick={Clicks}>Click me</button> */}

        <input type="text" onChange={Changes}  />


        <p>
            {text}
        </p>
        </>
    )
}

export default Events;