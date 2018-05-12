import { React } from "react";

import { ReactDOM } from "react-dom";
// crete a new component and this component should produce some HTML

const App = function() {
  return <div>Hi there</div>
};

// take this component generated HTML and put int on the page (in the DOM)
ReactDOM.render(App);

