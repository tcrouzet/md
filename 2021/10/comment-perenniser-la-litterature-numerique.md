# Comment pérenniser la littérature numérique

Pour que mon blog ne dépende pas de mon serveur, et donc de ma seule capacité à le maintenir à flot, [j’ai expérimenté les NFT](https://tcrouzet.com/2021/08/20/je-vends-mon-blog-aux-encheres-en-nft/), et je continuerai, mais il existe une solution plus directe, la conversion du blog en HTML statique et minimaliste, ne nécessitant aucun backoffice.

L’intérêt : une fois ainsi converti, un blog peut être lu comme un document ordinaire à partir de n’importe quel espace de stockage, connecté ou pas. Les textes et les images sont ainsi disponibles dans un format ouvert, ce qui garantit leur future exploitation.

Inversement, un blog dynamique est d’une fragilité effrayante. Le moindre bug empêche l’interprétation de la base de données et la génération des pages. Par ailleurs, le dynamisme implique de lourds calculs, donc des machines puissantes, et au passage une dépense énergétique non négligeable, sachant que le dynamisme est souvent inutile du point de vue du lecteur.

Je sais tout cela depuis aussi longtemps que le web existe, mais je n’ai rien fait, parce que tant que mon serveur marche, que la communauté WordPress est prospère, que j’ai le courage de me mettre à jour techniquement tout se passe plus ou moins bien, malgré des crises de nerfs à répétition.

J’ai parfois essayé des plugins WordPress capables de convertir un blog en sa version statique. Aucun ne m’a convaincu. Je ne voulais pas une copie de mon blog à l’identique, mais une version ultrasimplifiée, avec seulement le contenu. J’ai fini par me résoudre à coder un convertisseur maison.

C’était en août dernier. [C’est ainsi que j’ai créé, puis vendu mon premier NFT](https://tcrouzet.com/2021/08/20/je-vends-mon-blog-aux-encheres-en-nft/). En testant les performances du blog statique, j’ai découvert qu’il obtenait un score de près de 99 % sur le [PageSpeed de Google](https://developers.google.com/speed/pagespeed/insights/) alors que mon blog dynamique se traînait à 45 %, score rédhibitoire pour Google. Mon site était rangé avec les brebis galeuses, donc parmi ceux mis au rebut pour raison technique (pour être au vert, il faut un score minimum de 90 %).

Google et consorts fixent des standards auxquels nous devons presque obligatoirement adhérer si nous voulons exister sur le web. Cela impose une constante mise à jour des infrastructures techniques. J’ai donc passé presque un mois à optimiser mon blog, à revoir le design, pour réussir à obtenir un score supérieur à 90 % sur mes pages, sans pour autant changer de serveur (je ne paye que 10 €/mois pour mon dédié).

Je me suis alors réattaqué à ma sauvegarde statique. Une fois générée, une fois fonctionnelle sur mon disque dur, je pouvais l’archiver chez moi, mais aussi l’héberger ailleurs. [Il existe des hébergeurs statiques](https://techblog.deepki.com/heberger-site-statique/), bien moins chers que les dynamiques. J’ai même découvert que [GitHub](https://github.com/), le service de partage de codes de Microsoft, offrait un hébergement statique gratuit et quasi illimité.

J’ai donc créé [un repository pour accueillir mon blog statique](https://github.com/tcrouzet/blog) (un dossier pour faire simple), sur mon ordinateur j’ai installé [GitHub Desktop](https://desktop.github.com/), je l’ai synchronisé avec mon compte GitHub, il a créé une copie du repository en local, j’y ai placé la version statique du blog et je l’ai publiée. Ainsi mon blog statique est désormais accessible par tous depuis GitHub et le restera tant que GitHub ne changera pas de politique et continuera de fonctionner. [N’importe qui peut télécharger le blog pour l’archiver ailleurs.](https://github.com/tcrouzet/blog) [J’ai même créé une URL dédiée pour consulter la version statique.](https://static.tcrouzet.com/)

![Mon blog statique](https://tcrouzet.com/images_tc/2021/10/staticmoi.png)

Il me suffira de temps à autre de mettre à jour cette version statique pour avoir un backup de mon blog, beaucoup plus pérenne que celui que j’effectue toutes les nuits en sauvegardant ma base de données.

Je pourrais passer en 100 % statique. Mon blog serait plus rapide, je n’aurais plus besoin de payer un serveur, je gagnerais des heures en maintenance, mes lecteurs n'y verraient que du feu… mais j’aime jouer avec PHP, donc je persiste, tout en sachant que l’avenir n’est pas pour moi dans le dynamique. Un jour, de gré ou de force, je jetterai l’éponge. À moins qu’une fondation prenne en charge les blogs comme le mien, continue de les faire vivre, pour mémoire. Ce serait logiquement le travail de la Bibliothèque Nationale.

Tags: NetLittérature, une