var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  copyright  "
},
{
  "id": "sec-concepts",
  "level": "1",
  "url": "sec-concepts.html",
  "type": "Section",
  "number": "1.1",
  "title": "Some Basics",
  "body": " Some Basics  In this section, we'll go over some of the basics such as \"Defin(ing) set functions, Venn diagrams, sample space, and events. Define probability as a set function on a collection of events and stat(ing) the basic axioms of probability.\" which is taken from the syllabus for the P exam.  "
},
{
  "id": "sec-2-1-intro",
  "level": "1",
  "url": "sec-2-1-intro.html",
  "type": "Section",
  "number": "2.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "sec-3-1-intro",
  "level": "1",
  "url": "sec-3-1-intro.html",
  "type": "Section",
  "number": "3.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
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
