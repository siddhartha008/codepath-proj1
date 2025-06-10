import './App.css'
import FoodContainer from './components/foodContainer'
import Header from './components/header'
import {foods} from './data/food'
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <head>
    <link rel="icon" href='src/assets/favicon.png' />
    <title>Nepali Bites</title>
</head> 
    
    <Header/>

      <div className='mainDiv'>
      {
        foods.map(food => (
          <FoodContainer 
          name={food.name} 
          description={food.description} 
          image={food.image} 
          recipeLink={food.recipe}
          />
        ))
      }
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
