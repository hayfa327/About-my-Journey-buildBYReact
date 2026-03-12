import { MyJourney } from "../data"
import JourneyCard from "../journeyCard"
 

export default function App() {
const journeyElements = MyJourney.map((journey) => {
 return (
    < JourneyCard 
    img={journey.img}
    city={journey.city}
    date={journey.date}
    description={journey.description}
    /> 
 )
})
return (
<main>
  {journeyElements}
</main>
)
  
}

/* Where your project can go next

Your My Journey app can become a very nice portfolio project if you later add:

timeline of your life

map of the journeys

add new journey form

filtering by country

gallery view */