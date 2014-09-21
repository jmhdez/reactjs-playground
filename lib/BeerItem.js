/** @jsx React.DOM */

/*global require, module */

var React = require('react');

var BeerItem = React.createClass({

	incCount: function() {
		this.props.addOne(this.props.beer);
	},

	render: function() {
		return <li>[{this.props.count}] {this.props.beer} <button onClick={this.incCount}>Una más</button></li>;
	}
});

module.exports = BeerItem;
