import "./App.css";
import * as MuiMaterial from "@mui/material";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X31Profile from "./components/X31Profile";
import X4MinVideo from "./components/X4MinVideo";
import X32EditProfile from "./components/X32EditProfile";
import X12ShowNfts from "./components/X12ShowNfts";
import X4 from "./components/X4";
import X3LoadingNft from "./components/X3LoadingNft";
import WelcomeScreenDskpt from "./components/WelcomeScreenDskpt";
import WelcomeScreenMob from "./components/WelcomeScreenMob";
import X2EditProfile from "./components/X2EditProfile";

function App() {
  return (
    <MuiMaterial.ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/3-1-profile">
            <X31Profile
              x31Profile="/img/gradient-pomp-3-1@1x.png"
              menu="/img/menu@2x.png"
              ab="AB"
              place="Mentor"
              contactInfo="Contact info"
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxx="xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
              connect="Connect"
            />
          </Route>
          <Route path="/4-min-video">
            <X4MinVideo
              logoSinFondo2="/img/logo-sin-fondo-2@2x.png"
              mint="Mint"
              mintYourPomp="Mint your POMP!"
              byMintingYourPomp="By minting your POMP NFT, the proof of mentorship validates and you will be able to give feedback from your session and your mentor."
              percent="75%"
              loading="Loading"
            />
          </Route>
          <Route path="/3-2-edit-profile">
            <X32EditProfile
              x32EditProfile="/img/gradient-pomp-3-1@1x.png"
              menu="/img/menu@2x.png"
              ab="AB"
              place="Mentor"
              cancel="Cancel"
              done="Done"
              group72Props={x32EditProfileData.group72Props}
            />
          </Route>
          <Route path="/1-2-show-nfts">
            <X12ShowNfts
              x12ShowNfts="/img/gradient-pomp-3-1@1x.png"
              ab="AB"
              menu="/img/menu@2x.png"
              filter="Filter"
              buttonProps={x12ShowNftsData.buttonProps}
            />
          </Route>
          <Route path="/4">
            <X4
              logoSinFondo2="/img/logo-sin-fondo-2@2x.png"
              welcome="Welcome!"
              yourDynamicNftVal="Your dynamic NFT validates you as  member. Now you can use it to proof your membership to the community."
              youCanStartLookingForMentorsNow="You can start looking for mentors now!"
              buttonProps={x4Data.buttonProps}
            />
          </Route>
          <Route path="/3-loading-nft">
            <X3LoadingNft
              x3LoadingNft="/img/gradient-pomp-3-1@1x.png"
              ab="AB"
              menu="/img/menu@2x.png"
              logoFinalBlanco3="/img/logo-final-blanco-3-1@2x.png"
              percent="75%"
              loading="Loading"
            />
          </Route>
          <Route path="/welcome-screen-dskpt">
            <WelcomeScreenDskpt
              overlapGroup2="/img/gradient-pomp-4@1x.png"
              menu="/img/menu@2x.png"
              logoFinalBlanco3="/img/logo-final-blanco-3-1@1x.png"
              subtitle={
                <React.Fragment>
                  Find your web3 peer <br />
                  to embark in this journey
                </React.Fragment>
              }
              group121Props={welcomeScreenDskptData.group121Props}
              group122Props={welcomeScreenDskptData.group122Props}
              group126Props={welcomeScreenDskptData.group126Props}
            />
          </Route>
          <Route path="/:path(|welcome-screen-mob)">
            <WelcomeScreenMob {...welcomeScreenMobData} />
          </Route>
          <Route path="/2-edit-profile">
            <X2EditProfile {...x2EditProfileData} />
          </Route>
        </Switch>
      </Router>
    </MuiMaterial.ThemeProvider>
  );
}

export default App;
const theme = MuiMaterial.createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#B484CB",
    },
    error: {
      main: "#d32f2f",
    },
    warning: {
      main: "#fe943d",
    },
    info: {
      main: "#0ca1f1",
    },
    success: {
      main: "#68c86d",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontSize: 14,
  },
  shape: {
    borderRadius: 4,
  },
});
const group722Data = {
    className: "group-72-1",
};

const x32EditProfileData = {
    x32EditProfile: "/img/gradient-pomp-3-1@1x.png",
    menu: "/img/menu@2x.png",
    ab: "AB",
    place: "Mentor",
    cancel: "Cancel",
    done: "Done",
    group72Props: group722Data,
};

const buttonData = {
    children: "Sort",
};

const x12ShowNftsData = {
    buttonProps: buttonData,
};

const button31Data = {
    children: "Search",
};

const x4Data = {
    buttonProps: button31Data,
};

const group1211Data = {
    src: "/img/image-17@2x.png",
};

const group1221Data = {
    src: "/img/image-19@2x.png",
};

const group1261Data = {
    src: "/img/image-18@2x.png",
};

const welcomeScreenDskptData = {
    overlapGroup2: "/img/gradient-pomp-4@1x.png",
    menu: "/img/menu@2x.png",
    logoFinalBlanco3: "/img/logo-final-blanco-3-1@1x.png",
    subtitle: <React.Fragment>Find your web3 peer <br />to embark in this journey</React.Fragment>,
    group121Props: group1211Data,
    group122Props: group1221Data,
    group126Props: group1261Data,
};

const input2Data = {
    className: "input-1",
};

const group1212Data = {
    src: "/img/image-17-1@2x.png",
};

const group1222Data = {
    src: "/img/image-19-1@2x.png",
    className: "coinbase-login",
};

const group1262Data = {
    src: "/img/image-18-1@2x.png",
    className: "wallet-connect-login",
};

const welcomeScreenMobData = {
    welcomeScreenMob: "/img/gradient-pomp-3@1x.png",
    menu: "/img/menu@2x.png",
    logoFinalBlanco3: "/img/logo-final-blanco-3-1@2x.png",
    subtitle: <React.Fragment>Find your web3 peer <br />to embark in this journey</React.Fragment>,
    place: "Start",
    group126Props: input2Data,
    group121Props: group1212Data,
    group122Props: group1222Data,
    group126Props2: group1262Data,
};

const button32Data = {
    children: "Submit",
    className: "button-7",
};

const x2EditProfileData = {
    logoSinFondo2: "/img/logo-sin-fondo-2@2x.png",
    editProfile: "Edit Profile",
    submit: "Language",
    language: "Mentor Level",
    mentorLevel: "Mentoring",
    mentoring: "Gender",
    gender: "Developer",
    developer: "Coding language",
    codingLanguage: "Solidity",
    solidity: "Python",
    python: "Conferences",
    conferences: "Founder",
    buttonProps: button32Data,
};

