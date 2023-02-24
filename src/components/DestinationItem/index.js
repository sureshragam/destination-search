// Write your code here
import './index.css'

function DestinationItem(props) {
  const {name, image} = props
  console.log(props)
  return (
    <li>
      <img src={image} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
