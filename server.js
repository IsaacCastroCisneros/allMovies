/* import express from "express";
import expressLayouts from "express-ejs-layouts";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { indexRouter } from "./routes/index.js";
import { directorsRouter } from "./routes/directors.js"; */
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose =  require('mongoose');

if(process.env.NODE_ENV !== 'production')
{
    require('dotenv').config();
}

const app = express();

app.listen(process.env.PORT || 3000);

app.set('view engine','ejs');
app.set('views','./views');
app.set('layout', 'layouts/layout');

app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true});
const db = mongoose.connection;
db.on('error',error=>console.log('mongodb | an error occurred' + error));
db.once('open',()=> console.log('mongodb | succesfully connected'));

/* app.use('/',indexRouter);
app.use('/directors',directorsRouter); */

