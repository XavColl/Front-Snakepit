export default async function signup(pseudo, email, password) {
    const response = await fetch('https://back-snakepit-0edf58d8e1b8.herokuapp.com/api/user/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pseudo, email, password })
    })
    const res = await response.json()
    const data = await res
    return data
}