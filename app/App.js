console.log('Hello, from App.js!')
export default function (title = 'Webpack') {
    const elem = document.createElement('div')
          elem.innerHTML = `<h1>Welcome to ${title}!</h1>`
    console.log(elem)

    return (
        elem
    )
}