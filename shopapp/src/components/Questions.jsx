import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Questions() {
    let [questions, setQuestions] = useState([]);
    useEffect(() => {
        axios.get("https://opentdb.com/api.php?amount=10")
            .then(response => {
                setQuestions(response.data.results)
            })
    }, []);
    
    return (
        <div>
            {
                questions && questions.map((q, index) => <div key={index}> {q.question} </div>)
            }
        </div>
    )
}
