const getId = () => {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

// strictly for VisualStudio intellisense, can of course be shortened 
export const applySchema = (obj = {id: getId(), city: '', zipCode: '', street: '', gps: ''}) => {
    const result = {
        id: getId(),
        city: '',
        zipCode: '',
        street: '',
        gps: ''
    };

    if (!obj || typeof obj !== 'object') return result;
    return {...result, ...obj};
}
