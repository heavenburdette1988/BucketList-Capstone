


import "./Welcome.css"


export const Welcome = () => {




 const PropsAndState = ({email})=>{
   return(
    <div>Welcome, {email}  </div>
   )
 }
  
     console.log(JSON.parse(localStorage.getItem('react_trapperKeeper_user')))


    return (
      
    <>
  
      <div className="d-flex text-center text-white bg-dark home__container">
  

      <main className="px-3 home__content">
        <div><PropsAndState email={JSON.parse(localStorage.getItem('react_trapperKeeper_user')).email}/></div>
         
     </main>

  
      
      </div>

    </>
    )
  
}