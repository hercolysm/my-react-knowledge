import { useState } from 'react';

function Form() {

    const [name, setName] = useState("(vazio)");

    return (
        <form>
            <input onChange={(e) => setName(e.target.value)} />
            <p>Preview: {name}</p>
        </form>
    );
}

export default Form;