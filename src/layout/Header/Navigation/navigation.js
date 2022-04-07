import { AppRoutes } from "../../../routes/AppRoutes";
const token = localStorage.getItem("token");

const navigation = [
  { name: "Home", href: "/", current: true, token: true },
  { name: "My Courses", href: AppRoutes.MY_COURSES, current: false, token },
  {
    name: "Market Place",
    href: AppRoutes.MARKETPLACE,
    current: false,
    token: true,
  },
  { name: "About Us", href: AppRoutes.ABOUTUS, current: false, token: true },
  {
    name: "Contact Us",
    href: AppRoutes.CONTACTUS,
    current: false,
    token: true,
  },
];

export default navigation;
