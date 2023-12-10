function Form() {

    function alertClick() {
        alert("Clicou");
    }

    function alertChange() {
        alert("O valor do input foi alterado");
    }

    function customSubmit(e) {
        e.preventDefault();
        alert("Submit nativo cancelado. Enviando dados de outra forma...");
    }

    return (
        <form onSubmit={customSubmit}>
            <input type="text" onChange={alertChange} placeholder="onChange" />
            <input type="button" onClick={alertClick} value="onClick" />
            <input type="submit" value="onSubmit" />
        </form>
    );
}

export default Form;