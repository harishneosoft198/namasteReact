//creating elements using the React
var heading = React.createElement('h1',{id:'heading'},'Hello World From React')//returns the js object
var root = ReactDOM.createRoot(document.getElementById('root'))//renders the html element using object so browser will understand
root.render(heading)