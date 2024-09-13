    const AppBar = ()=>{

        return <div className="shadow flex h-14 justify-between" >
                    <div className="ml-4 flex flex-col justify-center" >PayTM App</div>
            <div className="flex ">
                    <div className="flex flex-col justify-center mr-2">Hello</div>
                    <div className="flex justify-center h-12 w-12 bg-slate-200 mt-1 mr-2 rounded-full">
                        <div className="flex flex-col justify-center text-xl h-full">
                            {JSON.parse(localStorage.getItem('user')).firstname[0]}
                        </div>
                    </div>
            </div>
        </div>

    }   

export default AppBar
