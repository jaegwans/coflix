import { useState } from 'react';

function useLocalStorage() {
    const [isSet, setIsSet] = useState(false);

    function setLocalStorage(id: string, data: any) {
        localStorage.setItem(id, JSON.stringify(data));
        setIsSet(true);
    }
    function getLocalStorage(id: string) {
        const data = localStorage.getItem(id);
        if (data) {
            return JSON.parse(data);
        }
        return null;
    }
    return { getLocalStorage, setLocalStorage, isSet };
}

export default useLocalStorage;
