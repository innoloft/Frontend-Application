const postForm = (form, setSubmitMessage) => {
    fetch('http://localhost:3000/', {
        method: 'POST',
        body: form
    })
    .then((res) => setSubmitMessage('Form was successfuly submitted'))
    .catch((err) => setSubmitMessage('Pleace check your connection'));
};

export default postForm;