import { useEffect, useState } from "react"

const Formulario = () => {
    const [materiaA, setMAteriaA] = useState(0);
    const [materiaB, setMAteriaB] = useState(0);
    const [materiaC, setMAteriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log('O componente iniciou!')

        return () => {
            console.log('O componente finalizou!')
        }

    }, []);

    useEffect(() => {
        console.log('O estado mudou!');
    }, [nome]);

    useEffect(() => {
        console.log('Matéria A mudou para: ' + materiaA)
    }, [materiaA, materiaB, materiaC])

    const AlteraNome = (evento) => {
        //console.log(evento.target.value);
        //setNome(evento.target.value);
        setNome(estadoAnterior => {
            console.log(estadoAnterior);

            return evento.target.value;
        });
    }

    const RenderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado!</p>
            )
        } else {
            return (
                <p>Olá {nome}, você não foi aprovado!</p>
            )
        }
    }

    return (
        <form action="">
            <ul>
                {[1, 2, 3, 4, 5, 6].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Digite seu nome" onChange={AlteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMAteriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMAteriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMAteriaC(parseInt(evento.target.value))} />
            {RenderizaResultado()}
        </form>
    )
}

export default Formulario