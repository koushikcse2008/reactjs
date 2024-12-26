import { Component } from 'react';
import Issue from '../pages/Issue';

class IssuesList extends Component {
    
    render() {

        //const { listData } = this.props;
        const { listData } = this.props;

        return (
            <>
            <table border="2" style={{ margin: 'auto', width: '80%' }} className='p-4 mb-4' cellPadding="2" cellSpacing="4">
            <thead>
              <tr>
                <th>ID</th>
                <th>Issue Description</th>
                <th>Severity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
                {listData.map((data) => (
                    <Issue issueItem={data} key={data.id} />
                ))}
            </tbody>
            </table>               
            </>
        );
    }
}

export default IssuesList;
