import { useEffect, useState } from "react";
import { SymptomsForm } from "./SymptomsForm";
import { SymptomsList } from "./SymptomsList";

export const Symptoms = () => {

  const [msgError, setMsgError] = useState('')
  const [name, setName] = useState('')
  const [symptomsList, setSymptomsList] = useState([]);

  const addSymptom = (newSymptoms) => {
    setSymptomsList([...symptomsList, newSymptoms])
  }

  const deleteSymptoms = (id) => {
    const updatedSymptoms = symptomsList.filter(symptoms => symptoms.id !== id);
    setSymptomsList(updatedSymptoms)
  }

  const editSymptom = (newData) => {
    const sintomaActualizado = symptomsList.map(value => value.id === newData.id ? { ...newData } : value)
    setSymptomsList(sintomaActualizado)
  }

  useEffect(() => {
    const storedData = getLocalStorageData()
    if(storedData){
      storedData.name && setName(storedData.name);
      setSymptomsList(storedData.symptomsList);
    }
  }, []);

  const getLocalStorageData = () => {
    const storedData = localStorage.getItem("symptomsData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      return parsedData;
    }
  }

  const saveSymptoms = () => {
    const storedData = getLocalStorageData()
    if(name.trim().length === 0) return showError('Debes agregar un nombre')
    if(symptomsList.length === 0){
      if(storedData?.symptomsList.length){
        localStorage.removeItem('symptomsData')
        setName('');  
        alert('Datos eliminados')
        return
      }else{
        return showError('No hay síntomas agregados')
      }
    }
    
    const symptomsData = {
      name,
      symptomsList
    }

    localStorage.setItem("symptomsData", JSON.stringify(symptomsData))
    setMsgError('')
    alert("Datos Guardados")
  }

  const showError = (msg) => {
    setMsgError(msg)
    setTimeout(() => setMsgError(''), 3000)
  }

  return (
    <div className="flex justify-center items-start">
        <div className="bg-white w-full max-w-2xl text-center rounded-xl py-6 px-3 md:p-10">
            <h2 className="text-gray-800 text-xl font-semibold ">Registro de síntomas</h2>
            <p className="text-sm text-gray-600 my-4">Ingresa tu nombre, escribe tus síntomas y asigna un nivel de dolor entre 1 (leve) y 10 (muy intenso).</p>

            <div>
                <SymptomsForm name={name} setName={setName} addSymptom={addSymptom} />

                {
                  symptomsList.length 
                  ? <SymptomsList symptoms={symptomsList} deleteSymptoms={deleteSymptoms} editSymptom={editSymptom} /> 
                  : <div className="text-sm mt-12 text-gray-800">Aun no se han agregado sintomas</div>
                }

                <button 
                  className={`border border-amber-400 bg-amber-300 rounded py-2 px-4 cursor-pointer font-bold mt-5`} 
                  onClick={saveSymptoms}>
                    Guardar
                </button>

                {
                  msgError && <div className="mt-6 text-sm text-red-400">{msgError}</div> 
                }
            </div>
        </div>
    </div>
  );
};