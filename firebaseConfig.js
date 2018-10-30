const firebase = require('firebase-admin')
const functions = require('firebase-functions');
const express = require('express');
var config = {
    apiKey: "AIzaSyAVWIULli7R-5dO8YDWDTnyssuIBRk4gQM",
    authDomain: "glossy-dental-test.firebaseapp.com",
    databaseURL: "https://glossy-dental-test.firebaseio.com",
    projectId: "glossy-dental-test",
    storageBucket: "glossy-dental-test.appspot.com",
    messagingSenderId: "814698928100"
};
// firebase.initializeApp(config);
module.exports = config;