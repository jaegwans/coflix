import { useEffect, useState } from 'react';

function useCopy(text: string) {
    const [copied, setCopied] = useState(false);
    const [err, seterr] = useState(null);

    setTimeout(() => {
        setCopied(false);
    }, 6000);

    function getCopy() {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                console.log('Copying to clipboard was successful!');
                setCopied(true);
            })
            .catch((err) => {
                console.error('Error copying text: ', err);
                seterr(err);
            });
    }
    return { getCopy, copied, err };
}

export default useCopy;
