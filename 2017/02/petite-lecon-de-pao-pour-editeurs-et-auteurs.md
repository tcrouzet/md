# Petite leçon de PAO pour éditeurs et auteurs

Chaque fois que je termine un livre, chaque fois que je travaille avec des éditeurs, je suis affligé par la lenteur et la lourdeur des procédures techniques. Pour moi, mes logiciels sont mes pinceaux, les rouages de [*La mécanique du texte*](http://tcrouzet.com/la-mecanique-du-texte/), pour les autres, des contraintes dont on ne cherche pas à exploiter les possibilités.

Je me sens une fois de plus obligé de décrire comment on devrait travailler aujourd’hui, c’est-à-dire en séparant le contenu de sa forme le plus longtemps possible, et de préférence indéfiniment, de telle façon qu’il soit à tout moment possible de corriger le texte.

Il suffit d’avoir blogué pour se persuader que c’est la bonne façon de faire. Regardez un de mes billets dans mon éditeur sur WordPress (1), puis sa visualisation sur mon blog (2), dans Pocket (3) et dans Feedly (4) (je pourrais allonger indéfiniment cette collection de rendus). Vous voyez bien qu’un même texte peut avoir des apparences différentes sans qu’il soit nécessaire d’aucune intervention manuelle. Voilà pourquoi nous avons inventé les feuilles de styles. Tu changes la feuille, tu changes le rendu. Et ce qui est vrai pour le Web et aussi vrai en dehors (on a inventé les feuilles de styles avant le Web).

![](https://tcrouzet.com/images_tc/2017/02/pao1.png)

![](https://tcrouzet.com/images_tc/2017/02/PAO2.png)

![](https://tcrouzet.com/images_tc/2017/02/pao3.png)

![](https://tcrouzet.com/images_tc/2017/02/pao4.png)

En 1990, quand je suis arrivé dans la presse, j’ai tout de suite séparé le fond et la forme. Vingt-sept ans plus tard, je sens encore de la résistance, pas étonnant que les idées plus complexes, notamment politiques, mettent des lustres à passer dans les mœurs.

Aujourd’hui, beaucoup de professionnels de l’édition travaillent souvent comme les secrétaires qui font de la bureautique. Ils restent attachés au [WYSIWYG](https://fr.wikipedia.org/wiki/What_you_see_is_what_you_get). Ils sélectionnent des passages, changent la typo, changent les alignements… Et quand l’auteur leur dit qu’il a modifié son texte, ils ne veulent pas l’entendre, parce que cela ne leur laisse que deux possibilités :

1. Soit ils recommencent leurs ajustements sur le nouveau texte.

2. Soit ils reportent les corrections de l’auteur dans leur mise en page.

Dans les deux cas, c’est long et pénible. Sauf que ces deux techniques sont inutiles quand on sait s’organiser. Voici donc comment je m’y prends pour qu’un texte soit toujours révisable et qu’à tout moment je puisse en produire des rendus différents.

### Le texte source

Quand j’écris, je le fais dans un éditeur de texte qui m’interdit de faire de la mise en page ou de choisir des polices (donc je n’utilise pas de traitement de texte).

Mais il me faut bien pouvoir dire d’un paragraphe, c’est un titre, un sous-titre, ce texte commence sur une nouvelle page… Voilà pourquoi nous écrivons désormais en [Markdown](https://fr.wikipedia.org/wiki/Markdown). Nous insérons dans le texte des balises bien visibles pour déclarer les éléments de structure (niveau de titre, citations, saut de section…) et les réglages typographiques élémentaires (italique, gras, liens…).

Il existe [des dizaines d’éditeurs Markdown](http://tcrouzet.com/2016/10/19/les-outils-de-lecrivain/). J’utilise [Ulysses](https://www.ulyssesapp.com/) parce qu’il a été spécialement pensé pour les auteurs. Écrire en Markdown, c’est se concentrer sur l’essentiel, c’est accepter dès le départ que la forme d’un texte sera traitée plus tard. Cela impose de ne penser qu’au texte et à rien d’autre. On s’habitue très vite à cette gymnastique (puis ont se demande comment on a pu écrire un jour en [WYSIWYG](https://fr.wikipedia.org/wiki/What_you_see_is_what_you_get)).

### Premières relectures

Après avoir écrit en Markdown, j’éprouve souvent le besoin de prendre du recul avec mon texte, donc de le visualiser d’une manière moins brute. Je l’affiche en lui collant une feuille de styles, parfois même je l’exporte en epub ou en PDF. Cela revient au même que d’imprimer le texte. D’ailleurs parfois, je le relis sur mon iPad, stylet en main.

Attention : les corrections ne s’effectuent pas dans l’aperçu, mais dans le texte source en Markdown.

### Édition du texte

Il est temps que d’autres personnes interviennent sur le texte, mon éditrice notamment. J’exporte mon texte en DOCX parce que seuls les traitements de texte comme Word disposent d’un mode de suivi de modifications (nous attendons désespérément les éditeurs Markdown disposant de ces fonctions).

Quand j’envoie mon texte, je précise bien qu’il ne faut surtout pas s’occuper de la mise en forme (et je fais une exportation qui correspond aux habitudes de travail de mes différents interlocuteurs, certains veulent des polices serif, d’autres sans serif, certains du A4 d’autre du A5…).

### Validation des modifications

Je valide les modifications dans Word, avant de réimporter le texte sous Ulysses, où je le retrouve en Markdown. Le texte fait ainsi souvent des allers-retours jusqu’à ce qu’il soit finalisé.

### Mise en page

Ulysses dispose de filtres d’exportation PDF parfaits pour la relecture. D’un clic, on exporte en A4 comme en A5, avec des choix typographiques classiques ou modernes, et on peut bien sûr créer ses propres filtres (entendez ses propres feuilles de styles). Mais pour publier un livre de qualité professionnelle, c’est insuffisant. Il faut donc couler le texte dans InDesign.

Première étape, effectuer une nouvelle exportation en DOCX, en choisissant une feuille de style minimaliste (j’en ai une spécialement adaptée à InDesign). Les balises Markdown sont associées aux styles Titre 1, Titre 2, Normal…

Pour peu que dans InDesign on utilise les mêmes noms de style (ceux de Word d'ailleurs), le coulage s’effectue automatiquement lors de l’importation. Le livre se monte en un instant.

Je lance alors une petite macro qui règle certains détails, comme la notation typographique des siècles non prise en compte en Markdown. Cette macro vérifie également l’usage des espaces insécables.

Le texte est quasiment prêt à être publié.

### Dernière relecture

Depuis InDesign, je fais une exportation PDF, la même qui sera envoyée à l’imprimeur. Je relis, je corrige le texte brut, note les éventuels problèmes de mise en page (lignes creuses, pages presque vides…), problèmes de plus en plus rares, car si on règle bien InDesign ses algorithmes résolvent seuls la plupart des problèmes.

### Finalisation

Mon texte corrigé est réimporté dans InDesign (ça prend donc deux secondes), les problèmes de maquettes qui ne concernent pas le texte sont ajustés et le travail est terminé.

Si les maquettistes utilisaient cette technique jamais ils ne devraient se plaindre quand un auteur veut faire des corrections. Une fois un gabarit InDesign défini et compatible avec Markdown, il faut moins de cinq minutes pour monter, ou remonter, un livre entier.

Tags: Cuisine, Ulysses, une