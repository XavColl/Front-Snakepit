export default async function getUser(id) {
    console.log(id)
    const response = await fetch('http://localhost:5000/api/user/' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('sptoken')
        }
    })
    const data = await response.json()
    return data
}