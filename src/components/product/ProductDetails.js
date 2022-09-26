import React, { Fragment, useEffect } from 'react'

import Loader from '../layout//Loader'
import Metadata from '../layout/Metadata'
import { useSelector, useDispatch } from 'react-redux'
import { useAlert } from 'react-alert'
import { getProductDetails, clearErrors } from '../../actions/productActions'



const ProductDetails = ({ match }) => {

    const dispatch = useDispatch();
    const { loading, error, product } = useSelector(state => state.productDetails)

    const alert = useAlert();


    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        dispatch(getProductDetails(match.params.id))


    }, [dispatch, alert, error, match.params.id])
    console.log(product.images)

    return (
        
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                        <Metadata title={product.name} />
                    <div className="row f-flex  justify-content-around " >
                        <div className="col-12 col-lg-5 img-fluid" id="product_image">
                            <img
                                src="{product.images[0].url}"
                            />

                            <hr />

                            <div className="rating-outer">
                                <div className="rating-inner"></div>
                            </div>
                            <span id="no_of_reviews">(5 Reviews)</span>

                            <hr />

                            <p id="product_price">{product.price}</p>
                            <div className="stockCounter d-inline">
                                <span className="btn btn-danger minus">-</span>

                                <input type="number" className="form-control count d-inline" value="1" readOnly />

                                <span className="btn btn-primary plus">+</span>
                            </div>
                            <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4">Add to Cart</button>

                            <hr />

                            <p>Status: <span id="stock_status">In Stock</span></p>

                            <hr />

                            <h4 className="mt-2">Description:</h4>
                           <p>{product.description}</p> <hr />
                            <p id="product_seller mb-3">Sold by: <strong>Amazon</strong></p>

                            <button id="review_btn" type="button" className="btn btn-primary mt-4" data-toggle="modal" data-target="#ratingModal">
                                Submit Your Review
                            </button>

                            <div className="row mt-2 mb-5">
                                <div className="rating w-50">

                                    <div className="modal fade" id="ratingModal" tabIndex="-1" role="dialog" aria-labelledby="ratingModalLabel" aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="ratingModalLabel">Submit Review</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">

                                                    <ul className="stars" >
                                                        <li className="star"><i className="fa fa-star"></i></li>
                                                        <li className="star"><i className="fa fa-star"></i></li>
                                                        <li className="star"><i className="fa fa-star"></i></li>
                                                        <li className="star"><i className="fa fa-star"></i></li>
                                                        <li className="star"><i className="fa fa-star"></i></li>
                                                    </ul>

                                                    <textarea name="review" id="review" className="form-control mt-3">

                                                    </textarea>

                                                    <button className="btn my-3 float-right review-btn px-4 text-white" data-dismiss="modal" aria-label="Close">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>



                    </div>
                </Fragment>

            )}
        </Fragment>


    )
}

export default ProductDetails
