const putData = async(url: string, data: any) => {
    const response = await fetch(url, {
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(() => {
        alert('Success!');
    })
    .catch(() => {
        alert('Error!');
    });
    return response
  }

  export default putData