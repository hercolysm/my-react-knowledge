function Objects() {
    
    let Objects = [
        {'id': 1, 'nome': 'Nome 1'},
        {'id': 2, 'nome': 'Nome 2'},
        {'id': 3, 'nome': 'Nome 3'},
    ];

    return (
        <select>
            {Objects.map((obj) => (
                <option key={obj.id} value={obj.id}>{obj.nome}</option>
            ))}
        </select>
    )
}

export default Objects