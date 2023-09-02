import React ,{ useState }  from "react";
export default function About(props) {
    // making a state object so mode is an object here have more functionallity
    const [mode1 , setMode] = useState(
        {
            color : 'black',
            backgroundColor : 'white'
        }
    )
    const [btn , setbtn] = useState("Dark Mode");
    const handleMode = () =>
    {
         if (mode1.color === 'white')
         {
           setMode({
            color : 'black',
            backgroundColor : 'white'
           })
           setbtn("Dark Mode")
         }
         else 
         {
           setMode({
            color : 'white',
            backgroundColor : 'black'
           })
           setbtn("Light Mode");
         }
    }
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
               <b>Accordion Item #1</b> 
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body" style = {{backgroundColor : props.mode === 'dark'? 'rgb(3 ,2, 37)' : 'white' , color : props.mode === 'dark'? 'white': 'rgb(3 ,2, 37)' }}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classNamees that we use to style each element. These classNamees control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
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
                <b>Accordion Item #2</b>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body" style = {{backgroundColor : props.mode === 'dark'? 'rgb(3 ,2, 37)' : 'white' , color : props.mode === 'dark'? 'white': 'rgb(3 ,2, 37)' }}>
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
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
                <b>Accordion Item #3</b>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body" style = {{backgroundColor : props.mode === 'dark'? 'rgb(3 ,2, 37)' : 'white' , color : props.mode === 'dark'? 'white': 'rgb(3 ,2, 37)'}}>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
