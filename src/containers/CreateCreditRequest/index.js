import React from 'react'
import { CreateCreditRequest } from './Components/CreateCreditRequest';

const CreateCredit = props => {
  console.log('create credit request', props)
  return (
    <div>
      <CreateCreditRequest 
      {...props}/>
    </div>
  )
}

export default CreateCredit
