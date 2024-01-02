# Écrire : à la recherche de l&#8217;éditeur de texte idéal

Devant l’inertie de l’équipe derrière [Ulysses](https://ulysses.app/), leur obstination à s’enfermer dans un format de données de plus en plus propriétaire, et [après avoir douloureusement programmé un script Python pour récupérer mes données](https://github.com/tcrouzet/ulysses-tools), j’ai décidé de changer de crèmerie et je vous invite à faire de même.

Je n’en finis pas d’enrager. [Suite à l’effacement de certains dossiers et fichiers](https://tcrouzet.com/2023/12/25/pris-en-otage-par-ulysses-app/), j’ai découvert que nombre de mes projets avaient perdu des fichiers depuis des mois. Tout cela en silence, sans que j’en sois informé, sans que je puisse m’en rendre compte. Ulysses est devenu un outil toxique.

### Ulysses sur le grill

Voici ce que n’a jamais réussi à proposer Ulysses :

- Données ouvertes : textes en Markdown, informations supplémentaires en Json ou Yalm, dûment documentées.

- Textes éditables à tout instant avec d’autres outils de façon à n’être jamais limité par une solution. Par exemple, pouvoir éditer sur un téléphone avec une application différente de celle sur ordinateur. Voire écrire avec différentes applications en fonction des textes à travailler, ou à retravailler.

- S’ouvrir à toutes les plateformes, ne pas se limiter à MacOS/iOS.

- Possibilité de développer des extensions, voire d’utiliser des plugins.

Même les fichiers docx de Word respectent pratiquement tous ces critères. Ulysses m’a enfermé dans une prison propriétaire. C’est en fait un faux éditeur Markdown, il n’en a plus que l’apparence. Avec les années mon enfermement s’est intensifié, alors que la tendance est universellement opposée. Dans une certaine mesure, j’accepte que le code soit propriétaire, mais pas mes données (et qu’un système de synchronisation erratique joue à les effacer).

### Ce à quoi m’a habitué Ulysses

- Mode d’écriture sans distraction (ce qui implique une stricte indépendance de l’interface de saisie de celle d’exportation).

- Syntaxe Markdown étendue (mais que doivent également respecter les fichiers enregistrés, et non recourir à un XML abscons). Notes de bas de page, code bloc, commentaires…

- Structuration de l’espace de travail en dossiers, sous-dossiers et documents qui peuvent être réorganisés dynamiquement par simple glisser-déplacer.

- Étiquetages des dossiers avec des symboles colorés (un gadget qui s’avère très utile à l’usage).

- Possibilité d’ajouter aux textes de la documentation (notes, images, liens…).

- Possibilité d’exporter toute une hiérarchie vers divers formats (docx, HTML, PDF, markdown…) suivant des feuilles de styles sur mesure (idéalement programmables).

- Synchronisation entre différents systèmes (mais pour cela il suffit d’enregistrer sur un share et de ne pas travailler en même temps sur un même fichier). Nous autres écrivains effectuons rarement du travail collaboratif en temps réel.

- Sauvegarde automatique en temps réel.

- Versionning automatique ou volontaire.

- Backup automatique ou volontaire.

- Ajout de tags et d’objectifs (deux fonctions qui ont été indispensables quand j’écrivais *One Minute*).

Mais aussi j’aimerais disposer d’un système de suivi de corrections comme sous Word ou Google Doc. Très important lors de la phase d’édition finale d’un manuscrit. Aujourd’hui, nous finissons tous par échanger des fichiers docx, ce qui implique une gymnastique à laquelle ne je me fais toujours pas.

### Un petit sacrifice

La possibilité offerte par Ulysses de réorganiser manuellement la structure des fichiers implique une table de correspondance entre la hiérarchie réelle des dossiers et fichiers sur le disque et la hiérarchie telle qu’organisée sur l’application. Ulysses utilise des fichiers plist localisés dans chacun des dossiers pour assurer la correspondance (adoptant une solution technique inutilement compliquée). Cette solution est nécessairement propriétaire.

La plupart des autres applications ont renoncé à cette fonctionnalité pour garder une structure de fichiers la plus transparente possible et faire en sorte qu’elle soit exploitable par de multiples applications. Je crois que c’est le prix à payer pour l’ouverture. Cela implique de structurer les dossiers seulement par leur dénomination alphanumérique ou leur date de création ou de modification, par exemple en ajoutant des préfixes numérotés.

Bien sûr insérer un dossier entre deux autres peut entraîner de petites jongleries avec les préfixes. Mais il est alors possible d’imaginer des scripts pour normaliser les préfixes, si l’application ne propose pas cette fonction.

### [Scrivener](https://www.literatureandlatte.com/scrivener/overview)

Se prétend l’outil ultime pour les écrivains, mais sans doute pas les écrivains comme moi, qui cherchent un outil minimaliste. J’ai installé la dernière version, mais j’ai toujours l’impression d’être sous Word, en plus usine à gaz. Rien que l’interface avec la barre de mise en forme me rebute (les éditeurs Markdown ont démontré qu’elle n’avait plus aucune utilité, sinon d’être source de distraction). Format de fichier propriétaire. Aucune possibilité d’éditer avec d’autres outils. Autant dire que ce n’est pas un outil pour moi, même si j’ai écrit avec *Le Geste qui sauve* il y a dix ans.

### [iA Writer](https://ia.net/writer)

Ce concurrent affiché d’Ulysses, lui aussi propriétaire, travaille sur une hiérarchie Markdown transparente. Il est toutefois mal adapté à la gestion de gros projets. L’exportation d’une hiérarchie me semble impossible depuis l'application. Si son interface de saisie est minimaliste, elle ne prévisualise ni les images, ni les liens hypertextes, ni les citations. On est vraiment très proche d’un éditeur de code, trop proche à mon goût.

Pas de réorganisation manuelle des fichiers.

Pour mon usage, je ne vois guère l’intérêt du produit par rapport à [Visual Studio Code](https://code.visualstudio.com/) que j’utilise pour coder (et qui est déjà un excellent éditeur de texte Markdown).

### [Zettlr](https://www.zettlr.com/)

Depuis son lancement en 2017, et alors clairement inspiré d’Ulysses, [cet éditeur open source](https://github.com/Zettlr) a beaucoup progressé, en même temps que la communauté universitaire l’a adopté.

Fidèle à la pure arborescence de fichiers, il est impossible de réorganiser manuellement les dossiers, en revanche, on peut déclarer des dossiers comme projet, à l’intérieur desquels on peut définir des classements propres (par nom de fichier, titre de document, chronologie…). Cette approche me paraît un bon compromis. Une fois un dossier déclaré comme projet, on peut l’exporter en bloc, [même si j’ai initialement eu beaucoup de mal](https://docs.zettlr.com/en/advanced/projects/). Tout cela est totalement personnalisable, tout comme le look de l’interface.

Comme sur Ulysses, l’éditeur visualise les liens, les images, met en évidence les différentes balises Markdown. Ce serait parfait si le mode sans distraction n'affichait pas une désagréable barre de titre avec le nom du logiciel.

J’ai identifié quelques bugs. Quand j’importe ma structure de dossiers de 655 Mo, le Mac plante parce que Zettlr sature l’espace mémoire. Il est aussi incapable d’exporter des hiérarchies avec noms de fichiers accentués (c’est tout de même dommage).

### [Obsidian](https://obsidian.md/)

Tout comme Zettlr, Obsidian n'existerait pas sans Ulysse, duquel il s'inspire de toute évidence. Destiné initialement à la saisie de notes interconnectées par des tags et à l’écriture de courts documents, comme des billets de blog, cet éditeur dispose [de centaines de plugins](https://obsidian.md/plugins) (j’en ai découvert un pour [gérer les longs documents](https://github.com/kevboh/longform), mais à l’ergonomie douteuse). Tout est personnalisable de façon extensive. Je me dis que je pourrais coder les fonctions qui me manquent (je m'y suis déjà collé).

L’interface de saisie est superbe. J'ai tout de suite découvert un template Solarized ainsi qu'[un plugin mode sans distraction impeccable](https://github.com/cmoskvitin/obsidian-prozen).

Aucune fonction d’exportation des projets en natifs, mais il me sera pas difficile d’en créer une, [au minimum à l’aide d’un script python connecté à Pandoc](https://github.com/SebastianMC/obsidian-custom-sort). J’ai découvert des plugins pour [réorganiser les dossiers manuellement](https://github.com/SebastianMC/obsidian-custom-sort), [effectuer des statistiques](https://github.com/isaaclyman/novel-word-count-obsidian), [associer des icônes aux dossiers et fichiers](https://github.com/FlorianWoelki/obsidian-iconize).

Obsidian dispose d'une version mobile, ce qui est pour moi important, car j’aime me relire sur mon téléphone. Cerise sur le gâteau : il est gratuit pour un usage individuel.

Quand j'ai corrigé cet article, j'ai tiqué au moment de lancer Antidote et de constater qu'il n'était pas interfacé avec Obsidian, mais j'ai vite découvert [un plugin qui fait le boulot](obsidian://show-plugin?id=antidote-grammar-checker-integration) (avec la version web d'Antidote).

### Le choix

Pour moi, il serait tentant d'adopter Zettlr, très proche d'Ulysses, mais je n'apprécie pas son mode sans distraction, ses quelques bugs, et mon côté geek me laisse penser que je pourrais tirer le maximum d'Obsidian qui, bien que non open source, reste ouvert grâce à son API. Mais pourquoi me limiter. Puisque je travaillerai désormais sur une architecture, ouverte, je peux aussi utiliser Zettlr concurremment, ou même iA Writer. Il me reste maintenant à organiser mes fichiers et mettre en place un workflow, nécessairement différent de celui utilisé avec Ulysses depuis dix ans. J'espère qu'il sera plus robuste (je le documenterai au plus vite).

*PS : Merci à [Agnès Maillard](https://framapiaf.org/@Monolecte) qui [m'a poussé à me pencher sur Obsidian](https://mamot.fr/deck/@tcrouzet/111642148084053553), plus en profondeur que je l'avais fait lorsque j'avais découvert l'application peu après son lancement en 2021. Choisir Obsidian, c'est choisir les dernières innovations, que des produits comme Ulysses n'ont pas réussi à intégrer. C'est aussi choisir une communauté très active, qui ne cesse produire des extensions.*

Tags: Cuisine, une