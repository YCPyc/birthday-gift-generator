var express = require("express");
var router = express.Router();
require("dotenv").config();
const { OpenAI } = require("openai");

const openai = new OpenAI({
    apiKey:  process.env["OPEN_AI_KEY"]
  });

router.post("/", async function(req,res,next){
    try{
        const{race, hobbies, gender} = req.body;
        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
              {role: "system", content: "You are a helpful advisor on gift ideas."},
              {role: "user", content: "My friend's ethnicity is"+race+". These are their hobbbies: "+hobbies+". This is their genders:"+gender+". Can you give me 3 gift ideas for them and structure the ideas in a json object."}],
          });
        return res.status(200).json({
            result:chatCompletion.choices[0]['message']['content']
        })
    }catch(error){
console.log(error)
    }
   
});

module.exports = router;