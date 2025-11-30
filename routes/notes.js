var express = require('express');
var router = express.Router();

const { MongoClient } = require("mongodb");
// 下のURIをご自分の値に変更してください
const uri = "**********";
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
// データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');

// idが1のドキュメントを取得
const query = { id: 2 };
const note = await notes.findOne(query);

res.json(note);
})

module.exports = router;