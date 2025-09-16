import { useEffect, useState } from "react";


const Users = () => {
    const [dados, setDados] = useState('');
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const buscaDados = async () => {
            try {
                const req = await fetch("https://jsonplaceholder.typicode.com/users");

                if (!req.ok) {
                    throw new Error(`Erro no fetch: ${req.status}`)
                }

                const res = await req.json();

                setDados(res);
            } catch (error) {
                console.log('Seu burro:', error);
                alert('erro man');
            } finally {
                setCarregando(false);
            }
        }
        buscaDados();
    }, []);

    return(
        <div>
            <h2>Usuários</h2>

            <p>Dados requisitados por API</p>
            
            <div>{carregando ? "CALMAAA, ESTão VINDO........" : ''}</div>

            <ul>
                {dados && dados.map(user => (<li key={user.id}>{user.name}</li>))}
            </ul>
            
            
        </div>
    )

}

export default Users;