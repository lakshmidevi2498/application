import React, { useState } from 'react'
import Controls from '../commons/Controls'
import NavbarComponent from './NavbarComponent'

const InnerProductsPage = () => {
    const [product, setProduct] = useState([])
    const [count, setCount] = useState(1)
    const handledecrement = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1)
        }

    }
    const handleIncrement = () => {
        if (count < 10) {
            setCount(prevCount => prevCount + 1)
        }

    }
    return (
        <>
            <NavbarComponent />
            <Controls.Grid container justifyContent="center" mt={5}>
                <Controls.Grid
                    item
                    xs={8}
                    sx={{
                        justifyContent: "center",
                        alignItems: "center", 
                    }}
                >

                    <Controls.Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={4}
                    >

                        <Controls.Grid item xs={6}>
                            <Controls.Box
                                component="img"
                                src="./assests/images/img4.jpg"
                                sx={{ width: "100%", height: "100%" }}
                            />
                        </Controls.Grid>


                        <Controls.Grid item xs={6}>
                            <Controls.Grid item>
                                <Controls.Typography variant="h4">Product Details</Controls.Typography>
                            </Controls.Grid>

                            <Controls.Grid item>
                                <Controls.Typography variant="h5">Product Price</Controls.Typography>
                            </Controls.Grid>

                            <Controls.Grid item>
                                <Controls.Typography variant="h6">Product Quantity</Controls.Typography>
                            </Controls.Grid>


                            <Controls.Grid container alignItems="center" gap={2}>
                                <Controls.Grid item onClick={handledecrement}>
                                    <Controls.Button variant="outlined">
                                        <Controls.RemoveIcon />
                                    </Controls.Button>
                                </Controls.Grid>

                                <Controls.Grid item>{count}</Controls.Grid>

                                <Controls.Grid item onClick={handleIncrement}>
                                    <Controls.Button variant="outlined">
                                        <Controls.AddIcon />
                                    </Controls.Button>
                                </Controls.Grid>
                            </Controls.Grid>
                            <Controls.Grid container justifyContent="space-between"  alignItems="center" mt={2}>
                            <Controls.Grid item xs={8} sx={{display:"flex",}} gap={3}>
                                <Controls.Grid item  >
                                    <Controls.Button variant='contained'>Add to Cart</Controls.Button>
                                </Controls.Grid>
                                <Controls.Grid item   >
                                    <Controls.Button variant='contained'>Buy now</Controls.Button>
                                </Controls.Grid>
                                </Controls.Grid>
                            </Controls.Grid>
                        </Controls.Grid>
                    </Controls.Grid>
                </Controls.Grid>
            </Controls.Grid>

        </>
    )
}

export default InnerProductsPage