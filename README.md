# React_ShoppingCart
This is a simple shopping Cart using React.

# How to start
1. Clone or download to your folder
2. `cd react-app`
3. `npm install`
4. `npm start`

# Three components
In _components_ folder, there are three components **counter, counters** and **navbar**. 
<br> 
**counter** is used for caculating the quanlity of a certain item. For example, you have **3** apples.
<br> 
**counters** is used for storing all the items like an array. For example, in the **counters** array you have apple, watermelon, kiwi ...
<br> 
**Navbar** have a badge to demenstrate how many items in your shopping cart.
# Usage

1. import NavBar and Counters to your project.
2. declare counters array in your state.
3. implement handleIncrement, handleDelete, and handleReset. 
4. in render(), pass the `counter` parameter and these theree functons: `handleIncrement, handleDelete, and handleReset`.

the following is the sample code:
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
    //your code
  };

  handleDelete = counterID => {
    //your code
  };

  handleReset = () => {
    //your code
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
