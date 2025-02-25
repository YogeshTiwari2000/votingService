import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        title: " Home ",
        loadComponent: () =>
            import("./components/home/home.component").then((p) => p.HomeComponent),
    },
    {
        path: "home",
        title: " Home ",
        loadComponent: () =>
            import("./components/home/home.component").then((p) => p.HomeComponent),
    },
    {
        path: "signup",
        title: "Register User",
        loadComponent: () =>
            import("./components/register/register.component").then((p) => p.RegisterComponent),
    },
    {
        path: "login",
        title: "Login User",
        loadComponent: () =>
            import("./components/login/login.component").then((p) => p.LoginComponent),
    },
    {
        path: "userProfile",
        title: "app-user-profile",
        loadComponent: () =>
            import("./components/user-profile/user-profile.component").then((p) => p.UserProfileComponent),
    },
    {
        path: "candidateList",
        title: "CandidateListComponent",
        loadComponent: () =>
            import("./components/candidate-list/candidate-list.component").then((p) => p.CandidateListComponent),
    },
];
