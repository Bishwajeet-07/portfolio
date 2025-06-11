

function Home() {

    return (
        <>
            <div className=" flex justify-between bg-black relative">
                <div className=" bg-black">
                    <img className=" h-[100vh]" src="codingLines.webp" alt="" />
                </div>
                <div className=" text-white flex flex-col mt-20 max-[1000px]:mt-6 items-center">
                    <h1 className=" text-white mb-10 text-2xl font-thin">WELCOME'S YOU</h1>
                    <img
                        className=" h-52 w-52 rounded-[50%] max-[1000px]:h-28 max-[1000px]:w-28 border-4 border-orange-600 p-2"
                        src="PIC.jpg"
                        alt="dev-img"
                    />
                    <h1 className=" text-3xl mt-2 max-sm:text-xl text-center">
                        I'm
                        <span className=" text-orange-600"> Full Stack Developer </span>
                    </h1>
                    <h2 className=" text-6xl mt-2 max-sm:text-xl text-center">BISHWAJEET KUMAR</h2>
                    <p className=" mx-40 mt-4 text-center max-[1000px]:mx-2 text-zinc-500">
                        I'm a MERN stack developer skilled in MongoDB, Express, React, and
                        Node.js. I build scalable, user-friendly web apps and am always
                        eager to learn and create innovative solutions.
                    </p>
                </div>
                <div className=" bg-black">
                    <img
                        className=" h-[100vh] origin-center rotate-180"
                        src="codingLines.webp"
                        alt=""
                    />
                </div>

                <div className=" absolute max-w-[50%] bottom-10 max-sm:bottom-20 text-white   translate-x-2/3 max-sm:translate-x-2/4 ">
                    <div className="flex  items-center justify-center max-[1000px]:flex-col">
                        <div className=" flex max-sm:mb-2">
                            <div className="  bg-slate-900 py-2 px-4 rounded-s-xl flex justify-center items-center">
                                <img className=" h-[20px] mr-2" src="html-5.png" alt="" />
                                <p>HTML</p>
                            </div>
                            <div className="  bg-slate-900 py-1 px-4 flex justify-center items-center ">
                                <img className=" h-[20px] mr-2" src="css-3.png" alt="" />
                                <p>CSS</p>
                            </div>
                            <div className="  bg-slate-900 py-1 px-4 flex justify-center items-center max-sm:rounded-e-xl ">
                                <img className=" h-[20px] mr-2" src="js.png" alt="" />
                                <p>JavaScript</p>
                            </div>
                        </div>

                        <div className=" flex">
                            <div className="  bg-slate-900 py-2 px-4 flex justify-center items-center max-sm:rounded-s-xl ">
                                <img className=" h-[20px] mr-2" src="react.png" alt="" />
                                <p>ReactJs</p>
                            </div>
                            <div className="  bg-slate-900 py-1 px-4 flex justify-center items-center ">
                                <img className=" h-[20px] mr-2" src="node.png" alt="" />
                                <p>NodeJs</p>
                            </div>
                            <div className="  bg-slate-900 py-1 px-4 rounded-e-xl flex justify-center items-center ">
                                <img
                                    className=" h-[20px] mr-2"
                                    src="mongodb-svgrepo-com.svg"
                                    alt=""
                                />
                                <p>MongoDB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home;