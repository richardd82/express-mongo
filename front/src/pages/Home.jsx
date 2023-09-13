import DashRoles from "../components/DashRoles.jsx"
import DashUsers from "../components/DashUsers.jsx"
import DomainsChart from "../components/DomainsChart.jsx"

const Home = () => {
  return (
    <div className="font-bold ">
      <section className=" text-2xl h-auto w-max p-2 bg-gray-500 border-solid border-gray-800 border-2 rounded-md m-auto">
        Dashboar Admin
      </section>
      <div className="flex flex-wrap gap-2">
        <section className="border-2 border-zinc-400 rounded-md bg-gray-600 w-56 h-[14rem] overflow-y-scroll overflow-hidden">
          <span className="text-zinc-400 text-xl" >Existent Roles</span>
          <DashRoles />
        </section>
        <section className="border-2 border-zinc-400 rounded-md bg-gray-600 w-[60rem] h-[14rem] overflow-y-scroll overflow-hidden">
          <span className="text-zinc-400 text-xl" >Existent Users</span>
          <DashUsers />
        </section>
        <section className="border-2 border-zinc-400 rounded-md bg-gray-600 w-[40rem] h-[20rem] overflow-y-scroll overflow-hidden m-auto">
          <span className="text-zinc-400 text-xl" >Emails domains registered</span>
          <DomainsChart />
        </section>
      </div>
    </div>
  )
}

export default Home