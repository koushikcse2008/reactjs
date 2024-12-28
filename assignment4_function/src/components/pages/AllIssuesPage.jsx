import { useEffect, useState } from 'react'
import axios from 'axios'
import IssuesList from './IssuesList';
import config from '../../config/config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GridLoader from "react-spinners/GridLoader";


const AllIssuesPage = () => {

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };

    const [issueLists, setIssueList ] = useState([]);
    const [isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        
            axios.get(config.jsonServer).then((response) => {
                let issueList = [];
                if(response.data && response.data.length >0) {                    
                    //setIssueList(response.data);
                    issueList = response.data;
                } else {
                    issueList = [];
                }
                setIsLoading(false);
                setIssueList(issueList);
            });
        
    }, []);
    
        return (
            <>
            <h2 className='text-center fw-bold'>Issue List</h2>  

            <hr className='mb-5' />  
            
            {isLoading == false && issueLists != "" && 
                <IssuesList listData={issueLists} />
            }
            {issueLists == "" && 
                <p>No data found</p>
            }
            {isLoading == true && 
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