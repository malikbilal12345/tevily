import logo from "@/images/resources/logo-1.png";
import logo2 from "@/images/resources/logo-2.png";

const navItems = [
  {  
    id: 1,
    name: "Home",
    href: "/",
    subNavItems: [],
  },
  {
    id: 2,
    name: "Adventure Safari",
    href: "#",
    subNavItems: [],
  }, 
  {
    id: 3,
    name: "Backpacker Budget",
    href: "#",
    subNavItems: [],
  }, 
  {
    id: 4,
    name: "Excursions",
    href: "#",
    subNavItems: [],
  },  
  {
    id: 5,
    name: "Contact",
    href: "#",
    subNavItems: [],
  },
  {
    id: 6,
    classs: 'openTheModalAppear',
    name: "Book with us now",
    href: "#",
    subNavItems: [],
  },
];

const social = [
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-twitter", link: "" },
  { icon: "fa-instagram", link: "" },
  { icon: "fa-pinterest-p", link: "" },
];

const headerData = {
  icons: [
    {
      id: 1,
      icon: "icon-phone-call",
      content: "+ 92 666 999 0000",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-at",
      content: "needhelp@company.com",
      subHref: "mailto",
    },
  ],
  navItems,
  social,
  logo,
  logo2,
};

export default headerData;
