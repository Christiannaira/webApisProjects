import { useState, useEffect } from "react";
import axios from "axios";

import RandomContent from "../components/RandomContent";

function Random() {

    const [state, setState] = useState('');

    useEffect(() => {
        fetchAdvice();
    }, [])

    const fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {

                const advice = response.data.slip.advice;

                setState(advice);
            })
            .catch((error) => {
                console.log(error);
            })
    }


    return (
        <>

            <RandomContent fetchAdvice={fetchAdvice} state={state} />

        </>
    )

}

export default Random;