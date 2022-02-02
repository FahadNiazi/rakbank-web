import { Avatar, Box, Button } from "@material-ui/core";
import React from "react";
import { styles } from "./styles";
export const SignInWithGoogle = () => {
  return (
    <Box style={styles.displayFlex}>
      <Box>
        <Button
          style={styles.singWithGoogle}
          variant="contained"
          startIcon={
            <Box style={styles.signInButton}>
              <Avatar
                style={styles.googleIcon}
                src="https://www.pngkey.com/png/full/10-109089_google-logo-png-transparent-google-logo-round-png.png"
              />
            </Box>
          }
        >
          Sign in with Google
        </Button>
      </Box>
      <Box style={styles.marginLeft}>
        <Button style={styles.iconStyling}>
          <img
            style={styles.singWithFacebook}
            src="https://www.designbust.com/download/639/png/facebook_icon_transparent_png512.png"
            alt=""
          />
        </Button>
      </Box>
      <Box>
        <Box style={styles.marginLeft}>
          <Button style={styles.iconStyling}>
            <img
              style={styles.singWithFacebook}
              src="https://www.freepnglogos.com/uploads/apple-logo-png/file-apple-logo-black-svg-wikimedia-commons-1.png"
              alt=""
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
