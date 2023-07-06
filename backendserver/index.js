import express from 'express';
import { createConnection } from 'mysql';
import cors from 'cors';

const app = express();


const db = createConnection({
    host : "localhost",
    user : "root",
    password : "root123",
    database : "test"
});

app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
    res.json("Hello this is the backend");
});

// Show all books

app.get("/books", (req,res)=>{
    const query = "SELECT * FROM books";
    db.query(query,function(err,file){
        if(err) throw err;
        res.json(file);
    });
});

app.post("/books",(req,res)=>{
    const q = "INSERT INTO books (`title`,`description`,`price`,`cover`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.description,
        req.body.price,
        req.body.cover,

    ] ;

    db.query(q, [values], (err,data)=>{
        if(err) throw err;
        return res.json("book has been created succesfully");
    })
})


app.delete('/books/:id',(req,res)=>{
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?";
    db.query(q,[bookId], (err,data)=>{
        if(err) throw err;
        return res.json("book deleted succefully");
    })
})

app.put("/books/:id",(req,res)=>{
    const bookId = req.params.id;
    const q = "UPDATE books SET `title` = ?, `description`= ? , `price`= ? , `cover` = ? WHERE id = ?";
    const values =[
        req.body.title,
        req.body.description,
        req.body.price,
        req.body.cover,

    ];

    db.query(q,[...values,bookId],(err,data)=>{
        if(err) throw err;
        res.json(" bood information updated");
    })
})



app.listen(8800,()=>{
    console.log("Connected to backend 1");
})
