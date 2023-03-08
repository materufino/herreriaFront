import { useEffect, useState } from "react"

const useLocalStorage = (key) => {

    const [value, setValue] = useState(() => {
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        } else {
            return null;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];

}

export {
    useLocalStorage
}