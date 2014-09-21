/** @jsx React.DOM */

/*global require */

var React = require('react');

var BeerList = require('./BeerList');

React.renderComponent(<BeerList/>, document.getElementById('content'));
