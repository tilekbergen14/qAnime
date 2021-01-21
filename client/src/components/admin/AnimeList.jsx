import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import  DeleteIcon  from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import { deleteAnime } from "../../actions/animes"
import { useHistory} from "react-router-dom"

const useStyles = makeStyles({
  table: {
    maxWidth: "100%",
  },
  listBox: {
    maxHeight: "85%",
    overflowY: "Scroll"
},
});

export default function AnimeList() {
  const animes = useSelector(state => state.animes)
  const classes = useStyles();
  const dispatch = useDispatch()
  const history = useHistory()
  
  const handleDelete = (id) => {
    dispatch(deleteAnime(id))
  }

  const handleUpdate = (id) => {
    dispatch({type: "SET_CURRENT_ANIME_ID", payload: id})
    history.push("/createanime/")
  }

  return (
    <TableContainer component={Paper} className={classes.listBox}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Anime</TableCell>
            <TableCell align="right">Slug</TableCell>
            <TableCell align="right">Update</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {animes.map((anime) => (
            <TableRow key={anime._id}>
              <TableCell component="th" scope="row">
                {anime.name}
              </TableCell>
              <TableCell align="right">{anime.slug}</TableCell>
              <TableCell align="right"><IconButton onClick={() => handleUpdate(anime._id)}><EditIcon /></IconButton></TableCell>
              <TableCell align="right"><IconButton onClick={() => handleDelete(anime._id)}><DeleteIcon /></IconButton></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}