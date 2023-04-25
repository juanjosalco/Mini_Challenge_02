import { useState } from "react";

export const Rating = ({rating}) => {
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
                    id="rating-1"
                    className="mask mask-star-2 bg-orange-400"
                    {...(ratingValue >= 1 && { checked: true })}
                    onChange={() => {setRatingValue(1); console.log(ratingValue)}}
                    formerdata={rating}
                />
                <input
                    type="radio"
                    name="rating-8"
                    id="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    {...(ratingValue >= 2 && { checked: true })}
                    onChange={() => setRatingValue(2)}
                    formerdata={rating}
                />
                <input
                    type="radio"
                    name="rating-8"
                    id="rating-3"
                    className="mask mask-star-2 bg-orange-400"
                    {...(ratingValue >= 3 && { checked: true })}
                    onChange={() => setRatingValue(3)}
                    formerdata={rating}
                />
                <input
                    type="radio"
                    name="rating-8"
                    id="rating-4"
                    className="mask mask-star-2 bg-orange-400"
                    {...(ratingValue >= 4 && { checked: true })}
                    onChange={() => setRatingValue(4)}
                    formerdata={rating}
                />
                <input
                    type="radio"
                    name="rating-8"
                    id="rating-5"
                    className="mask mask-star-2 bg-orange-400"
                    {...(ratingValue >= 5 && { checked: true })}
                    onChange={() => setRatingValue(5)}
                    formerdata={rating}
                />
            </div>
        </div>
    );
};