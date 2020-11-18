import {AppRegistry} from 'react-native';
import MainNavigation from './src/navigation/MainNavigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainNavigation);
