# Quel est le workflow idéal pour l’écriture web ?

Depuis une semaine, j’ai plongé dans mes archives et je me rends compte que ma mémoire numérique est pour le moins éparpillée et peu pérenne. Je suis à la recherche d’une solution plus robuste, plus simple, plus sobre, plus ouverte, moins dépendante de tierces parties, tant bien même elles seraient ouvertes. J’écris ce texte pour dire ce que je cherche plutôt que proposer des réponses (j’en attends).

![Mon workflow](https://tcrouzet.com/images_tc/2024/04/workflow3.jpg)

[J’écris avec Obsidian](https://tcrouzet.com/2024/01/04/ecrire-avec-obsidian/), un éditeur Markdown multi-plateforme qui travaille sur une simple hiérarchie de fichiers. Je peux à tout moment utiliser un autre éditeur. Je n’ai jamais été aussi libre côté écriture, d’autant que je peux personnaliser Obsidian avec des plugins. Mes textes sont synchronisés en semi-temps réel sur GitHub, avec gestion automatique du versionning, ce qui est relativement sécure et me permet éventuellement de remonter dans le temps.

Les choses se compliquent quand je veux publier un billet de blog. Je dois copier le texte écrit avec Obsidian sous WordPress. Je le relis avant de le publier, souvent le modifie, et même en long en large, si bien que ce texte WordPress n’est plus synchronisé avec l’original.

Depuis plus d’un an, je n’utilise plus WordPress sur mon serveur, parce qu’il est absurde d’utiliser un site dynamique pour des contenus qui n’ont rien de dynamique. Un site WordPress est piratable, dispendieux en énergie, nécessite un serveur capable de faire tourner PHP et MySQL, donc de la maintenance, et par-dessus tout c’est une usine à gaz. Mon WordPress ne tourne donc qu’en local et j’ai écrit un plugin qui compile mon site en HTML statique et [aussi en Markdown](https://md.tcrouzet.com/). Je dois alors transférer ces textes en lignes, ce qui ne nécessite qu’une ligne de commande.

Voici ce que je ne supporte plus :

1. La non-synchronicité des textes. Je voudrais que mes textes dans Obsidian, donc sur mon ordinateur, soient exactement les mêmes qu’ailleurs.

2. La nécessité d’importer les images sous WordPress. Je voudrais que les images ajoutées sous Obsidian, soient elles-mêmes publiées sans aucune autre manipulation.

3. Je ne veux plus voir WordPress (je ne peux plus le voir en peinture).

Il me faut donc mettre en place un workflow qui d’Obsidian compile mes textes sous différentes formes, du Markdwon le plus brut au HTML de mon blog (tout en respectant la hiérarchie actuelle du blog).

Le workflow ne peut pas être un plugin Obsidian, parce que je le veux indépendant d’Obsidian, dont je veux pouvoir me débarrasser quand je le voudrais (on ne m’y reprendra plus à m’emprisonner comme avec Ulysses).

J’ai donc besoin d’un script qui scanne ma hiérarchie, la compile, la publie. Avant de coder la chose moi-même en Python, je parle de mes attentes pour ne pas réinventer la roue.

J’utilise [Jekyll](https://jekyllrb.com/) pour [mon site 727](https://727.tcrouzet.com/). Ce n’est vraiment pas ce dont j’ai besoin, pas plus que [Hugo](https://gohugo.io/). Je veux un script qui à partir d’un dossier le convertit dans une hiérarchie donnée, sans perdre aucune des fonctionnalités actuelles de mon blog (en gros le système de tags, que je trouve toujours bien pratique pour les classifications). Bien sûr, je ne veux pas de base de données, parce que ma hiérarchie est ma base de données, agrémentée des tags en pied des fichiers.

Les non-codeurs se diront que tout cela est bien compliqué, mais en vérité c’est vous qui utilisez des solutions compliquées, qui mettent en œuvre des processus auxquels vous ne comprenez rien (et moi aussi) et qui donc peuvent à tout moment se comporter de manière non souhaitée, non souhaitable, non éthiquement respectable, et pour commencer énergiquement peu rationnelle. Mon désir de sobriété m’impose une forme de sobriété numérique, même si par ailleurs je continue d’utiliser les IA (je cherche à compenser mes débauches dans ce domaine, tout en sachant que ce champ aussi évolue déjà vers la sobriété avec des modèles plus compacts et qui bientôt tourneront en local dans des circuits spécialisés).

Mon but finalement est de ne plus être serveur dépendant. Je veux que mes textes numériques puissent circuler aussi librement que mes textes papier, et même plus librement, sans dépendre de la volonté de quelques opérateurs. Dès qu’on y réfléchit deux secondes, mettre toutes ses œufs dans un seul panier est une pure folie. Le destin de vos contenus sur YouTube ne vous appartient pas, pas davantage que vos posts Facebook ou même que vos billets de blog hébergé ici ou là.

Il n’existe qu’une solution pour défendre la liberté d’expression et la liberté de création, c’est la décentralisation, c’est ni plus ni moins que le modèle du livre, dont tous les lecteurs peuvent avoir une copie chez eux. Vous pouvez déjà télécharger mon blog sur GitBub, donc techniquement vous pouvez le copier chez vous. Je veux aller un pas plus loin en simplifiant le processus côté back-office.

*PS : [Ploum](https://www.ploum.net/) dont la réflexion sur le sujet alimente la mienne m’a pointé [vers un projet qui permet de monter un Torrent comme une partition disque](https://github.com/johang/btfs). Voilà une idée magnifique. Je pourrais créer une version torrent de mon blog et vous pourriez y accéder localement. Vous pouvez d’ailleurs cloner sur votre disque [le GitHub du blog](https://github.com/tcrouzet/blog) et le naviguer en local.*

Tags: Cuisine, une