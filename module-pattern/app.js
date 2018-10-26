/* // basic structure

(function(){
    // declare private variables and functions

    return {
        // Declare public variables and function 
    }
})();
 */

 // module pattern
 const UICtrl = (function(){
     let text = 'Hello!';

     const changeText = function(){
         const element = document.querySelector('h1');
         element.textContent = text;
     };

     return{
         callChangeText: function(){
             changeText();
             console.log(text);
         }
     };
 })();

 UICtrl.callChangeText();