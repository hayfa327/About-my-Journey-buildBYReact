import { MyJourney } from "./data"

export default function JourneyCard(props) {
  return (
    <section>
      <img 
      src={props.img} />
 
 <h3> {props.city} </h3>
 <h3> {props.date} </h3>
 <p> {props.description} </p>

    </section>
  )
}