const express = require("express");
const router = express.Router();
const db = require("../db");
const httpCodes = require('../helpers/httpCodes');
/*const {nanoid} = require("nanoid");
const bcrypt = require("bcryptjs");
SALT_WORK_FACTOR = 10;
const format = require('pg-format');*/

router.get("/getAllData", async (req, res) => {
    //var getClinic_id = req.params.clinicId;
    const sql = 'SELECT * FROM login_business'
    db.query(sql)
      .then(result => { 
        res.status(httpCodes.OK).json(result.rows)
      })
      .catch(err => {
          console.log(err)
          res.status(httpCodes.NotFound).json(err)
      })
  })




module.exports = router ;
