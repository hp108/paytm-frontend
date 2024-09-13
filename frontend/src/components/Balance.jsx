const Balance=({value})=>{
    return <div className="flex "  >
        <div className="font-bold ">
            You Balance :- 
        </div>
        <div className="ml-2 text-md">
            Rs {Math.round(value)}
        </div>
    </div>

}

export default Balance;