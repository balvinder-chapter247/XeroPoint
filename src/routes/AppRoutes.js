import { Prefix } from "../helper/utility";

var res = [
  {
    user: {
      firstName: "Super",
      lastName: "Admin",
      username: null,
      identifier: "super+admin@verakari.com",
    },
    role: {
      name: "Super Admin",
      shortCode: "ADMIN",
    },
    accessToken: "",
    refreshToken: "",
    requiredAction: [],
  },
];

export const AppRoutes = {
  HOME: "/",
  MY_COURSES: `${Prefix(res)}/my-courses`,
  MARKETPLACE: `${Prefix(res)}/marketplace`,
  ADD_COURSE: `${Prefix(res)}/add-course`,
  EDIT_COURSE: `${Prefix(res)}/edit-course`,
  LOGIN: `${Prefix(res)}/login`,
  SIGNUP: `${Prefix(res)}/sign-up`,
  FORGOT_PASSWORD: `${Prefix(res)}/forgot-password`,
  DASHBOARD: `${Prefix(res)}/dashboard`,
  ADD_CART: `${Prefix(res)}/add-cart`,
  COURSE_DETAILS: `${Prefix(res)}/course-details`,
  CONTACTUS: `${Prefix(res)}/contact-us`,
  ABOUTUS: `${Prefix(res)}/about-us`,
  COURSE_BUILDER: `${Prefix(res)}/course-builder`,
};
