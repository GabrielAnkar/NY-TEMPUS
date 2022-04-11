const html = document.documentElement;
const canvas = document.querySelector('.ScrollScroll');
const context = canvas.getContext('2d');
const currentFrame = index => (
  `SRC/test/${index.toString().padStart(4, '0')}.jpg`
)


const frameCount = 100;

canvas.height = 770;

canvas.width = 1158;
const img = new Image();
img.src = currentFrame(1);
img.onload = function(){
  context.drawImage(img, 0, 0)
}

const updateImage = index => {
  img.src = currentFrame(index)
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () =>{
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop
  const frameIndex = Math.min(frameCount - 1, Math.floor
  (scrollFraction * frameCount));
  
  requestAnimationFrame( () => updateImage(frameIndex + 1))
})