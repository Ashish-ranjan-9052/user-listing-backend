import axios from 'axios';
import {useEffect, useState } from "react";
 
function User()
{
    const [studentid, setId] = useState('');
  const [firstname, setFirstname] = useState("");
  const [lastname,setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [students, setUsers] = useState([]);


 
useEffect(() => {
  (async () => await Load())();
  }, []); 
 
 
  async function  Load()
  {
     const result = await axios.get(
         "http://localhost:8081/api/v1/student/getall");
         setUsers(result.data);
         console.log(result.data);
  }
 

  
     async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8081/api/v1/student/save",
        {
        firstname: firstname,
        lastname: lastname,
        address: address,
          mobile: mobile
        });
          alert("User Registation Successfully");
          setId("");
          setFirstname("");
          setLastname("");
          setAddress("");
          setMobile("");
          Load();
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }

 
   async function editStudent(students)
   {
    setFirstname(students.firstname);
    setLastname(students.lastname);
    setAddress(students.address);
    setMobile(students.mobile); 
    setId(students._id);
   }
 
   async function DeleteStudent(studentid)
   {
        await axios.delete("http://localhost:8081/api/v1/student/delete/" + studentid); 
        alert("User deleted Successfully");
        Load();
   }
 
   async function update(event)
   {
    event.preventDefault();
 
   try
       {
        await axios.put("http://localhost:8081/api/v1/student/edit/" + studentid ,
       {

        firstname: firstname,
        lastname:lastname,
        address: address,
         mobile: mobile
       
       });
         alert("Registation Updated");
         setId("");
         setFirstname("");
         setLastname("");
         setAddress("");
         setMobile("");
         Load();
       }
   catch(err)
       {
         alert("User Updated Failed");
       }
  }

  return (
    <div>
       <h1>User Details</h1>
       <div class="container mt-4" >
          <form>
             
              <div class="form-group">
                <label>First Name</label>
                <input  type="text" class="form-control" id="firstname"
                value={firstname}
                onChange={(event) =>
                  {
                    setFirstname(event.target.value);      
                  }}
                />
              </div>

              <div class="form-group">
                <label>Last Name</label>
                <input  type="text" class="form-control" id="lastname"
                value={lastname}
                onChange={(event) =>
                  {
                    setLastname(event.target.value);      
                  }}
                />
              </div>


              <div class="form-group">
                <label>User Address</label>
                <input  type="text" class="form-control" id="address" 
                 value={address}
                  onChange={(event) =>
                    {
                      setAddress(event.target.value);      
                    }}
                />
              </div>

              <div class="form-group">
                <label>Mobile</label>
                <input type="text" class="form-control" id="mobile" 
                  value={mobile}
                onChange={(event) =>
                  {
                    setMobile(event.target.value);      
                  }}
                />


              </div>
              <div>
              <button   class="btn btn-primary mt-4"  onClick={save}>Register</button>

              <button   class="btn btn-warning mt-4"  onClick={update}>Update</button>
              </div>   
            </form>
          </div>
                <br/>
<table class="table table-dark" align="center">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Address</th>
      <th scope="col">Mobile</th>
      
      <th scope="col">Option</th>
    </tr>
  </thead>
       {students.map(function fn(student)
       {
            return(
            <tbody>
                <tr>
                <td>{student.firstname}</td>
                <td>{student.lastname}</td>
                <td>{student.address}</td>
                <td>{student.mobile}</td>        
                <td>
                    <button type="button" class="btn btn-warning"  onClick={() => editStudent(student)} >Edit</button>  
                    <button type="button" class="btn btn-danger" onClick={() => DeleteStudent(student._id)}>Delete</button>
                </td>
                </tr>
            </tbody>
            );
            })}
            </table>
       </div>
            );
        }
  
  export default User;
