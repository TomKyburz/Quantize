  const main = window.document.body.querySelector('main')
  const form = window.document.body.querySelector('form')
  const input = window.document.body.querySelector('input')

    form.onsubmit = e => {
      e.preventDefault()
      const div = window.document.createElement('div')
      div.classList += 'sent'
      const p = window.document.createElement('p')
      p.textContent = `${input.value}`
      p.classList += 'text';
      main.appendChild(div)
      div.appendChild(p)
      main.scrollTop = main.scrollHeight;

      input.value = ''
    }
  } else {
    window.location.reload()
  } 
}
