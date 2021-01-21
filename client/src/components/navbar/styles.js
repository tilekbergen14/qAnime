import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        color: "#011e20",
    },
    loginBtn: {
        fontWeight: 600,
    },
    list: {
        width: 250,
        backgroundColor: "#55cbb3",
        height: "100%",
      },
}))

export default useStyles