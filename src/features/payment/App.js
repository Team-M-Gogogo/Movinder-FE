import React from 'react'
import { render } from 'react-dom'
import Card from 'react-credit-cards'
import './styles.css'
import { useNavigate } from "react-router-dom";
import { postBooking } from "../../api/movies";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from './utils'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import 'react-credit-cards/es/styles-compiled.css'

export default class App extends React.Component {
  state = {
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
    formData: null
  }

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer })
    }
  }

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    })
  }

  handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value)
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value)
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value)
    }

    this.setState({ [target.name]: target.value })
  }
 
  handleSubmit = e => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    e.preventDefault()
    const booking = {
        "customerId": "63a17b96630a66688ff94ac5",
        "movieSessionId": "63a2becef3d6432b35f2c80a",
        "ticketRequestItems": [
            {
                "item": "adult",
                "quantity": 1
            },
            {
                "item": "student",
                "quantity": 1
            }
        ],
        "foodRequestItems": [
            {
                "item": "63a27f882f79dc66649c430b",
                "quantity": 1
            }
        ],
        "seatingRequests":[
            {
                "row": 2,
                "column": 1
            },
            {
                "row": 2,
                "column": 0
            }
        ]
    };
    
    postBooking(booking).then(response =>{
        console.log(response);
    });
    alert('You have finished payment!');
    //this.form.reset()

    <Link to='/tickets'></Link>
  }

  render () {
    const { name, number, expiry, cvc, focused, issuer } = this.state

    return (
      <div key='Payment'>
        <div className='App-payment'>
          <h1>Enter your payment details</h1>
          <h4>please input your information below</h4>
          <Card
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <small>Name on card:</small>

              <input
                type='text'
                name='name'
                className='form-control'
                placeholder='Name'
                pattern='[a-z A-Z-]+'
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className='form-group'>
              <small>Card Number:</small>

              <input
                type='tel'
                name='number'
                className='form-control'
                placeholder='Card Number'
                pattern='[\d| ]{16,22}'
                maxLength='19'
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>

            <div className='form-group'>
              <small>Expiration Date:</small>

              <input
                type='tel'
                name='expiry'
                className='form-control'
                placeholder='Valid Thru'
                pattern='\d\d/\d\d'
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className='form-group'>
              <small>CVC:</small>

              <input
                type='tel'
                name='cvc'
                className='form-control'
                placeholder='CVC'
                pattern='\d{3}'
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <input type='hidden' name='issuer' value={issuer} />
            <div className='form-actions'>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
