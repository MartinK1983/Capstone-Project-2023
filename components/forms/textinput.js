export default function TextInput({name = "", label = "", onChange = null} = {}) {
    const inputId = `input-${name}`;

    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
            {
                label && <label htmlFor={inputId}>{label}</label>
            }
            {
                name && <input type="text" name={name} id={inputId} onChange={onChange ? onChange : undefined} />
            }
        </div>
    )
}