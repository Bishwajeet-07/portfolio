import { ProjectItems } from "../utils/ProjectData";

function ProjectCard() {
  return (
    <>
      <div className=" bg-zinc-950 text-white pb-8 pt-8">
        <div className=" flex justify-center items-center">
          <h2 className=" text-5xl max-[500px]:max-lg:text-4xl  border-b-2 py-2 border-white">Projects</h2>
        </div>
        <div className=" flex flex-wrap justify-center items-center">
          {ProjectItems.map((projectItem, index) => (
            <div key={index} className=" mx-2 max-w-[450px]  bg-stone-950 mt-10 rounded-md">
              <h3 className=" h-36 flex justify-center items-center p-4 bg-black text-2xl font-mono font-extrabold">
                {projectItem.name}
              </h3>
              <p className=" p-2 text-slate-400">
                {projectItem.Decription}
              </p>
              <div className=" flex justify-between items-center my-2 p-2">
                <div className=" flex">

                  {projectItem.images.map(img => (<img className=" h-10 rounded-md mr-1" key={img} src={img} alt={img} />))}


                </div>
                <div>

                  <a className="  px-8 rounded-md py-2 bg-slate-700 hover:bg-orange-600" target="_blank" href={projectItem.link}>Visit..</a>
                </div>
              </div>
            </div>
          ))}

          {/* <div className="   mx-2 bg-stone-950 mt-10 rounded-md">
            <h3 className=" w-full h-36 flex justify-center items-center p-4 bg-black text-2xl font-mono font-extrabold">
              Know the Countries
            </h3>
            <p className=" p-2 text-slate-400">
              Here, we get so many details about each country, like its borders,
              languages, currency, population, region, sub-region, Capital,
              native name, domain, etc.
            </p>

            <div className=" flex justify-between items-center my-2 p-2">
              <div className=" flex">
                <img className=" h-10" src="html-5.png" alt="html" />

                <img className=" h-10" src="css-3.png" alt="css" />
                <img className=" h-10 " src="js.png" alt="js" />
              </div>
              <div>
                <button className=" bg-orange-600 px-8 rounded-md py-2 hover:bg-slate-700">
                  Visit
                </button>
              </div>
            </div>
          </div>
          <div className=" mx-2  bg-stone-950 mt-10 rounded-md">
            <h3 className=" w-full h-36 flex justify-center items-center p-4 bg-black text-2xl font-mono font-extrabold">
              Marathon Race Planner
            </h3>
            <p className=" p-2 text-slate-400">
              Developed a customizable marathon training plan generator using
              React.js and Redux for state management, featuring an intuitive UI
              built with Tailwind CSS:
            </p>

            <div className=" flex justify-between items-center my-2 p-2">
              <div className=" flex">
                <img className=" h-10" src="html-5.png" alt="html" />
                <img
                  className=" h-10 rounded-md"
                  src="tailwind.png"
                  alt="css"
                />
                <img className=" h-10" src="science.png" alt="react" />
                <img className=" h-10 rounded-lg" src="redux.png" alt="redux" />
              </div>
              <div>
                <button className=" bg-orange-600 px-8 rounded-md py-2 hover:bg-slate-700">
                  Visit
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
