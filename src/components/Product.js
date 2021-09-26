import React, { Component } from 'react'
import forMatCurrency from './util'
export default class Product extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.product.map((product) =>(
                        <li key={product._id}>
                           <div className="product">
                                 <a href={"#" + product._id}>
                                     <img src={product.image} style={{height:"25rem",width:"25rem"}} alt={product.title}/>
                                     <h5>{product.title}
                                     </h5>
                                 </a>
          <div className="product-price">
              <div>
                  {forMatCurrency(product.price)}
              </div>
              <button className="button">
                  Add To Cart
              </button>
              </div>                     
                           </div>
                        </li>
                    ))}

                </ul>
            </div>
        )
    }
}
