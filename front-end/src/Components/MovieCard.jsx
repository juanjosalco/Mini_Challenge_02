import { ModalEdit } from "./ModalEdit";
import { useState } from "react";

export const MovieCard = ({ id, title, description, image, rating }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const movie = { id, title, description, image, rating };
    return (
        <>
            <div className="card bg-base-300 shadow-xl p-2 mx-10 sm:mx-0  flex flex-grow flex-1 max-h-96">
                <figure className="min-h-[150px] max-h-[150px]">
                    <img
                        src={image}
                        alt={title}
                        className="rounded-md object-cover w-full h-64"
                    />
                </figure>
                <div className="card-body min-h-[100px]">
                    <h2 className="card-title ">{title}</h2>
                    <p className="overflow-clip">{description}</p>
                    <div className="card-actions justify-center mt-2">
                        <label className="btn btn-secondary w-[100%]" onClick={() => setModalOpen(true)} htmlFor={`my-modal-${id}`}>Edit</label>
                    </div>
                </div>
            </div>
            {modalOpen && <ModalEdit {...movie} closeModal={() => setModalOpen(false)} />}
        </>
    );
};
