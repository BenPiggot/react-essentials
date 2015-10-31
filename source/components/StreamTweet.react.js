var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Tweet = require('./Tweet.react');

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

  componentWillReceiveProps: function(nextProps) {
    var currentTweetLength = this.props.tweet.text.length;
    var nextTweetLength = nextProps.tweet.text.length;
    var isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
    var headerText;

    this.setState({
      numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
    });

    if (isNumberOfCharactersIncreasing) {
      headerText = 'Number of characters is increasing';
    } else {
      headerText = 'Latest public photo from Twitter'
    }

    this.setState({
      headerText: headerText
    })

    window.snapterest.numberOfReceivedTweets++;
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    return (nextProps.tweet.text.length > 1);
  },

  componentWillUpdate: function(nextProps, nextState) {
    window.snapterest.numberOfDisplayedTweets++;
  },

  componentDidUpdate: function (prevProps, prevState) {
    window.snapterest.numberOfDisplayedTweets++;
  },

  componentWillUnmount: function() {
    delete window.snapterest;
  },

  render: function() {
    console.log(this.props)
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

module.exports = StreamTweet;