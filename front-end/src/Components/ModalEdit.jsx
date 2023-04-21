import { useState } from "react";

export const ModalEdit = ({ id, title, description, image, rating }) => {
    const Rating = ({ rating }) => {
        const [ratingValue, setRatingValue] = useState(rating);
        return (
            <div className="form-control min-w-full md:min-w-[100px] flex items-center justify-center md:items-start md:justify-start">
                <label className="label">
                    <span className="label-text">Rating</span>
                </label>
                <div className="rating rating-lg">
                    <input
                        type="radio"
                        name="rating-8"
                        className="mask mask-star-2 bg-orange-400"
                        {...(ratingValue >= 1 && { checked: true })}
                        onChange={() => setRatingValue(1)}
                    />
                    <input
                        type="radio"
                        name="rating-8"
                        className="mask mask-star-2 bg-orange-400"
                        {...(ratingValue >= 2 && { checked: true })}
                        onChange={() => setRatingValue(2)}
                    />
                    <input
                        type="radio"
                        name="rating-8"
                        className="mask mask-star-2 bg-orange-400"
                        {...(ratingValue >= 3 && { checked: true })}
                        onChange={() => setRatingValue(3)}
                    />
                    <input
                        type="radio"
                        name="rating-8"
                        className="mask mask-star-2 bg-orange-400"
                        {...(ratingValue >= 4 && { checked: true })}
                        onChange={() => setRatingValue(4)}
                    />
                    <input
                        type="radio"
                        name="rating-8"
                        className="mask mask-star-2 bg-orange-400"
                        {...(ratingValue >= 5 && { checked: true })}
                        onChange={() => setRatingValue(5)}
                    />
                </div>
            </div>
        );
    };
    const Input = ({ label, value }) => {
        return (
            <div className="form-control min-w-full md:min-w-[100px] flex items-center justify-center md:items-start md:justify-start">
                <label className="label">
                    <span className="label-text">{label}</span>
                </label>
                <input
                    type="text"
                    placeholder="Título"
                    className="input input-bordered w-full max-w-xs"
                    value={value}
                />
            </div>
        );
    };

    const ModalCard = ({ id, title, description, image, rating }) => {
        return (
            <div className="card card-side bg-base-100 flex flex-wrap">
                <figure className="w-full md:w-[50%] lg:w-[33%]">
                    <img
                        src={image}
                        alt={title}
                        className="rounded-md object-cover w-full h-64"
                    />
                </figure>
                <form class="card-body w-[100%] md:w-[50%] lg:w-[66%] grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <Input label="Título" value={title} />
                    <Input label="Descripción" value={description} />
                    <Input label="Imagen" value={image} />
                    <Rating rating={rating} />
                    <div className="modal-action">
                        <label className="btn btn-error w-full" htmlFor={`my-modal-${id}`}>Cancelar</label>
                    </div>
                    <div className="modal-action">
                        <button className="btn btn-success w-full">Guardar</button>
                    </div>
                </form>
            </div>
        );
    };

    return (
        <>
            <input
                type="checkbox"
                id={`my-modal-${id}`}
                className="modal-toggle"
            />
            <label htmlFor={`my-modal-${id}`} className="modal cursor-pointer">
                <label
                    className="modal-box relative w-11/12 max-w-5xl"
                    htmlFor=""
                >
                    <ModalCard {...{ id, title, description, image, rating }} />
                </label>
            </label>
        </>
    );
};
