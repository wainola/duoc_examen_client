import React from 'react'
import { CreateCreditRequest } from './Components/CreateCreditRequest'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { postCreditRequest } from '../../actions/index'

const CreateCredit = props => {
  console.log('create credit request', props)
  return (
    <div>
      <CreateCreditRequest 
      {...props}/>
    </div>
  )
}

function mapStateToProps({ credit }){
  return { credit }
}

function mapDistpatchToProps(dispatch){
  return bindActionCreators({ postCreditRequest }, dispatch)
}

export default connect(mapStateToProps, mapDistpatchToProps)(CreateCredit)