import React from 'react'

const App = () => {

  function btnClick(){
    console.log("Button  Clicked");
  }



  function inputDalna(){
    console.log("Input koi type kar raha hai abhi ");
  }



  const pageScrollinng =(yup) =>{
    // console.log('page scrolling', yup);

    if(yup>0){
      console.log('Page is scrolling down');
    } else{
      console.log('Page is scrolling up');
    }
  }


  return (
    <div>App

      <button  onClick={btnClick}>Click me</button>
      <button onClick={() =>{
        console.log('Haaa issee bhi ho raha hai ');
      }}>Click me 2</button>


      <input onChange={function(elem){
        console.log(elem.target);
      }}  type="text" placeholder='Enter your name' />

      <div
         onMouseMove={(elem) => {
           console.log(elem.clientX);
         }}
         className='box'>
        

{/* 







        <div onWheel={pageScrollinng} > */}

      <div onWheel={(yup)=>{
        pageScrollinng(yup.deltaY);
      }} >



          <div className='page1'></div>
          <div className='page2'></div>
          <div className='page3'></div>
        </div>
      </div>
    </div>
  )
}

export default App