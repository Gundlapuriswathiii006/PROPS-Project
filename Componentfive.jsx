import React from "react";
function Componentfive({title,author,year,image})
{
    return(
       <div>
       <h1 style={{display:'flex' ,justifyContent:"center"}}> Title:{title}</h1>
       <h2 style={{display:'flex' ,justifyContent:"center"}}>Author:{author}</h2>
       <h2 style={{display:'flex' ,justifyContent:"center"}}>Year:{year}</h2>
      <img src={image} className="image-style" alt="image"/>

       </div>

    );
}
export default Componentfive;