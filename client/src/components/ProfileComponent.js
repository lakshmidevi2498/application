import React, { useState, useEffect } from 'react';
import Controls from '../commons/Controls';
import { deepPurple } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MyProfileComponent = () => {
  const [userData, setUserData] = useState(null);
  const [userDataOne, setUserDataOne] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
    fetchLoginUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await axios.get('http://localhost:5050/api/user/signup/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchLoginUserData = async () => {
    try {
      const token = localStorage.getItem('Token');
      const response = await axios.get('http://localhost:5050/api/user/signin/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserDataOne(response.data);
      console.log("respaone", response.data)
    } catch (error) {
      console.error('Error fetching login user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    console.log("Logout button clicked");  
    // alert("fcvgbhnjm");
    // localStorage.removeItem("Token");
    localStorage.clear()
    navigate('/');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Controls.Grid container justifyContent="center" sx={{ height: '100vh', overflow: 'hidden' }}>
        <Controls.Grid item xs={12} sx={{ position: 'relative' }}>
          <Controls.Grid item xs={3} sx={{ border: "1px solid lightgray", paddingX: "20px", paddingY: "50px", boxShadow: "2px 2px 5px rgba(0, 0, 2, 0.3)" }} >
            <Controls.Grid item container gap={2} sx={{ display: 'flex', flexDirection: 'column' }} >
              <Controls.Grid item>
                <Controls.Typography variant="h3" sx={{ fontSize: { xs: '20px', fontWeight: "bold" } }} mt={4}>
                  My Profile
                </Controls.Typography>
                <Controls.Grid item>
                  <Controls.Typography variant='h3' sx={{ fontSize: { xs: "20px" } }}>  {userData ? userData.email : userDataOne ? userDataOne.email : ""}</Controls.Typography>
                </Controls.Grid>
              </Controls.Grid>

              <Controls.Grid item>
                <Controls.Divider />
              </Controls.Grid>
            </Controls.Grid>
            <Controls.Grid item container gap={2} sx={{ display: 'flex', flexDirection: 'column' }} >
              <Controls.Grid item sx={{cursor:"pointer"}}>
                <Controls.Typography variant="h3" sx={{ fontSize: { xs: '20px' } ,}} mt={4}>
                  orders
                </Controls.Typography>
              </Controls.Grid>

              <Controls.Grid item>
                <Controls.Divider />
              </Controls.Grid>
            </Controls.Grid>
            <Controls.Grid item container gap={2} sx={{ display: 'flex', flexDirection: 'column' }} >
              <Controls.Grid item sx={{cursor:"pointer"}}>
                <Controls.Typography variant="h3" sx={{ fontSize: { xs: '20px' },cursor:"pointer" }} mt={4}>
                  Wishlist
                </Controls.Typography>
              </Controls.Grid>

              <Controls.Grid item>
                <Controls.Divider />
              </Controls.Grid>
            </Controls.Grid>
            <Controls.Grid item container gap={2} sx={{ display: 'flex', flexDirection: 'column' }} >
              <Controls.Grid item sx={{cursor:"pointer"}}>
                <Controls.Typography variant="h3" sx={{ fontSize: { xs: '20px' },  }} mt={4} onClick={handleLogout}>
                  Logout
                </Controls.Typography>
              </Controls.Grid>
              <Controls.Grid item>
                <Controls.Divider />
              </Controls.Grid>
            </Controls.Grid>
          </Controls.Grid>

          <Controls.Grid
            item
            xs={9}
            sx={{
              margin: "auto",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Controls.Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <Controls.Avatar sx={{ bgcolor: deepPurple[500], color: "white", width: 60, height: 60 }}>
                {(userData?.name?.charAt(0) || userDataOne?.name?.charAt(0) || "Z").toUpperCase()}
              </Controls.Avatar>
            </Controls.Grid>
            <Controls.Grid item>
              <Controls.Typography variant="h4">
                {userData?.name || userDataOne?.name || "No User"}
              </Controls.Typography>
            </Controls.Grid>
          </Controls.Grid>
        </Controls.Grid>
      </Controls.Grid>
    </>
  );
};

export default MyProfileComponent;
