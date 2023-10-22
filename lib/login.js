export default async function login(email, password, socket) {
    const response = await fetch('https://back-snakepit-0edf58d8e1b8.herokuapp.com/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password })
    })
    const res = await response.json()
    const data = await res
    localStorage.setItem('sptoken', data.token)
    console.log(data)
    localStorage.setItem('sptuser', data.userId)
    socket.emit('connec', data.userId)
}