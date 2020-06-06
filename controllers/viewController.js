const mongoose = require('mongoose');
const express = require('express');


exports.getMainPage = async(req, res, next)=>{
    res.status(200).render('base', {
        pageHeader: "Main Page"
    })
}