var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-Functions-Of-Several-Vars-and-3D-Space",
  "level": "1",
  "url": "sec-Functions-Of-Several-Vars-and-3D-Space.html",
  "type": "Section",
  "number": "2.1",
  "title": "Functions of Several Variables and Three Dimensional Space",
  "body": " Functions of Several Variables and Three Dimensional Space  Text of section.   Activity 1.1.3  Which is true of the two coordinate systems shown above?   "
},
{
  "id": "sec-Functions-Of-Several-Vars-and-3D-Space-3",
  "level": "2",
  "url": "sec-Functions-Of-Several-Vars-and-3D-Space.html#sec-Functions-Of-Several-Vars-and-3D-Space-3",
  "type": "Example",
  "number": "2.1.1",
  "title": "Activity 1.1.3.",
  "body": " Activity 1.1.3  Which is true of the two coordinate systems shown above?  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
