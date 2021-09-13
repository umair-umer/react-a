import './App.css';

function HelloWorld(){
    const greet="hellow World"; 
    return(
        <>
         <h1 className="h1">{greet}</h1>

        </>
    );
}

function HelloObj(){
    const obj ={
        name: "hellow world object"
    }
    return(
        <>
     <h1 className="h1"> {obj.name}</h1>
        </>
    );

}

function Seprte(){
    const data = ['We', 'are', 'United'] 
    return (
        <>
        <ul className="nl">
     <li>{data[0]}</li>
     <li>{data[1]}</li>
     <li>{data[2]}</li>
        
        
       
</ul>


        </>
    );
}
 function Li(){
    const list = [{Name: "Hello World 1"}, {Name: "Hello World 2"}, {Name: "Hello World 3"}]
     return(
         <>
         <ul className="ol">
           {list.map((item,index)=>{
               return <li key={index}>{item.Name}</li>
                 
                      
                       
                       
                       
                   

               
               
              
           })}
           </ul>
       

         </>
     );
 }

  function Dlist(){
    const complex = [{company: 'XYZ', jobs: ['Javascript', 'react']}, {company: 'ABC', jobs: ['AngularJs', 'Ionic']}]
      return(<>
      <ul className="ul">
             {
                 complex.map((item,index)=>{
                     
                     return <li key={index}>{item.company}
                     <ul>
                         <li>{item.jobs}</li>
                     </ul>
                     </li>
                       
                     
                 })
             }



</ul>
      
      </>)
  }


export { HelloWorld,HelloObj,Seprte,Li,Dlist};