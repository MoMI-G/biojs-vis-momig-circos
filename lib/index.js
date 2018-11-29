/*
 * biojs-vis-momig-circos
 * https://github.com/6br/biojs-vis-momig-circos
 *
 * Copyright (c) 2018 6br
 * Licensed under the MIT license.
 */

var React = require("react");
var ReactDOM = require("react-dom");
var CircosView = require("./viz/Circos.tsx");
var exampleData = require("./fixture_data");
var grch37 = require("./vendor/GRCh37");
var fusions = require('./vendor/fusion-genes');

class _MoMIGCircos {
	constructor (options) {
		if (typeof options === "undefined") options = {};
    options.el = options.el || document.body;
    var conf = (options.config === "fixture") ? exampleData : options.config;
    var chroms = (options.config === "fixture") ? grch37 : options.config.chroms;
    var features = (options.config === "fixture") ? fusions : options.config.features;
    ReactDOM.render(React.createElement(CircosView.default, {
        pos: [],
        posUpdate: (reg, featureId) => {},
        closeModal: () => {},
        featureThreshold: conf.featureThreshold,
        featureSelection: conf.featureSelection,
        features: features,
        chroms: chroms,
        width: conf.width,
        reference: conf.reference,
    }), options.el);
	}
}

module.exports = _MoMIGCircos;

