import React from "react"

const FoodContainer = (props) => { 
    return ( 
            <div className="foodContainer">
            <img src={props.image} alt="foodimage" className="foodImg" />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <a href={props.recipeLink} target="_blank"><button>View Recipe</button></a>
            </div>
    )
}

export default FoodContainer;