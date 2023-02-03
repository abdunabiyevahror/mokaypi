let elForm = document.querySelector('.form')
fetch('https://63dcaa4c367aa5a7a4ffa9ef.mockapi.io/nabiev/users/',)
.then((res)=> res.json())
.then((data)=> console.log(data))


elForm.addEventListener('submit', (e)=>{
e.preventDefault()
let val =e.target.elements
fetch('https://63dcaa4c367aa5a7a4ffa9ef.mockapi.io/nabiev/users/',{
    method:'POST',
    headers: {
        'Content-type': 'application/json', // manashu farmatda yubordim domla
    },
body: JSON.stringify({
                   firstName:val.firsName.value,
                 lastName:val.lastName.value,
                  phone:val.phone.value
            })
        })
        .then((res)=> res.json())
        .then((data)=> console.log(data))


    })


