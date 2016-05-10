var React = require('react');
var Header = require('./Header.react.js');
var Button = require('./Button.react.js');
var CollectionRenameForm = require('./CollectionRenameForm.react.js');
var CollectionExportForm = require('./CollectionExportForm.react.js');
var CollectionActionCreators = require('../actions/CollectionActionCreators');
var CollectionStore = require('../stores/CollectionStore');


var CollectionControls = React.createClass({

  getInitialState: function() {
    return {
      name: 'new',
      isEditingName: false
    }
  },

  getHeaderText: function() {
    var numberOfTweetsInCollection = this.props.numberOfTweetsInCollection;
    var text = numberOfTweetsInCollection;
    var name = CollectionStore.getCollectionName();

    if (numberOfTweetsInCollection === 1) {
      text = text + ' tweet in your';
    } 
    else {
      text = text + ' tweets in your';
    }

    return (
      <span> 
      {text} <strong>{name}</strong> collection 
      </span>
    )
  },

  toggleEditCollectionName: function() {
    this.setState({
      isEditingName: !this.state.isEditingName
    })
  },

  removeAllTweetsFromCollection: function(){
    CollectionActionCreators.removeAllTweetsFromCollection();
  },

  render: function() {

    if (this.state.isEditingName) {
      return (
        <CollectionRenameForm onCancelCollectionNameChange={this.toggleEditCollectionName} />
    
      )
    }

    return (
      <div>
        <Header text={this.getHeaderText()} />
        <Button label="RenameCollection" handleClick={this.toggleEditCollectionName} />
        <Button label="EmptyCollection" handleClick={this.removeAllTweetsFromCollection} />
        <CollectionExportForm htmlMarkup={this.props.htmlMarkup} />
      </div>
    )
  }
})  

module.exports = CollectionControls;