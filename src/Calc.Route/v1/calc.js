const express = require('express');
const router = express.Router();

router.post('/add', (req,res)=>{
    const {num1 , num2} = req.body;

    if (typeof num1 !==  'number' || typeof num2 !== 'number') {
        return res.status(400).send({message: 'Inputs must be a number'});

    };
    const sum = num1  + num2;
    res.json({Result: sum})

});

router.post('/subtract', (req,res)=>{
    const {num1, num2} = req.body;
    
    if (typeof num1 !==  'number' || typeof num2 !== 'number') {
        return res.status(400).send({message: 'Inputs must be a number'});

    };
    const different = num1 - num2;
    res.json({Result: different})

});

router.post( '/multiply', (req,res)=>{
    const {num1, num2} = req.body;

    if (typeof num1 !==  'number' || typeof num2 !== 'number') {
        return res.status(400).send({message: 'Inputs must be a number'});

    };
    const product = num1 * num2;
    res.json({Result: product})
});

router.post('/divide',(req,res)=> {
    const  {num1, num2} = req.body;

 if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({message: 'Inputs must be a number'});
 }
 if( num2 === 0 ){
    return res.status(400).json({error: 'Cannot divide by zero'});

 } else {
    const qouient = num1 / num2;
    res.status(200).json({Result: qouient})

 }


});

module.exports = router;




