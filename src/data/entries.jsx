import engines from "../images/Earth-Engines.jpg"
import escapeShip from "../images/escape-ship.jpg"
import heliumFlash from "../images/helium_flash.png"
import pilot from "../images/pilot.jpg"
import rebellion from "../images/rebellion.jpg"
import UEG from "../images/united_governments.jpg"
import undergroundCity from "../images/underground-city.jpg"
import alphaCentauri from "../images/alpha-centauri.jpg"
import Earth from "../images/Earth.jpg"
import wanderingEarth from "../images/wandering-Earth.jpg"
import supplements from "../images/pills.jpg"
import moon from "../images/moon.jpg"
import sunset from "../images/sunset.jpg"
import orbit from "../images/Orbit.jpg"
const entries = [
    {id: 1,
     title: "Solar Expansion",
     information: "400 years earlier from the current events of the novel, scientists on Earth discovered the sun was going to end its main-sequence stage and would explode into a helium flash, engulfing all the inner planets within the solar system including the Earth",
     topic: "core",
     image: heliumFlash
    },

    {
        id: 2,
        title: "Earth Engines",
        information: "The Earth Engines are colossal fusion-powered propulsion machines constructed globally across the Earth. Ranging in scale from small mountains to structures spanning entire continents, they burn heavy hydrogen as fuel to generate thrust. The impacts of the Earth engines both through its construction and operations have been moumental to environmental collapse with ecosystems and natural flora and fauna being removed and impacted upon as the construction of the engines require a large area of terrain. Earth engines lead to extreme temperatures needing humans to wear thermal suits to survive nearby.The purpose of the engines is to gradually slow the Earth's rotation, break it from the sun's gravitational pull, and act as a propulsion as the Earth begins a 2500 year journey toward the Alpha Centauri system.",
        topic: "technology",
        image: engines
    },

    {
        id: 3,
        title: "Earth Pilots",
        information: "The best and brightest the United Earth Government have,they are the first and last defence against asterioids and other obstacles, they are responsible for the navigation of Earth through interstellar space",
        topic: "organisations",
        image: pilot
    }, 
    {
        id: 4,
        title: "United Earth Government",
        information: "The United Earth Government emerged from the unification of the world's nations in response to the solar expansion crisis. It holds absolute authority over the Wandering Earth Project, overseeing the construction and operation of the Earth Engines, the management of underground cities, and the allocation of resources across the surviving human population over the course of the 2500 year journey.",
        topic: "organisations",
        image: UEG
    },
    {
        id: 5,
        title: "The Escape Fleet",
        information: "The Escape Fleet were opposed to staying on Earth and rejected the wandering earth project, they thought Humanity's most viable path of survival was amongst the stars, they often held a deep rivalry and opposed the views of the Earth faction as they thought the UEG held an irrational attachment towards Earth",
        topic: "organisations",
        image: escapeShip
    },
    {
        id:6,
        title: "The rebellion",
        information:"As generations passed without visible progress, conspiracy theories began to spread among the underground population. Many came to believe that the sun was never truly dying and that the United Earth Government had fabricated the crisis to seize global power. These tensions eventually erupted into a worldwide rebellion, with factions fighting one another across the globe. The uprising ended with the United Earth Government agreeing to stand down, only for the sun to produce a massive solar flare that confirmed the original warnings had been true all along.",
        topic: "core",
        image: rebellion
    },
    {
        id: 7,
        title: "Underground cities migration",
        information: "As the surface further became inhospitable, the United Earth Goverment ordered the construction of underground cities which needed large-scale technologies such as artificial uv lighting to maintain a healthy population. Underground cities would be at risk of possible destruction from natural elements such as thermal destruction",
        topic: "technology",
        image: undergroundCity
    },
    {
        id:8,
        title: "Alpha Centauri System",
        information: "Humanities' next home, the Alpha Centauri System is the nearest star system to the solar system, it is approximately 4.37 light years away and is a triple star system containing 2 sun like stars and a red dwarf.",
        topic: "core",
        image: alphaCentauri
    },
    {
        id: 9,
        title: "The Earth",
        information: "The Earth is a terrestial planet formed 4.5 billion years ago and is home to Humanity and many other lifeforms, due to the sun's solar expansion it faces absolute annihlation",
        topic: "general",
        image: Earth
    },
    {
        id: 10,
        title: "The Wandering Era",
        information: "The Wandering Era is a period of human history where the Earth and humanity was travelling throughout interstellar space to reach the the Alpha-Centauri System, a journey that would take 2500 years and would encompass the sacrifices of generations to ensure that humanity progresses through the Wandering Era to reach a destination they'll never see. The idea of using a rogue planet was discussed by (Romanovskaya, I 2022) who delved into the idea of using rogue planets to travel interstellar space in an emergency event such as a solar expansion. The Earth would continue its acceleration for 1300 years until 2 thirds of the journey, it wil then deaccelerate for 500 years until it reaches its destination and then realign itself for a century in orbit",
        topic: "core",
        image: wanderingEarth
    },
    {
        id: 11,
        title: "Saying farewell to the Sun",
        information: "For Generations of humansa born during the Wandering Era, they would be born without the Sun and therefore the sky. Humans in these underground cities would have to face the consequences of living without sunlight giving rise to issues such as Vitamin D defiency. Vitamin D and artifical UV lighting is the solution to these issues",
        topic: "general",
        image: supplements
    },
    {
        id: 12,
        title: "Departure from the moon",
        information: "As the Earth began its acceleration away from the Sun, the departure from the sun's orbit also meant the departure of the moon from the Earth's orbit. Gravitationally, the missing moon produced high tides across the globe",
        topic: "general",
        image: moon
    },
    {
        id: 13,
        title: "Reining Era",
        information: "The Reining Era lasted for 42 years and the end of the Reining Era marked the final sunset that humanity would experience as the Earth's rotation was coming to a halt",
        topic: "general",
        image: sunset
    },
    {
        id: 14,
        title: "Exodial Era",
        information: "The Exodial Era is marked when the Earth left the Sun's orbit and the time period where Humanity mass migrated to underground cities",
        topic: "general",
        image: orbit
    }


]
export default entries