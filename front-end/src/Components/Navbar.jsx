import { ModalEdit } from "./ModalEdit";
import { useState } from "react";

export const Navbar = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <nav className="navbar bg-base-100 fixed z-50">
                <div className="flex-1">
                    <a href="/" className="btn btn-ghost normal-case text-xl">Blockbuster</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <label onClick={() => setModalOpen(true)} htmlFor={`my-modal-create`}>Agregar Película</label>
                        </li>
                        <li>
                            <a href="#peliculas">Ver Películas</a>
                        </li>
                    </ul>
                </div>
            </nav>
            {modalOpen && <ModalEdit id={"create"} closeModal={() => setModalOpen(false)} />}
        </>
    );
};
