export default function parallaxEffect(source){
    document.addEventListener("mousemove", (e) => {
        const { innerWidth: width, innerHeight: height } = window;
        const mouseX = e.clientX / width;
        const mouseY = e.clientY / height;
        source.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0) scale(1.1)`;
      });      
}


