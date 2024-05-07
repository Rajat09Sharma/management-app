import { useRef, useState } from 'react'
import Inputs from './Inputs'

export default function CreateProject({onSave,onCancel}) {

    const title =useRef();
    const description=useRef();
    const date=useRef();

    function handleSave(){
        onSave( 
                title.current.value,
                description.current.value,
                date.current.value
        ) 
        title.current.value="";
        description.current.value="";
        date.current.value="";
    }

    
    return (
        <section className="w-1/2 mx-auto">
            <div className="flex justify-end gap-4">
                <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button>
                <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
            </div>
            <div className="flex flex-col gap-6">
                <Inputs ref={title} name="TITLE" type="text" />
                <Inputs ref={description} name="DESCRIPTION" type="text" Input="textarea" />
                <Inputs ref={date} name="DATE" type="date" />
            </div>
        </section>
    )
}
