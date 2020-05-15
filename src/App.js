import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
    const [advice,
        setAdvice] = useState('');

    const url = 'https://api.adviceslip.com/advice'

    const fetchAdvice = async() => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setAdvice(data.slip.advice);
        } catch (err) {
            console.warn(err);
        }
    }

    useEffect(() => {
        fetchAdvice();
    }, []);

    return (
        <div className="app">
            <div className="card">
                <h1 className="card__content">{advice}</h1>
                <button onClick={fetchAdvice} className="btn"><span>ANOTHER ADVICE</span></button>
            </div>
        </div>
    );
}

export default App;
