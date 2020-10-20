import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Main from './Main'
import Book from './Book'

const Routes = createAppContainer(
    createSwitchNavigator(
        {
            Main,
            Book,
        }, {
            initialRouteName:"Main",
            backBehavior: "history"
        }
    )
);
export default Routes;
