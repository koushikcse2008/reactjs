import { useEffect, useState } from 'react'
import axios from 'axios'
import IssuesList from './IssuesList';
import config from '../../config/config'
import { ToastContainer, toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';
import GridLoader from "react-spinners/GridLoader";


const AllIssuesPage = () => {

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };

    const [issueLists, setIssueList ] = useState([]);

    useEffect(() => {
        setTimeout(function() {
            axios.get(config.jsonServer).then((response) => {
                setIssueList(response.data );
            });
        }, 2000);
    }, []);
    
        return (
            <>
            <h2 className='text-center fw-bold'>Issue List</h2>  

            <hr className='mb-5' />  
            
            {issueLists.length > 0 && 
                <IssuesList listData={issueLists} />
            }
            {issueLists.length <= 0 && 
                <GridLoader 
                color="#f00"
                loading="true"
                cssOverride={override}
                size={15}
                />
            }
            <ToastContainer />
            <p>&nbsp;</p>
            </>
        );
}

export default AllIssuesPage;