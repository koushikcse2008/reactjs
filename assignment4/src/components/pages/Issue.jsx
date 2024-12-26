import  { useNavigate } from 'react-router-dom'
import config from '../../config/config'
import axios from 'axios';
import { toast } from 'react-toastify';


const Issue = ({ issueItem }) => {
  
      let navigate = useNavigate();
        //const { issueItem } = props;

        const handleClick = (id) => {
          if(confirm('Are you sure you want to view the details?')) {
            return navigate(`/details/${id}`);
          } 
        }

        const handleEdit = (id) => {
          return navigate(`/edit/${id}`);
        }

        const handleDelete = (id) => {

          if(confirm('Are you sure you want to delete?')) {
            axios.delete(config.jsonServer+"/"+id)  
            .then(res => {  
              console.log(res);  
              console.log(res.data);  
            }); 

            toast.success("Successfully deleted");

            setTimeout(() => {
              window.location.reload(); 
              //return navigate('/issues');
            }, 2000);

          }
        }

        return (
            <>
            <tr>
                <td>{ issueItem.id }</td>
                <td><a onClick={() => handleClick(issueItem.id)}>{ issueItem.desc }</a></td>
                <td>{ issueItem.severity }</td>
                <td>{ issueItem.status }</td>
                <td>
                  <a onClick={() => handleEdit(issueItem.id)} style={{ marginRight: "10px" }}> Edit </a> 
                  <a onClick={() => handleDelete(issueItem.id)}> Delete </a>
                </td>
              </tr>                
            </>
        );

}

export default Issue;
