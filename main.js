const addBtn = document.querySelector('.btn-wrapper')
const sort = document.querySelector('.sort-btn')
const todoWrapper = document.querySelector('.items')
let closeBtns

addBtn.addEventListener('click', function() {
    render()
    addCloseBtnListener()
})

sort.addEventListener('click', function() {
    let items = document.querySelectorAll('.item')
    let newArr = []
    items.forEach(function(item) {
        newArr.push(item.children[0].value);
    })
    this.classList.toggle("active")
    if (this.classList.contains("active")) {
        newArr.sort()
    } else {
        newArr.sort().reverse()

    }
    clear()
    render(newArr)
    addCloseBtnListener()
})

function addCloseBtnListener() {
    closeBtns = document.querySelectorAll('.del')
    closeBtns.forEach(function(item) {
        item.addEventListener('click', function() {
            this.parentNode.remove()
        })
    })
}

function clear() {
    let items = document.querySelectorAll('.item')
    items.forEach(function(item) {
        item.remove()
    })

}

function render(arr) {
    if (arr) {
        arr.forEach(function(itemText) {
            let newEl = document.createElement('div')
            let input = document.createElement('input')
            let delBtn = document.createElement('div')
            delBtn.classList.add('del')
            input.classList.add('input')
            newEl.classList.add('item')
            newEl.appendChild(input)
            newEl.appendChild(delBtn)
            todoWrapper.appendChild(newEl)
            input.value = itemText
        })
    } else {
        let newEl = document.createElement('div')
        let input = document.createElement('input')
        let delBtn = document.createElement('div')
        delBtn.classList.add('del')
        input.classList.add('input')
        newEl.classList.add('item')
        newEl.appendChild(input)
        newEl.appendChild(delBtn)
        todoWrapper.appendChild(newEl)
    }
}

addCloseBtnListener()