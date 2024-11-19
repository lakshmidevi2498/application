import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { LinearProgress, Typography } from '@mui/material';
import Controls from '../commons/Controls';
import theme from '../utilities/theme';


const OrderStatusComponent = ({ order, ordered, responseData }) => {
    console.log("shippingStatus", order)
    console.log("responseDatashippingStatus", responseData)
    const [orderedDate, setOrderedDate] = useState(null)
    const [dispatchDate, setDispatchDate] = useState(null)
    const [shippedDate, setShippedDate] = useState(null)
    const [outforDate, setOutforDate] = useState(null)
    const [deliveredDate, setDeliveredDate] = useState(null)
    const [cancelDate, setCancelDate] = useState(null)
    const [cancelledReason, setCancelledReason] = useState(null)
    const [cancel, setCancel] = useState(null)
    useEffect(() => {
        if (order) {
            setOrderedDate(order.oderHistoryDate || null)
            setDispatchDate(order.dispatchedDate || null)
            setShippedDate(order.shippedDate || null)
            setOutforDate(order.outfordeliveryDate || null)
            setDeliveredDate(order.deliveredDate || null)
            // setCancelDate(order.cancelledDate || null)
            setCancelledReason(order.cancelledReason || null)

        }


    }, [order])
    useEffect(() => {
        if (order && order.cancelledDate) {
            setCancelDate(order.cancelledDate);
        }
    }, [order]);

    // useEffect(() => {
    //     if (responseData?.data?.updated) {
    //         const progress = responseData.data.updated.orderedStatus;
    //         console.log("progress", progress); // This should now log the orderedStatus correctly
    //         localStorage.setItem("cancel", progress); // Store the status in localStorage
    //     }
    // }, [responseData]);
    //     useEffect(() => {
    //         const cancell = localStorage.getItem("cancel")
    //         setCancel(cancell)
    // console.log("cancell",cancell)  
    //     }, [])


    const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
            top: 18,
            [theme.breakpoints.up('sm')]: {
                top: 25,
            },
        },
        [`&.${stepConnectorClasses.active}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                backgroundColor: '#13ed4d',
                // width: {xs:'40px'}, 
            },
        },
        [`&.${stepConnectorClasses.completed}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                backgroundColor: '#13ed4d',
                // width: {xs:'40px'},  
            },
        },
        [`& .${stepConnectorClasses.line}`]: {
            height: 3,
            border: 0,
            borderRadius: 1,
            // backgroundColor: "#eaeaf0",
            backgroundColor: order.orderedStatus === "cancelled" ? "red" : "#eaeaf0",
            // width: {xs:'40px'},  
        },
    }));




    const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
        backgroundColor: ownerState.completed || ownerState.active ? '#13ed4d' : order.orderedStatus === "cancelled" ? "red" : '#ccc',
        zIndex: 1,
        color: '#fff',
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: ownerState.active ? '0 4px 10px 0 rgba(0,0,0,.25)' : 'none',
        // marginTop: '10px',

        padding: theme.spacing(1),
        // width: 30,
        // height: 30,

        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(2),
            // width: 50,
            // height: 50,
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(1),
        },
    }));


    function ColorlibStepIcon(props) {
        const { active, completed, icon } = props;


        const icons = {
            1: <Controls.ShoppingCartRoundedIcon sx={{ fontSize: { xs: 20, sm: 30 } }} />,
            2: <Controls.CancelIcon sx={{ fontSize: { xs: 20, sm: 30 } }} />,
            3: <GroupAddIcon sx={{ fontSize: { xs: 20, sm: 30 } }} />,
            4: <Controls.LocalShippingIcon sx={{ fontSize: { xs: 20, sm: 30 } }} />,
            5: <VideoLabelIcon sx={{ fontSize: { xs: 20, sm: 30 } }} />,
            6: <Controls.CheckCircleRoundedIcon sx={{ fontSize: { xs: 20, sm: 30 } }} />,
        };


        if (order?.orderedStatus === "cancelled") { 
            delete icons[3];
            delete icons[4];
            delete icons[5];
            delete icons[6];
        } else {

            icons[2] = icons[3];
            icons[3] = icons[4];
            icons[4] = icons[5];
            icons[5] = icons[6];
            delete icons[6]; 
        }


        return (
            <ColorlibStepIconRoot ownerState={{ completed, active }}>
                {icons[String(icon)]}
            </ColorlibStepIconRoot>
        );
    }


    ColorlibStepIcon.propTypes = {
        /**
         * Whether this step is active.
         * @default false
         */
        active: PropTypes.bool,
        className: PropTypes.string,
        /**
         * Mark the step as completed. Is passed to child components.
         * @default false
         */
        completed: PropTypes.bool,
        /**
         * The label displayed in the step icon.
         */
        icon: PropTypes.node,
    };
    const steps = ['Order_Placed', 'Dispatched', 'Shipped', 'Out_for_Delivery', 'Delivered'];
    const dates = [orderedDate, dispatchDate, shippedDate, outforDate, deliveredDate]

    const steps2 = ['Order Confirmed', ' Order Cancelled'];
    const dates2 = [orderedDate, cancelDate]
    const reason = ["", cancelledReason]

    const statusMessages = {
        'order_placed': 'Your order has been placed.',
        'dispatched': 'Your order has been dispatched.',
        'shipped': 'Your order is on the way!',
        'out_for_delivery': 'Your order is out for delivery.',
        'delivered': 'Your order has been delivered.',

    };
    const displayCancelDate = order?.cancelledDate || cancelDate;
    console.log("displayCancelDate", displayCancelDate)

    const currentStepIndex = steps.findIndex(step => step.toLowerCase() === order?.shippingStatus);
    const isCancelled = cancel === 'cancelled';

    return (
        <Controls.Grid container direction="column" spacing={2}>
            <Controls.Grid item>
                <Typography variant="caption1" sx={{ color: theme.palette.one.bg, fontSize: { xs: "13px", sm: '15px' }, fontWeight: "bold" }}>
                    Shipping Status: {statusMessages[order.shippingStatus]}
                    {order.shippingStatus === "cancelled" && (
                        <>
                            your Order Cancelled by you on{" "}
                            {new Date(displayCancelDate).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            })}
                        </>
                    )}
                </Typography>
            </Controls.Grid>

            <Controls.Grid item xs={12}>
                {!cancelDate ?
                    (<Stack sx={{ width: '100%' }}>
                        <Stepper alternativeLabel activeStep={currentStepIndex} connector={<ColorlibConnector />}>
                            {steps.map((label, index) => (
                                <Step key={label}>
                                    <StepLabel
                                        StepIconComponent={(props) => (
                                            <ColorlibStepIcon
                                                {...props}
                                                active={index === currentStepIndex}
                                                completed={index < currentStepIndex}
                                            />
                                        )}
                                    >
                                        {(
                                            <Typography
                                                variant="caption1"
                                                sx={{ color: index <= currentStepIndex ? 'green' : 'gray', fontSize: { xs: "10px", sm: "16px" } }}
                                            >
                                                {label}{""}{reason[index]}
                                            </Typography>
                                        )
                                        }
                                        <Controls.Grid item>
                                            {dates[index] && (
                                                <Typography variant="caption1" sx={{ fontSize: { xs: "9px", sm: "16px" } }}>
                                                    {(
                                                        new Date(dates[index]).toLocaleDateString("en-US", {
                                                            year: "numeric",
                                                            month: "short",
                                                            day: "numeric",
                                                        })
                                                    )}

                                                </Typography>
                                            )}
                                        </Controls.Grid>
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Stack>) : (
                        <Stack sx={{ width: '100%' }}>
                            <Stepper alternativeLabel activeStep={0} connector={<ColorlibConnector />}>
                                {steps2.map((label, index) => (
                                    <Step key={label}>
                                        <StepLabel
                                            StepIconComponent={(props) => (
                                                <ColorlibStepIcon
                                                    {...props}
                                                    active={index === 0} // Check if the current step is active
                                                    completed={index < 1}
                                                />
                                            )}
                                        >
                                            {(
                                                <Typography
                                                    variant="caption1"
                                                    sx={{ color: index === 0 ? 'green' : 'red', fontSize: { xs: "10px", sm: "16px" } }}
                                                >
                                                    {label}{""}
                                                </Typography>
                                            )
                                            }
                                            <Controls.Grid item>
                                                {reason[index] && (
                                                    <Controls.Grid item >
                                                        <Controls.Typography variant="caption1" sx={{ fontSize: { xs: "9px", sm: "16px" }, color: "red" }}>
                                                            {reason[index]} {/* Display reason */}
                                                        </Controls.Typography>
                                                    </Controls.Grid>
                                                )}
                                                {dates2[index] && (
                                                    <Typography variant="caption1" sx={{ fontSize: { xs: "9px", sm: "16px" } }}>
                                                        {(cancelDate && index === 1) ? (
                                                            new Date(cancelDate).toLocaleDateString("en-US", {
                                                                year: "numeric",
                                                                month: "short",
                                                                day: "numeric",
                                                            })
                                                        ) : (
                                                            new Date(dates[index]).toLocaleDateString("en-US", {
                                                                year: "numeric",
                                                                month: "short",
                                                                day: "numeric",
                                                            })
                                                        )}

                                                    </Typography>
                                                )}

                                            </Controls.Grid>
                                        </StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Stack>
                    )}
            </Controls.Grid>
        </Controls.Grid>
    );
};

export default OrderStatusComponent;