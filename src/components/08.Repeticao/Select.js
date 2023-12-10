function Select() {

    let options = ["Opção 01", "Opção 02", "Opção 03"];
    options = [];

    return (
        <>
            {options.length > 0 ? (
                <select>
                    {options.map((option, index) => (
                        <option key={index}>{option}</option>
                        ))}
                </select>
            ) : (
                <p>Nenhuma opção disponível</p>
            )}
        </>
    )
}

export default Select