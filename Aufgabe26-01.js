// =========================== Aufgabe 9: =====================================

const books = [
    {
      title: "Das Parfum",
      author: "Patrick Süskind",
      year: 1985,
      genres: ["Roman", "Historischer Roman", "Thriller"]
    },
    {
      title: "Der kleine Prinz",
      author: "Antoine de Saint-Exupéry",
      year: 1943,
      genres: ["Kinderbuch", "Philosophisches Märchen"]
    },
    {
      title: "Harry Potter und der Stein der Weisen",
      author: "J.K. Rowling",
      year: 1997,
      genres: ["Fantasy", "Jugendliteratur"]
    }
  ];
  
  const primerosGeneros = [];
  books.forEach(book => {
    if (book.genres && book.genres.length > 0) {
      primerosGeneros.push(book.genres[0]);
    }
  });

   
  const generosConcatenados = primerosGeneros.join(', ');
  console.log("Jeweils das erste aufgelistete Genre sind: " + generosConcatenados);

 // ====================================================================

  const Alle_autoren = [];
books.forEach(book => {
  if (book.author && book.author.length > 0) {
    Alle_autoren.push(book.author);
  }
});

const authorConcatenados = Alle_autoren.join(', ');
console.log("Alle Autoren sind: " + authorConcatenados);

// ==============================================================================


const ParfumGeneros = [];

books.forEach(book => {
    
    if (book.title === "Das Parfum") {
    
        const genresDasParfum = book.genres;
        if (genresDasParfum && genresDasParfum.length > 0) {
            ParfumGeneros.push(...genresDasParfum);
        }
    }
});

const generosparfumConcatenados = ParfumGeneros.join(', ');
console.log("Alle Genres von 'Das Parfum' sind: " + generosparfumConcatenados);


// =====================================================================================

const Alle_title = [];

books.forEach(book => {
    
    if (book.title && book.title.length > 0 && book.title[0].toUpperCase() === 'D') {
        Alle_title.push(book.title);
    }
});

const TitleConcatenados = Alle_title.join(', ');
console.log("Alle Buchtitel, die mit “D” anfangen! sind: " + TitleConcatenados);


