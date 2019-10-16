export default function cursorTextFollowing(source) {
  document.addEventListener("mousemove", e => {
    source.style.left = `${e.pageX + 30}px`;
    source.style.top = `${e.pageY - 15}px`;
  });
}
