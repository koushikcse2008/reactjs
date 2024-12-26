import { Component } from 'react'
import axios from 'axios'
import IssuesList from './IssuesList';

class AllIssuesPage extends Component {

    state = {
        IssesLists: []
    };

    componentDidMount() {
        axios.get("http://localhost:4000/issues").then((response) => {
            this.setState({
                IssesLists: response.data
            });
        });
    }

    render() {
        return (
            <>
            <h2>Issue List</h2>
            <IssuesList listData={this.state.IssesLists} />
            </>
        );
    }
}

export default AllIssuesPage;