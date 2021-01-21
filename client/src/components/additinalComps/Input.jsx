import React from 'react'
import { TextField } from "@material-ui/core"

export default function Input({label, rows}) {
    const error = false;
    return (
        <div>
            {error ? <TextField
            error
            id="standard-error-helper-text"
            label="error"
            helperText="Incorrect entry."
            fullWidth
            />: <TextField style={{textTransform: "capitalize"}} fullWidth rows={rows} id="standard-input" label={label}/>}
      </div>
    )
}
