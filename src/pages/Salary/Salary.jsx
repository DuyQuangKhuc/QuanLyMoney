import "./AttendanceData.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataSalary from "../../components/datatable/DataAttendance"

const AttendanceData = () => {
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

export default AttendanceData