import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    grid: {
        padding: theme.spacing(2),
        height: "80vh",
    },
    listBox: {
        maxHeight: "40%",
        overflowY: "Scroll"
    },
    searchInput: {
        backgroundColor: "gray",
    },
    btn: {
        marginTop: theme.spacing(2),
    }
}))

export default useStyles