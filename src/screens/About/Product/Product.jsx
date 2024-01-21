import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../../components/Card';

const product = () => {
  // params for dynamic route
  const params = useParams();
  console.log(params);
  // state
const [data,setData] = useState([])

  // useEffect
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        console.log(res.data);
        setData(res.data)
      }).catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <>
    <div className='flex justify-evenly flex-wrap mt-[5rem] gap-5' >
   {data.length > 0 ?  data.map((item)=>{
    return <Card key={item.id} title={item.title} src={item.image} description={item.description} price={item.price} id={item.id} showBtn={true}/>
   }):<h1>Loading....</h1>}
   
      </div>
    </>  
    )
}
export default product