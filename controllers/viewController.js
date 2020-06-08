const mongoose = require('mongoose');
const express = require('express');


exports.getMainPage = (req, res)=>{
    res.sendFile(mainRoot+'/views/index.html');
}