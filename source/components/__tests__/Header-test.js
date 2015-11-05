jest.dontMock('../Header.react');

describe('Header component', function() {

  it('renders provided header content', function() {

    var React = require('react');
    var ReactDOM = require('react-dom');
    var TestUtils = require('react-addons-test-utils');
    var Header = require('../Header.react');

    var header = TestUtils.renderIntoDocument(
      <Header text='testing...' />
    );

    var actualHeaderText = ReactDOM.findDOMNode(header).textContext;

    expect(actualHeaderText).toEqual('testing...');

    var defaultHeader.renderIntoDocument(
      <Header />
    );

    var actualDefaultHeaderText = ReactDOM.findDOMNode(header).textContext;

    expect(actualDefaultHeaderText).toEqual('Default header');
  })
})