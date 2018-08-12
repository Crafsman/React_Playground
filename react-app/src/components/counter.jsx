import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
    showLable: true
  };

  styles = {
    fontSize: "20px",
    fontWeight: "bold"
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
    if (this.state.showLable) {
      this.setState({ showLable: false });
    } else {
      this.setState({ showLable: true });
    }
  };

  render() {
    //console.log("props", this.props);

    return (
      <React.Fragment>
        <h4>Counter {this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelet(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <br />
      </React.Fragment>
    );
  }
  // <img src={this.state.imageUrl} alt="" />
  // {this.state.showLable && <h1>Hello world</h1>}
  //{this.renderTags()}
  //{this.state.tags.length === 0 && "Please enter tags!"}
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
