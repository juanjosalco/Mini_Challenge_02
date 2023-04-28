import { Input } from "./Input";
import { Rating } from "./Rating";

export const ModalEdit = ({
    id,
    title,
    description,
    image,
    rating,
    closeModal,
    editMovie,
}) => {
    async function handleSubmit(e) {
        e.preventDefault();

        let inputs = document.querySelectorAll(
            `#form-${id} input:not([type="radio"])`
        );
        let data = {};
        inputs.forEach((input) => {
            if (input.value !== input.getAttribute("formerdata")) {
                data[input.getAttribute("variable")] = input.value;
            }
        });
        //Get all the checked radios
        let radios = document.querySelectorAll(
            `#form-${id} input[type="radio"]:checked`
        );
        radios = radios[0];

        let rating = radios.getAttribute("id").split("-")[1];
        //If the rating has changed, add it to the data object
        if (radios.getAttribute("formerdata") !== rating && editMovie) {
            data["rating"] = rating;
        } else if (!editMovie) {
            data["rating"] = rating;
        }

        console.log(data);

        if (data !== {} && editMovie) {
            let response = await fetch(`api/movies/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                closeModal();
                window.location.reload();
            } else {
                alert("Error al editar la película");
            }
        } else if (data !== {} && !editMovie) {
            let response = await fetch(`api/movies`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                closeModal();
                window.location.reload();
            } else {
                alert("Error al editar la película");
            }
        }
    }

    const ModalCard = ({ id, title, description, image, rating }) => {
        return (
            <div className="card card-side bg-base-100 flex flex-wrap">
                {image ? (
                    <figure className="w-full md:w-[50%] lg:w-[33%]">
                        <img
                            src={image}
                            alt={title}
                            className="rounded-md object-cover w-full h-64"
                        />
                    </figure>
                ) : (
                    <section className="w-full md:w-[50%] lg:w-[33%] items-center justify-center">
                        <div className="flex h-full justify-center items-center">
                            <h1 className="text-3xl text-center font-bold text-primary-100">
                                Agrega una película
                            </h1>
                        </div>
                    </section>
                )}
                <form
                    className="card-body w-[100%] md:w-[50%] lg:w-[66%] grid grid-cols-1 lg:grid-cols-2 gap-4"
                    onSubmit={handleSubmit}
                    id={`form-${id}`}
                >
                    <Input
                        label="Título"
                        value={title || ""}
                        variable="title"
                    />
                    <Input
                        label="Descripción"
                        value={description || ""}
                        variable="description"
                    />
                    <Input
                        label="Imagen"
                        value={image || ""}
                        variable="image"
                    />
                    <Rating rating={rating || 5} />
                    <div className="modal-action">
                        <label
                            onClick={closeModal}
                            className="btn btn-error w-full"
                            htmlFor={`my-modal-${id}`}
                        >
                            Cancelar
                        </label>
                    </div>
                    <div className="modal-action">
                        <button
                            type="submit"
                            className="btn btn-success w-full"
                        >
                            Guardar
                        </button>
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
