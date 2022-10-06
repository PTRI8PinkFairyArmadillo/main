import React, {useContext} from 'react';
import {Routes, Route, Link } from 'react-router-dom' ;
import { GlobalContext } from '../context/GlobalState';

const Post = (props) => {
  const { deletePost } = useContext(GlobalContext);
  const { name, location, type, quantity, user, postID, description, event} = props;
  return (
    // <div>In the Post</div>
    <div class="card" id={postID}>
      <div class="card-body">
        <h5 class="card-title">Item Name: {name} </h5>
        <h6 class="card-subtitle mb-2 text-muted">Location: {location}</h6>
        <h6 class="card-subtitle mb-2 text-muted">Event: {event}</h6>       
        <h6 class="card-subtitle mb-2 text-muted">Item Type: {type}</h6>
        <h6 class="card-subtitle mb-2 text-muted">Quantity: {quantity}</h6>
        <h6 class="card-subtitle mb-2 text-muted">Created By: {user}</h6>
        <p class="card-text">Description: {description}</p>
        <a class="card-link">Edit</a>
        <Link to="/" class="card-link" onClick={() => deletePost(postID)}>Delete</Link>
      </div>
    </div>
  )};
  
  export default Post