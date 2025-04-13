import { useState } from 'react'

function Bai1() {
    var [text, setText] = useState('default')
    function handleClick(){
      setText(text);
    }
    function handleChange(e){
      text = e.target.value;
    }

    return(
    <>
        <input onChange={handleChange}
        type="text"/>
        <br />
        <button onClick={handleClick}>Click</button>
        <br />
        <span>{text}</span>
    </>
    );
}

export default Bai1



