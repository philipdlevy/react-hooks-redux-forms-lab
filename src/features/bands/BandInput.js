import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { bandAdded } from "./bandsSlice";



function BandInput() {
  const [name, setName] = useState("")
  const dispatch = useDispatch()
  
  function handleChange(event) {
    event.preventDefault()
    setName(event.target.value)
  }
  
  function onBandSubmit(e) {
    e.preventDefault();
    dispatch(bandAdded(name))
    setName("")
  }

  return (
    <div>
      <form onSubmit={onBandSubmit}>
        <p>
          <label>Add Band</label>
          <input type="text" onChange={handleChange} value={name}/>
        </p>
        <input type="submit"/>
      </form>
    </div>
  );
}

export default BandInput;
