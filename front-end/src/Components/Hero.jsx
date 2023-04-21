export const Hero = () => {
    return (
        <header className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Administrador de películas</h1>
                    <p className="py-6">
                    Crea, actualiza, borra y be las películas disponibles en la tienda
                    </p>
                    <a className="btn btn-primary" href="#peliculas">Ver películas</a>
                </div>
            </div>
        </header>
    );
};
