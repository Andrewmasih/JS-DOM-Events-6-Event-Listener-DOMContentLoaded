/* another 'Event Listener' we can use is the 'DOMContentLoaded' event. when we load a webpage, it could be possible that JS will load and excute before HTML has finshed loading.....this can result in errors.

We can delay our JS from running by telling it to wait untill the DOM has finshed loading.

in some of my examples i have loaded the script in the <head>, this will load before the HTML. Within the JS file we have to use the 'DOMContentLoaded' event, to make sure the code won't run before the DOM has fully loaded */


document.addEventListener ("keyup", function (event) {
        if (event.key == "l"|| event.key == "L") {
          lightTheme();
  
        }

        if (event.key == "d" || event.key == "D") {
          darkTheme();
        }

      });

      function lightTheme ()  {
        el = document.getElementById ("mainDiv");
        el.classList.remove ("dark");
        el.classList.add ("light");
      }

      function darkTheme ()  {
        el = document.getElementById ("mainDiv");
        el.classList.remove ("dark");
        el.classList.add ("light");
      }