import { useState } from "react";
import { AddCategory, GifGrid } from "./Components";


export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['One Punch Man']);

    const onAddCategory = (NewCategory) =>{
        // categories.push('Valorant'); //mejor no usar push en react
        //Si queres modifiicar las categorias usar setCategories

        if(categories.includes(NewCategory) ) return; //si la categoria ya existe que no haga nada

        setCategories([NewCategory, ...categories]);// pero si no existe lo va a insertar  
        

    }
    
    return (
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
            // setCategories= {setCategories}

            onNewCategory= {(e) => onAddCategory(e)}
            
            />

            {/* Listado de Gifs */}
            
        
            {
                categories.map((category) =>

                    <GifGrid
                        key={category}
                        category={category}
                    
                    />
                    
                )
            }
            
           
        </>
    )
}
