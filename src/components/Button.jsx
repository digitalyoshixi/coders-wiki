
function Button(props){
    return (
        <button onClick={() => {console.log("i was clicked")}}> {props.content} </button>
    )

}

export default Button;