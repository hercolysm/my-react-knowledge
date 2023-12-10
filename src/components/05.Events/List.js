import Item from "./Item";

function List () {

    function showAlert() {
        alert("Alerta!");
    }

    function showConsole() {
        console.log("Alerta!");
    }

    return (
        <ul>
            <Item event={showAlert} />
            <Item event={showConsole} />
            <li onClick={showAlert}>Item manual</li>
        </ul>
    );
}

export default List;