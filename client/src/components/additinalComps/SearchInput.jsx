import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from "@material-ui/core"
import useStyles from "./searchStyles"

export default function SearchInput() {
    const classes = useStyles()
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon style={{cursor: "pointer"}}/>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
    )
}
