import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    const onNewCategory = ( newCategory ) => {
        if( categories.includes( newCategory ) ) return;
        setCategories( ( cat ) => [ newCategory, ...cat ] );
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewValue={ onNewCategory } />

            {
                categories.map( ( category ) => (
                    <GifGrid category={ category } key={ category }  />
                ) )
            }

        </>
    )
}
