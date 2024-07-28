import { useState } from "react"
import Form from "./Form"

function Header(){

    const [isOpen , setIsOpen] = useState(false)

    //Handle open Button
    const HandlwOpenBtn = ()=>{
        setIsOpen(true)
    }
    // Handle Close Button
    const HandleCloseBtn = ()=>{
        setIsOpen(false)
    }
    return <div>

    <div className="flex justify-between px-10 py-4  bg-purple-500">
        <h1 className="text-white text-5xl">nooty</h1>
        <button onClick={HandlwOpenBtn} className="bg-orange-500 text-3xl px-6   rounded py-2 ">Add note </button>
    </div>
    {
        isOpen == true ? <Form  closeBtn={HandleCloseBtn}/> : ""
    }

    </div>
}
export default Header