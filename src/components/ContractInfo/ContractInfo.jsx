import React from 'react'
import { Container } from 'react-bootstrap'

const ContractInfo = (props) => {
  
  const signedPlayer = props.playerCart;

  const total = signedPlayer.reduce((prev, curr) => {
    return prev + curr.value;
  }, 0)

  const totalCostWithVat = total + (total * 0.20); 

  return (
    <Container>
      <h6 className='mt-4'>Real Madrid Transfer Window</h6>
      <p>Number of signed player : {signedPlayer.length} </p>
      <p>Cost : {total}M$ </p>
      <hr />
      <p>Total Cost(With Vat/Tax) : {totalCostWithVat}M$ </p>
    </Container>
  )
}

export default ContractInfo