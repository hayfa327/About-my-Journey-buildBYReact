
export default function JourneyCard(props) {
  return (
    <section>
      <img 
      src={props.journey.img} />
        <h3> {props.journey.city} </h3>
        <h3> {props.journey.date} </h3>
        <p> {props.journey.google_maps_link}    </p>
         <p> {props.journey.description} </p>
         </section>
  )
}