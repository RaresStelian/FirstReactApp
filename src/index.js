import React  from "react";
import ReactDOM from "react-dom";

const API_KEY = "AIzaSyAeiGy_96oUXAg-Qvk0JWVb8jM6fIQJ5Hs";
// crete a new component and this component should produce some HTML

const App = () => {
  return <div>Hi there</div>;
}

// take this component generated HTML and put int on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

