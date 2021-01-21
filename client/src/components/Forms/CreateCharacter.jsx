import React, { useState, useEffect } from "react";
import { Paper, Grid, Button, TextField } from "@material-ui/core";
import FileBase64 from "react-file-base64"
import { useDispatch, useSelector } from "react-redux"
import { createCharacter } from "../../actions/characters"
import { Link } from "react-router-dom"
import { updateCharacter } from "../../actions/characters"

export default function CreateCharacter() {
  const [state, setState] = useState({ name: "", anime: "", description: "", img: ""})
  const dispatch = useDispatch()
  const characterId = useSelector(state => state.currentACId)
  const character = useSelector(state => characterId ? state.characters.find(character => character._id === characterId) : null)
  
  useEffect(() => {
    if(character) return setState(character)
  }, [character])

  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(character) return dispatch(updateCharacter(state))
    dispatch(createCharacter(state))
  }
  return (
    <div style={{ marginTop: 100 }}>
      <Grid item xs={11} md={10} style={{ margin: "auto", height: "80vh" }}>
        <Paper elevation={3}>
          <form outlined="true" autoComplete="off" onSubmit={onSubmit}>
            <Grid container justify="center" spacing={4} style={{ height: "80vh" }}>
              <Grid item xs={11} sm={5}>
                <Grid container direction="column" justify="space-around" style={{ height: "100%" }}>
                  <TextField value={state.name} name="name" onChange={handleChange} style={{textTransform: "capitalize"}} fullWidth id="standard-input" label="name"/>
                  <TextField value={state.description} name="description" onChange={handleChange} style={{textTransform: "capitalize"}} fullWidth id="standard-input" label="description"/>
                  <TextField value={state.anime} name="anime" onChange={handleChange} style={{textTransform: "capitalize"}} fullWidth id="standard-input" label="anime"/>
                  <FileBase64 multiple={false} onDone={({base64}) => setState({...state, img: base64})}/>
              </Grid>
              </Grid>
              <Grid item xs={11} sm={5}>
                <Grid container direction="column" justify="center" style={{height: "100%"}}>
                    <Button onClick={onSubmit} variant="contained" color="primary" style={{marginBottom: 40}}>{character ? "Update character" : "Create Character"}</Button>
                    <Link to="/admin/"><Button onClick={() => dispatch({type: "DELETE_CURRENT_CHARACTER_ID"})} fullWidth variant="contained" color="secondary" style={{marginBottom: 40}}>Back to the Admin page</Button></Link>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}
