import { styled } from "@mui/material";
import { motion } from "framer-motion"

export const Menu = styled(motion.header)(({theme}) => ({
    display: "flex",
    backgroundColor: "#fff",
    width: "100%",
    paddingBlock: 10,
    borderBottom: "1px solid #e5e7eb",
    position: "sticky",
    top: 0,
    justifyContent: "space-between",
    alignItems: "center",

    '.content': {
        flexDirection: "row",
        gap: 10,
        paddingInline: 20,

        '& h5': {
            fontWeight: 600,
            color: "#6b7280"
        },

        [theme.breakpoints.down('sm')]: {
            '& h5':{
                fontSize: 0,
            }
        },
    },

    '.searchField': {
        maxWidth: 200,
        backgroundColor: "#f9fafb",
        borderRadius: "50px",
        "& .MuiOutlinedInput-root": {
            borderRadius: "50px",
            paddingRight: 0,
        },
    },

    '.notification': {
        padding: "0px !important",
        border: "0.5px #6b7280 solid",
        borderRadius: 10,
        color: "#6b7280"
    }
}))

export const SideBar = styled(motion.div)(({theme}) => ({
    backgroundColor: "#fff",
    height: "100vh",
    borderRight: "1px solid #e5e7eb",
    overflowX: "hidden",
    position: "fixed",
    zIndex: 1,
  
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",


    ".logoContainer": {
        flexDirection: "row",
        alignItems: "center",
        gap: "0.75rem",
    },

    ".logoIcon": {
        width: "25px",
        height: "25px",
        borderRadius: "50%",
        backgroundColor: "#422680",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 auto"
    },

    '& .MuiListItemIcon-root': {
        minWidth: "25px",
    },

    [theme.breakpoints.down('md')]:{
     justifyContent: "space-around",
    }

    
}))