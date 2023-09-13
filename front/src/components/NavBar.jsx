import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <ul className="flex gap-5 size text-xl">
                   <Link to='/' > <li className="border-white border-r-2 pr-5">Home</li> </Link>
                   <Link to='/users'> <li className="border-white border-r-2 pr-5">Users</li></Link>
                   <Link to= 'roles'> <li className="border-white border-r-2 pr-5">Roles</li></Link>
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default NavBar