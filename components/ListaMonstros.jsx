import Monstro from "./Monstro";

const ListaMonstro = (props) => {
    const dados = props.dados;
    return (
        <>
        {dados.map((objeto) => {
            return <Monstro monstroUnico={objeto} />;
          })}
          </>
    );
};

export default ListaMonstro;