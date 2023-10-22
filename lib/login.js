export default async function login(email, password, socket) {
    console.log(email)
    const response = await fetch('https://back-snakepit-0edf58d8e1b8.herokuapp.com/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({email, password })
    })
    const data = await response.json()
    localStorage.setItem('sptoken', data.token)
    console.log(data)
    localStorage.setItem('sptuser', data.userId)
    socket.emit('connec', data.userId)
}