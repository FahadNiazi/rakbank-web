import { Box, Divider, Grid, makeStyles } from "@material-ui/core";
import login from "../../assets/login.png";
import loginDark from "../../assets/login-dark.png";
import SwitchButton from "../../components/switchButton";
import { SignInForm } from "../../components/signIn-form";
import { SignInWithGoogle } from "../../components/signInWithGoogle";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    padding: 60,
    justifyContent: "center",
    height: "100vh",
  },
  logo: {
    color: "#f05a4f",
    fontSize: 16,
    fontWeight: 700,
  },

  continueButton: {
    backgroundColor: "#f05a4f",
    color: "white",
    textTransform: "capitalize",
    width: "80%",
  },

  borderRadius: {
    borderRadius: 10,
    textTransform: "capitalize",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundImage: `url(${login})`,
  },
  backgroundGradient: {
    background: "linear-gradient(#fcdffd,#fff,#ddeaee ,#fbdcff)",
    padding: 40,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  backgroundGradientDark: {
    background:
      "linear-gradient(213deg, #482455, rgba(255,0,0,0) 39.71%),linear-gradient(127deg, #18083b, rgba(0,255,0,0) 70.71%),linear-gradient(336deg, #18083b, #18083b 70.71%)",
    padding: 40,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  backgroundColor: {
    backgroundColor: "#e1eafd",
  },
  backgroundColorDark: {
    backgroundColor: "#4a3d67",
  },
  displayFlex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  dividerInLight: {
    marginTop: 20,
    backgroundColor: "grey",
  },
  dividerInDark: {
    marginTop: 20,
    backgroundColor: "#64568b",
  },
  orStylingLight: {
    textAlign: "center",
    color: "black",
  },
  orStylingDark: {
    textAlign: "center",
    color: "#64568b",
  },
}));

export const LoginForm = () => {
  const theme = useSelector((state) => state.theme.value);
  const classes = useStyles();
  return (
    <Box
      className={
        theme === "light"
          ? classes.backgroundColor
          : classes.backgroundColorDark
      }
    >
      <Box className={classes.container}>
        <Grid item lg={7}>
          <img
            className={classes.backgroundImage}
            src={theme === "light" ? login : loginDark}
            alt=""
          />
        </Grid>
        <Grid
          item
          lg={4}
          className={
            theme === "light"
              ? classes.backgroundGradient
              : classes.backgroundGradientDark
          }
        >
          <Box className={classes.displayFlex}>
            <Box className={classes.logo}>Travelguru</Box>
            <SwitchButton />
          </Box>
          <Divider
            className={
              theme === "light" ? classes.dividerInLight : classes.dividerInDark
            }
          />
          <SignInForm />
          <Box
            my={3}
            className={
              theme === "light" ? classes.orStylingLight : classes.orStylingDark
            }
          >
            -OR-
          </Box>
          <Box my={3}>
            <SignInWithGoogle />
          </Box>
          <Grid item lg={1}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};
