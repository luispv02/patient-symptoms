import { useState } from "react";

export const SymptomsForm = ({ name, setName, addSymptom }) => {

    const [symptom, setSymptom] = useState({sintoma: '', dolor: 1})

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!symptom.sintoma) return;

        const newSymptom = {
            ...symptom,
            id: new Date().getTime()
        }
        addSymptom(newSymptom)
        setSymptom({ sintoma: '', dolor: 1 })
    }

    
    return (
            <form onSubmit={handleSubmit} className="gap-2 pt-6 text-gray-800 text-xs">
                <div className="flex flex-col items-start pb-4">
                    <label>Nombre completo</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Ingresa tu nombre" className="border border-gray-300  text-xs pl-1 outline-0 rounded text-gray-600 font-medium h-10 w-full"
                    />
                </div>

                <div className="flex items-end gap-1">
                    <div className="flex-1">
                        <label className="block text-left">Agregar Síntoma</label>
                        <input
                            type="text"
                            placeholder="Agrega tus síntomas"
                            className="w-full border border-gray-300 text-xs pl-1 outline-0 rounded text-gray-600 font-medium h-10"
                            value={symptom.sintoma}
                            onChange={(e) => setSymptom({...symptom, sintoma: e.target.value})}
                        />
                    </div>

                    {
                        symptom.sintoma.trim().length >= 1 && 
                        <div>
                            <label className="block">Nivel de dolor</label>
                            <input 
                                type="number" 
                                value={isNaN(symptom.dolor) ? "" : symptom.dolor} 
                                onChange={(e) => setSymptom({...symptom, dolor: parseInt(e.target.value)})} 
                                placeholder="Nivel de dolor" 
                                min={1} 
                                max={10} 
                                className="w-full border border-gray-300 text-xs text-center outline-0 rounded text-gray-600 font-medium h-10" 
                            />
                        </div>
                    }

                    <button type="submit" aria-label="Agregar síntoma" className={`bg-gradient-to-r from-orange-500 to-orange-400 w-10 h-10 rounded cursor-pointer text-3xl flex items-center justify-center text-white ${!symptom.sintoma || !symptom.dolor ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
                        +
                    </button>
                </div>
            </form>
        );
};