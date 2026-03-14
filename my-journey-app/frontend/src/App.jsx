import Header from "./header"
import  MyJourney  from "./data"
import JourneyCard from "./journeyCard"
 

export default function App() {
const journeyElements = MyJourney.map((journey) => {
 return (
    < JourneyCard 
    key={journey.id}
    journey={journey}
    /> 
 )
})
return (
<main>
  < Header />,
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