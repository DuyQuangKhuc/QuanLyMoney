import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import UserProfileData from "../../components/userProfile/userProfile"

const UserProfile = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <UserProfileData />
      </div>
    </div>
  )
}

export default UserProfile