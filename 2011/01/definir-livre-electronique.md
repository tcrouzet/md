# Qu’est-ce qu’un livre électronique ?

Dans le monde de l’édition électronique, on se demande s’il faut encore parler de livre. [C’est une question qui va et vient.](http://comprendrelelivrenumerique.com/2011/01/25/le-livre-numerique-cest-un-livre-oui-ou-non/) Je voudrais préciser mon point de vue.<span id="more-21088"></span>

Un livre, c’est un ensemble de feuilles reliées. Un magazine respecte aussi cette définition. Mais vous voyez bien ce que je veux dire. Un livre a une main, une uniformité typographique, c’est un objet qu’on sait reconnaître. [Comme l’écrit Danniel Bourrion](http://comprendrelelivrenumerique.com/2011/01/25/le-livre-numerique-cest-un-livre-oui-ou-non/#comment-42) :

> Un livre, tu te demandes pas si c’est un livre.

Même les livres à la mise en page chaotique nous apparaissent comme des livres et nous les différencions des magazines ou des revues. Définir n’a pas beaucoup d’intérêt quand on sait de quoi on parle.

À partir de cette non-définition, il reste néanmoins possible de généraliser la notion de livre. C’est [Stéphane Laborde qui m’a soufflée la solution](http://twitter.com/Galuel/status/27333504719126528) :

> Un livre avec des pages est une projection d’un texte http… Rien qu’une projection. Avec une perte en passant…

C’est évident. Quand on projette l’image d’un objet 3D sur une surface 2D, on perd beaucoup d’informations et on doit choisir un angle de vue et une ligne de fuite.

Un hypertexte (texte + liens) peut ainsi être projeté sur un livre traditionnel. Au passage, il faut choisir de dérouler les liens dans un certain ordre. On découvre ainsi que l’hypertexte, à cause des liens qui rompent la linéarité, ne peut se laisser enfermer dans un livre. Il faut choisir un angle de vue, donc en donner une lecture, c’est-à-dire le représenter.

Ainsi si je diffuse une version papier de mon blog, comme je me suis amusé à le faire en 2006 et 2007, si je choisis de publier chronologiquement les billets, je limite les possibilités et restreins le lecteur.

Deux cas de figure :

1. La projection du texte sur un livre est identique au texte lui-même. Il n’y a aucune déperdition. C’est le cas de tous les textes écrits pour le papier. Leur version électronique et papier sont identiques. On peut alors indifféremment parler de livre. C’est de ce genre d’objets homothétiques dont s’occupent aujourd’hui la plupart des éditeurs.
2. La projection du texte sur un livre est incomplète. Dans ce cas, parler de livre est réducteur, ou alors il s’agit d’un livre augmenté, un livre qui s’éloigne de ses origines. Le concept de livre est insuffisant.

À côté des textes électroniques projetables intégralement sur livre, il existe donc des objets électroniques, comme les hypertextes, qui ne sont projetables que partiellement. Les appeler livres, c’est d’emblée limiter notre imagination à ce que permettait le papier. C’est un piège que nous devons éviter. D’autant qu’il existe une troisième catégorie de textes électroniques qui ne peuvent pas être projetés intégralement sur un hypertexte !

Imaginez un lien qui pointe aléatoirement vers une autre partie du texte. Ce lien n’est pas figé (dans du HTML). Il est calculé au moment où il s’affiche. Autre exemple : si vous effectuez une recherche sur mon blog et lisez les billets dans l’ordre proposé par le moteur de recherche, vous vous arrachez à la structure de liens prédéterminée au moment de l’écriture.

Toute forme de navigation contextuelle, qui implique des calculs dynamiques, par exemple en fonction de ce qui a déjà été lu, nous arrache au strict hypertexte. La plupart de ces possibilités ne peuvent pas être intégralement portées sur un hypertexte, il ne peut encore une fois s’agir que d’une projection.

![](https://tcrouzet.com/images_tc/2011/01/ebook.jpg)

Nous avons simultanément un hypertexte et un code informatique qui permet de calculer dynamiquement la navigation (voire même de réorganiser le texte lui-même). Nous sommes face à un objet électronique de troisième niveau qui combine texte, liens et code. Un hypertexte, lui, ne combine que texte et liens. Un texte électronique de premier niveau n’offre que du texte (et il peut être homothétiquement reproduit sur un livre).

Le texte électronique de troisième niveau n’a plus guère de point commun avec le livre. Je pense donc qu’il faut un nom pour définir cet objet supérieur, dont tous les autres ne sont que des sous-ensembles. Peut-être revenir au mot codex, lui donner un sens nouveau. Dans codex, il y a l’idée du texte et du code. L’idée que l’écrivain doit écrire et coder pour créer des objets textuels du troisième niveau (ce qui renvoie à l’idée d’[homofluxus](https://tcrouzet.com/2011/01/23/nous-serons-les-premiers/)).

En tout cas, il me semble que nous devons cesser de parler de livres sous peine de passer notre vie à n’écrire que des livres. Nous avons d’un côté des textes, des hypertextes et des codex. De l’autre des devices sur lesquels nous les projetons. Un livre est une espèce d’écran pour texte. Une liseuse est un écran pour hypertexte. Un ordinateur, ou tout device capable de faire tourner un navigateur, est un écran pour codex. Après il y a des romans, des essais, des rêveries… c’est autre chose, et c’est ce qui importe.

### Notes

1. Le format PDF permet de reproduire homothétiquement des livres (et partiellement des hypertextes).
2. Le format ePub permet de reproduire homothétiquement des hypertextes (et donc des livres).
3. PHP, ou un autre langage de programmation, permet de reproduire homothétiquement des codex (et donc des hypertextes et des livres).