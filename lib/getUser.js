export default async function getUser(id) {
    console.log(id)
    const response = await fetch('https://back-snakepit-0edf58d8e1b8.herokuapp.com/api/user/' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('sptoken')
        }
    })
    const res = await response.json()
    const data = await res
    return data
}