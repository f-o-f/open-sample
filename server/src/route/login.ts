//import * as app from 'express';
import mongodbClient from '../common/mongodbClient';
import { userModel } from '../models/userModel';

const express = require('express');

const mongoose = require('mongoose');
const OAuth2Server = require('oauth2-server');
const Request = OAuth2Server.Request;
const Response = OAuth2Server.Response;

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const nanoid = require('nanoid');
var router = express.Router();

var mongoUri = "mongodb://localhost:27017/nekoblog";

mongoose.connect(mongoUri, {
	useCreateIndex: true,
	useNewUrlParser: true
}, function(err, res) {

	if (err) {
		return console.error('Error connecting to "%s":', mongoUri, err);
	}
	console.log('Connected successfully to "%s"', mongoUri);

});

app.oauth = new OAuth2Server({
	model: require('../models/model.ts'),
	accessTokenLifetime: 60 * 60,
	allowBearerTokensInQueryString: true
});

router.all('/oauth/token', obtainToken);
//router.get('/', obtainToken);

router.get('/', authenticateRequest, function(req, res) {
//router.post('/', authenticateRequest, function(req, res) {

	res.send('Congratulations, you are in a secret area!');
    //goods画面に入れるようにする
});

function obtainToken(req, res) {

	var request = new Request(req);
	var response = new Response(res);

	return app.oauth.token(request, response)
		.then(function(token) {

			res.json(token);
		}).catch(function(err) {

			res.status(err.code || 500).json(err);
		});
}

function authenticateRequest(req, res, next) {

	var request = new Request(req);
	var response = new Response(res);

	return app.oauth.authenticate(request, response)
		.then(function(token) {

			next();
		}).catch(function(err) {

			res.status(err.code || 500).json(err);
		});
}

export default router;
