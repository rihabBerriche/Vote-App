class ProductList extends React.Component {
  handleProductVoteUp(productId) {
    console.log("bravo Rihab", productId);
  }
  render() {
    const productComponents = Seed.products.map((product) => (
      <div className="ui unstackable items">
        <div></div>
        <Product
          key={"product-" + product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitterAvatarUrl={product.submitterAvatarUrl}
          ProductImageUrl={product.submitterAvatarUrl}
          onVote={this.handleProductVoteUp}
        />
      </div>
    ));
    return <div className="ui unstackable items">{productComponents}</div>;
  }
}
class Product extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpVote = this.handleUpVote.bind(this);
  }

  // Inside `Product`
  handleUpVote() {
    this.props.onVote(this.props.id);
  }

  render() {
    return (
      <div className="item">
        <div className="image">
          <img src={this.props.ProductImageUrl} />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <a onClick={this.handleUpVote}>
              <i className="large caret up icon " onClick={this.handleVoteUp} />
            </a>
            {this.props.votes}
          </div>
          <div className="description">
            <a href={this.props.url}>{this.props.title}</a>
            <p>{this.props.description}</p>
          </div>
          <div className="extra">
            <img
              className="ui avatar image"
              src={this.props.submitterAvatarUrl}
            />
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<ProductList />, document.getElementById("content"));
