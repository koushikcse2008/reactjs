import React, { useState, useEffect } from 'react'
import axios from 'axios'
import IssuesList from './IssuesList';

const AllIssuesPage = () => {
    const [IssesLists, setIssesLists] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4000/issues").then((response) => {
            setIssesLists(response.data);
        });
    }, []);

    return (
        <>
        <h2>Issue List</h2>
        <IssuesList listData={IssesLists} />
        </>
    );
}

export default AllIssuesPage;