const root = document.querySelector('.root');

root.addEventListener('click', (event) => {
  if (event.target.classList.contains('container__input')) {
    const form = event.target.parentNode.parentNode;
    const inputs = form.querySelectorAll('.container__input');
    const icons = form.querySelectorAll('.icon');
    const key = form.id;
    const value = event.target.value;

    icons.forEach((elem) => {
      elem.style = 'fill: black';
    })

    for (let i = 0; i < inputs.length; i++) {
      icons[i].style = 'fill: gold';
      if (inputs[i].checked) {
        break
      }
    }

    // console.log(event.target.value);
    localStorage.setItem(key, value);

  }
})