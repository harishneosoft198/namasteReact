//creating elements using the React
var heading = React.createElement('h1',{id:'heading'},'Hello World From React');//returns the js object
var root = ReactDOM.createRoot(document.getElementById('root'));//renders the html element using object so browser will understand
root.render(heading);

//nesting in react
var parent = React.createElement('div',{id:'parent'},React.createElement('div',{id:'child'},React.createElement('h1',{id:'heading1'},'Hi this is nested heading')));
root.render(parent);