export const Usuario = ({nombre, edad, pais}) => {

    //las props se mandan desde el padre a hijo
    //se manda un objeto que se desestructura en los argumentos
    //y los valores se usan entre como JS
    return(
        <div>
            <h3>Nombre: {nombre}</h3>
            <p>Edad: {edad}</p>
            <p>Pais: {pais}</p>
        </div>
    )
}