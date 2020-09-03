import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There is no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create tag"}
        {this.renderTags()}
      </div>
    );
  }
  formatCount = () => {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
    // return count === 0 ? <h1>zero</h1> : count;
  };

  getBadgeClasses() {
    let classes = "badge m-3 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
