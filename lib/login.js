export default async function login(email, password, socket) {
    const response = await fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password })
    })
    const data = await response.json()
    localStorage.setItem('sptoken', data.token)
    console.log(data)
    localStorage.setItem('sptuser', data.userId)
    socket.emit('connec', data.userId)
}