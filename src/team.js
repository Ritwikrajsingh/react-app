import { LoremIpsum } from "lorem-ipsum";
const lorem = new LoremIpsum()
const team = [
    {
        name: "John",
        username: "john",
        image: "/assets/john.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur lobortis neque, at fringilla justo vestibulum nec.",
        longDescription: lorem.generateParagraphs(3)
    },
    {
        name: "Emma",
        description: "Praesent bibendum tortor eu felis tincidunt posuere. In viverra, urna ut aliquam auctor, ex dui dictum velit, sed cursus est sem at orci.",
        image: "/assets/emma.jpg",
        username: "emma",
        longDescription: lorem.generateParagraphs(2)
    },
    {
        name: "Michael",
        description: "Duis feugiat, velit sit amet auctor ullamcorper, purus dui sollicitudin purus, at tristique sem lacus vel elit. Integer auctor urna sed erat fringilla varius.",
        image: "/assets/michael.jpg",
        username: "michael",
        longDescription: lorem.generateParagraphs(3)
    },
    {
        name: "Olivia",
        description: "Sed id luctus lorem. Ut luctus dolor sit amet ex dapibus fermentum. Integer tristique lacus nunc, et tristique sapien vestibulum a. Nulla facilisi.",
        image: "/assets/olivia.jpg",
        username: "olivia",
        longDescription: lorem.generateParagraphs(2)
    },
    {
        name: "Ava",
        description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In fringilla lobortis odio. Aenean vitae ullamcorper est.",
        image: "/assets/ava.jpg",
        username: "ava",
        longDescription: lorem.generateParagraphs(2)
    }
];

export default team