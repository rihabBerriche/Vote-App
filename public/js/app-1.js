class ProductList extends React.Component {
  render() {
    return (
      <div className="ui unstackable items">
        Hello, friend! I am a basic React component.
        <p className="person">mrurf</p>
        <p></p>
        <p></p>
      </div>
    );
  }
}

ReactDOM.render(<ProductList />, document.getElementById("content"));
