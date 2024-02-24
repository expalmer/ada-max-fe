import "./reset.css";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Backstage } from "./modules/backstage/backstage";
import { BackstageBanners } from "./modules/backstage/backstage-banners";
import { BackstageOffers } from "./modules/backstage/backstage-offers";
import { ErrorPage } from "./components/error-page";
import { Home } from "./modules/home";
import { Profile } from "./modules/profile/profile";
import { ProfileCreate } from "./modules/profile/profile-create";
import { ProtectedRoute } from "./components/protected-route";
import React from "react";
import ReactDOM from "react-dom/client";
import { SignIn } from "./modules/auth/signIn";
import { SignUp } from "./modules/auth/signUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute role="user">
        <Home />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile/create",
    element: <ProfileCreate />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/backstage",
    element: (
      <ProtectedRoute role="user">
        <Backstage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/backstage/offers",
    element: (
      <ProtectedRoute role="user">
        <BackstageOffers />
      </ProtectedRoute>
    ),
  },
  {
    path: "/backstage/banners",
    element: (
      <ProtectedRoute role="user">
        <BackstageBanners />
      </ProtectedRoute>
    ),
  },
  {
    path: "/backstage/offers",
    element: (
      <ProtectedRoute role="user">
        <BackstageOffers />
      </ProtectedRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
