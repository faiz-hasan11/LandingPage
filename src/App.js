import './App.css';
import useStyles from "./styles"
import Header from "./components/Header/Header"
import PlaceToVisit from './components/PlaceToVisit/PlaceToVisit';
import { useEffect, useState } from 'react';
import ClimbingBoxLoader from "react-spinners/HashLoader"
import  Menu from './components/Menu/Menu';
function App() {

  const classes = useStyles()
  const [loading,setLoading] = useState(false)
  const [isToggled,setIsToggled] = useState(false)

  const toggleHandler = () =>
  {
    setIsToggled(!isToggled)
  }

  useEffect(() =>
  {
    setLoading(true)
    setTimeout(() =>
    {
      setLoading(false)
    },5000)
  },[])
  return (
    <div className={classes.root}>
      {
        loading 
        ?
        <div className={classes.loader}>
        <ClimbingBoxLoader 
          size={50}
          color={"white"}
          loading={loading}
        />
        </div>

        :
        <>
        <Menu toggled={isToggled}/>
        <Header toggleHandler={toggleHandler} isToggled={isToggled}/>
        <PlaceToVisit/>
        </>
      }
      
    </div>
  );
}

export default App;
