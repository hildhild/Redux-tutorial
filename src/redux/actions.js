export const formSubmit = (data) => {
    return {
        type: 'form/formSubmit',
        payload: data
    }
}

export const openModal = (data) => {
    return {
        type: 'successModal/openModal',
        payload: data
    }
}
