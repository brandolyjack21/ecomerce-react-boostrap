import { useSelector} from "react-redux";

function Prueba() {

    const carState = useSelector((state) => state.car.value)
    console.log(carState,"carstate");
  return (
    <div>
      <button></button>
      <div></div>
    </div>
  )
}

export default Prueba
