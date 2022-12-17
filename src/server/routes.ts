import * as express from 'express'
import db from "./api";
import chirps from './api/chirps';


let router = express.Router();

router.get('/db/hello', (req, res, next) => {
    res.json('World');
});


router.get("/db/chirps", async (req, res) => {
  
  try {
    res.json(await db.chirps.allChirps());
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/db/chirps/:id", async (req, res) => {
  let id = Number(req.params.id);
  try {
    res.json((await db.chirps.oneChirp(id))[0]);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete("/db/chirps/:id", async (req, res) => {
  let id = Number(req.params.id);
  try {
    res.json((await db.chirps.deleteChirp(id))[0]);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.put('/db/chirps/:id', async (req, res) => {
  let id = Number(req.params.id);

  const { userid, content } = req.body;

  if (!userid || !content) return res.status(400).json({ message: "Need to know who you are and what you said!" });

        try {
          const ChirpToEdit = { userid, content }
          await db.chirps.editChirp(ChirpToEdit, id)
          res.status(201).json({ message: "Chirp has been updated" });
        } catch (e) {
          console.log(e);
          res.sendStatus(500);
        }
})

router.post("/", async(req, res) => {
 try{  
 const { userid, content, location } = req.body;

 if(!content || !userid || !location) return res.status(400).json({ message: "You forgot your user id and a message... what are you doing???!"})
 const ChirpData = await chirps.postChirp(userid, content, location)
//  const NewChirpID = ChirpData.insertId
 res.status(201).json({content: "it worked!", id: 3})
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
