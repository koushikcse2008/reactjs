import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
// import Spinner from '../common/Spinner';

import DataService from '../service/DataService';

import { ToastContainer } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css';



// Example items, to simulate fetching from another resources.
//const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
    const [items, setItems] = useState([]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                DataService.delete(id).then(() => {
                    DataService.getAll()
                    .then((response) => {
                        setItems(response.data);
                        //setSpinner(false);
                        // console.log(response.data);
                    });
                });

              Swal.fire(
                'Deleted!',
                'Your contact has been deleted.',
                'success'
              );
              
            }
          })

        // toast.error("Successfully deleted.");
    };

  return (
    <>
      {currentItems &&
        currentItems.map((contact, index) => (
            <tr key={contact.id}>
            <th scope="row" className="text-center">{index+1}</th>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.address}</td>
            <td>{contact.landline}</td>
            <td>{contact.mobile}</td>
            <td colSpan="3">
                <Link to={`/show-contact/${contact.id}`} className="btn btn-outline-success mr-2">View</Link>
                <Link to={`/edit-contact/${contact.id}`} className="btn btn-outline-warning mr-2">Edit</Link>
                <button type="button" className="btn btn-outline-danger" onClick={() => handleDelete(contact.id)}>Delete</button>
            </td>
        </tr>
        ))}
    </>
  );
}

function ContactList1({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const [items, setItems] = useState([]);
  const [spinner, setSpinner] = useState(true);
    
  useEffect(() => {
        DataService.getAll()
                .then((response) => {
                    setItems(response.data);
                    //setSpinner(false);
                    console.log(response.data);
                });

  }, []);
    

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
    {/* { spinner ? <Spinner /> : null } */}
    { items.length > 0 &&
    <table className="table table-bordered">
    <thead className="bg-success text-white">
        <tr>
        <th scope="col">#Sl.</th>
        <th scope="col">Name</th>
        <th scope="col">Email id</th>
        <th scope="col">Address</th>
        <th scope="col">Landline</th>
        <th scope="col">Mobile</th>
        <th scope="col" colSpan="3">Actions</th>
        </tr>
    </thead>
    <tbody className="bg-light">
      <Items currentItems={currentItems} />
      <tr><td colSpan="9" className="text-center">
      <ReactPaginate
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< Previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
        </td></tr>
      
      </tbody>
    </table>
    }
    <ToastContainer />
    </>
  );
}

export default ContactList1;