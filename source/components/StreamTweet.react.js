var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Tweet require('./Tweet.react');

var StreamTweet = React.createClass({

  getInitialState: function() {
    return {
      numberOfCharactersIsIncreasing: null,
      headerText: null
    }
  },

  componentWillMount: function() {
    this.setState({
      numberOfCharactersIsIncreasing: true,
      headerText: 'Latest public photo from Twitter'
    });

    window.snapterest = {
      numberOfReceivedTweets: 1,
      numberOfDisplayedTweets: 1
    }
  },

  componentDidMount: function() {
    var componentDOMRepresentation = ReactDOM.findDOMNode(this);

    window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
    window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
  },

  componentWillUnmount: function() {
    delete window.snapterest;
  }

  render: function() {
    console.log('[Snapterest] StreamTweet: Running render()');

    return (  
      <section>
        <Header text={this.state.headerText} />
        <Tweet
          tweet={this.props.tweet}
          onImageClick={this.props.onAddTweetToColleciton} />
      </section>
    );
  }
})