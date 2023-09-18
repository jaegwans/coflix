import React, { use, useEffect } from 'react';
import onPush from '@/hooks/onPush';
function Main() {
    useEffect(() => {
        onPush('/mainRaw', '/main');
    }, []);

    return <div>Loading...</div>;
}

export default Main;
