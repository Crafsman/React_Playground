# React_ShoppingCart
This is a simple shopping Cart using React.

# How to start
1. Clone or download to your folder
2. `cd react-app`
3. `npm install`
4. npm start

# Usage

1. import NavBar and Counters.
2. declare counters array in your state.
3. implement handleIncrement, handleDelete, and handleReset. 
4. in render(), pass the `counter` parameter and these theree functons: `handleIncrement, handleDelete, and handleReset`.
```javascript
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 3 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = counterID => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
    console.log("reset");
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}
```
# preview

![Test Image 1](https://github.com/Crafsman/React_ShoppingCart/blob/master/react-app/images/shoppingCart.png)
