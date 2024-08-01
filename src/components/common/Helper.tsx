import spray from "../../../public/assets/images/svg/spray.svg";
import wipe from "../../../public/assets/images/svg/wipe.svg";
import love from "../../../public/assets/images/svg/love.svg";
import felt from "../../../public/assets/images/webp/heart-felt-img.png";
import respected from "../../../public/assets/images/webp/img-swiper.png";
import satisfy from "../../../public/assets/images/webp/satisfying-wiper.png"
import satisfysm from "../../../public/assets/images/webp/satisfy-small-wiper.png"
import espaid from "../../../public/assets/images/webp/espaid-room.png"
import mcdonald from "../../../public/assets/images/webp/mcdonalds-bathroom.png"
import airplane from "../../../public/assets/images/webp/airplane-bathroom.png"
import veteran from "../../../public/assets/images/webp/veterian-grave.png"
import your from "../../../public/assets/images/webp/your-house.png"
import { GreenTick } from "./Icons";

interface EasyFunItem {
    img: string;
    title: string;
    description: string;
    alt: string;
}

export const Easy_Fun_List: EasyFunItem[] = [
    {
        img: spray,
        alt: "img spray",
        title: "1. Spray",
        description: "Press the nozzle to release our satisfying cleaning foam on ANY dirty surface."
    },
    {
        img: wipe,
        alt: "img wipe",
        title: "2. Wipe",
        description: "Wipe off the Magic Foam with a cloth or sponge."
    },
    {
        img: love,
        alt: "img love",
        title: "3. Love",
        description: "Enjoy your beautiful, clean home."
    },
];

export const Heart_Felt_List = [
    {
        img: felt,
        img2: respected
    },
    {
        img: felt,
        img2: respected
    },
    {
        img: felt,
        img2: respected
    },
    {
        img: felt,
        img2: respected
    },
    {
        img: felt,
        img2: respected
    },
    {
        img: felt,
        img2: respected
    },
]

export const Satisfy_List = [
    {
        img: satisfy,
        img2: satisfysm,
    },
    {
        img2: satisfysm,
        img: satisfy,
    },
    {
        img2: satisfysm,
        img: satisfy,
    },
]

export const What_Can_Magic_List = [
    {
        title: "Abandoned Grave:",
        alt: "espaid restrrom img",
        img: espaid,
        icon: <GreenTick />
    },
    {
        title: "McDonald’s Restroom:",
        alt: "mcdonald rrombath img",
        img: mcdonald,
        icon: <GreenTick />
    },
    {
        title: "Airplane Bathroom:",
        alt: 'airplane room img',
        img: airplane,
        icon: <GreenTick />
    },
    {
        title: "Veteran’s Grave:",
        alt: "veteran grave img",
        img: veteran,
        icon: <GreenTick />
    },
    {
        title: "Your House:",
        alt: "your house have",
        img: your,
        icon: <GreenTick />
    },
]   