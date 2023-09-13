import React   from "react";
export default function About(props) {
  
  return (
    <>
      <div className="container my-3 abt" style = {{backgroundColor : props.mode === 'dark'? 'rgb(3 ,2, 37)' : 'white' , color : props.mode === 'dark'? 'white': 'rgb(3 ,2, 37)' }}>
        <h1 style = {{backgroundColor : props.mode === 'dark'? 'rgb(3 ,2, 37)' : 'white' , color : props.mode === 'dark'? 'white': 'rgb(3 ,2, 37)'}}>About Us</h1>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
                style = {{backgroundColor : props.mode === 'dark'? 'rgb(3 ,2, 37)' : 'white' , color : props.mode === 'dark'? 'white': 'rgb(3 ,2, 37)' ,  border : props.mode === 'dark'? '1px solid white' : '1px solid black'}}
              >
               <b>Item #1</b> 
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body" style = {{backgroundColor : props.mode === 'dark'? 'rgb(3 ,2, 37)' : 'white' , color : props.mode === 'dark'? 'white': 'rgb(3 ,2, 37)' }}>
              The  <strong>Text Utils app </strong>built with React is a versatile and user-friendly tool designed to streamline text manipulation tasks. With a sleek and intuitive interface, users can easily copy and paste text for quick and efficient editing. This app simplifies the process of producing sound from text, allowing users to add an audible element to their content effortlessly. Whether you want to create engaging audio content or simply enjoy the novelty of converting text into sound, this feature adds an exciting dimension to your text processing experience.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
                style = {{backgroundColor : props.mode === 'dark'? 'rgb(3 ,2, 37)' : 'white' , color : props.mode === 'dark'? 'white': 'rgb(3 ,2, 37)' ,  border : props.mode === 'dark'? '1px solid white' : '1px solid black'}}
              >
                <b>Item #2</b>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body" style = {{backgroundColor : props.mode === 'dark'? 'rgb(3 ,2, 37)' : 'white' , color : props.mode === 'dark'? 'white': 'rgb(3 ,2, 37)' }}>
              One of the standout features of the Text Utils app is its Dark Mode functionality. With just a click, users can toggle between light and dark themes, enhancing readability and reducing eye strain during late-night or low-light usage. Dark Mode not only offers an aesthetically pleasing interface but also contributes to a more comfortable and enjoyable user experience.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
                style = {{backgroundColor : props.mode === 'dark'? 'rgb(3 ,2, 37)' : 'white' , color : props.mode === 'dark'? 'white': 'rgb(3 ,2, 37)' , border : props.mode === 'dark'? '1px solid white' : '1px solid black' }}
              >
                <b>Item #3</b>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body" style = {{backgroundColor : props.mode === 'dark'? 'rgb(3 ,2, 37)' : 'white' , color : props.mode === 'dark'? 'white': 'rgb(3 ,2, 37)'}}>
              Additionally, the app offers a wide range of text transformation tools, including converting text to uppercase. Whether you're working on a document, coding, or simply tidying up text for social media posts, this app's comprehensive suite of features ensures that your text editing needs are met with ease and efficiency. The Text Utils app is a must-have for anyone seeking a powerful yet user-friendly solution for text-related tasks, all wrapped up in a beautifully designed React application.
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
