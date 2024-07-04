let myLibrary = [];

const modal = document.querySelector('.modal');
const openbutton = document.querySelector('.open-modal');
const closebutton = document.querySelector(".close-modal");
const formdata = document.getElementById('formdata');
const container = document.getElementById('conatiner')
const completecard = document.getElementById('completeCard')
const booktitleElement = document.getElementById('bookname')
const bookauthorelement = document.getElementById('bookauthor')
const pageNoElement = document.getElementById('noOfPage')
const statusElement = document.getElementById('status')
const close = document.getElementById('close')

openbutton.addEventListener('click', () => {
    modal.showModal();
})

function book(name, author, noOfpage, readStatus) {
    this.name = name;
    this.author = author;
    this.noOfpage = noOfpage;
    this.readStatus = readStatus;
}

function addToLibrary() {
    formdata.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const author = document.getElementById('author').value;
        const noOfpage = document.getElementById('noOfpage').value;
        const readStatus = document.getElementById('readStatus').value;

        const newbook = new book(name, author, noOfpage, readStatus);
        console.log(newbook);

        myLibrary.push(newbook);
        modal.close();

        do {
            const bookcard = document.createElement('div');
            bookcard.classList.add("cards");
            bookcard.textContent = `the name of the book is ${newbook.name}`
            container.appendChild(bookcard);
            const view = document.createElement('button');
            view.classList.add('view');
            view.textContent = "View"
            bookcard.appendChild(view)
            const deletebutton = document.createElement('button');
            deletebutton.classList.add('deletebutton');
            deletebutton.textContent = "Delete"
            bookcard.appendChild(deletebutton)
            booktitleElement.textContent = `the name of the book is ${newbook.name}`;
            bookauthorelement.textContent = `the Auther of the book is ${newbook.author}`;
            pageNoElement.textContent = `the number of page the book has is ${newbook.noOfpage}`;
            statusElement.textContent = `Read Status: ${newbook.readStatus}`;
            deletebutton.addEventListener('click', () => {
                bookcard.remove()
            })
            view.addEventListener('click', () => {
                completecard.showModal()
            })
            close.addEventListener('click', () => {
                completecard.close()
            })
        } while (length.myLibrary)
    })



}
addToLibrary();
