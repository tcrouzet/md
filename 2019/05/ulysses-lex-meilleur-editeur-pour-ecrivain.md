# Ulysses : l’ex-meilleur éditeur pour écrivain

Après avoir vanté [Ulysses](https://ulysses.app/), après avoir basculé sur Mac en partie pour lui, je lui fais de plus en plus de reproches, non pas parce qu’il n’évolue pas, mais parce que ses évolutions sont pour la plupart inutiles pour un auteur.

Pour commencer, Ulysses est une solution qui reste uniquement Mac. Quand on sait que depuis quelques années les MacBook ont les pires claviers du marché, on comprend qu’ils ne sont plus adaptés pour les écrivains, mais Ulysses n’envisage toujours pas de basculer sur Windows. Je n’ai plus envie d’une application qui m’emprisonne sur un système qui n’est plus adapté à mes usages. Bien sûr, ça peut changer du côté d’Apple, mais depuis trois ans rien ne change. Le clavier papillon de mon MacBookPro 2018 donne déjà des signes de faiblesse après moins d’un an d’utilisation peu intensive en Floride. Les touches Maj et N s’effacent, la touche A est rétive et j’ai toujours aussi mal à la pulpe des doigts qu’au premier jour. On a beau dire qu’on s’habitue à tout, je ne m’habitue pas au clavier papillon des Mac.

![Touche Maj et N de mon MacBookPro 2018](https://tcrouzet.com/images_tc/2019/05/P1090726-600x450.jpg)

Pour Ulysses, refuser de regarder du côté de Windows, c’est refuser de s’intéresser vraiment aux auteurs professionnels, c’est mépriser son cœur de cible (à moins que cette cible ait changé en cours de route).

D’autres choses ont changé. Les raccourcis. Sur mon Mac, je faisais Maj+Ctrl+1 pour ouvrir ou fermer les barres latérales, désormais je ne gère ainsi que la bibliothèque. La liste des feuilles reste visible. Maintenant, je dois faire deux fois Maj+Ctrl+2 pour aboutir au même résultat qu’avant, c’est-à-dire me retrouver avec mon seul éditeur de texte sous les yeux. Perte de temps.

Plus grave, Ulysses repositionne mon curseur en haut de document quand je change de feuille d’un simple clic. C’est un peu comme si quand on changeait de tâche sur son ordi on perdait chaque fois le contexte. Chez Ulysses, ils me disent que c’est un comportement normal, qu’il faut double-cliquer pour revenir au point d’origine (dans ce cas Ulysses voudrait réinventer l’ergonomie). Ils se fichent de nous, mais une fois par an nous piquent des tunes maintenant qu’ils sont passés à un modèle par abonnement.

![Remise en forme du Markdown Ulysses](https://tcrouzet.com/images_tc/2019/05/script-600x342.png)

Un autre manquement me pèse. Quand on exporte en Markdown, Ulysses ne propose pas d’option pour ajouter automatiquement un saut de ligne en fin de paragraphe. Problème, sans ce saut, WordPress et les autres éditeurs Markdown ne voient pas les paragraphes, mais un seul bloc de texte. J’ai dû bidouiller un script pour remettre en forme mes textes avant de les coller dans l’éditeur [WP Githuber MD](https://wordpress.org/plugins/wp-githuber-md/) de WordPress.

Autre exemple d’innovation inutile : Ulysses exporte directement vers WordPress, mais il le fait en HTML, ce qui est un comble pour un éditeur MarkDown (en plus, il affiche les images à leur résolution maximum). Moi, je veux que mes billets restent en Markdown, même une fois publiés (que les images respectent la syntaxe Markdown).

Ça commence à faire beaucoup de points noirs, sachant qu’Ulysses ne propose toujours pas d’outil de travail collaboratif, ce qui est un minimum quand on veut éditer un texte et travailler avec un relecteur. Donc, je suis toujours obligé de quitter Ulysses à un moment ou à un autre du processus éditorial. Et revenir sur cet encore plus méprisable Word.

Au lieu de s’occuper de nous autres auteurs, Ulysses ajoute des gadgets sans intérêt pour nous, genre mot-clés en couleur, des trucs faciles à coder, qui ne nécessitent donc pas d’investissement et qui maintiennent l’illusion que le produit évolue toujours, justifiant son modèle par abonnement. Je trouve ça plutôt inquiétant. Je me pose la question de la pérennité d’Ulysses, d’autant que son système de gestion des fichiers Markdown est pour le moins opaque, encore une chose qui devrait évoluer.

Existe-t-il une alternative ? Je continue à [lister les outils pour écrivain](https://tcrouzet.com/2016/10/19/les-outils-de-lecrivain/), mais je n’ai pas encore trouvé le candidat idéal pour remplacer Ulyssses, c’est mon drame. De plus en plus de voix s’élèvent pour [plébisciter Drafts](https://www.macstories.net/stories/choosing-your-markdown-editor-a-comparison-of-ulysses-and-drafts/), mais c’est aussi une solution cantonnée à l’univers Apple. [iAwriter](https://ia.net/fr/writer) est le meilleur candidat à ce jour, mais il ne me satisfait pas pleinement (contrairement à Ulysses, la plupart des éditeurs Markdown exigent deux sauts de ligne en fin de paragraphe, je trouve ça insupportable, en plus d’être totalement inutile). Il y a aussi le très séduisant [Zettlr](https://www.zettlr.com/), gratuit, open source, Windows/MAC/Linux, mais pas iOS et Android, qui manque malheureusement d’options pour configurer le mode écriture (oui, je suis trop bien sur Ulysses quand je ne fais qu’écrire et c’est pour ça que je l’utilise encore).

Voici le portrait idéal d’un éditeur pour écrivain. D’abord ce que je retrouve déjà sur Ulysses :

- Gestionnaire de projets (annotations, mots-clés, dossiers…).

- Écriture sans distraction en Markdown (avec simplification de la syntaxe à l’affichage, pas de double saut de ligne, grande fluidité, nombreuses options de personnalisation…).

- Archivage/synchronisation automatique.

- Gestion des objectifs.

Ce qui manque à Ulysses :

- Multiplate-forme (Windows/Mac/Linux, iOS/Android).

- Architecture de fichiers Markdown claire, lisible, transparente.

- Filtre d’exportation avec plus d’options que ceux d’Ulysses (pourquoi pas la possibilité d’utiliser des scripts — OK, on peut toujours passer par [Pandoc](https://pandoc.org/) si on veut de la précision).

- Travail collaboratif avec système de suivi des corrections.

Si Ulysses sautait sur Windows, clarifiait sa structure de fichiers et disposait d’un mode collaboratif, il ferait un énorme bond en avant et il deviendrait l’éditeur de texte incontournable. Mais je sens que quelque chose bloque, sans doute un manque de moyens, qui empêche son déploiement à grande échelle. Ça me laisse une certaine appréhension. Je vais lui rester fidèle tant que je ne me débarrasse pas de mon MacBookPro 2018, mais, lorsque je changerai de machine, je ne prendrai plus Ulysses en considération.