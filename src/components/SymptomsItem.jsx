import { useState } from "react";

export const SymptomsItem = ({ sintoma, deleteSymptoms, editSymptom }) => {

    const [edit, setEdit] = useState(false)
    const [localSymptom, setLocalSymptom] = useState(sintoma)

    const handleChange = (e) => {

        const { name, value } = e.target;

        const newData = {
            ...localSymptom,
            [name]: name === 'dolor' ? parseInt(value) : value
        }
        setLocalSymptom(newData)
    } 

    const cancelEdit = () => {
        setEdit(false)
        setLocalSymptom(sintoma)

    }

    const saveEdit = () => {
        editSymptom(localSymptom)
        setEdit(false)
    }


    const isValidInputNumber = () => {
        const { sintoma, dolor } = localSymptom;
        if(!sintoma || isNaN(dolor) || dolor < 1 || dolor > 10 ) return true
    }



    return (
        <li className="border border-gray-200 rounded-md mb-3 p-3 shadow-lg ">

            {
                edit 
                ? (
                    <div className="flex items-center w-full gap-1 md:gap-8">
                        <input type="text" value={localSymptom.sintoma} name="sintoma" onChange={handleChange} className="text-xs border border-gray-300 text-gray-600 rounded p-1 outline-0 w-full"/>

                        <div className="flex items-center gap-1">
                            <input type="number" value={isNaN(localSymptom.dolor) ? "" : localSymptom.dolor} min={1} max={10}  name="dolor" className="text-center border text-xs border-gray-300 text-gray-600 rounded p-1 outline-0" onChange={handleChange}/>

                            <button className={`cursor-pointer w-6 h-6 text-xs bg-green-600 rounded ${isValidInputNumber() ? 'opacity-50 pointer-events-none' : ''}`} onClick={saveEdit}>💾</button>
                            <button className="cursor-pointer w-6 h-6 text-xs bg-orange-300 rounded" onClick={cancelEdit}>❌</button>
                        </div>
                    </div>
                )

                : (
                    <div className="flex items-center justify-between w-full">
                        <span className="text-xs text-left text-gray-700">{sintoma.sintoma}</span>
                        
                        <div className="flex gap-1">
                            <div className="text-sm mr-2">{sintoma.dolor}</div>

                            <button className="cursor-pointer w-6 h-6 text-xs bg-orange-300 rounded" onClick={() => setEdit(true)}>✏️</button>
                            <button className="cursor-pointer w-6 h-6 text-xs bg-red-400 rounded" onClick={() => deleteSymptoms(sintoma.id)}>🗑️</button> 
                        </div>
                    </div>
                )
            }
        </li>
    );
};