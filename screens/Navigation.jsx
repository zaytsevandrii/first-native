import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { FullPost } from "./FullPost"
import { NavigationContainer } from "@react-navigation/native"
import { Home } from "./Home"

const Stack = createNativeStackNavigator()

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ title: "News" }} />
                <Stack.Screen name="FullPost" component={FullPost} options={{ title: "Article" }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
