// https://github.com/GetStream/stream-chat-react-native/wiki/Upgrade-helper#dependency-changes
import "react-native-get-random-values";

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
