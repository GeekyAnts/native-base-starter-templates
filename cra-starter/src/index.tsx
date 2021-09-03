import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import EntypoFont from "react-native-vector-icons/Fonts/Entypo.ttf";
import AntDesignFont from "react-native-vector-icons/Fonts/AntDesign.ttf";
import EvilIconsFont from "react-native-vector-icons/Fonts/EvilIcons.ttf";
import FeatherFont from "react-native-vector-icons/Fonts/Feather.ttf";
import FontAwesomeFont from "react-native-vector-icons/Fonts/FontAwesome.ttf";
import FontistoFont from "react-native-vector-icons/Fonts/Fontisto.ttf";
import FoundationFont from "react-native-vector-icons/Fonts/Foundation.ttf";
import IoniconsFont from "react-native-vector-icons/Fonts/Ionicons.ttf";
import MaterialCommunityIconsFont from "react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf";
import MaterialIconsFont from "react-native-vector-icons/Fonts/MaterialIcons.ttf";
import OcticonsFont from "react-native-vector-icons/Fonts/Octicons.ttf";
import SimpleLineIconsFont from "react-native-vector-icons/Fonts/SimpleLineIcons.ttf";
import ZocialFont from "react-native-vector-icons/Fonts/Zocial.ttf";
import { NativeBaseProvider } from "native-base";

const iconFontistoStyles = `@font-face {
  src: url(${FontistoFont});
  font-family: Fontisto;
}`;
const iconOcticonsStyles = `@font-face {
  src: url(${OcticonsFont});
  font-family: Octicons;
}`;
const iconSimpleLineIconsFontStyles = `@font-face {
  src: url(${SimpleLineIconsFont});
  font-family: SimpleLineIcons;
}`;
const iconZocialFontStyles = `@font-face {
  src: url(${ZocialFont});
  font-family: Zocial;
}`;
const iconMaterialCommunityIconsStyles = `@font-face {
  src: url(${MaterialCommunityIconsFont});
  font-family: MaterialCommunityIcons;
}`;
const iconMaterialIconsFontStyles = `@font-face {
  src: url(${MaterialIconsFont});
  font-family: MaterialIcons;
}`;
const iconFoundationStyles = `@font-face {
  src: url(${FoundationFont});
  font-family: Foundation;
}`;
const iconIoniconsStyles = `@font-face {
  src: url(${IoniconsFont});
  font-family: Ionicons;
}`;
const iconFeatherStyles = `@font-face {
  src: url(${FeatherFont});
  font-family: Feather;
}`;
const iconAntDesignStyles = `@font-face {
  src: url(${AntDesignFont});
  font-family: AntDesign;
}`;

const iconFontAwesomeStyles = `@font-face {
  src: url(${FontAwesomeFont});
  font-family: FontAwesome;
}`;
const iconEntypoStyles = `@font-face {
  src: url(${EntypoFont});
  font-family: Entypo;
}`;
const iconEvilIconsStyles = `@font-face {
  src: url(${EvilIconsFont});
  font-family: EvilIcons;
}`;

// Create stylesheet
const style: any = document.createElement("style");
style.type = "text/css";
if (style.styleSheet) {
  style.styleSheet.cssText += iconFontAwesomeStyles;
  style.styleSheet.cssText += iconEntypoStyles;
  style.styleSheet.cssText += iconEvilIconsStyles;
  style.styleSheet.cssText += iconAntDesignStyles;
  style.styleSheet.cssText += iconFeatherStyles;
  style.styleSheet.cssText += iconFoundationStyles;
  style.styleSheet.cssText += iconIoniconsStyles;
  style.styleSheet.cssText += iconMaterialCommunityIconsStyles;
  style.styleSheet.cssText += iconMaterialIconsFontStyles;
  style.styleSheet.cssText += iconOcticonsStyles;
  style.styleSheet.cssText += iconSimpleLineIconsFontStyles;
  style.styleSheet.cssText += iconZocialFontStyles;
  style.styleSheet.cssText += iconFontistoStyles;
} else {
  style.appendChild(document.createTextNode(iconFontAwesomeStyles));
  style.appendChild(document.createTextNode(iconEntypoStyles));
  style.appendChild(document.createTextNode(iconEvilIconsStyles));
  style.appendChild(document.createTextNode(iconAntDesignStyles));
  style.appendChild(document.createTextNode(iconFeatherStyles));
  style.appendChild(document.createTextNode(iconFoundationStyles));
  style.appendChild(document.createTextNode(iconIoniconsStyles));
  style.appendChild(document.createTextNode(iconMaterialCommunityIconsStyles));
  style.appendChild(document.createTextNode(iconMaterialIconsFontStyles));
  style.appendChild(document.createTextNode(iconOcticonsStyles));
  style.appendChild(document.createTextNode(iconSimpleLineIconsFontStyles));
  style.appendChild(document.createTextNode(iconZocialFontStyles));
  style.appendChild(document.createTextNode(iconFontistoStyles));
}

// Inject stylesheet
document.head.appendChild(style);

ReactDOM.render(
  <React.StrictMode>
    <NativeBaseProvider>
      <App />
    </NativeBaseProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
