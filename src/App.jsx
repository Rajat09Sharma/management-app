import { useState } from "react";
import CreateProject from "./components/CreateProject";
import Projects from "./components/Projects";

function App() {
  const [isProjectCreated, setProjectCreated] = useState(false);
  const [data, setData] = useState([]);
  const [showProject, setShowProject] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);

  // function handleCreateProject() {
  //   setProjectCreated(true);
  // }
  function handleCancel() {
    setProjectCreated(false);
  }
  function handleSave(title, description, date) {
    setData(prevs => {
      return [{ title: title, description: description, date: date }, ...prevs];
    })
    setShowProject(true);
    setProjectCreated(true);
  }
  function handleAddProject() {
    setShowProject(false);
    setProjectCreated(true);
    setProjectIndex(0);
  }

  function handleDeleteData(selectedIndex) {
    setData(prevs => {
      // var upadtedData=prevs.splice(index,index);
      var updatedData = prevs.filter((el, index) => index !== selectedIndex);
      return [...updatedData]
    })
    setProjectCreated(false);
    setShowProject(false);
    // data.splice(index,index);
  }
  function handleIndividualProject(index) {
    setProjectIndex(index);
    setProjectCreated(true);
    setShowProject(true);
  }
  return (
    <>
      <section className="pt-20">
        <div className="inline-block w-1/4 bg-stone-800 rounded-tr-2xl float-left project-bg pt-16 pb-32">
          <div className="flex flex-col px-4">
            <h1 className="font-bold text-white">Your Porojects</h1>
            <div className="flex justify-content-start">
              <button onClick={handleAddProject} className="my-9 px-4 py-2 add-btn md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 mb-4">+ Add Poroject</button>

            </div>
            {data.map((el, index) => {
              return <button onClick={() => handleIndividualProject(index)} className="text-left py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 m-2 text-center" key={index}>{el.title}</button>
            })}
          </div>
        </div>
        <div className="inline-block w-3/4">
          {!isProjectCreated ? <div className=" flex flex-col justify-content-center items-center p-16">
            <img className="w-16 h-16 object-contain mx-auto mb-4" src="logo.png" alt="Carborad with pen and paper image" />
            <h1 className="mb-4">No Project Selected</h1>
            <p className="mb-4">Select a project or get started with a new one.</p>
            <button onClick={handleAddProject} type="button" className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 mb-4">Create new project</button>
          </div> :
            !showProject ?
              <CreateProject onSave={handleSave} onCancel={handleCancel} /> : <Projects data={data} index={projectIndex} onDelete={handleDeleteData} />}
        </div>
      </section>
    </>
  );
}

export default App;
