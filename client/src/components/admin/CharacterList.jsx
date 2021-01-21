import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton} from '@material-ui/core';
import  DeleteIcon  from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import { deleteCharacter } from "../../actions/characters"
import { Link } from "react-router-dom"

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
  const characters = useSelector(state => state.characters)
  const classes = useStyles();
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteCharacter(id))
  }

  const handleCurrentChId = (id) => {
    dispatch({type: "SET_CURRENT_CHARACTER_ID",payload: id})
  }

  return (
    <TableContainer component={Paper} className={classes.listBox}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Character</TableCell>
            <TableCell align="right">Anime</TableCell>
            <TableCell align="right">Update</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {characters.map((character) => (
            <TableRow key={character._id}>
              <TableCell component="th" scope="row">
                {character.name}
              </TableCell>
              <TableCell align="right">{character.anime}</TableCell>
              <TableCell align="right"><Link to="/createcharacter/"><IconButton onClick={() => handleCurrentChId(character._id)}><EditIcon /></IconButton></Link></TableCell>
              <TableCell align="right"><IconButton onClick={() => handleDelete(character._id)}><DeleteIcon /></IconButton></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}