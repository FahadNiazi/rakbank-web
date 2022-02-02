import { Box, Divider, Grid, makeStyles } from "@material-ui/core";
import login from "../../assets/login.png";
import SwitchButton from "../../components/switchButton";
import { SignInForm } from "../../components/signIn-form";
import { SignInWithGoogle } from "../../components/signInWithGoogle";
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
  backgroundColor: {
    backgroundColor: "#e1eafd",
  },
  displayFlex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  divider: {
    marginTop: 20,
  },
}));
export const LoginForm = () => {
  const classes = useStyles();
  return (
    <Box className={classes.backgroundColor}>
      <Box className={classes.container}>
        <Grid item lg={7}>
          <img className={classes.backgroundImage} src={login} alt="" />
        </Grid>
        <Grid item lg={4} className={classes.backgroundGradient}>
          <Box className={classes.displayFlex}>
            <Box className={classes.logo}>Travelguru</Box>
            <SwitchButton />
          </Box>
          <Divider className={classes.divider} />
          <SignInForm />
          <Box my={3} style={{ textAlign: "center" }}>
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
