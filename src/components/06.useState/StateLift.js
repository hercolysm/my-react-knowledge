import { useState } from "react" 
import GetNome from "./StateLift/GetNome"
import SetNome from "./StateLift/SetNome"

function StateLift() {

    const [nome, setNome] = useState("<vazio>")

    return (
        <>
            <SetNome setNome={setNome} />
            <GetNome nome={nome} />
        </>
    )
}

export default StateLift