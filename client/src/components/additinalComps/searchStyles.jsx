import { fade, makeStyles } from "@material-ui/core/styles"
const useStyles = makeStyles((theme) => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginBottom: theme.spacing(2),
      width: '100%',
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: "90%",
      marginLeft: "48px",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      transition: theme.transitions.create('width'),
      width: '90%',
    },
  }))

  export default useStyles