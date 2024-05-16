import './App.css';
import Accordian from './Components/Accordion';
import RandomColor from './Components/Random-color';
import StarRating from './Components/Star Rating';
import ImageSlider from './Components/image-slider';



function App() {
  return (
    <div className="App">

      {/* Accordian Components */}
      {/* <Accordian /> */}

      {/* Random color Components */}
      {/* <RandomColor /> */}

      {/* Star Rating Components */}
      {/* <StarRating /> */}

      {/* image slider Components */}
      <ImageSlider url={'http://picsum.photos/v2/list'} page={'1'} limit={'10'} />


     

    </div>
  );
}

export default App;
