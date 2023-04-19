export const Navbar = () => {
    const movieTypes = [
        {
            tipo: "Acción",
            href: "/movies/accion",
        },
        {
            tipo: "Comedia",
            href: "/movies/comedia",
        },
    ];
    return (
        <nav className="navbar bg-base-100 fixed z-50">
            <div className="flex-1">
                <a href="/" className="btn btn-ghost normal-case text-xl">Blockbuster</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a href="/">Agregar Película</a>
                    </li>
                    <li tabIndex={0}>
                        <div>
                            Ver Películas
                            <svg
                                className="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                            >
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                        </div>
                        <ul className="p-2 bg-base-100">
                            {movieTypes.map((movieType, index) => {
                                return (
                                    <li key={index}>
                                        <a href={movieType.href}>
                                            {movieType.tipo}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
