import './header.css';
export default function Root(props) {
  return (
    <header className="header">
      
      <div className="logo">
        <h1 align="center">Ejemplo Tienda</h1>
      </div>
      <br></br>
      <nav className="nav-menu">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
