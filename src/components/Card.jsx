import reactimg from '../assets/react.svg'

function Card({name = "somebody", desc="some description here"}){
    return (
        <div className="drop-shadow-lg flex flex-row rounded-md m-10 w-[20%] h-[15%] bg-amber-600">
            <img src={reactimg}></img>
            <div className="flex flex-col">
                <h1>{name}</h1>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Card;