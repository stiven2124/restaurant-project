const express = require('express');
// // const app = express();
const router = express.Router();

router.post('/:userId/:restId/:date/:time/:peopleCount',(req,res)=>{
    res.send(req.params,"Reservation made")
});

router.put('/:resId/:date/:time/:peopleCount',(req,res)=>{
    res.send(req.params,"Reservation updated")
});

router.delete('/:resId',(req,res)=>{
    res.send(req.params,"Reservation Deleted")
});

router.get('/',(req,res)=>{
    res.send(req.query.nams);
});
module.exports = router;