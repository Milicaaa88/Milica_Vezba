// Standard stuff

const dbDriver = require('better-sqlite3');
const db = dbDriver('blog.sqlite3');
const express = require ('express');
const app = express();

app.use(express.json());
app.use(express.static('frontend'));

/* Setup all routes*/
// GET

app.get('/api/posts', (req, res) => {
    const statement = db.prepare ('SELECT * FROM posts');
    const posts = statements.all();
    res.json(posts);
});
// GET 1
app.get('/api/posts/:id', (req, res) => {
    const statement = db.prepare ('SELECT * FROM posts');
    const post = statement.get(req.params.id);
    res.json(post);
}); 
