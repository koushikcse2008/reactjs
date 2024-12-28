import React from 'react';

const Issue = ({issueItem}) => {
    return (
        <>
        <tr>
            <td>{ issueItem.id }</td>
            <td>{ issueItem.desc }</td>
            <td>{ issueItem.severity }</td>
            <td>{ issueItem.status }</td>
          </tr>                
        </>
    );
}

export default Issue;
