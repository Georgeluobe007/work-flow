import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data.json'
import Product from './components/Product';
export default class App extends Component {

  constructor(){
    super();
    this.state={
      Products : Data.ContinentalProduct,
      sort:"",
      size: "",
    }
  }
  render() {
    return (
      <div className="grid-layout">
        <header>
          <a href="/">React Shoping Cart</a>
        </header>

        <main>
         <div className="content">
<div className="main">
  <Product product={this.state.Products}/>
</div>
      <div className="side-bar">
      Carts Items
      </div>
         </div>
        </main>
        <footer>
          All right researve
        </footer>
      </div>
    )
  }
}
