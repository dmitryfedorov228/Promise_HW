
//! ulка куда будут отрисовываться данные APi

const list = document.querySelector('ul')


//! получаю ключи телефона и вывожу 


fetch('https://jsonplaceholder.typicode.com/users') 
.then(response => response.json())
.then(users => {
    users.forEach(user => {
        const li = document.createElement('li')
        li.innerText = user.phone 
        list.append(li)
    })
})

//! создаю пост 


fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({title: 'New Photo'})
    
})
.then(response => response.json())
    .then(photo => console.log(photo))