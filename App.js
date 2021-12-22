import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
import CatScreen from "./src/screens/CatScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen, // screenName : screenSource
    ResultsShow: ResultsShowScreen
  },
  {
    initialRouteName: "Search", // where the program go when it starts.
    defaultNavigationOptions: {
      title: "Bussiness Search"
    }
  }
);

export default createAppContainer(navigator);
