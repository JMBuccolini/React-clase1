

function Contacts() {

    const nombres = [
        { name: "Claudia", id: 1 },
        { name: "Karelys", id: 2 },
        { name: "Niafiola", id: 3 },
        { name: "Flor", id: 4 },
        { name: "Rossysmar", id: 5 }
    ]

    const estilo = {
        listStyle: "none"
    }

    return (
        <div>
            <h2>Contactos</h2>
            <p>Esta es una lista de alumnas de MCG2</p>
            <ul style={estilo}>
                {
                    nombres.map((el)=>(
                        <li key={el.id}>{el.name}</li>
                    ))
                }
            </ul>
        </div>
    )
};

export default Contacts;