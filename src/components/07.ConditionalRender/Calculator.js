function Calculator() {
    return (
        <div>
            {true && (
                <p>A condição é verdadeira!</p>
            )}

            {false ? (
                <p>A condição é verdadeira!</p>
            ) : (
                <p>A condição é falsa!</p>
            )}
        </div>
    );
}

export default Calculator;