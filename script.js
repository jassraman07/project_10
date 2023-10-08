

const body = document.querySelector('body');
const modeToggle = document.getElementById('mode-toggle');
const modeStatus = document.querySelector('.mode-status');

function toggleMode() {
  body.classList.toggle('dark-mode');

  const modeMessage = body.classList.contains('dark-mode') ?
    'Dark Mode' 
    : "Light Mode"

  modeStatus.innerText = "Currently in " + modeMessage;
}
modeToggle.addEventListener('click', toggleMode);

startImageTransition();
        
        function startImageTransition() {
            var images = document.getElementsByClassName("fadeimage");
        
            for (var i = 0; i < images.length; ++i) {
                images[i].style.opacity = 1;
            }
        
            var top = 1;
        
            var cur = images.length - 1;
        
            setInterval(changeImage, 3000);
        
            async function changeImage() {
        
                var nextImage = (1 + cur) % images.length;
        
                images[cur].style.zIndex = top + 1;
                images[nextImage].style.zIndex = top;
        
                await transition();
        
                images[cur].style.zIndex = top;
        
                images[nextImage].style.zIndex = top + 1;
        
                top = top + 1;
        
                images[cur].style.opacity = 1;
              
                cur = nextImage;
        
            }
        
            function transition() {
                return new Promise(function(resolve, reject) {
                    var del = 0.01;
        
                    var id = setInterval(changeOpacity, 10);
        
                    function changeOpacity() {
                        images[cur].style.opacity -= del;
                        if (images[cur].style.opacity <= 0) {
                            clearInterval(id);
                            resolve();
                        }
                    }
        
                })
            }
        }

