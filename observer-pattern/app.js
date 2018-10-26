function EventObserver(){
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function(func){
        this.observers.push(func);
        console.log(`You are now subscribed to ${func.name}`)
    },
    unsubscribe: function(func){
        this.observers = this.observers.filter(function(item){
            if(item !== func){
                return item;
            }
        })
        console.log(`You are now unsubscribed to ${func.name}`)
    },
    fire: function(){
        this.observers.forEach(function(item){
            item.call();
        });
    }
};

const click = new EventObserver();

//event listener
document.querySelector('.sub-ms').addEventListener('click',function(){
    click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click',function(){
    click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.fire').addEventListener('click',function(){
    click.fire();
});


// click handler
const getCurMilliseconds = function(){
    console.log(`current milliseconds: ${new Date().getMilliseconds()}`)
}