import React from 'react'
import PaymentsComponent from '../components/PaymentsComponent'
import NavbarComponent from '../components/NavbarComponent'
import AddressForm from '../components/AddressForm'

const PaymentPage = () => {
  return (
    <>
    <NavbarComponent value1={"none"} value5={"block"} value2={"none"} value3={"none"} value4={"none"}/>
    {/* <AddressForm/> */}
    <PaymentsComponent/>
    </>
  )
}

export default PaymentPage