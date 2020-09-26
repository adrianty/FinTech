const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./mysql");

router = express();

router.use(bodyParser.json());

/* GET my page. */
router.get('/', function(req, res, next) {
  connection.query(
    `select * from users`,
    (error, result) => {
      if (error) {
        console.log(error);
        res.send("Some error occurred");
      } else {
        res.send(result);
        
      }
    }
  );
});


module.exports = router;
//router.listen(3000);

