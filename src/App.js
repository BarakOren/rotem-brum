import React, {useEffect} from "react";
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from "./components/homepage/homepage.component";
import Header from "./components/header/header.component";
import Menu from "./components/menu/menu.component";
import About from "./components/about/about.component";
import Shop from "./components/shop/shop.component";
import Design from "./components/design/design.component";
import Calligraphy from "./components/calligraphy/calligraphy.component";
import ProjectPage from "./components/project/project.component";
import CheckoutPage from "./components/checkout/checkout.component";
import ViewProduct from "./components/viewProduct/viewProduct.component"
import {useLocation} from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {getWidth} from "./redux/width/width.actions";
import {useDispatch, useSelector} from "react-redux";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  const width = useSelector(state => state.widthReducer.width);

    useEffect(() => {
    function handleResize() {
        dispatch(getWidth())
        }
        window.addEventListener('resize', handleResize)
    },[dispatch, width])

    const menu = (width < 800) ? true : false;



  return (
    <div className="App">
        { menu ? <Menu /> : <Header />}
    
        <TransitionGroup>
        <CSSTransition
          timeout={500}
          classNames='fade'
          key={location.key}
        >
        <Switch location={location}>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/about" component={About} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/calligraphy" component={Calligraphy} />
            <Route exact path="/design" component={Design} />
            <Route exact path="/shop/checkout" component={CheckoutPage} />
            <Route path="/shop/:product" component={ViewProduct} />
            <Route path="/:category/:project" component={ProjectPage}/>
            <Route path='*'>
              <div>Not Found</div>
            </Route>
        </Switch>
        </CSSTransition>
      </TransitionGroup>

    </div>
  );
}

export default App;
