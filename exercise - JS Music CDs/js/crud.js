console.log('script loaded');
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const tr = document.createElement('tr')
    const data = [
        document.querySelector('#input-author').value,
        document.querySelector('#input-title').value,
        document.querySelector('#input-year').value,
    ]
    for (const value of data) {
        const td = document.createElement('td')
        const text = document.createTextNode(value)
        td.append(text)
        tr.appendChild(td)
    }
    const delete_btn = document.createElement('td')
    delete_btn.append(document.createTextNode('🗑️'))
    delete_btn.addEventListener('click', (e) => {
        e.preventDefault()
        e.target.parentNode.remove()
    })
    tr.append(delete_btn)
    document.querySelector('tbody').appendChild(tr)
    e.target.reset()

});