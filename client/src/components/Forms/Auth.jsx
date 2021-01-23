import React, {useState} from 'react'
import { Avatar, Button, Grid, Paper, Typography, Container, TextField } from "@material-ui/core"
import useStyles from "./style"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Input from "./Input"
import { GoogleLogin} from "react-google-login"
import Icon from "./Icon"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

export default function Auth() {
  const classes = useStyles()
  const [showPassword, setShowPassword] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()
  const handleChange = () => {

  }

  const onSubmit = () => {

  }

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword )
  }
 
  const switchMode = () => {
    setIsSignUp((prevState) => !prevState)
    handleShowPassword(false)
  }
  const googleSuccess = async (res) => {
    const result = res?.profileObj
    const token = res?.tokenId
    dispatch({type: "AUTH", data: {result, token}})
    history.push("/")
  }
  const googleFailure = (error) => {
    console.log(error)
    console.log("Google sign in was unsaccesfull")
  }
  return (
    <Container component="main" maxWidth="xs" style={{paddingTop: 50}}>
      <Paper className={classes.paper} elavation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">
          {isSignUp ? "Sign In" : "Sign Up"}
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <Grid container spacing={2}>
            {
              isSignUp && <>
                <Input name="firstName" label="First name" handleChange={handleChange} autoFocus half/>
                <Input name="lastName" label="Last name" handleChange={handleChange} half/>
              </>
            }
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input handleShowPassword={handleShowPassword} name="password" label="Password" handleChange={handleChange} type={showPassword ? "text": "password"} />
            {isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange}/>}
         </Grid>
         <Button type="submit" fullWidth color="primary" variant="contained" className={classes.submit}>{isSignUp ? "Sign Up" : "Sign In"}</Button>
         <GoogleLogin 
            clientId="1043294480977-hvdor303t5v0g985mka3eu8evm7g53v9.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="secondary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} variant="contained" startIcon={<Icon />}>Google Sign In</Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
              <Button onClick={switchMode}>
                {isSignUp ? "Already have an account?" : "Create account"}
              </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}
