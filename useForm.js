import { useState } from "react";


//se va a enviar los valores del formulario desde la otra clase
export const useForm = (initialForm = {}) => {
    
    const [formState, setFormState] = useState(initialForm)


    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
