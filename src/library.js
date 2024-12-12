const { shelfBook, unshelfBook, searchShelf } = require("./shelf");

function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  };
}

function addBook(library, book) {
  shelfBook(book, library.shelves[book.genre]);
}

function checkoutBook(library, title, genre) {
  const shelf = library.shelves[genre];

  if (searchShelf(shelf, title)) {
    unshelfBook(title, shelf);
    return `You have now checked out ${title} from the ${library.name}.`;
  } else {
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}.`;
  }
}

function takeStock(library, genre) {
  if (genre) {
    const sumGenre = library.shelves[genre].length;
    return `There are a total of ${sumGenre} ${genre} books at the ${library.name}.`;
  } else {
    let totalBooks = 0;
    for (let shelf in library.shelves) {
      totalBooks += library.shelves[shelf].length;
    }
    return `There are a total of ${totalBooks} books at the ${library.name}.`;
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};