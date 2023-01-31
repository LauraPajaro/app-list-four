import './App.css';
import logo from './imagenes/origami-yellow.png';
import ListaDeTareas from './componentes/ListaDeTareas';



function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-contenedor'>
        <img
          src={logo}
          alt='Imagen Logo'
          className='logo' 
          />
      </div>
      <div className='lista-tareas-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}
export default App;
