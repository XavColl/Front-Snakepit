import getUser from "../lib/getUser"

export const userLoader = async () => {
    const id = localStorage.getItem('sptuser')
    console.log(id)
    const data = await getUser(id)
    return data
}