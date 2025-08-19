# Registro de Síntomas de Pacientes

Proyecto desarrollado con ReactJs y TailwindCSS para registrar síntomas de un paciente con un nivel de dolor. 
Permite registrar un nombre, añadir síntomas con un nivel de dolor(entre 1 y 10), editarlos y eliminarlos, se guardan los datos en el LocalStorage del navegador.


## Tecnologías Usadas
- ReactJS
- TailwindCSS

## Persistencia de datos
- Uso de LocalStorage para mentener los datos guardados despues de cerrar o recargar el navegador.

## Estructura del proyecto
- src/
    - App.jsx
    - index.css
    - main.jsx
    - components/
        - Symptoms.jsx
        - SymptomsForm.jsx
        - SymptomsList.jsx
        - SymptomsItem.jsx


## Arquitectura 
1. App.jsx
    - Componente Raiz
    - Encapsula el layout principal y renderiza el componente Symptoms
2. Symptoms.jsx
    - Contenedor principal
    - Maneja estados globales:
        - name: Nombre del usuario
        - symptomsList: arreglo de síntomas
        - msgError: Mensajes de validación
    - Lógica principal
        - addSymptom: Agregar síntoma
        - deleteSymptoms: Eliminar síntoma
        - editSymptom: Editar síntoma
        - saveSymptoms: Guardar síntomas en localStorage
3. SymptomsForm.jsx
    - Contiene el formulario con los inputs para Nombre y los síntomas
    - Inputs:
        - Nombre Completo
        - Síntoma
        - Nivel de dolor
4. SymptomsList
    - Renderiza la lista de síntomas 
    - Recorre todos los síntomas y llama al componente SymptomsItem por cada elemento.
5. SymptomsItem
    - Renderiza cada síntoma de la lista
    - Maneja la vista y la edición de síntomas
    - Ejecuta funciones para editar y eliminar síntomas


## Flujo de datos
1. Usuario
    - Ingresa su nombre
    - Ingresa un sintoma y el nivel de dolor
2. Cada sintoma agregado se enlista y se muestra con el nivel de dolor y botones para eliminar o editar
3. Desde Symptoms se controlan las acciones:
    - Agregar: SymptomsForm llama a addSymptom
    - Eliminar/Editar: SymptomsItem llama a deleteSymptoms o editSymptom
4. Los datos persisten en LocalStorage cada vez que se editan, eliminan o guardan


## Estilos
- TailwindCSS para estilos, maquetación y diseño responsivo, mediante clases y breakpoints