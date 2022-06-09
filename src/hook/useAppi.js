import axios from "axios"
import { useEffect, useState } from "react"

const useAppi = () => {

    const [Data, setData] = useState()
    const [totalUsers, setTotalUsers] = useState(1)


    useEffect(() => {
        const URL= `https://randomuser.me/api/?results=${totalUsers}`

        axios.get(URL)
        .then(res => setData(res.data?.results))
        .catch(err => console.log(err))
    }, [totalUsers])

    // const nextUser = ()=>{
    //     setStatus(!Status)
    // }
  return {Data, setTotalUsers, totalUsers}
}


export default useAppi