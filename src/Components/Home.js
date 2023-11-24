import React,{useState,useEffect} from 'react'

const Home = () => {
    const [state , setState] = useState (1);
    const [data , setData] = useState([]);
  
    useEffect(() => {
       async function getData() {
        const get = await fetch (`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
  
        const res = await get.json();
        setData(res);
        console.log(res);
       }
       getData();
  
      
    } , [state])
  

  return (
    <div><div className='main'>
    <h3 className='line'>For More Employee Information   </h3>
  <div><button className='button' onClick={() => setState(state+1)}>CLickHere</button></div>
  </div>
  <div className='info-heading'>
        <h5>UserID</h5>
        <h5>FirstName</h5>
        <h5>LastName</h5>
        <h5>Age</h5>
        <h5>Salary</h5>
        <h5>DateofBirth</h5>
        {/* <h5>Email</h5> */}
  </div>
  {
   data.map((element,index) => {
     return(
       <div className='data' key= {index}>
        <h5>{element.id}</h5>
        <h5>{element.firstName}</h5>
        <h5>{element.lastName}</h5>
        <h5>{element.age}</h5>
        <h5>{element.salary}</h5>
        <h5>{element.dob}</h5>
        {/* <h5>{element.email}</h5> */}
        </div>
     )
     
   })
  }</div>
  )
}

export default Home