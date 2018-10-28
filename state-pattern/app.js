 // state pattern
const PageState = function(){
    let currentState = new homeState(this);

    this.init = function(){
        this.change(new homeState);

    }

    this.change = function(state){
        currentState = state;
    }
}

// Home state
const homeState = function(page){
    document.querySelector('#heading').textContent = null;
    document.querySelector('#heading').innerHTML = `
    <div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
    `;
}


// About state
const aboutState = function(page){
    document.querySelector('#heading').textContent =  'About us';
    document.querySelector('#heading').innerHTML = `
    <p> This is the about page. </p>
    `;
}

// Contact state
const contactState = function(page){
    document.querySelector('#heading').textContent =  'contact us';
    document.querySelector('#heading').innerHTML = `
    <form>
        <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control">
        </div> 
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `;
}


// init pageState
const page = new PageState();

// init the first 
page.init();

// UI variables
const home = document.getElementById('home'),
     about = document.getElementById('about'),
     contact = document.getElementById('contact');


// Home
home.addEventListener('click', (e) => {
    page.change(new homeState);
    e.preventDefault();
});


// About
about.addEventListener('click', (e) => {
    page.change(new aboutState);
    e.preventDefault();
});

// Contact
contact.addEventListener('click', (e) => {
    page.change(new contactState);
    e.preventDefault();
});