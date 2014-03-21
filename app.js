'use strict';

var etag  = require('koa-etag');
var gzip  = require('koa-gzip');
var serve = require('koa-static');
var rt    = require('koa-response-time');
var route = require('koa-route');
var views = require('co-views');
var koa   = require('koa');
var app   = koa();

app.use(etag());
app.use(gzip());
app.use(rt());

app.use(function *() {
	this.body = 'Hello World';
});

app.listen(3000);