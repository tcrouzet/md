# Comment transformer un texte en ePub

Ces dernières semaines, après avoir publié un article sur [le nouveau métier d’imprimeur d’ePub](https://tcrouzet.com/2010/08/02/imprimeur-epub/), puis sur [la publication chez Apple](https://tcrouzet.com/2010/09/10/comment-publier-sur-apple-ibookstore/), j’ai échangé quelques mails avec [Jean-Claude Dunyach](http://fr.wikipedia.org/wiki/Jean-Claude_Dunyach), un de nos grands auteurs de Science Fiction. Nous avons évoqué l’idée d’écrire un guide pratique à quatre mains. Au final, c’est Jean-Claude qui a effectué l’essentiel du travail, moi ne mettant mon grain de sel que par endroits, notamment pour parler de mon [application de conversion](http://lab.tcrouzet.com/epub/). Nous espérons que ce petit guide servira à de nombreux auteurs. Nous l’avons écrit pour eux.<span id="more-19491"></span>

---

Le processus de transformation d’un fichier texte simple (au format texte, Word, rtf, etc.) en ePub est assez facile. Ce que j’appelle un fichier simple, c’est un fichier avec du texte, sans inclusion d’objets divers (images – à l’exception de la couverture –, tableaux, films…) et sans mise en page très compliquée. Typiquement, un roman ou un recueil de nouvelles non illustré appartiennent à ce cas. Alors qu’un dictionnaire, un guide de voyage bourré de photos ou un magazine à la maquette complexe ne peuvent pas être traités par la méthode que je décris. Il faut dans ce cas passer par des outils comme [inDesign](http://www.adobe.com/fr/products/indesign/).

### 1. Avant de commencer : de quoi a-t-on besoin ?

Vous aurez besoin des outils suivants, qui sont, pour la très grande majorité d’entre eux, gratuits et disponibles sur le net – l’offre s’enrichit rapidement et ce guide sera peut-être démodé dans quelque temps. La plupart des outils cités sont disponibles pour PC et pour Mac, et parfois pour Linux :

#### 1.1. Pour la conversion du fichier texte en fichier ePub

Il existe plusieurs méthodes, en attendant que tous les éditeurs de logiciels se décident à fournir une extension permettant l’export direct d’un fichier sous le format ePub.

##### 1.1.1 Le traitement de textes Atlantis

[C’est un traitement de textes pour PC](http://www.atlantiswordprocessor.com/fr/), très léger, en français, qui lit la plupart des fichiers texte, notamment Word .doc, et qui les exporte directement au format ePub d’excellente qualité. Il est payant ($35 dollars US) mais peut être essayé gratuitement pendant un mois. C’est un outil que je recommande pour m’en être beaucoup servi – c’est également un très bon traitement de textes, particulièrement adapté aux miniPC type eeePC d’Asus, ou aux notebooks.

Sur Mac, [Page](http://www.apple.com/fr/iwork/pages/) sait aussi exporter directement en epub mais de façon encore primitive.

##### 1.1.2 L’outil en ligne de conversion de Thierry Crouzet

Quel que soit votre traitement de texte, enregistrez vos fichiers en html et uploadez-les vers [une application Web](http://lab.tcrouzet.com/epub/) qui sera éternellement en prototype mais qui marche.

Des logiciels comme [Sigil](http://code.google.com/p/sigil/) savent aussi ouvrir les fichiers html pour les transformer en ePub. En fait, un ePub est un fichier conteneur (changez son extension par zip pour comprendre). Il contient une série de fichiers html. Passer par le html est donc la méthode la plus logique pour aller vers l’ePub.

##### 1.1.3 La Poule ou l’Œuf

Plus qu’un convertisseur, [cette application](http://www.pouleouoeuf.org/) dans le pur esprit libre est un véritable environnement d’édition. Vous pourrez générer des ePub mais aussi des pdf. Et même vous passer de tout autres outils pour écrire comme pour publier.

#### 1.2. Pour la validation des epubs obtenus

Les principaux sites marchands (Amazon, Apple…) demandent que vous ayez vérifiés les ePubs que vous leur demandez de vendre. Pour cela, il existe un programme gratuit, [Epubchecker](http://www.rainwater-soft.com/epubchecker/). Il suffit de le lancer, de faire glisser son ePub dessus, et de voir s’il y a des problèmes. Si vous suivez les étapes décrites plus loin, il ne devrait pas y en avoir.

Vous pouvez aussi employer un autre logiciel : [FlightCrew](http://code.google.com/p/flightcrew/).

Si vous n’avez pas envie d’installer de logiciel, vous pouvez [directement tester votre ePub en ligne](http://threepress.org/document/epub-validate/).

Si on est un peu plus expert, on peut également éditer son fichier ePub, pour corriger d’éventuelles bourdes avec [Sigil](http://code.google.com/p/sigil/downloads/list).

#### 1.3. Pour la conversion d’epub en autres formats d’Ebooks

Le programme gratuit [Calibre](http://calibre-ebook.com/) permet d’exporter les ebooks d’un format à l’autre, sans soucis particuliers. Dès que vous avez créé un fichier ePub de bonne qualité, vous pourrez par ce moyen obtenir un fichier PRC (Mobipocket Reader) lisible par le Kindle.

#### 1.4. Pour la visualisation du résultat sur votre ordinateur.

Si vous n’avez pas de liseuses ou d’iPad, plusieurs applications gratuites ouvrent les ebooks sur votre ordinateur (PC ou Mac). Citons, en particulier :

- [Mobipocket](http://www.mobipocket.com/en/DownloadSoft/default.asp?Language=FR)
- [Calibre](http://calibre-ebook.com/)
- [Lucidor](http://lucidor.org/lucidor/download.html)
- [Amazon Kindle](http://www.amazon.com/gp/help/customer/display.html/ref=hp_bc_nav?ie=UTF8&nodeId=200127470)

L’offre se renouvelant sans cesse, il vaut mieux faire une petite recherche sur Internet si on a besoin d’outils particuliers.

### 2. Préparer le fichier texte

Nous partons du principe que vous avez rassemblé, dans un seul fichier , la totalité de votre ouvrage. Appelons ce document Ouvrage.doc, pour la suite.

Il est bien sûr évident que vous avez soigneusement relu votre livre, que vous avez utilisé un correcteur orthographique et syntaxique (celui de Word par exemple, mais il en existe d’autres, plus efficaces, comme Antidote ou Cordial) et que votre document ne comporte aucune correction visible en mode « suivi de corrections ». Vous êtes donc prêt à démarrer.

#### 2.1. Préparer son fichier : les principes

Le but de cette préparation – qui n’est ni très longue, ni très compliquée – est double :

1. S’assurer que la conversion se fera correctement et donnera de bons résultats.
2. Obtenir un ebook facile à lire pour l’utilisateur.

Premier principe général : songez à ce que signifie le fait de lire un livre sur écran. En particulier, rappelez-vous que le lecteur d’ebooks n’a pas nécessairement envie de sauter une douzaine de pages contenant des tas de choses inutiles pour lui (voire des pages blanches) avant d’atteindre le début du texte proprement dit. Par conséquent, tout ce qui concerne les mentions légales, les remerciements ou la liste des collaborateurs, les listes d’ouvrages du même auteur, est à mettre à la fin du fichier, pas au début.

Second principe : le titre du livre et le nom de l’auteur se retrouveront sur la couverture, inutile de les placer dans le texte, à moins de créer une page de garde. Un ebook confortable commence au plus tard à la page 3 (après la couverture et la page de garde). Donc, à vous d’organiser votre document en conséquence.

#### 2.2. La gestion des styles

Lors de la conversion en ebook, diverses choses se passent :

- Suppression d’un certain nombre d’éléments de mise en page, comme les numéros de page automatique (qui sont directement gérés par la liseuse)
- Création automatique d’une table des matières qui permettra au lecteur de naviguer dans le texte. Du coup, la table des matières que vous avez éventuellement créée vous-même et incorporée dans le texte ne sert plus à rien, et se révèle même fausse. Supprimez-la sans hésiter.

Pour que cette conversion se passe bien, pour que la table des matières soit créée correctement, c’est à vous de gérer les styles de votre document. Comment s’y prend-on ?

En pratique, on considère qu’un ouvrage simple – un roman, par exemple – comporte très peu de styles différents. Il y a, en général :

- Un style pour le titre (style de niveau 1) et pour le nom de l’auteur.
- Un style pour le titre des chapitres (style de niveau 1 ou 2 si titre général), et éventuellement un style de niveau 3 pour les sous-titres, s’il y en a (c’est rare).
- Un style pour le corps du texte.
- Éventuellement, un style pour une citation, ou pour un passage spécialement formaté dans le corps du texte.

Par défaut, Word a créé un style « normal » pour le corps du texte, et d’autres styles adaptés aux titres (niveau 1) et aux sous-titres (niveau 2, 3, etc.) Ces styles s’appellent Titre 1, Titre 2, etc. Rien ne vous empêche de créer les vôtres pour le corps du texte et pour les titres. Souvenez-vous juste que les styles utilisés pour le corps du texte doivent être du niveau « corps de texte » et que le style utilisé pour les titres de chapitre et pour ce que vous voulez voir figurer dans la Table des Matières automatique doit être de niveau 1, 2 voire 3.

Quand vous exportez votre fichier au format ePub, la table des matières créée automatiquement listera uniquement les paragraphes de niveau 1, 2 ou 3. Si vous voulez que la page « Du même auteur » ou « remerciements » ou « Copyright » apparaisse dans cette table des matières, il suffit tout simplement d’affecter à la mention « Du même auteur », « Remerciements », « Copyright », etc. un style de titre pris en compte.

Inutile de surcharger votre table des matières, cela dit. Pensez à ce dont le lecteur a besoin.

Note : La table des matières qui sera créée par l’outil ressemble beaucoup à celle que le traitement de texte créerait automatiquement. Donc, si vous voulez vérifier que vous avez bien mis les bons styles aux bons endroits, essayez de créer une table des matières dans votre fichier. Ensuite, effacez là.

#### 2.3. La liste des choses auxquelles penser

Voici une liste aide-mémoire de petites choses auxquelles penser, dans votre fichier Word :

1. Éliminez les pages blanches et les sauts de page inutiles.
2. Pensez à écrire « fin » à la fin de votre texte. On l’oublie, mais un lecteur qui lit un fichier ne sait pas toujours quand le texte est fini, surtout si votre ouvrage se termine abruptement. Écrire « FIN » évite parfois que le lecteur se demande si le fichier n’est pas incomplet.
3. Rajoutez les mentions légales sur une page séparée à la fin de votre fichier : © 2010 Nom Prénom, le numéro de l’ISBN qui correspond à votre ouvrage, et qui est en principe différent de celui du livre imprimé. Ces indications peuvent très bien être sur la page listant vos autres œuvres.

### 3. La couverture

Ajouter une couverture à votre ebook est en général une bonne idée. Cela permet de le distinguer plus facilement dans la bibliothèque virtuelle d’une liseuse, et les lecteurs semblent apprécier. Donc, pour ce faire, vous avez besoin d’une image de bonne qualité comportant au minimum le titre du livre et votre nom.

Attention à bien vérifier que vous possédez les droits de l’image sélectionnée. En particulier, si vous reprenez la couverture d’un livre déjà publié, vous devez obtenir les autorisations des ayant droits (illustrateur ou photographe, éditeur d’origine, etc.)

Cette image numérique devra être d’une qualité et d’une taille suffisante pour les besoins de l’ebook. Une taille de 1024 pixels (hauteur) sur 670 (largeur) est optimale.

### 4. Préparer les métadonnées associées à votre fichier

Le terme barbare de « métadonnées » désigne tout ce qui va « enrichir » votre livre électronique et lui ajouter des informations supplémentaires qui permettront au lecteur d’en consulter un résumé, de savoir à quel(s) genre(s) il appartient, de connaître son numéro d’enregistrement (ISBN), son prix, etc. Ces éléments sont importants car c’est grâce à eux que vos lecteurs potentiels pourront s’orienter dans la jungle des livres disponibles pour vous trouver.

Donc, au moment de la conversion, essayez d’avoir les informations suivantes à portée, car vous aurez besoin de les rajouter :

Auteur (s) : essayez de taper sous le format « Dupond, Albert », pas Albert Dupond. Le système le gérera mieux. On peut rentrer plusieurs auteurs séparés par des points-virgules.

Titre

Sous-titre (éventuel)

Genre (Fantasy, SF, Policier, Thriller, romance, autofiction, poésie…)

Infos (là, on peut recopier un quatrième de couverture)

Editeur (qui peut être vous-même)

ISBN (un numéro spécifique à cet ebook, différent de celui de la version imprimée)

Date dans copyright

### 5. La conversion proprement dite

Si vous avez suivi les instructions et bien préparé votre fichier, la conversion prend deux minutes.

#### 5.1. Avec le traitement de textes Atlantis

Ouvrez votre fichier ouvrage.doc dans Atlantis. Insérez au tout début de l’ouvrage (c’est vraiment le premier caractère du livre, au-dessus du titre, sans espace avant) l’image de la couverture. Cliquez dessus et centrez-la.

Faites « enregistrement spéciaux » dans le menu « Fichier » et choisissez « enregistrer en ebook ».

Là, vous allez devoir remplir les champs de métadonnées. Rien de compliqué, vous recopiez les informations demandées dans les cases.

Le fichier epub est créé presque immédiatement.

Sauvez votre fichier ouvrage.doc, il contient désormais les métadonnées que vous venez de rentrer. Si vous devez refaire la manip’ pour une quelconque raison, ces informations seront déjà là.

Note : si la couverture n’apparaît pas quand vous ouvrez votre fichier ePub dans Calibre, ou autre, c’est qu’il y a au moins un caractère avant l’image dans votre fichier. Supprimez-le et réessayez. De même, si la table des matières n’est pas complète, ou mal fichue, vérifiez que les styles des en-têtes de chapitres, etc., sont bien de niveau 1.

#### 5.2. Avec le Générateur ePub de Thierry Crouzet

[L’application](http://lab.tcrouzet.com/epub/) vous demande quatre types d’information.

1. Les métadonnées (titre du texte, auteur, ISBN…) qui se retrouvent dans l’entête du epub.
2. Outre la couverture, vous disposez de deux pages pour décrire votre livre, notamment préciser le copyright sans oublier d’indiquer un lien vers votre site. Ces pages disposent de variables entre crochets qui seront automatiquement affectées en fonction des métadonnées. Vous pouvez transformer le HTML proposé.
3. Les paramètres aident à définir le rendu du epub. Indiquez notamment le nombre de chapitres à convertir si vous voulez proposer un simple extrait de votre texte.
4. Pour tester, vous pouvez ne rien saisir dans les trois sections précédentes. En revanche, vous devez au minimum indiquer un fichier html (application optimisée pour les html générés par Microsoft Word).
    
    1. Tous les traitements de textes savent enregistrer dans ce format. Vous devez choisir un encodage en UTF8. Prenez soin de virer tout le texte qui précède le début effectif du texte (pas de titre, de nom d’auteur, de copyright…).
    2. Une image de couverture est quasi obligatoire si vous voulez diffuser l’epub.
    3. Si vous avez référencé des images dans le texte, rassemblez-les dans un fichier zip.
    4. Les utilisateurs avancés peuvent associer leurs noms de style à ceux gérés par défaut par l’application. Cette astuce vous évite de devoir renommer les styles de vos documents.

Il ne vous reste plus qu’à cliquer sur « Convertir ». Une fois l’upload de vos fichiers terminé, le download du ePub commence. Visualisez-le avec une liseuse, validez sa syntaxe, vous êtes alors prêt à le diffuser, [sur ibookstore d’Apple par exemple](https://tcrouzet.com/2010/09/10/comment-publier-sur-apple-ibookstore/). [Téléchargez quelques exemples d’ePub version Crouzet.](http://txt.tcrouzet.com/)