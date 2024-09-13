import { useNavigate } from "react-router-dom";


const User= ({user})=>{

    const navigate = useNavigate();

    return <div className="flex justify-between px-1">
        <div className="flex">
        <div className="h-14 w-14 flex flex-col justify-center ">
            <div className="h-12 w-12 bg-slate-200 flex justify-center rounded-full">
                <div className="flex flex-col justify-center font-bold text-xl ">
                    U
                </div>
            </div>
        </div>
        <div className="px-1 flex flex-col justify-center">
            {user.firstname} {user.lastname}
        </div>
        </div>

        <div className="flex flex-col justify-center ">
            <button className="bg-zinc-700 p-1 px-2 rounded text-slate-50" onClick={()=>{
                navigate('/send',{state:user})
            }} > Send Money </button>
        </div>
    </div>
}

export default User;