import axios from "axios"
import { useEffect, useState } from "react"

const DashRoles = () => {

    const [roles, setRoles] = useState([])

    const getRoles = async () => {
        try {
            const res = await axios.get('http://localhost:3000/roles')
            // console.log(res?.data)
            setRoles(res?.data)
        } catch (error) {
            console.log({ message: error.message })
        }
    }
    useEffect(() => {
        if (roles?.length === 0) {
            getRoles()
        }
    }, [roles?.length])


    return (
        <div className="mt-4">
            
            <section className="mt-4 mb-4 flex justify-center">
                <ol className="flex flex-col justify-start list-decimal">
                {
                    roles?.map((rol) => {
                        return (
                                <li key={rol.role_name} className="mb-3">{rol.role_name}</li>
                                )
                            })
                        }
            </ol>
            </section>
        </div>
    )
}

export default DashRoles