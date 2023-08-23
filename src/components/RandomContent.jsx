

function RandomContent({ fetchAdvice, advice }) {

    return (
        <>
            <div className="container m-5 p-5 border rounded">
                <h3 className="text-secondary mb-5 display-6">{advice}</h3>
                <button className="btn btn-danger" onClick={fetchAdvice}>Random Advice</button>
            </div>
        </>
    )

}

export default RandomContent;