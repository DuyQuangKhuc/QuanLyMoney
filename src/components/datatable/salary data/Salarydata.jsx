import React, { useState } from "react";
import styles from "./Table.css";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { SortIcon } from "../../Icons/Icon";

import styled from "styled-components";


const cx = classNames.bind(styles);

function DataSalary2({ salaryColumns }) {
    const LabelAct = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #535e8a;
    color: #fff;
    padding: 0 !important;
    margin: auto;
    font-weight: 400 !important;
    padding: 5px 15px;
    border-radius: 50px;
    padding-top: 6px;
    width: 72px;
    height: 27px;
  `;
    const LabelDra = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #94a3b8;
    color: #fff;
    padding: 0 !important;
    margin: auto;
    font-weight: 400 !important;
    padding: 5px 15px;
    border-radius: 50px;
    padding-top: 6px;
    width: 72px;
    height: 27px;
  `;
  const [data, setData] = useState([
    
{ UserID: 2, User: "John Doe", DayStart: "01/01/2023",DayEnd: "02/02/2023" ,LocationWork: "HCM",StandardWork: "BM", WeekdayWork: 5, DayOff: 0,Holiday: 0, NumberofDaysofLeave: 0,NumberofWorkingDays: 0,Status:1,Action: 0,Salary: 200000 },
{ UserID: 3, User: "Jane Smith", DayStart: "03/01/2023", DayEnd: "04/02/2023", LocationWork: "Hanoi", StandardWork: "IT Support", WeekdayWork: 5, DayOff: 0, Holiday: 0, NumberofDaysofLeave: 0, NumberofWorkingDays: 0, Status: 1, Action: 0,Salary: 250000 },
{ UserID: 4, User: "Mike Johnson", DayStart: "05/01/2023", DayEnd: "06/02/2023", LocationWork: "Da Nang", StandardWork: "Sales", WeekdayWork: 5, DayOff: 0, Holiday: 0, NumberofDaysofLeave: 0, NumberofWorkingDays: 0, Status: 1, Action: 0,Salary:300000 },
{ UserID: 5, User: "Sarah Williams", DayStart: "07/01/2023", DayEnd: "08/02/2023", LocationWork: "Ho Chi Minh City", StandardWork: "Marketing", WeekdayWork: 5, DayOff: 0, Holiday: 0, NumberofDaysofLeave: 0, NumberofWorkingDays: 0, Status: 1, Action: 0,Salary:220000 },
{ UserID: 6, User: "David Brown", DayStart: "09/01/2023", DayEnd: "10/02/2023", LocationWork: "Hanoi", StandardWork: "Finance", WeekdayWork: 5, DayOff: 0, Holiday: 0, NumberofDaysofLeave: 0, NumberofWorkingDays: 0, Status: 1, Action: 0,Salary:350000 },
{ UserID: 7, User: "Emily Davis", DayStart: "11/01/2023", DayEnd: "12/02/2023", LocationWork: "Ho Chi Minh City", StandardWork: "Human Resources", WeekdayWork: 5, DayOff: 0, Holiday: 0, NumberofDaysofLeave: 0, NumberofWorkingDays: 0, Status: 1, Action: 0,Salary:160000 },
{ UserID: 8, User: "Michael Wilson", DayStart: "13/01/2023", DayEnd: "14/02/2023", LocationWork: "Da Nang", StandardWork: "Operations", WeekdayWork: 5, DayOff: 0, Holiday: 0, NumberofDaysofLeave: 0, NumberofWorkingDays: 0, Status: 1, Action: 0,Salary:150000 },
{ UserID: 10, User: "Sophia Anderson", DayStart: "17/01/2023", DayEnd: "18/02/2023", LocationWork: "Ho Chi Minh City", StandardWork: "Engineering", WeekdayWork: 5, DayOff: 0, Holiday: 0, NumberofDaysofLeave: 0, NumberofWorkingDays: 0, Status: 1, Action: 0,Salary:170000 },
{ UserID: 11, User: "James Martinez", DayStart: "19/01/2023", DayEnd: "20/02/2023", LocationWork: "Hanoi", StandardWork: "Customer Service", WeekdayWork: 5, DayOff: 0, Holiday: 0, NumberofDaysofLeave: 0, NumberofWorkingDays: 0, Status: 1, Action: 0,Salary:230000 },
{ UserID: 12, User: "Isabella Thompson", DayStart: "21/01/2023", DayEnd: "22/02/2023", LocationWork: "Da Nang", StandardWork: "Research and Development", WeekdayWork: 5, DayOff: 0, Holiday: 0, NumberofDaysofLeave: 0, NumberofWorkingDays: 0, Status: 1, Action: 0,Salary:180000 },
{ UserID: 13, User: "Alexander Hall", DayStart: "23/01/2023", DayEnd: "24/02/2023", LocationWork: "Ho Chi Minh City", StandardWork: "Product Management", WeekdayWork: 5, DayOff: 0, Holiday: 0, NumberofDaysofLeave: 0, NumberofWorkingDays: 0, Status: 1, Action: 0,Salary:195000 },
{ UserID: 14, User: "Ava Lee", DayStart: "25/01/2023", DayEnd: "26/02/2023", LocationWork: "Hanoi", StandardWork: "Quality Assurance", WeekdayWork: 5, DayOff: 0, Holiday: 0, NumberofDaysofLeave: 0, NumberofWorkingDays: 0, Status: 1, Action: 0,Salary:145000 },
{ UserID: 15, User: "William Turner", DayStart: "27/01/2023", DayEnd: "28/02/2023", LocationWork: "Ho Chi Minh City", StandardWork: "Design", WeekdayWork: 5, DayOff: 0, Holiday: 0, NumberofDaysofLeave: 0, NumberofWorkingDays: 0, Status: 1, Action: 0,Salary:5000 },
{ UserID: 16, User: "Mia Moore", DayStart: "01/02/2023", DayEnd: "02/03/2023", LocationWork: "Da Nang", StandardWork: "Operations", WeekdayWork: 5, DayOff: 0, Holiday: 0, NumberofDaysofLeave: 0, NumberofWorkingDays: 0, Status: 1, Action: 0,Salary:7000 },



    // Add more data as needed
  ]);

  // Rest of your component code

  return (  
    <div className={cx("wrapper")}>
    <div className="table-title">
    <h3>List Employees</h3>
    <Link  to="/users/new" className="link">
    <button className="add-button">
      Add new
    </button>
    </Link>
  </div>
    <table className={cx("tables")}>
      <thead className={cx("table-header")}>
        <tr>
          {salaryColumns.map((item, index) => (
            <th key={index}>
              {item.Header} 
              <span className={cx("sort-icon")}>
                {item.Header !== "" && <SortIcon />}
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={cx("table-body")}>
        {data && data.map((item, index) => (
          <tr key={index}>
            {/* <td>
                                <Link to={"/"}>{item.name}</Link>
                              </td> */}
            <td>{item.UserID}</td>
            <td>{item.User}</td>
            <td>{item.DayStart}</td>
            <td>{item.DayEnd}</td>
            <td>{item.LocationWork}</td>
            <td>{item.StandardWork}</td>
            <td>{item.WeekdayWork}</td>
            <td>{item.DayOff}</td>
            <td>{item.Holiday}</td>
            <td>{item.NumberofDaysofLeave}</td>
            <td>{item.NumberofWorkingDays}</td>
            <td>{item.Status = "1" ? <LabelAct >Active</LabelAct> : <LabelDra>Inactive</LabelDra>}</td>
            <td>{item.Action}</td>
            <td>{item.Salary}</td>
            <td className=" whitespace-nowrap">
              <div className="dropdown relative">
                <button className="dropdown-toggle pb-3 pl-6 text-black font-medium text-2xl leading-tight transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ...
                </button>
                
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

  </div>
  );
};

export default DataSalary2;
