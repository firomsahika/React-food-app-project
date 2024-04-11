import Home from "./pages/HomePage/Home"
import Routing from "./route/Routing"
import { BrowserRouter } from "react-router-dom"
import TopCategory from "./pages/TopCategories/TopCategory"
import BestFood from "./pages/BestFood/BestFood"
import FoodProcess from "./pages/FoodProcess/FoodProcess"
import CustomerReview from "./pages/CustomerReview/CustomerReview"
import FoodApp from "./pages/FoodApp/FoodApp"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
    <TopCategory />
    <BestFood />
    <FoodProcess />
    <CustomerReview />
    <FoodApp />
    
    </>
  )
}

export default App
