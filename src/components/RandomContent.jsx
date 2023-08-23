

function RandomContent({ fetchAdvice, state }) {

    return (
        <>
            <div className="app">
                <div className="card">
                    <h1 className="heading">{state}</h1>
                    <div className="button" onClick={fetchAdvice}>
                        <span>GIVE ME ADVICE!</span>
                    </div>
                </div>
            </div>
        </>
    )

}

export default RandomContent;