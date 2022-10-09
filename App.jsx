import "./App.css";
import * as MuiMaterial from "@mui/material";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X31Profile from "./components/X31Profile";
import X15 from "./components/X15";
import X19 from "./components/X19";
import X4RateSesion from "./components/X4RateSesion";
import X12ShowNfts from "./components/X12ShowNfts";
import X31Profile2 from "./components/X31Profile2";
import X4DateReminder from "./components/X4DateReminder";
import X4MinVideo from "./components/X4MinVideo";
import X4DateReminder2 from "./components/X4DateReminder2";
import X1WelcomeScreenMob from "./components/X1WelcomeScreenMob";
import X4DateReminder4 from "./components/X4DateReminder4";

function App() {
  return (
    <MuiMaterial.ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/3-1-profile-1">
            <X31Profile {...x31Profile1Data} />
          </Route>
          <Route path="/1-5">
            <X15 {...x15Data} />
          </Route>
          <Route path="/1-9">
            <X19
              logoSinFondo2="/img/logo-sin-fondo-2-1@2x.png"
              welcome="Welcome!"
              yourDynamicNftVal="Your dynamic NFT validates you as  member. Now you can use it to proof your membership to the community."
              youCanStartLookingForMentorsNow="You can start looking for mentors now!"
              buttonProps={x19Data.buttonProps}
            />
          </Route>
          <Route path="/4-rate-sesion">
            <X4RateSesion
              logoSinFondo2="/img/logo-sin-fondo-2@2x.png"
              congratulations="Congratulations!"
              yourPompNftTheP="Your POMP NFT, the proof of mentorship validates and you will be able to give feedback from your session and your mentor."
              rateNow="Rate now"
            />
          </Route>
          <Route path="/1-2-show-nfts">
            <X12ShowNfts {...x12ShowNftsData} />
          </Route>
          <Route path="/x3-1-profile">
            <X31Profile2 {...x31Profile2Data} />
          </Route>
          <Route path="/4-date-reminder-1">
            <X4DateReminder
              logoSinFondo2="/img/logo-sin-fondo-2@2x.png"
              ok="Ok!"
              youveGotAMentor="You’ve got a mentor!"
              nowYouJustGottaR="Now you just gotta remember to record your session in order to get your POAP!"
              lookingForwardToSeeYouSoon="Looking forward to see you soon!"
            />
          </Route>
          <Route path="/4-min-video">
            <X4MinVideo
              logoSinFondo2="/img/logo-sin-fondo-2@2x.png"
              mintYourPomp="Mint your POMP!"
              byMintingYourPomp="By minting your POMP NFT, the proof of mentorship validates and you will be able to give feedback from your session and your mentor."
              buttonProps={x4MinVideoData.buttonProps}
            />
          </Route>
          <Route path="/x4-date-reminder">
            <X4DateReminder2
              logoSinFondo2="/img/logo-sin-fondo-2@2x.png"
              mentoringSessionInfo="Mentoring session info"
              faq="FAQ"
              rescheduleSession="Reschedule session"
              buttonProps={x4DateReminder2Data.buttonProps}
            />
          </Route>
          <Route path="/1-welcome-screen-mob">
            <X1WelcomeScreenMob {...x1WelcomeScreenMobData} />
          </Route>
          <Route path="/4-date-reminder">
            <X4DateReminder4
              logoSinFondo2="/img/logo-sin-fondo-2@2x.png"
              pastSessions="Past sessions"
              faq="FAQ"
              rescheduleSession="Reschedule session"
              lookForAMentor="Look for a mentor"
            />
          </Route>
          <Route path="/:path(|3-1-profile)">
            <X31Profile {...x31Profile3Data} />
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
const dropdown2Data = {
    className: "dropdown-2",
};

const dropdown3Data = {
    className: "dropdown-3",
};

const dropdown4Data = {
    className: "dropdown-4",
};

const dropdown5Data = {
    className: "dropdown-5",
};

const dropdown6Data = {
    className: "dropdown-6",
};

const dropdown7Data = {
    className: "dropdown-7",
};

const dropdown8Data = {
    className: "dropdown-8",
};

const dropdown9Data = {
    className: "dropdown-9",
};

const dropdown10Data = {
    className: "dropdown-10",
};

const x31Profile1Data = {
    x31Profile: "/img/gradient-pomp-3@1x.png",
    menu: "/img/menu@2x.png",
    mentorA: "Mentor A",
    solidity: "Solidity",
    codingLanguage: "Coding language",
    conferences: "Conferences",
    founder: "Founder",
    developer: "Developer",
    python1: "Python",
    gender: "Gender",
    language1: "Language",
    mentoring: "Mentoring",
    mentorLevel: "Mentor Level",
    language2: "Spanish",
    advanced1: "Advanced",
    open: "Open",
    female: "Female",
    advanced2: "Advanced",
    python2: "Python",
    intermediate1: "Intermediate",
    intermediate2: "Intermediate",
    ethBogota: "eth.bogota",
    notYet: "Not yet",
    rate: "Rate",
    rating: "Rating",
    howWasYourSession: "How was your session?",
    dropdown1Props: dropdown2Data,
    dropdown2Props: dropdown3Data,
    dropdown3Props: dropdown4Data,
    dropdown4Props: dropdown5Data,
    dropdown5Props: dropdown6Data,
    dropdown6Props: dropdown7Data,
    dropdown7Props: dropdown8Data,
    dropdown8Props: dropdown9Data,
    dropdown9Props: dropdown10Data,
};

const button1Data = {
    children: "Submit",
};

const dropdown12Data = {
    className: "dropdown-12",
};

const dropdown13Data = {
    className: "dropdown-13",
};

const dropdown14Data = {
    className: "dropdown-14",
};

const dropdown15Data = {
    className: "dropdown-15",
};

const dropdown16Data = {
    className: "dropdown-16",
};

const dropdown17Data = {
    className: "dropdown-17",
};

const dropdown18Data = {
    className: "dropdown-18",
};

const dropdown19Data = {
    className: "dropdown-19",
};

const dropdown20Data = {
    className: "dropdown-20",
};

const x15Data = {
    logoSinFondo2: "/img/logo-sin-fondo-2@2x.png",
    editProfile: "Edit Profile",
    solidity: "Solidity",
    codingLanguage: "Coding language",
    conferences: "Conferences",
    founder: "Founder",
    developer: "Developer",
    python1: "Python",
    gender: "Gender",
    language1: "Language",
    mentoring: "Mentoring",
    mentorLevel: "Mentor Level",
    language2: "Spanish",
    beginner1: "Beginner",
    open: "Open",
    female: "Female",
    beginner2: "Beginner",
    python2: "Python",
    beginner3: "Beginner",
    intermediate: "Intermediate",
    ethBogota: "eth.bogota",
    notYet: "Not yet",
    buttonProps: button1Data,
    dropdown1Props: dropdown12Data,
    dropdown2Props: dropdown13Data,
    dropdown3Props: dropdown14Data,
    dropdown4Props: dropdown15Data,
    dropdown5Props: dropdown16Data,
    dropdown6Props: dropdown17Data,
    dropdown7Props: dropdown18Data,
    dropdown8Props: dropdown19Data,
    dropdown9Props: dropdown20Data,
};

const button2Data = {
    children: "Search",
    className: "button-3",
};

const x19Data = {
    buttonProps: button2Data,
};

const dropdown21Data = {
    className: "dropdown",
};

const dropdown22Data = {
    className: "dropdown",
};

const dropdown23Data = {
    className: "dropdown",
};

const dropdown24Data = {
    className: "dropdown",
};

const dropdown25Data = {
    className: "dropdown",
};

const dropdown26Data = {
    className: "dropdown",
};

const dropdown28Data = {
    className: "dropdown-22",
};

const dropdown29Data = {
    className: "dropdown",
};

const dropdown30Data = {
    className: "dropdown",
};

const button3Data = {
    children: "Search",
    className: "button-4",
};

const x12ShowNftsData = {
    x12ShowNfts: "/img/gradient-pomp-3-1@1x.png",
    ab: "AB",
    menu: "/img/menu@2x.png",
    filter: "Filter",
    sort: "Sort",
    language: "Language",
    mentorLevel: "Mentor Level",
    mentoring: "Mentoring",
    gender: "Gender",
    developer: "Developer",
    solidity: "Solidity",
    codingLanguage: "Coding language",
    python1: "Python",
    python2: "Python",
    advanced: "Advanced",
    conferences: "Conferences",
    founder: "Founder",
    dropdown1Props: dropdown21Data,
    dropdown2Props: dropdown22Data,
    dropdown3Props: dropdown23Data,
    dropdown4Props: dropdown24Data,
    dropdown5Props: dropdown25Data,
    dropdown6Props: dropdown26Data,
    dropdown7Props: dropdown28Data,
    dropdown8Props: dropdown29Data,
    dropdown9Props: dropdown30Data,
    buttonProps: button3Data,
};

const dropdown32Data = {
    className: "dropdown-24",
};

const dropdown33Data = {
    className: "dropdown-25",
};

const dropdown34Data = {
    className: "dropdown-26",
};

const dropdown35Data = {
    className: "dropdown-27",
};

const dropdown36Data = {
    className: "dropdown-28",
};

const dropdown37Data = {
    className: "dropdown-29",
};

const dropdown38Data = {
    className: "dropdown-30",
};

const dropdown39Data = {
    className: "dropdown-31",
};

const dropdown40Data = {
    className: "dropdown-32",
};

const x31Profile2Data = {
    x31Profile: "/img/gradient-pomp-3-1@1x.png",
    menu: "/img/menu@2x.png",
    mentorA: "Mentor A",
    solidity: "Solidity",
    codingLanguage: "Coding language",
    conferences: "Conferences",
    founder: "Founder",
    developer: "Developer",
    python1: "Python",
    gender: "Gender",
    language1: "Language",
    mentoring: "Mentoring",
    mentorLevel: "Mentor Level",
    language2: "Spanish",
    advanced1: "Advanced",
    open: "Open",
    female: "Female",
    advanced2: "Advanced",
    python2: "Python",
    intermediate1: "Intermediate",
    intermediate2: "Intermediate",
    ethBogota: "eth.bogota",
    notYet: "Not yet",
    contactInfo: "Contact info",
    xxxxxxxxxxxxxxxxxxxxxxxxxxxxx: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    connect: "Connect",
    dropdown1Props: dropdown32Data,
    dropdown2Props: dropdown33Data,
    dropdown3Props: dropdown34Data,
    dropdown4Props: dropdown35Data,
    dropdown5Props: dropdown36Data,
    dropdown6Props: dropdown37Data,
    dropdown7Props: dropdown38Data,
    dropdown8Props: dropdown39Data,
    dropdown9Props: dropdown40Data,
};

const button4Data = {
    children: "Upload",
    className: "button-5",
};

const x4MinVideoData = {
    buttonProps: button4Data,
};

const button5Data = {
    children: "Upload",
    className: "button-6",
};

const x4DateReminder2Data = {
    buttonProps: button5Data,
};

const input2Data = {
    className: "input-1",
};

const group121Data = {
    src: "/img/image-17-1@2x.png",
};

const group126Data = {
    src: "/img/image-18-1@2x.png",
};

const group122Data = {
    src: "/img/image-19@2x.png",
};

const x1WelcomeScreenMobData = {
    x1WelcomeScreenMob: "/img/gradient-pomp-3@1x.png",
    menu: "/img/menu@2x.png",
    logoFinalBlanco3: "/img/logo-final-blanco-3@1x.png",
    subtitle: <React.Fragment>Find your web3 peer <br />to embark in this journey</React.Fragment>,
    place: "Start",
    group126Props: input2Data,
    group121Props: group121Data,
    group126Props2: group126Data,
    group122Props: group122Data,
};

const dropdown42Data = {
    className: "dropdown-34",
};

const dropdown43Data = {
    className: "dropdown-35",
};

const dropdown44Data = {
    className: "dropdown-36",
};

const dropdown45Data = {
    className: "dropdown-37",
};

const dropdown46Data = {
    className: "dropdown-38",
};

const dropdown47Data = {
    className: "dropdown-39",
};

const dropdown48Data = {
    className: "dropdown-40",
};

const dropdown49Data = {
    className: "dropdown-41",
};

const dropdown50Data = {
    className: "dropdown-42",
};

const x31Profile3Data = {
    x31Profile: "/img/gradient-pomp-3@1x.png",
    menu: "/img/menu@2x.png",
    mentorA: "Mentor A",
    solidity: "Solidity",
    codingLanguage: "Coding language",
    conferences: "Conferences",
    founder: "Founder",
    developer: "Developer",
    python1: "Python",
    gender: "Gender",
    language1: "Language",
    mentoring: "Mentoring",
    mentorLevel: "Mentor Level",
    language2: "Spanish",
    advanced1: "Advanced",
    open: "Open",
    female: "Female",
    advanced2: "Advanced",
    python2: "Python",
    intermediate1: "Intermediate",
    intermediate2: "Intermediate",
    ethBogota: "eth.bogota",
    notYet: "Not yet",
    rate: "Rate",
    rating: "Rating",
    howWasYourSession: "How was your session?",
    dropdown1Props: dropdown42Data,
    dropdown2Props: dropdown43Data,
    dropdown3Props: dropdown44Data,
    dropdown4Props: dropdown45Data,
    dropdown5Props: dropdown46Data,
    dropdown6Props: dropdown47Data,
    dropdown7Props: dropdown48Data,
    dropdown8Props: dropdown49Data,
    dropdown9Props: dropdown50Data,
};

