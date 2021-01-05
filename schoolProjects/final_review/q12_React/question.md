### Question:

Where in a react component would you put a function 
that you only want to invoke when said component mounts?

Provide simple examples for both 

- class and 
- functional component way of doing this

If you don't know, check it out in the documentation. It wouldn't take too long.

### Answer :
For a class based component, you would put your function in the componentDidMount() method inside the componenet, but before the render().

class Example extends React.Component {
  componentDidMount() {
    console.log("The example componenet has mounted!")
  }
  render() {
    return (
      <h1>Hello world</h1>
    );
  }
}

For function based componenets, you would use the useEffect hook inside the componenet function before the return. However, this will also run after every componenet update.
function Example() {
  useEffect(() => {
    console.log("The example componenet has mounted!")
  });

  return (
    <h1>Hello world</h1>
  );
}