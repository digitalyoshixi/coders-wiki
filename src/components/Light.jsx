
function Light({dark, setDark}){
    return (
        <button className="w-10 h-10 bg-emerald-500" onClick={() => setDark(!dark)}> Toggle light</button>
    )
}

export default Light;