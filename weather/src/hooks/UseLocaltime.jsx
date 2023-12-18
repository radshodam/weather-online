import React, { useEffect, useState } from 'react';
const useLocalTime = (timestamp, timezone) => {

    const [localTime, setLocalTime] = useState('');

    useEffect(() => {
        const date = new Date(timestamp * 1000);
        const localTimeString = date.toLocaleTimeString([], { timeZone: timezone });
        setLocalTime(localTimeString);
    }, [timestamp, timezone]);

    return localTime;
};



const LocalTime = ({ timestamp, timezone }) => {
    const localTime = useLocalTime(timestamp, timezone);

    return <div className='flex justify-start items-end text-sm font-extralight text-gray-600'>
        <p className='px-2'>{`Last update:`}</p>
        <p>{localTime}</p>
    </div>
};

export default LocalTime;
