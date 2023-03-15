import { useState } from "react";

export default function Button({loadingText = "Bitte warten...", text = "", onClick = null, isSubmit = false} = {}) {
    const [loading, setLoading] = useState(false);

    if (!text) return null;

    const clickHandler = async (e) => {
        setLoading(true);
        e.preventDefault();

        if (onClick && typeof onClick === "function") onClick();
        else if (onClick || typeof onClick === "object") await onClick();

        setLoading(false);
    }

    if (isSubmit) return <input style={{alignSelf: "end"}} name="submit" type="submit" onClick={clickHandler} value={loading ? loadingText : text} />

    return (
        <button onClick={clickHandler}>{loading ? loadingText : text}</button>
    )
}