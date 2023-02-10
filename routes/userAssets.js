var express = require('express');
var router = express.Router();
const UserAssetModel = require('../models/userAsset-model');

router.post('/', async (req, res) => {
    try {
        const { username, laptop, keyboard, mouse, headphone, dongle } = req.body;
       
        const exist = await UserAssetModel.find({username});

        // if(exist){
        //     return res.status(400).send('User have assets')
        // }

        if (!laptop && !keyboard && !mouse && !headphone && !dongle) {
            return res.status(400).send('Please Assign Atleast one Asset ');
        }
        
        
            let newUser = new UserAssetModel({
                username, laptop, keyboard, mouse, headphone, dongle
            });
            newUser.save();
            return res.status(200).send('Assets Assigned Successfully')
        
    }
    catch (err) {
        return res.status(500).send(err)
    }
})

module.exports = router;