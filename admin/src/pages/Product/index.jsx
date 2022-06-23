import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './product.css'
import { deleteProduct } from '../../redux/actions/productAction';
import AddModal from './addModal';
import EditModal from './editModal';


const Product = () => {

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [showModal, setShowModal] = useState(false)
  const handleDelete = (_id) => {
    if (window.confirm("Are you sure wanted to delete the product ?")) {
      dispatch(deleteProduct(_id))
    }
  }

  return (
    <>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Products</h1>
          <div class="btn-toolbar mb-2 mb-md-0">

            <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => setShowModal(true)}>
              Add New Product
            </button>

          </div>
        </div>



        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
                <th scope="col">Image</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>

              </tr>
            </thead>
            <tbody>

              {
                products.data && products.data.map((product, i) => {
                  return (
                    <tr key={product._id}>
                      <td>{i + 1}</td>
                      <td>{product.title}</td>
                      <td>{product.description}</td>
                      <td>{product.price}</td>
                      <td>{product.stock}</td>
                      <td><img style={{ width: "50px" }} src={product.productImage} alt="" /></td>
                      <td><button className='btn btn-outline-danger' onClick={() => setShowModal(true) } >Edit</button></td>
                      <td><button className='btn btn-outline-danger' onClick={() => handleDelete(product._id)}>Delete</button></td>
                    </tr>
                  )
                })
              }

            </tbody>
          </table>
        </div>
      </main>
      {showModal ? <AddModal setShowModal={setShowModal} /> : null}
      {showModal ? <EditModal setShowModal={setShowModal} /> : null}

    </>
  )
}



export default Product