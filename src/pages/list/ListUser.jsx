import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/user/Datatable"
import { userColumns } from "../../formSource";

const ListUser = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable userColumns={userColumns} />
      </div>
    </div>
  )
}

export default ListUser