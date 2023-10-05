# Book Store

- A web application which can list books details fetched from google's book API.

## Tech Stack

- React.js (UI Library)
- Antd (UI Components)
- Node.js (Backend Runtime)
- Express.js (Web framework)
- Postgres (Database)
- Prisma (ORM)

## Sample Response of a book

[How to use google search API](https://developers.google.com/books/docs/v1/using)

```json
"items": [
    {
      "kind": "books#volume",
      "id": "nYKYzgEACAAJ",
      "etag": "AD2LdeMqVhM",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/nYKYzgEACAAJ",
      "volumeInfo": {
        "title": "Harry Potter and the Philosopher's Stone - 25th Anniversary Edition",
        "authors": [
          "J. K. Rowling"
        ],
        "publisher": "Bloomsbury Children's Books",
        "publishedDate": "2022-06-09",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "152664665X"
          },
          {
            "type": "ISBN_13",
            "identifier": "9781526646651"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 0,
        "printType": "BOOK",
        "categories": [
          "Juvenile Fiction"
        ],
        "averageRating": 1,
        "ratingsCount": 2,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=nYKYzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=nYKYzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.in/books?id=nYKYzgEACAAJ&dq=HarryPotter&hl=&cd=11&source=gbs_api",
        "infoLink": "http://books.google.co.in/books?id=nYKYzgEACAAJ&dq=HarryPotter&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_the_Philosopher_s_Stone.html?hl=&id=nYKYzgEACAAJ"
      },
      "saleInfo": {
        "country": "IN",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IN",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=nYKYzgEACAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "This irresistible anniversary edition - available for one year only - will bring back treasured memories for the fans who remember the excitement when Harry's journey first began, as well as introduce a new generation to the unforgettable ..."
      }
    }]
```

## Another example

```json
{
      "kind": "books#volume",
      "id": "uUp5mAEACAAJ",
      "etag": "HG2RJSeZaUA",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/uUp5mAEACAAJ",
      "volumeInfo": {
        "title": "Harry Potter and the Prisoner of Azkaban",
        "authors": [
          "Inc. Scholastic",
          "J. K. Rowling",
          "Mary GrandPré",
          "Kazu Kibuishi"
        ],
        "publisher": "Scholastic Incorporated",
        "publishedDate": "2013-08-27",
        "description": "During his third year at Hogwarts School for Witchcraft and Wizardry, Harry Potter must confront the devious and dangerous wizard responsible for his parents' deaths.",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "0545582938"
          },
          {
            "type": "ISBN_13",
            "identifier": "9780545582933"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 464,
        "printType": "BOOK",
        "categories": [
          "Juvenile Fiction"
        ],
        "averageRating": 5,
        "ratingsCount": 1,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=uUp5mAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=uUp5mAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.co.in/books?id=uUp5mAEACAAJ&dq=HarryPotter&hl=&cd=13&source=gbs_api",
        "infoLink": "http://books.google.co.in/books?id=uUp5mAEACAAJ&dq=HarryPotter&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_and_the_Prisoner_of_Azkaban.html?hl=&id=uUp5mAEACAAJ"
      },
      "saleInfo": {
        "country": "IN",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "IN",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=uUp5mAEACAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "During his third year at Hogwarts School for Witchcraft and Wizardry, Harry Potter must confront the devious and dangerous wizard responsible for his parents' deaths."
      }
    },

```

## Each book

1. title
2. authors
3. publisher
4. publishedDate
5. description
6. averageRating
7. thumbnail
8. language

## Mertrics

- most appeared author
- server response time
- total number of results

## DB

id(str) | author(str) | appeared(int)(0) |
