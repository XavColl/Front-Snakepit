export default async function signup(pseudo, email, password) {
    const response = await fetch('http://localhost:5000/api/user/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pseudo, email, password })
    })
    const data = await response.json()
    return data
}