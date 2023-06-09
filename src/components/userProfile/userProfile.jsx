import React from "react";
import { Typography, Button } from "@material-ui/core";

function UserProfileData() {
    const handleEditProfile = () => {
        console.log("edit ");
    }

  return (
    <div>
      <Typography variant="h3" component="h1" gutterBottom>
        User Profile
      </Typography>
      <Typography variant="h5" gutterBottom>
        User Information
      </Typography>
      <Typography variant="body1" gutterBottom>
        Name: John Doe
      </Typography>
      <Typography variant="body1" gutterBottom>
        Email: johndoe@example.com
      </Typography>
      <Typography variant="body1" gutterBottom>
        Phone: 123-456-7890
      </Typography>
      <Button variant="contained" color="primary" onClick={() => handleEditProfile()}>
        Edit Profile
      </Button>
    </div>
  );
}

export default UserProfileData;