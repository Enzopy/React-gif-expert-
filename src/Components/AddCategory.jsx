import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    
    const [InputValue, setInputValue] = useState('');

    const onInputChange = (e) =>{
        setInputValue(e.target.value);

    }

    const onSubmit = (e) => {
        e.preventDefault(); //Para evitar que haga refresh el form
        // console.log(InputValue);

        if(InputValue.trim().length <= 1) return; //con esto nos evitamos que los espacios en blanco cuenten 

        // setCategories((categories) => [InputValue, ...categories]); //el categories en parentesis es el callback del otro jsx si o si hay que llamar asi 
        setInputValue('');//para que lo de arriba se limpie 
        onNewCategory(InputValue.trim());//emitir un evento del padre
    }
    
    return (
       
        <form onSubmit={onSubmit}>

            <input 
                type="text" 
                placeholder="Buscar Gifs" 
                value={InputValue}
                // onChange= {(e) => onInputChange(e)} 
                onChange= {onInputChange} //Estoy mandando una función cuyo argumento es el argumento que estoy mandandole a la función que quiero ejecutar entonces puedo obviar poner los eventos, lo mismo con onsubmit
        
            />

        </form>
    )
}
