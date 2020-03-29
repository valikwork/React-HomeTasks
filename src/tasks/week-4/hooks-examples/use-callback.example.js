import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';



const heaveOperation = (count, operation) => {
    let result = 0
    while(result !== count) {
        result = operation(result)
    }
    return result;
}

function CalcComponet1({ value, onResult, count, fn }) {
   

    const startDate = Date.now();

    const resultOfHeavyOperation = useMemo(() => (heaveOperation(value, fn)), [value, fn]);

    const endDate = Date.now();

    const diff = (endDate - startDate) / 1000

    useEffect(() => {
        onResult(diff)
    }, [count])


    return (
        <div>
              Heavy processs testing... {resultOfHeavyOperation}
       </div>
    )
}


export default function UseMemoExample() {
    const [count, setCount] = useState(1);
    const interval = useRef(null);
    const [testResults, setTestResults] = useState([]);

    useEffect(() => {
        interval.current = setInterval(() =>{
            setCount(count => count + 1)
        } , 2000)
        return () => clearInterval(interval.current)
    }, [])

    const handleResult = time => setTestResults(testResults => [...testResults, { count, time }])

    const fn = useCallback(value => value + 1, []);

    return (
        <div>
            <CalcComponet1 fn={fn} onResult={handleResult} count={count} value={999999999} />
            {testResults.map(res => (
                    <li style={{ marginBottom: 20 }}>
                         Operation #{res.count}
                        <br/>
                         Time: {`${res.time} seconds`}
                    </li>
                ))}
        </div>
    )
}