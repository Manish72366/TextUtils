import "./manish.css";
// React is a framework and also a library.
// we have props and state in react
// To start app use (npm start) in terminal
// npm run build  this is for production build
// function based component we use  and a old component is class based. but function based component is easy to use so that's why.
let name = "<b>manish</b>"; // This will not look like bold this will look same as a string written  .
function App() {
  return (
    // return only one element in JSX
    // if more then one element are there in different container . so use JSX fragment.
    // JSX actually a modified html inside which we can write js also.
    // here class replaced by className , for = htmlFor , tabindex = tabIndex.
    // Don't put unterminated element.
    // ex . <img src="" alt="" > so instead of that we do <img src ="" alt =""/>
    // Babel compiles JSX down to React.createElement() calls.
    <>
      
      <nav>
        <li>Home</li>
        <li>Products</li>
        <li>About us</li>
        <li>Contact</li>
      </nav>
       <div className="container">{name}</div> {/*using js inside the JSX. */}

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet minus dolor magni id ipsam vero officia? Necessitatibus error molestiae eaque at dignissimos quis impedit. Soluta commodi blanditiis optio, veritatis recusandae vitae molestiae porro quod! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora natus facere nostrum sequi, expedita veritatis nulla impedit vitae quas a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugit nihil pariatur vitae rem facilis maxime inventore, voluptates non suscipit adipisci expedita dicta, soluta dolores provident aliquam consequuntur aperiam accusamus! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod sunt blanditiis ducimus aliquam facilis quasi dolorem dicta aspernatur repellendus illum officia dignissimos error, praesentium deserunt fuga corporis minus iure fugiat!</p>
    </> // This is a fragmented element.
  );
}

export default App;
