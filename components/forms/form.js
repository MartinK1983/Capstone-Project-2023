export default function Form({children} = {}) {
    return (
        <form style={{display: "flex", flexDirection: "column", gap: "5px"}}>
            {
                children
            }
        </form>
    )
}