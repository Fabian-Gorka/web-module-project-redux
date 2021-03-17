import React from "react";
import {useDispatch} from "react-redux"; 
import { removeFeature } from "../Reducers/actions";


const AddedFeature = props => {

  const dispatch = useDispatch()
  console.log(props)

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => {dispatch(removeFeature(props.feature))}}>X</button>
      {props.feature.name}
    </li>
  );
};
export default AddedFeature;