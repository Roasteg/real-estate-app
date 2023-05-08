import { NavigatorScreenParams } from "@react-navigation/native"
import { DrawerRoutes } from "./DrawerRoutes";

export type StackRoutes = {
    Start: undefined;
    Login: undefined;
    Main: NavigatorScreenParams<DrawerRoutes>;
    Overview: {estateId: number};
}