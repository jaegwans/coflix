import exp from 'constants';
import React, { useState, useEffect } from 'react';

function useDelay(delay: number) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, delay);
    }, [delay]);

    return [show];
}

export default useDelay;
