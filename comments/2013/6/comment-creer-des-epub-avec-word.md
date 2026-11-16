[Comment créer des ePub avec Word](../../../2013/6/comment-creer-des-epub-avec-word.md)

---
nUne lectrice @ 2013-06-11 22:04:42

Bonjour,

Sinon il y a ce très bon ouvrage, gratuit, proposé par Bibebook :

"Créer un epub" => http://www.bibebook.com/bib/cr%C3%A9er-un-epub

Je vient de le finir : je l’ai trouvé très complet, différentes manières de faire sont expliquées, en fonction des fichiers sources que l’on a.

---

Pouxi @ 2013-06-13 17:39:56

Bonjour,

A propos du code "crade" c’est celui de calibre. Moi je prends un texte brut (ou mis dans dans un notepad ou autre), je fais mes retours à la ligne si nécessaire et j’insère le tout dans Sigil avec ma feuille de style, mes images, etc. Ça sort nickel et en plus le code est propre (on peut toujours le nettoyer un peu plus si on le désire).

Mais cela fait longtemps que j’ai viré Word et sa cohorte de codes pourris. Et de toute façon, si c’est du word, je le mets dans un notepad quelconque.

Merci quand même pour toutes vos infos et votre site. 

Salutations.

PS. Sigil possède un vérificateur de css (via le W3C) et un vérificateur intégré de Epub

---

Thierry Crouzet @ 2013-06-13 18:44:35

La technique Sigil que tu proposes n’a guère d’intérêt. Il faut pouvoir générer des ePub à tout moment, sans aucune intervention manuelle sur les fichiers. Word est ma source, mon document officiel. Je m’interdis toute forme d’editing sur un autre logiciel, que ce soit Sigil, XPress, InDesign... La méthode ici décrite permet de travailler de cette façon.

---

Franck Infodocbib @ 2013-06-30 20:59:01

La même méthode (traitement de texte + Calibre) fonctionne également avec Libre Office (et Open Office):

http://labo.bnf.fr/pdf/livre\_numerique.pdf

En revanche, on peut aussi se passer de Calibre en convertissant directement son texte depuis Libre Office, en y ayant au préalable installé l’extension Writer2epub. Et créer un epub devient aussi simple que de convertir un texte en pdf!... à tout moment, sans changer d’outil.

http://neosting.net/logiciels/writer2epub-ebbok-creation-libreoffice-writer.html

Le code généré est bien plus plus propre (xhtml, css et xml), et Sigil, utile pour peaufiner, devient facultatif. 

La démarche est donc proche de la vôtre (http://lab.tcrouzet.com/epub/), mais en plus court et plus simple, grâce à l’extension writer2epub... pour laquelle il n’existe aucun équivalent pour Word (comme pour les pdf d’ailleurs, pdf Creator ne permettant pas de conserver le plan du document).

---

Cinque @ 2013-12-20 13:30:58

Bonjour,

Je vais essayer votre m?thode. Mais, je crains que je ne puisse pas retrouver mes dessins en passant du fichier docx au fichier epub. Comment faire pour conserver les dessins ª partir de Word?

Merci pour votre r?ponse.

cinquesalvatore@aol.com

---

Thierry Crouzet @ 2013-12-20 13:48:32

Je n’utilise pas cette méthode comme je l’explique au début. C’était un billet pour informer. Avec Sigil, on peut insérer des images sans problème.

---

