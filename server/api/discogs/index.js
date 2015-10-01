'use strict';

var express = require('express');
//var controller = require('./thing.controller');
var Discogs = require('disconnect').Client;
var discogskey = require('./discogs.key.js');

var dis = new Discogs({userToken: discogskey});

var router = express.Router();

router.get('/', function(req, res) {
	dis.database().release(176126, function(err, data){
		    res.send(data);
	});
});

router.get('/collection', function(req, res) {
	var page = 1;
	if (req.query.page > 0) page = req.query.page;  
	var perpage = 100;
	if (req.query.perpage > 0) perpage = req.query.perpage;
	dis.user().collection().releases('maverick2007', 0, {page: page, per_page: perpage}, function(err, data){
		res.send(data.releases);
	});
});

router.get('/collection/genre', function(req, res) {
	res.send({genres: [{name: "Rock", count: 15}, {name: "Rap", count: 20}]});
});

router.get('/release/:releaseid', function(req, res) {
	dis.database().release(req.params.releaseid, function(err, data) {
		res.send(data);
	});
});

module.exports = router;
