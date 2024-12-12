function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}

function unshelfBook(title, shelf) {
  const bookIndex = shelf.findIndex(book => book.title === title);
  return shelf.splice(bookIndex, 1);
}

function listTitles (shelf) {
  return shelf.map(book => book.title).join(", ");
}

function searchShelf(shelf, title) {
  return shelf.some(book => book.title === title);
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};