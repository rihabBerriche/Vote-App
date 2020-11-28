class ProductList extends React.Component {
  state = {
    products: [],
  };
  componentDidMount() {
    this.setState({ products: Seed.products });
  }

  handleProductUpVote = (productId) => {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        });
      } else {
        return product;
      }
    });
    this.setState({
      products: nextProducts,
    });
  };
  render() {
    const productComponents = this.state.products.map((product) => (
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
          onVote={this.handleProductUpVote}
        />
      </div>
    ));
    return <div className="ui unstackable items">{productComponents}</div>;
  }
}
class Product extends React.Component {
  // Inside `Product`
  handleUpVote = () => this.props.onVote(this.props.id);

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
            <p>this is a new paragraph</p>
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
