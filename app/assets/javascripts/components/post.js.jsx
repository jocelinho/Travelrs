var Post = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    body: React.PropTypes.string,
    published: React.PropTypes.bool
  },

  render: function() {
    return (
      <div>
        <div>Rendered by React</div>
        <div>Title: {this.props.title}</div>
        <div>Body: {this.props.body}</div>
      </div>
    );
  }
});
