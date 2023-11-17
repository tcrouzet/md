# Quand Ulysses nous trahit

Quand on écrit, il n’y a rien de pire que de perdre confiance en son outil d’écriture, de se sentir contraint par lui plutôt que pousser en avant, surtout d’avoir peur de perdre ses textes. C’est d’autant plus critique quand on travaille sur de multiples projets en parallèle.<span id="more-51812"></span>

Dans l’environnement Apple, nous sommes nombreux à écrire avec Ulysses, un outil révolutionnaire il y a quelques années, mais qui, à force de vouloir élargir sa cible, [en oublie ses fondamentaux](https://tcrouzet.com/2019/05/04/ulysses-lex-meilleur-editeur-pour-ecrivain/).

Quand [Guillaume Vissac](http://www.fuirestunepulsion.net/) m’a dit qu’il n’arrivait plus à resynchroniser la base de données Ulysses, donc qu’il n’accédait plus à sa mémoire textuelle, son stress s’est communiqué à moi. Je me suis dit que je devais être plus vigilant, ne plus faire confiance à Ulysses, si performant côté sauvegarde en temps ordinaire que j’en oublie sa faillibilité, d’autant que sa gestion des fichiers est pour le moins cryptique, pour ne pas dire dissimulés comme s’il s’agissait d’une volonté affichée de nous compliquer la tâche, surtout de nous empêcher d’utiliser en parallèle des outils concurrents.

Il est temps pour moi d’être capable à tout instant de quitter Ulysses. Il est temps de remettre la main sur mes fichiers.

### Méthode 1

Quand la fonction de synchronisation iCloud n’est pas activée, Ulysses sauvegarde nos données dans le dossier :

> ~/Library/Group\\ Containers/X5AZV975AG.com.soulmen.shared

Dans le cas de la synchronisation, ce qui est vivement conseillé, on retrouve les fichiers dans :

> ~/Library/Mobile\\ Documents/X5AZV975AG~com\\soulmen\\ulysses3/

Cela vaut pour les backups automatiques d’Ulysses, qui s’apparentent un gestionnaire de versions, puisque qu’ils ne s’effectuent pas en un lieu différent de la zone de stockage traditionnelle.

![Script Automator](https://tcrouzet.com/images_tc/2019/06/back1-600x253.png)

Depuis bien longtemps, j’ai créé une app Automator qui compresse ce dossier de backup et l’archive en local et sur mon Google Drive, puis m’affiche un message « backup terminé ». Je lance cette tâche avec plus ou moins de régularité, plus fréquemment quand je travaille à des textes longs.

![Sauvegarde cryptique](https://tcrouzet.com/images_tc/2019/06/back2-577x450.png)

Le contenu de cette archive est compliqué, ce qui nous en apprend beaucoup sur le mépris des développeurs d’Ulysses à l’égard des utilisateurs. Pourquoi ne pas nommer les dossiers par leur nom, quitte à ajouter un code derrière pour différencier les dossiers de même nom ? Pourquoi ne pas numéroter les feuilles dans leur ordre de classement ? Pourquoi quand nous localisons cette archive hors d’iCloud, sur Google Drive par exemple, est-elle dégradée ? Je ne vois aucune raison technique, sinon la volonté de nous enfermer dans l’univers Apple et de faire disparaître la matérialité de nos données.

Ulysses est plus qu’un éditeur de texte, c’est un gestionnaire de projet, et nous l’apprécions pour cette fonction remarquable, dont j’aurais bien du mal à me passer. Il ne se contente donc pas de sauvegarder nos textes, mais un ensemble de données à leur sujet (tags, notes, objectifs, images, filtres, tris…), données rangées dans des fichiers XML, qui se retrouvent en bas de chaque arborescence en compagnie d’un fichier TXT au format markdown.

Avant que Guillaume ne me parle de son plantage, je me contentais de mon backup épisodique, me disant que, en cas de drame, je me dépatouillerai à l’aide de ce fatras de fichiers (réinstallant Ulysses, écrasant son nouveau dossier d’archive par le mien). La mésaventure de Guillaume, qui au final lui a fait perdre 48 heures de travail, va m’inciter à lancer mon backup quotidiennement (idéalement avec un utilitaire du type de [Power Management](https://www.dssw.co.uk/powermanager/)).

### Méthode 2

Une autre méthode d’archivage, plus transparente, implique d’ajouter à Ulysses un dossier de sauvegarde externe, le mien est sur mon Google Drive, et, sur Ulysses, d’y déplacer à échéance régulière les dossiers de travail. Ils sont alors automatiquement convertis en markdown, avec une structure lisible, mais en perdant au passage les enrichissements propres à Ulysses, toutes les fameuses données stockées dans les fichiers XML (qui nous appartiennent, mais qu’Ulysses se refuse d’exporter).

![Données Ulysses perdues](https://tcrouzet.com/images_tc/2019/06/back3-600x299.png)

Avantage : on peut travailler sur ces fichiers externes avec d’autres outils tout en les gardant accessibles sur Ulysses. Inconvénient : une grande partie des fonctionnalités d’Ulysses sont perdues, ce qui ne serait pas le cas si les données étaient encodées en XML en pied des fichiers markdown par exemple.

![Architecture claire en markdown](https://tcrouzet.com/images_tc/2019/06/back4-386x450.png)

### Méthode 3

Depuis Ulysses, on peut déplacer les dossiers de travail sur le bureau ou un autre dossier. Les feuilles sont une à une converties en fichiers ULYZ, qui peuvent être rouverts avec Ulysses, par exemple si on veut les transmettre à d’autres utilisateurs sans ne rien perdre de nos métadonnées. Mais, avec cette méthode, on ne peut pas rouvrir directement toutes les feuilles d’un dossier. Ulysses a oublié qu’un écrivain ne travaille pas seul, que parfois il collabore avec d’autres écrivains et des correcteurs et des éditeurs, et qu’il serait bon de pouvoir leur transmettre une copie d’un morceau de notre environnement de création (et non pas seulement notre texte finalisé).

Pour résumer. La méthode 1 est la plus sûre, la seule automatisable simplement, mais elle génère des fichiers opaques. La seconde me servira le jour où je déciderai de quitter Ulysses. La troisième en l’état a peu d’intérêt, sauf pour transmettre ponctuellement des feuilles.

Tags: Cuisine, une