function SetNome({ setNome }) {
    return (
        <input onChange={(e) => {setNome(e.target.value)}} />
    )
}

export default SetNome