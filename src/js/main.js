document.addEventListener('DOMContentLoaded', () => {
  // Add a toolbar with the language and a copy button to code blocks in posts
  const codeBlocks = document.querySelectorAll('.prose pre > code')

  codeBlocks.forEach((code) => {
    const pre = code.parentElement
    const match = code.className.match(/language-(\w+)/)

    const toolbar = document.createElement('div')
    toolbar.className = 'code-toolbar'

    const language = document.createElement('span')
    language.textContent = match ? match[1] : 'Code'

    const button = document.createElement('button')
    button.type = 'button'
    button.textContent = 'Copy'
    button.setAttribute('aria-live', 'polite')
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(code.textContent)
        button.textContent = 'Copied'
      } catch (error) {
        button.textContent = 'Copy failed'
      }
      setTimeout(() => {
        button.textContent = 'Copy'
      }, 2000)
    })

    toolbar.append(language, button)
    pre.before(toolbar)
  })
})
