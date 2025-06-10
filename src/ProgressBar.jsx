

function ProgressBar() {

    let ImgData = ["html-5.png", "css-3.png", "js.png", "react.png", "redux.png", "tailwind.png", "node.png", "express.png", "mongodb-svgrepo-com.svg", "java.png", "python.png", "flask.png", "bootstarp.jpg"]


    return (
        <>
            <div className=" bg-black p-4 text-white pb-10" >
                <div className=" flex justify-center items-center">
                    <h2 className=" text-5xl max-[500px]:max-lg:text-4xl border-b-2 py-2 border-white">Skills</h2>
                </div>
                <div className="flex justify-center items-center flex-wrap gap-4 pt-10">
                    {ImgData.map((data, index) => <div key={index} className=" w-28 max-[500px]:max-lg:w-12 mx-10 max-[500px]:max-lg:mx-2 mt-5 hover:scale-110  hover:shadow-orange-500/50 transition-all  cursor-pointer  "><img className=" rounded-md" src={data} /></div>)}
                </div>
            </div >
        </>
    )
}

export default ProgressBar