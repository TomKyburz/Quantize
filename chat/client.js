document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  const form = document.querySelector('form');
  const input = document.querySelector('#input'); // Note: using #input since your input has an id

  form.onsubmit = e => {
    e.preventDefault();
    const div = document.createElement('div');
    div.classList.add('sent');
    const p = document.createElement('p');
    p.textContent = input.value;
    p.classList.add('text');
    main.appendChild(div);
    div.appendChild(p);
    main.scrollTop = main.scrollHeight;

    input.value = '';
  };
});
