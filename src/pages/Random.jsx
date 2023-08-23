import { useState, useEffect } from "react";
import RandomContent from "../components/RandomContent";
import axios from "axios";

function Random() {

    const [advice, setAdvice] = useState('');

    useEffect(() => {
        fetchAdvice();
    }, [])

    const fetchAdvice = () => {

        axios.get('https://api.adviceslip.com/advice')
            .then(response => {

                const data = response.data.slip.advice;

                setAdvice(data);

            }).then((error) => {
                console.log(error);
            })


    }



    return (
        <>
            <section className="hero" id="hero" >

                <RandomContent fetchAdvice={fetchAdvice} advice={advice} />

            </section>
        </>
    )

}

export default Random;