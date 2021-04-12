import { useEffect, useState } from "react";

export function useForm() {

    const [form, setForm] = useState(false);

    function handleInput(e) {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    return { form, setForm, handleInput };
}