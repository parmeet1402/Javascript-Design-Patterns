//mediator pattern
const User = function(name){
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(message, to){
        this.chatroom.send(message, this, to);
    },
    recieve: function(message, from){
        console.log(`${from.name} to ${this.name}: ${message}`)
    },
    
}


const Chatroom = function(){
    let users = {}; // list of users

    return{
        register: function(user){
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to){
            if(to){
                // Single user message
                to.recieve(message, from)
            }else{
                // mass message
                for(key in users){
                    if(users[key] !== from){
                        users[key].recieve(message, from);
                    }
                }
            }
        }
    }
}



const avi = new User('Avi');
const ekam = new User('Ekam');
const mom = new User('Mom');
const dad = new User('Dad');

const chatroom = new Chatroom();
chatroom.register(avi);
chatroom.register(ekam);
chatroom.register(mom);
chatroom.register(dad);

avi.send('Hello Mom', mom);
ekam.send('Hello Avi', avi);
dad.send('Hello everyone!!!!');