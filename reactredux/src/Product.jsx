import React from 'react'
import my1 from './assets/react.svg'
import { additem } from './CarteSlice'
import { useDispatch, useSelector } from 'react-redux'


const Product = () => {
    let dispatch = useDispatch()
    let cart = useSelector((store)=>store.cart.Cartitems)
    let Productslist = [
        {
            id:1,pname:"watch",pprice:2000,pimg:my1
        },

        {
            id:2,pname:"laptop",pprice:65000,pimg:my1
        },

        {
            id:3,pname:"mobile",pprice:2500,pimg:my1
        }
    
    ]

    function handlesubmit(e){
        dispatch(additem(e))
    }


  return (
    <>
   <h1>Cart - {cart.length}</h1>


    <div style={{display:"flex",justifyContent:"space-around",gap:"30px"}} >
        
            {
                Productslist.map((e)=>(
                
                 <div style={{border:"1px solid black",padding:"16px",}}>   
                    
                    
                    <img src={e.pimg} alt="" />
                    <h1>{e.pname}</h1>
                    <h1>{e.pprice}</h1>
                    <button onClick={()=>handlesubmit(e)}>Add to cart</button> <br />

                    </div>
                    

                    
                    

                ))
                    

            }
        </div>


    
    



    
    
    
    </>
  )
}

export default Product
