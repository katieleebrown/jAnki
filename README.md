# jAnki
A less effective Anki App built using the MVC Architecture, we have also implemented "authorization" so folx can sign up, customize & personalize their jAnki app! If you are tired of the perfect algorithm that Anki provides, please check out jAnki!

**Link to project:** https://janki-flashcards.netlify.app/

![alt tag](/public/images/all-cards.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

**Dependencies used:** bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

In this app we have add the options to show all cards in your deck or shuffle through a random card at a time. There is a timer that provides a bit of pressure to your card reviewing. There is also the option to add cards as needed.

## Optimizations

- Currently we are working on correcting the code so it does not break when you remove all cards from a the deck. 
- The timer will have more functionality added, a button to start and stop, and the ability to change times. 
- We'd like to add the option of adding several decks instead of one main deck. 

## Lessons Learned:

I think the greatest challenge in this team build has been figuring out how to get the randomization working, but everyone on the team stepped up and helped make that happen in little chunks. I hope you enjoy our jAnki app, stay tuned for future improvements!