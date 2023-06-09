export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
  {
    field: "location",
    headerName: "location",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const salaryColumns  = [
  { field: "id", headerName: "UserID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "dayStart",
    headerName: "Day Start",
    width: 230,
  },
  {
    field: "dayEnd",
    headerName: "Day End",
    width: 100,
  },
  {
    field: "location",
    headerName: "Location Work",
    width: 100,
  },
  {
    field: "standardworknumber",
    headerName: "Standard Work",
    width: 100,
  },
  {
    field: "weekdaywork",
    headerName: "Weekday Work",
    width: 100,
  },
  {
    field: "dayoff",
    headerName: "Day Off",
    width: 100,
  },
  {
    field: "holiday",
    headerName: "Holiday",
    width: 100,
  },
  {
    field: "numberofdaysofleave",
    headerName: "Number of Days of Leave",
    width: 100,
  },
  {
    field: "numberofworkingdays",
    headerName: "Number of Working Days",
    width: 100,
  },
  {
    field: "numberofdaysofunpaidleave",
    headerName: "Number Days of Unpaid Leave",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];