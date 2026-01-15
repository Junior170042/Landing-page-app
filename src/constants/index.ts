import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigPhone6, bigPhone5, bigPhone, bigPhone1, bigPhone2, bigPhone3, bigPhone4, tubigPhone1, tubigPhone2, tubigPhone3 } from "../assets/images";

import {
    imacFour, imacThree, imacTwo,
    imacOne, headPhone, headPhone1, headPhone2,
    headPhone3, watch, watch1, watch2,
} from "../assets/supliesImages";

export interface Supply {
    name: string;
    description: string;
    img: string;
    price: string;
}

export const suplies: Supply[] = [
    {
        name: "New model watch",
        description: "A new model watch that will watch your changes!",
        img: watch,
        price: "50.0"
    },
    {
        name: "New Air Watch",
        description: "Air watch that will watch your all fashion!",
        img: watch1,
        price: "20.0"
    },
    {
        name: "New Fashion Watch",
        description: "Try this new fashion watch that will watch your daily changes!",
        img: watch2,
        price: "30.0"
    },
    {
        name: "Headset Max  bluetooth",
        description: "Headset max brings you into the entire sound life",
        img: headPhone,
        price: "60.0"
    },
    {
        name: " Wired Headset air ",
        description: "The new wired Headphone air will make your life easier to listen!",
        img: headPhone2,
        price: "80.0"
    },
    {
        name: " Headset air  bluetooth ",
        description: "The new unwired Headset air allows you to connect to every device in a easiest way!",
        img: headPhone1,
        price: "70.0"
    },
    {
        name: "New bluetooth air Sound ",
        description: "The new bluetooth air sound is the most powerful headset wich you'd never try!",
        img: headPhone3,
        price: "40.0"
    },
]

export interface MacBook {
    name: string;
    description: string;
    img: string;
    price: string;
}

export const macBooks: MacBook[] = [
    {
        name: "Imac Pro",
        description: "Imac Pro is your computer that can bring you a new feeling of working!",
        img: imacOne,
        price: "900.0"
    },
    {
        name: "Mac book Air",
        description: "The fastest Mac book that you never use before, it has all the features you need taht you'll need for your daily work space!",
        img: imacTwo,
        price: "1200.0"
    },
    {
        name: "Mini mac book Air",
        description: "The mini book that will fit your space properly, it can be taken out easily!",
        img: imacThree,
        price: "600.0"
    },
    {
        name: "Mac Book Air Pro",
        description: "Mac Book Air Pro finally comes to bring you into the apple community!",
        img: imacFour,
        price: "800.0"
    },
]

export interface NavLink {
    href: string;
    label: string;
    class: string;
}

export const navLinks: NavLink[] = [
    { href: "#toHome", label: "Home", class: "#toHome" },
    { href: "#toAbout", label: "About Us", class: "#toAbout" },
    { href: "#toProduct", label: "Products", class: "#toProduct" },
    { href: "#toContacts", label: "Contact Us", class: "#toContacts" },
];

export interface Phone {
    thumbnail: string;
    bigPhone: string;
}

export const phones: Phone[] = [
    {
        thumbnail: tubigPhone1,
        bigPhone: bigPhone1,
    },
    {
        thumbnail: tubigPhone2,
        bigPhone: bigPhone2,
    },
    {
        thumbnail: tubigPhone3,
        bigPhone: bigPhone3,
    },
];

export interface Statistic {
    value: string;
    label: string;
}

export const statistics: Statistic[] = [
    { value: '2k+', label: 'Brands' },
    { value: '300+', label: 'Shops' },
    { value: '800k+', label: 'Customers' },
];

export interface Product {
    imgURL: string;
    name: string;
    price: string;
}

export const products: Product[] = [
    {
        imgURL: bigPhone3,
        name: "Iphone 15",
        price: "$3007.20",
    },
    {
        imgURL: bigPhone2,
        name: "Iphone 14",
        price: "$2105.20",
    },
    {
        imgURL: bigPhone1,
        name: "New model phone",
        price: "$2208.20",
    },
    {
        imgURL: bigPhone4,
        name: "Iphone 13",
        price: "$2302.20",
    },

    {
        imgURL: bigPhone,
        name: "Iphone 12",
        price: "$2304.20",
    },
    {
        imgURL: bigPhone6,
        name: "Iphone X",
        price: "$2000.20",
    },
    {
        imgURL: bigPhone5,
        name: "Iphone 11",
        price: "$3600.20",
    },
];

export interface Service {
    imgURL: string;
    label: string;
    subtext: string;
}

export const services: Service[] = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export interface SocialMedia {
    src: string;
    alt: string;
}

export const socialMedia: SocialMedia[] = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
