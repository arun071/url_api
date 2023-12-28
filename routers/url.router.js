const router = require('express').Router();
const shortId = require('shortid');
const urlSubmitModel = require("../model/url.model")

router.post('/urlSubmit', async (req, res) => {
    const { userId, longurl } = req.body;
    try {

        const randomurl = shortId.generate();
        const urlSubmit = new urlSubmitModel({ userId, longurl, shorturl: randomurl })
        await urlSubmit.save();
        res.json({ status: true, shorturl: `http://localhost:3000/${randomurl}` })
    } catch (error) {
        res.json({ status: false, message: "something went wrong" })

    }

});

router.get('/:url', async (req, res) => {
    const { url } = req.params;
    const urldata = await urlSubmitModel.findOne({ shorturl: url })
    console.log(urldata);
    if (urldata) {
        res.redirect(urldata.longurl);
    } else {
        res.json({ status: false, message: "invalid url" })
    }
});

router.post('/getUserUrl', async (req, res) => {
    const { userId } = req.body;
    const allUserUrl = await urlSubmitModel.find({ userId })
    console.log(allUserUrl);
    if (allUserUrl) {
        res.json({ status: true, success: allUserUrl })

    } else {
        res.json({ status: false, message: "No data found" })
    }
});

module.exports = router;