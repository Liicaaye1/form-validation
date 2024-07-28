function Form({closeBtn}){
    return <div className="bg-black bg-opacity-85 h-screen absolute w-full top-0">

     <div className="flex justify-center pt-20 " >
        <form className="bg-white p-3 w-[400px] h-[400px]">
        <i onClick={closeBtn} class="fa-solid fa-x text-3xl"></i>
        <br />
            <input className="w-[360px]  h-[40px] my-3  " type="text"  placeholder="Enter title"/>
            <textarea className="border-2 border-black" rows={8} cols={46}></textarea>
            <button className="bg-black text-white px-[150px] my-5 py-2 text-3xl rounded">save</button>
        </form>
    
        </div>
    </div>

}

export default Form