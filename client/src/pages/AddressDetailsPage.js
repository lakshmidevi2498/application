import React from 'react'
import AddressForm from '../components/AddressForm'
import NavbarComponent from '../components/NavbarComponent'
import AddressDetailsComponent from '../components/AddressDetailsComponent'

const AddressDetailsPage = () => {
  return (
    <>
     <NavbarComponent value1={"block"} value5={"block"} value2={"block"} value3={"block"} value4={"block"}/>
     <AddressDetailsComponent/>
        {/* <AddressForm/> */}
    
    </>
  )
}

export default AddressDetailsPage