import axios from "axios";
import {useState,useEffect} from "react";
function ApiTest(){
    const [data,setData] = useState([]);
    useEffect(()=>{
     axios.get("https://retoolapi.dev/hgI1Wp/data").then((response)=>{
        if(response.status>=200)
        {
            setData(response.data);
        }
     });
     
    },[]);
    return(
        <div>
            <h1 className="bg-warning">Api genration</h1>
            <table className="table border border-primary container bg-secondary text-warning">
                <thead>
                    <tr> 
                        <th>Name</th>
                        <th>Email</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.Name}</td>
                            <td>{user.Email}</td>
                            <td>{user.Age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ApiTest;