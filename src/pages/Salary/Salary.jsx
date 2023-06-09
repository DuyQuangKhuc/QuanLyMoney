import "./Salary.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
// import DataSalary from "../../components/datatable/DataAttendance"
import DataSalary2 from "../../components/datatable/salary data/Salarydata"
import { salaryColumns } from "../../formSource";

const Salary = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataSalary2 salaryColumns={salaryColumns}/>
      </div>
    </div>
  )
}

export default Salary