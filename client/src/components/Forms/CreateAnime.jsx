import React, { useState, useEffect } from "react";
import { Paper, Grid, Button, Select, MenuItem, TextField } from "@material-ui/core";
import FileBase64 from "react-file-base64"
import { useDispatch, useSelector } from "react-redux"
import { createAnime, updateAnime } from "../../actions/animes"
import { Link } from "react-router-dom"

export default function CreateAnime() {
  const [state, setState] = useState({ name: "", slug: "", year: "", tags: "", description: "", completed: false, genres: "", img: ""})
  const dispatch = useDispatch()
  const currentId = useSelector(state => state.currentACId)
  const anime = useSelector(state => currentId ? state.animes.find(anime => anime._id === currentId) : null)
  
  useEffect(() => {
    if(anime) return setState(anime)
  }, [anime])

  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault()
    anime ? dispatch(updateAnime(state)): dispatch(createAnime(state))
    setState({ name: "", slug: "", year: "", tags: "", description: "", completed: false, genres: "", img: "" })
    dispatch({type: "DELETE_CURRENT_ANIME_ID"})
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
                  <TextField value={state.slug} name="slug" onChange={handleChange} style={{textTransform: "capitalize"}} fullWidth id="standard-input" label="slug"/>
                  <TextField value={state.year} name="year" onChange={handleChange} style={{textTransform: "capitalize"}} fullWidth id="standard-input" label="year"/>
                  <TextField value={state.tags} name="tags" onChange={handleChange} style={{textTransform: "capitalize"}} fullWidth id="standard-input" label="tags"/>
                  <TextField value={state.description} name="description" onChange={handleChange} style={{textTransform: "capitalize"}} fullWidth id="standard-input" label="description"/>
                  <Select labelId="demo-simple-select-label" id="demo-simple-select" name="completed" value={state.completed} onChange={handleChange}>
                    <MenuItem value={true}>Completed</MenuItem>
                    <MenuItem value={false}>Ongoing</MenuItem>
                  </Select>
              </Grid>
              </Grid>
              <Grid item xs={11} sm={5} style={{ height: "80vh" }}>
                <Grid container direction="column" justify="space-around" style={{ height: "100%" }}>
                  <TextField value={state.genres} name="genres" onChange={handleChange} style={{textTransform: "capitalize"}} fullWidth id="standard-input" label="genres"/>
                  <FileBase64 multiple={false} onDone={({base64}) => setState({...state, img: base64})}/>
                  <Grid item>
                    <Button fullWidth type="submit" variant="contained" color="primary">{anime ? "update" : "add"}</Button><br/>
                    <Link to="/admin/"><Button onClick={() => dispatch({type: "DELETE_CURRENT_ANIME_ID"})} fullWidth variant="contained" color="secondary" style={{marginTop: 40}}>Back to admin page</Button></Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}
