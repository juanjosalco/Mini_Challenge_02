import { useState } from "react";

export const Input = ({ label, value, variable }) => {
    const [inputValue, setInputValue] = useState(value);
    return (
        <div className="form-control min-w-full md:min-w-[100px] flex items-center justify-center md:items-start md:justify-start">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <input
                type="text"
                placeholder={label}
                className="input input-bordered w-full max-w-xs"
                value={inputValue}
                formerdata={value}
                variable={variable}
                onChange={(e) => setInputValue(e.target.value)}
                required
            />
        </div>
    );
};