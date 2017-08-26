import {HomePage} from "./home-page/home-page";

export const PUBLIC_ROUTES = [
    {
        path: '',
        loadChildren: 'app/public/home-page/home-page.module#HomePageModule'
    }
];
