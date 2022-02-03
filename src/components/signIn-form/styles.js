import { makeStyles } from "@material-ui/core";

export const styles = {
  singInLight: {
    color: "#43436b",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 40,
  },
  singInDark: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 40,
  },
  displayFlex: {
    display: "flex",
    alignItems: "center",
    marginTop: 15,
  },
  signUpLight: {
    color: "black",
    display: "flex",
    fontSize: 12,
    fontWeight: 400,
  },
  signUpDark: {
    color: "#64568b",
    display: "flex",
    fontSize: 12,
    fontWeight: 400,
  },

  signUpColor: {
    color: "#f05a4f",
    marginLeft: 10,
    fontSize: 12,
    fontWeight: "bold",
  },
  inputBaseStyling: {
    backgroundColor: "#e5eaf7",
    border: "1px solid #e1e4f4",
    borderRadius: 8,
    color: "black",
    fontSize: 14,
    marginTop: 30,
    padding: 5,
    paddingLeft: 15,
  },
  borderRadius: {
    borderRadius: 10,
    textTransform: "capitalize",
  },
  dividerInLight: {
    marginTop: 30,
    backgroundColor: "grey",
  },
  dividerInDark: {
    marginTop: 30,
    backgroundColor: "#64568b",
  },
  disabledDark: {
    backgroundColor: "gray",
  },
};

export const useStylesSignIn = makeStyles((theme) => ({
  disabledButton: { backgroundColor: "#4a3d67 !important" },
}));
