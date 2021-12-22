function moveChip(x,y){
    console.log(x, y);
    const circleTop = document.querySelector('.circle1') 
    console.log(circleTop);
    circleTop.style.left = (100/7*x-100/7) + '%'
    circleTop.style.top = (100/7*y-100/7) + '%'
}
