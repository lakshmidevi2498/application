import React, { useState, useEffect } from 'react';
import Controls from '../commons/Controls';
import { deepOrange, deepPurple, teal } from '@mui/material/colors';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { loadProfileInitiate } from '../redux/action/loadProfileAction';

const MyProfileComponent = () => {
    const [userData, setUserData] = useState(null);
    const [userDataOne, setUserDataOne] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [name,setName] = useState(null)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(() => {
        // fetchUserData();
        fetchLoginUserData();
    }, []);

    const loadProfileData = useSelector((state) => state.loadprofile.data || [])
    console.log("loadProfileData",loadProfileData)

    // const fetchUserData = async () => {
    //     try {
    //         const token = localStorage.getItem('Token');
    //         const response = await axios.get('http://localhost:5050/api/user/signup/profile', {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });
    //         setUserData(response.data);
    //     } catch (error) {
    //         console.error('Error fetching user data:', error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const fetchLoginUserData = async () => {
        try {
            const token = localStorage.getItem('Token') || localStorage.getItem('googleToken') 
            // || localStorage.getItem('googleToken');
            console.log("token in profile page",token)

            if (!token) {
                throw new Error('No token found! Please log in.');
            }
            dispatch(loadProfileInitiate(token))

            // const response = await axios.get('http://localhost:5050/api/user/signin/profile', {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // });
            // console.log("api response",response.data)
            // setUserDataOne(response.data);
        } catch (error) {
            console.error('Error fetching login user data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(()=>{
        const profileData = loadProfileData?.data
        if(loadProfileData?.data){
            setUserDataOne(loadProfileData?.data);
            console.log("profileData",profileData)
        }

    },[loadProfileData])

    const handleLogout = () => {
        console.log("Logout button clicked");
        
       
        localStorage.removeItem("Token");
        localStorage.removeItem("googleToken");
        
        
        localStorage.clear();
        
         
        navigate('/');
    };

    useEffect(()=>{
        // if(userData){
        //   const userName = userData.name
        //   setName(userName)
        // }
        // else
        if(userDataOne){
          const userName = userDataOne.name
          setName(userName)
        
        }
        
          },[])
        
          const getAvatarColor = (name) => { 
            if (!name) return teal[500]; 
          
            const firstChar = name.charAt(0).toUpperCase();
            console.log("name",firstChar)
            
            if (firstChar >= 'A' && firstChar <= 'I') {
              return deepOrange[500];   
            } else if (firstChar >= 'J' && firstChar <= 'R') {
              return deepPurple[500];   
            } else {
              return teal[500];        
            }
          };
          
        
          const handleNavigateOrders = () => {
            navigate('/orderdetails')
          }
        
          const handleNavigateWishlist = () => {
            navigate('/wishlist')
          }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <Controls.Grid
                container
                justifyContent="center"
                sx={{
                    height: '100vh',
                    overflow: 'hidden',
                    backgroundImage: 'url("https://static.lightxeditor.com/assets/images/profile-right-shadow.svg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                }}
            >
                <Controls.Grid item xs={12}>
                    <Controls.Grid
                        container
                        item
                        sx={{
                            height: '100%',
                            display: {xs:"block",sm:'flex'},
                            alignItems: 'top',
                            justifyContent: {xs:"center",sm:'space-between'},
                            zIndex: 2,
                            margin: 'auto',
                            position: "absolute"
                        }}
                    >
                        <Controls.Grid item xs={12} sm={4} md={3}sx={{ order:{xs:2,sm:1},border: "1px solid lightgray", paddingX: "20px", paddingY: "50px", boxShadow: "2px 2px 5px rgba(0, 0, 2, 0.3)" }} mb={{xs:2,sm:0}}>
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
              <Controls.Grid item sx={{}} >
                <Controls.Typography variant="h3" sx={{ fontSize: { xs: '20px' } ,cursor:"pointer"}} mt={4} onClick={handleNavigateOrders}>
                  Your orders
                </Controls.Typography>
              </Controls.Grid>

              <Controls.Grid item>
                <Controls.Divider />
              </Controls.Grid>
            </Controls.Grid>
            <Controls.Grid item container gap={2} sx={{ display: 'flex', flexDirection: 'column' }} >
              <Controls.Grid item sx={{}}>
                <Controls.Typography variant="h3" sx={{ fontSize: { xs: '20px' },cursor:"pointer" }} mt={4} onClick={handleNavigateWishlist}>
                  Wishlist
                </Controls.Typography>
              </Controls.Grid>

              <Controls.Grid item>
                <Controls.Divider />
              </Controls.Grid>
            </Controls.Grid>
                            <Controls.Grid item container gap={2} sx={{ display: 'flex', flexDirection: 'column' }} >
                                <Controls.Grid item>
                                    <Controls.Typography variant="h3" sx={{ fontSize: { xs: '20px' } ,cursor:"pointer"}} mt={4} onClick={handleLogout}>
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
                            xs={12} sm={8}md={9}
                            sx={{
                                margin: "auto",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                                display: "flex",
                                flexDirection: "column",
                                order:{xs:1,sm:2},
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
                              <Controls.Avatar sx={{ bgcolor: getAvatarColor(userDataOne?.name), color: "white", width: 60, height: 60 }}>
                              {(userDataOne ? userDataOne.name.charAt(0) :"").toUpperCase()}
</Controls.Avatar>
                            </Controls.Grid>
                            <Controls.Grid item>
                                <Controls.Typography variant="h4">
                                    {userDataOne ? (userDataOne.name || userDataOne.username) : "No User"}
                                </Controls.Typography>
                            </Controls.Grid>
                        </Controls.Grid>
                    </Controls.Grid>
                </Controls.Grid>
            </Controls.Grid>
        </>
    );
};

export default MyProfileComponent;
