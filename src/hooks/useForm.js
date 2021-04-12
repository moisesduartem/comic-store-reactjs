import { useEffect, useState } from "react";

export function useForm({ initialState = {}, log = false }) {

    const [form, setForm] = useState(initialState);

    useEffect(() => {
        if (!!log)
            console.log(form);
    }, [form]);

    function handleInput(e) {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    return { form, setForm, handleInput };
}