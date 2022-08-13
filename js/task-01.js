const numUl = document.querySelectorAll('.item ul');
console.log(numUl.length);

const topT = document.querySelectorAll("h2");
topT.forEach((top) => {
      console.log(top.textContent);
    // numUl.forEach((num) => {
    //     num = num.children.length;  
    //     console.log(num);
    // });
    const nea = top.nextElementSibling;
    console.log(nea.children.length);
});
