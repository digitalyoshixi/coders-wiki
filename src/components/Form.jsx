import {useState, useEffect} from 'react'


function Form(){
    const [inputvalue, setInputValue] = useState("");
    useEffect( () => {console.log("changed")} , [inputvalue])
    return (
        <form>
            <input onChange={(e) => setInputValue(e.target.value)} value={inputvalue}></input>
        </form>
    )
}

export default Form;