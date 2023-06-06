import "./Salary.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataSalary from "../../components/datatable/DataAttendance"

const Salary = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataSalary/>
      </div>
    </div>
  )
}

export default Salary