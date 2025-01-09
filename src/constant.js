import image1 from "./assets/images/man-withtab.png";
import image2 from "./assets/images/female.png";
export const data = [
  {
    title: "Ready To Help You",
    subtitle: "Learn JavaScript In Private",
    description:
      "Lorem ipsum dolor sit amet consectetur ,adipisicing elit. Adipisci voluptates ut nobis sint? ,Exercitationem unde vero, officiis ea sunt soluta.",
    image: image1,
    highlight: "ABOUT US",
    reverse: false,
  },
  {
    title: "Why Choose",
    subtitle: "TUTORIFY",
    description: "",
    list: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    ],
    image: image2,
    highlight: "WHY US",
    reverse: true,
  },
];
export const cardsList = [
  //todo -------- Card 1 -----------//
  {
    image:
      "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1736319811~exp=1736323411~hmac=2dc9e9ffe405b2c0643f299611b2a6d1631bc5f2017af2ad2758d6f0c864011c&w=900",
    name: "Rizqi Assegaf",
    role: "SD-SMA Mentor",
    experience: "10 Years",
    rating: 5,
    reviews: 200,
  },
  //todo -------- Card 2 -----------//
  {
    image:
      "https://img.freepik.com/free-photo/front-view-female-student-wearing-backpack-holding-little-globe-pen-light-blue-wall_140725-46560.jpg?t=st=1736320395~exp=1736323995~hmac=1a1da4d2127a5897b980a7a9f4704006eb4be45bd4ec491f4fbb7c7e700de21d&w=900",
    name: "Jane Doe",
    role: "Elementary Mentor",
    experience: "8 Years",
    rating: 4,
    reviews: 150,
  },
  //todo -------- Card 3 -----------//
  {
    image:
      "https://img.freepik.com/free-photo/businesswoman-presentation_23-2147635991.jpg?t=st=1736320472~exp=1736324072~hmac=e5768e804a000d365d36e74c4af077f289aec290bf2c79f3b26a77559342f5d9&w=900",
    name: "Sophia Lee",
    role: "High School Mentor",
    experience: "12 Years",
    rating: 5,
    reviews: 300,
  },
];

//?------------Pricing Cards-----------------//

export const priceCards = [
  {
    plan: "Beginner Plan",
    highlights: [
      "1 Project",
      "2 Project",
      "3 Project",
      "Basic Support",
      "Access to Resources",
    ],
    price: "$20",
    month: "/month",
  },
  {
    plan: "Intermediate Plan",
    highlights: [
      "5 Projects",
      "2 Project",
      "3 Project",
      "Priority Support",
      "Access to Resources",
    ],
    price: "$50",
    month: "/month",
  },
  {
    plan:"Pro Plan",
    highlights:[
      "Unlimited Projects", 
      "Free Source Code", 
      "Live Bootcamp", 
      "24/7 Support", 
      "Premium Resources"
    ],
      price:"$100",
      month:"/month"
  },
  {
    plan:"Expert Plan",
            highlights:[
              "Unlimited Projects",
              "24/7 Support",
              "Certificate",
              "Dedicated Support",
              "Exclusive Resources",
            ],
            price:"$200",
            month:"/month"
  }
];
