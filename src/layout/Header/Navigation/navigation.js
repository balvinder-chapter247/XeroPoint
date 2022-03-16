const token =  localStorage.getItem("token");
const navigation = 
  token ? 
 [ { name: 'Home', href: '/', current: true },
    { name: 'My Courses', href: '/my-courses', current: false },
    { name: 'Market Place', href: '/marketplace', current: false },
    { name: 'About Us', href: '/about-us', current: false },
    { name: 'Contact Us', href: '/contact-us', current: false },]
  : 
    [{ name: 'Home', href: '/', current: true },
    { name: 'Market Place', href: '/marketplace', current: false },
    { name: 'About Us', href: '/about-us', current: false },
    { name: 'Contact Us', href: '/contact-us', current: false },]
  
  export default navigation