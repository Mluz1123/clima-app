import Formulario from './Formulario'
import Resultado from './Resultado'
import Loading from './Loading'
import useClima from '../hooks/useClima'
const AppClima = () => {
  const { resultado, cargando, noResultado } = useClima()
  return (
    <div>
      <main className='dos-columnas'>
        <Formulario />
        {cargando ? (
          <Loading />
        ) : resultado?.name ? (
          <Resultado />
        ) : noResultado ? (
          <p>{noResultado}</p>
        ) : (
          <p>El clima se va a mostrar aquí</p>
        )}
      </main>
    </div>
  )
}

export default AppClima
