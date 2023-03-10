import './body.css';

export default function Root(props) {
  return (
        <main className="main">
            <div className="banner">
                <h2>¡Bienvenid@ a La Tienda!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="button button-primary">Ver productos</button>
            </div>
            <section className="product-list">
                <div className="product-card">
                    <img src="https://nubita.co/wp-content/uploads/2020/10/PONQUE-GANSITO_F.png" alt="Product" />
                    <h3>Gansito</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className="button button-secondary">Agregar al carrito</button>
                </div>
                <div className="product-card">
                    <img src="https://mercaldas.vtexassets.com/arquivos/ids/1296846/Chocoramo-RAMO-x55-g_114015.jpg?v=638017928700870000" alt="Product" />
                    <h3>Chocorramo</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className="button button-secondary">Agregar al carrito</button>
                </div>
                <div className="product-card">
                    <img src="https://mercaahorrola32.viveshops.co/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNGY1UHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--3fef8f796d2cd840c31bc9ec302d5aa242264f65/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/7702011045607.jpg?locale=es" alt="Product" />
                    <h3>Ponky</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className="button button-secondary">Agregar al carrito</button>
                </div>
            </section>
        </main>
    );
}
