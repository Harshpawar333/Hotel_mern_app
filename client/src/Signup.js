import { useState } from 'react'
import axios from 'axios'
import './App.css'

console.log(1)
setTimeout(function () {
  console.log(2)
}, 2000)
console.log(3)
console.log(4)
console.log(5)

function Signup() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [firstNameErr, setFirstNameErr] = useState(false)
  const [lastNameErr, setLastNameErr] = useState(false)
  const [emailErr, setEmailErr] = useState(false)
  const [addressErr, setAddressErr] = useState(false)
  const [mobileNumberErr, setMobileNumberErr] = useState(false)
  const [passwordErr, setPasswordErr] = useState(false)
  const [passwordInput, setPasswordInput] = useState('password')
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(false)
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  function toggleShowPassword() {
    if (passwordInput === 'password') {
      setPasswordInput('text')
    } else {
      setPasswordInput('password')
    }
  }
  function resetForm() {
    setFirstName('')
    setLastName('')
    setEmail('')
    setAddress('')
    setMobileNumber('')
    setPassword('')
    setConfirmPassword('')
    setFirstNameErr(false)
    setLastNameErr(false)
    setEmailErr(false)
    setAddressErr(false)
    setMobileNumberErr(false)
    setPasswordErr(false)
    setConfirmPasswordErr(false)
  }

  async function handleSubmit() {
    if (firstName === '') {
      setFirstNameErr(true)
    } else {
      setFirstNameErr(false)
    }
    if (lastName === '') {
      setLastNameErr(true)
    } else {
      setLastNameErr(false)
    }
    if (!email.match(mailformat)) {
      setEmailErr(true)
    } else {
      setEmailErr(false)
    }
    if (address === '') {
      setAddressErr(true)
    } else {
      setAddressErr(false)
    }
    if (mobileNumber.length !== 10) {
      setMobileNumberErr(true)
    } else {
      setMobileNumberErr(false)
    }
    if (password.length < 8) {
      setPasswordErr(true)
    } else {
      setPasswordErr(false)
    }
    if (password !== confirmPassword) {
      setConfirmPasswordErr(true)
    } else {
      setConfirmPasswordErr(false)
    }
    if (
      firstName !== '' &&
      lastName !== '' &&
      email.match(mailformat) &&
      address !== '' &&
      mobileNumber.length === 10 &&
      password.length > 8 &&
      password === confirmPassword
    ) {
      let formdata = {
        firstName,
        lastName,
        email,
        address,
        mobileNumber,
        password,
      }
      let userData = axios.post('http://localhost:5000/user/signup', {
        formdata,
      })
      console.log(userData)
      // window.location.href = '/login'
    }
  }
  function jumptologin() {
    if (
      firstName !== '' &&
      lastName !== '' &&
      email.match(mailformat) &&
      address !== '' &&
      mobileNumber.length === 10 &&
      password.length > 8 &&
      password === confirmPassword
    ) {
      window.location.href = '/login'
    }
  }

  // async function printData() {
  //   let userData = axios.get('http://localhost:5000/user')
  //   console.log(userData)
  // }
  // printData()

  return (
    <div className="app">
      <div className="container customContainer text-left">
        <h1 className="text-center">Sign-up</h1>
        <form>
          <div class="py-4 pt-0 row">
            <label for="inputPassword" class="col-sm-3 col-form-label">
              First Name
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                placeholder="First Name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
              {firstNameErr && (
                <span className="text-danger text-left posAbsolute">
                  invalid first name
                </span>
              )}
            </div>
          </div>
          <div class="py-4 pt-0 row">
            <label for="inputPassword" class="col-sm-3 col-form-label">
              Last Name
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                placeholder="Last Name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
              {lastNameErr && (
                <span className="text-danger text-left posAbsolute">
                  invalid last name
                </span>
              )}
            </div>
          </div>
          <div class="py-4 pt-0 row">
            <label for="inputPassword" class="col-sm-3 col-form-label">
              Email Address
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                placeholder="email@abc.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              {emailErr && (
                <span className="text-danger text-left posAbsolute">
                  invalid email Address
                </span>
              )}
            </div>
          </div>
          <div class="py-4 pt-0 row">
            <label for="inputPassword" class="col-sm-3 col-form-label">
              Address
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                placeholder="Enter your address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
              {addressErr && (
                <span className="text-danger text-left posAbsolute">
                  invalid Address
                </span>
              )}
            </div>
          </div>
          <div class="py-4 pt-0 row">
            <label for="inputPassword" class="col-sm-3 col-form-label">
              Mobile Number
            </label>
            <div class="col-sm-9">
              <input
                type="number"
                class="form-control"
                placeholder="1234567890"
                value={mobileNumber}
                onChange={(event) => setMobileNumber(event.target.value)}
              />
              {mobileNumberErr && (
                <span className="text-danger text-left posAbsolute">
                  invalid Mobile number
                </span>
              )}
            </div>
          </div>
          <div class="py-4 pt-0 row">
            <label for="inputPassword" class="col-sm-3 col-form-label">
              Password
            </label>
            <div class="col-sm-9">
              <input
                type={passwordInput}
                minlength="8"
                required
                class="form-control"
                placeholder="Enter Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <input type="checkbox" onClick={toggleShowPassword} />
              <b1> Show Password</b1>
              {passwordErr && (
                <span className="text-danger text-left posAbsolute">
                  password strength must be greater than 8
                </span>
              )}
            </div>
          </div>
          <div class="py-4 pt-0 row">
            <label for="inputPassword" class="col-sm-3 col-form-label">
              Confirm Password
            </label>
            <div class="col-sm-9">
              <input
                type={passwordInput}
                minlength="8"
                required
                class="form-control"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
              {confirmPasswordErr && (
                <span className="text-danger text-left posAbsolute">
                  Entered password must be same as above
                </span>
              )}
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <a type="button" className="btn btn-primary" onClick={handleSubmit}>
              Signup
            </a>
            <button type="button" className="btn btn-link" onClick={resetForm}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Signup
