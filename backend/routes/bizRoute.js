const express = require("express");
const router = express.Router();
const db = require("../db");
const httpCodes = require('../helpers/httpCodes');
const {nanoid} = require("nanoid");
SALT_WORK_FACTOR = 10;
const format = require('pg-format');

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

  router.post("/add-user-biz",
  async (req, res) => {
      const reqData = [
          "BIZ" + nanoid(4),
          req.body.work_email,
          req.body.personal_email,
          req.body.work_number,
          req.body.personal_number,
          req.body.first_name,
          req.body.last_name,
          req.body.company_name,
          req.body.company_id,
          req.body.password,
        ];
        // query to post the data to users table
        let postQuery =
          "INSERT INTO login_business VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
        
          db.query(postQuery, reqData)
          .then((result) => {
            console.log("reqData::::" + result.rows.length);
            res
              .status(httpCodes.Created)
              .json({ message: "New user created" });
            logger.info("new user created " + " " + data.name);
          })
          // catch the error
          .catch((err) => {
            console.log((err) => {
              res.status(httpCodes.InternalServerError).json(err.message);
            });
          });
      
    });

    router.post("/add-user-personal",
    async (req, res) => {
      const reqData = [
          "PER" + nanoid(4),
          req.body.work_email,
          req.body.personal_email,
          req.body.work_number,
          req.body.personal_number,
          req.body.first_name,
          req.body.last_name,
          req.body.company_name,
          req.body.company_id,
          req.body.password,
        ];
        // query to post the data to users table
        let postQuery =
          "INSERT INTO login_business VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
        
          db.query(postQuery, reqData)
          .then((result) => {
            console.log("reqData::::" + result.rows.length);
            res
              .status(httpCodes.Created)
              .json({ message: "New user created" });
            logger.info("new user created " + " " + data.name);
          })
          // catch the error
          .catch((err) => {
            console.log((err) => {
              res.status(httpCodes.InternalServerError).json(err.message);
            });
          });
      
    });

    router.post("/add-hotel-info",
    async (req, res) => {
      const reqData = [
          "HOTEL" + nanoid(4),
          req.body.hotel_name,
          req.body.address,
          req.body.city,
          req.body.nearest_airport,
          req.body.distance_from_airport,
          req.body.manager_name,
          req.body.manager_number1,
          req.body.manager_number2,
          req.body.wifi,
          req.body.swimming_pool,
          req.body.breakfast,
          req.body.spa,
          req.body.indoor_games,
          req.body.laundry,
          req.body.cab_Services,
          req.body.restaurant,
          req.body.room_service,
        ];
        // query to post the data to users table
        let postQuery =
          "INSERT INTO hotel_main VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)";
        
          db.query(postQuery, reqData)
          .then((result) => {
            console.log("reqData::::" + result.rows.length);
            res
              .status(httpCodes.Created)
              .json({ message: "New user created" });
            logger.info("new user created " + " " + data.name);
          })
          // catch the error
          .catch((err) => {
            console.log((err) => {
              res.status(httpCodes.InternalServerError).json(err.message);
            });
          });
      
    });
  
  
    router.get("/get-hotel-info",
    async (req, res) => {
      
        // query to post the data to users table
        let getQuery =
          "SELECT * FROM hotel_main";
        
          db.query(getQuery)
          .then(result => { 
            res.status(httpCodes.OK).json(result.rows)
          })
          .catch(err => {
              console.log(err)
              res.status(httpCodes.NotFound).json(err)
          })
          
      
    });
  
  




module.exports = router ;
