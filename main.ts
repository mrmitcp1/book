import {Book} from "./book";

let book1 = new Book('toi la toi','quach thanh danh', true)
let book2 = new Book('mot con vit','be xuan mai',false)
let books: Book[]=[];
books.push(book1,book2)
for (let i = 0; i < books.length; i++) {
    let book = books[i]
    if (book.alreadyRead){
        console.log(`da doc  ${book.title} cua ${book.author}` )
    }else console.log(`chua doc ${book.title} cua ${book.author}`)
}