import { SymptomsItem } from "./SymptomsItem";

export const SymptomsList = ({ symptoms, deleteSymptoms, editSymptom }) => {

    return (
        <div className="max-h-[44vh] overflow-auto mt-4">
            <div className="mb-3 text-gray-700 pt-6">Sintomas</div>
            <ul>
                {
                    symptoms.map(symptom => (
                        <SymptomsItem key={symptom.id} sintoma={symptom} deleteSymptoms={deleteSymptoms} editSymptom={editSymptom}/>
                    ))
                }
            </ul>
        </div>
        
    );
};