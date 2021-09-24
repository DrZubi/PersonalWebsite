import React, {useState, useEffect } from 'react';
const Age = () => {
    const [age,setAge] = useState();

    const tick = () => {
        const divisor = 1000 * 60 * 60 * 24 * 365.2321897;
        const birthTime = new Date('1998-09-09T09:24:00');
        setAge(((Date.now() - birthTime) / divisor).toFixed(11));
    };

    useEffect(() => {
        const timer = setInterval(() => tick(), 25);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return <>{age}</>;
};
