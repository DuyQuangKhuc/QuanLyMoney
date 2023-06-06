import React, { useEffect, useState } from "react";
import styles from "./Table.css";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useTable, usePagination } from "react-table";
import axios from "axios";

import { SortIcon } from "../../Icons/Icon";
import styled from "styled-components";
const cx = classNames.bind(styles);



function UserTable({ userColumns }) {
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

  const [UserList, setUserList] = useState(null);
  const token = localStorage.getItem("accessToken");

  const handleAddNewEmployee = () => {
    //sử lý API và add new
  }

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://64795c85a455e257fa632063.mockapi.io/users`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setUserList(res.data);

      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className="table-title">
      <h3>List Employees</h3>
      <Link  to="/users/new" className="link">
      <button className="add-button" onClick={handleAddNewEmployee}>
        Add new
      </button>
      </Link>
    </div>
      <table className={cx("tables")}>
        <thead className={cx("table-header")}>
          <tr>
            {userColumns.map((item, index) => (
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
          {UserList && UserList.map((item, index) => (
            <tr key={index}>
              {/* <td>
                                  <Link to={"/"}>{item.name}</Link>
                                </td> */}
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.gender = "1 " ? <LabelAct >Male</LabelAct> : <LabelDra>Female</LabelDra>}</td>
              <td>{item.status = "1" ? <LabelAct >Active</LabelAct> : <LabelDra>Inactive</LabelDra>}</td>
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
}

export default UserTable;
