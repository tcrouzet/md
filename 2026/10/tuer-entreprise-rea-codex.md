---
metatitle: "Au risque de tuer une entreprise"
metadescription: "REA et Codex reproduisent en quatre jours trente ans de R&D d’Antidote. Je me sens coupable."
---

# Au risque de tuer une entreprise

Samedi 17 octobre, pendant que des cagoulés saccagent et pillent nos rues, je ne fais pas mieux en m’attaquant à coups de pierres et de cocktails Molotov à une PME qui commercialise l’un de mes outils les plus indispensables.

Je me dis : « Je ne devrais pas. » En même temps, ce que je fais, d’autres comme [Brandon Thomas](https://www.reddit.com/r/SaaS/comments/1wwnhbt/ive_created_open_source_100_rust_cleanroom/) le font à grande échelle : [c’est-à-dire réécrire de A à Z un logiciel commercial pour le distribuer sous licence libre](https://tcrouzet.com/2026/10/16/finition-vibe-coding-antidote-obsidian/), ce qui revient métaphoriquement à détruire la devanture d’un commerce puis à le piller.

![17 octobre 2026, Guillaume Saligot/AFP](_i/manif.webp)

### Jeudi 15

Depuis le mois d’août, je développe [Unshiter](https://github.com/tcrouzet/unshiter), une app d’analyse statistique, dans l’espoir désormais déçu de séparer les textes humains des artificiels – [le côté IA de la prose de Thélyson Orélien ne crève pas les yeux](https://tcrouzet.com/2026/09/23/plagiat-IA/).

Je n’ai réussi qu’à cartographier les auteurs et à produire des prompts qui codent leurs styles et permettent aux IA d’écrire à la manière de. J’en suis là quand je me dis que certains de mes calculs pourraient avoir des applications concrètes lors de l’écriture, par exemple pour surligner les répétitions ou les lieux communs.

[Antidote](https://www.antidote.info/fr/), le correcteur orthographique de [Druide](https://www.druide.com/fr/), m’aide depuis trente ans à traquer les synonymes, mais de façon incomplète, peu paramétrable. Par ailleurs, c’est une application extérieure, mal intégrée à [Obsidian](https://obsidian.md/), mon éditeur de texte, ce qui rend l’expérience peu fluide. Je me couche avec l’idée de coder [Finition](https://github.com/tcrouzet/finition), un plugin Obsidian, pour m’aider à finaliser mes textes, sans avoir besoin de lancer systématiquement Antidote. Je n’ai à ce stade que des intentions louables.

### Vendredi 16

Je me mets au travail, très tôt le matin, beaucoup trop tôt, après une nuit beaucoup trop courte. En fin d’après-midi, [j’explique ma démarche](https://tcrouzet.com/2026/10/16/finition-vibe-coding-antidote-obsidian/) et diffuse une [première version de Finition sur GitHub](https://github.com/tcrouzet/finition) : surlignage des répétitions, stéréotypes, monotonies, tricolons, charnières…

Pourquoi m’arrêter en si bon chemin ? Quelques heures plus tard, j’intègre à Finition le correcteur orthographique [Grammalecte](https://github.com/Pofilo/grammalecte) et la possibilité d’interroger Claude pour effectuer des corrections et des réécritures professionnelles, comme le ferait un correcteur humain, ce dont est incapable Antidote, malgré son modèle IA. Depuis trois ans, j’utilise un script Python de correction IA que j’ai simplement injecté dans Finition. Je vais gagner un temps fou. Rien que de très louable.

### Samedi 17

Après un échange très matinal avec un des premiers utilisateurs du plugin, j’ajoute le choix entre OpenAI et Anthropic pour les fonctions IA, avec plusieurs modèles pour chacun, ainsi qu’un gestionnaire de prompts de correction, chaque prompt étant connecté à un modèle IA différent.

J’en profite pour ajouter la recherche de synonymes par IA – synonymes de mots mais aussi d’expressions, voire de phrases ou de paragraphes, le tout en tenant compte du contexte, une chose impossible pour Antidote. Jusque-là, je faisais à la main, copiais-collais dans un chatbot, puis réintégrais les corrections. Désormais, il me suffit de cliquer sans sortir de l’éditeur.

Plus j’avance, plus je me sens mal. Druide est une PME québécoise fondée en 1993, avec une centaine de collaborateurs, qui a fabriqué pour nous le meilleur correcteur du marché. Ce n’est pas un GAFAM, un monstre, mais des francophones qui ont trouvé un modèle économique dans la résistance linguistique.

Depuis des années, je suis bêta-testeur d’Antidote, j’échange avec les développeurs, et j’ai l’impression de les trahir. Je rassemble sous la bannière Finition des outils jusqu’alors dispersés pour rendre leur usage transparent au cœur de mon éditeur de texte. Un rêve devient réalité. Dans un coin de ma tête, je me dis : « Exit Antidote, bye-bye mon vieux partenaire d’écriture. » Je remercie mon assistant fidèle et le licencie.

En début d’après-midi, mon fils aîné, en cinquième année d’école d’ingénieurs, spécialité IA, m’a conseillé de jeter un œil à [REA](https://github.com/morluto/rea), une solution de rétro-ingénierie à interfacer avec un agent de codage et un décompilateur comme [Ghidra](https://github.com/nationalsecurityagency/ghidra). REA permet d’analyser un site, une app, un logiciel pour en comprendre les mécanismes.

Jusqu’à aujourd’hui, les codes des logiciels propriétaires étaient diffusés en binaire, c’est-à-dire traduits en code machine après compilation. Il était toujours possible de les décompiler pour revenir au code source, mais c’était un travail long, laborieux, coûteux. « Avec REA, ça devient un jeu d’enfant, me dit mon fils. Tout le monde ne parle que de ça. Des trucs quasi impossibles ou qui nécessitaient des mois, voire des années, ne prennent plus que dix minutes. » REA aurait le pouvoir d’ouvrir le ventre des web apps comme des logiciels installés sur nos ordinateurs et téléphones. Tout ce qui était invisible pour des béotiens devient en grande partie visible. Des idées moins louables me traversent. Si je me transformais en espion ?

### Dimanche 18

À mon réveil, je craque et demande à REA, via Codex, d’analyser Antidote installé sur ma machine. En une dizaine de minutes, il m’écrit un rapport conséquent, expliquant la logique neuronale sur laquelle s’appuie Antidote. À mon retour de ma sortie dominicale à vélo, je demande à Codex/REA/Ghidra de coder un correcteur neuronal. Il retrouve les poids du modèle Antidote, 40 Mo, et son dictionnaire de plus d’un million de flexions.

Dès la première version de la correction neuronale, les résultats égalent ceux de Grammalecte, puis vite les dépassent, sans jamais atteindre ceux d’Antidote. Codex ne cesse de me répéter : « REA reste une source d’indices, pas une preuve d’équivalence. » En gros : il ne s’agit pas d’un plagiat pur et simple, mais d’une réinvention, comme le ferait un historien à partir de quelques documents.

Je croise le dictionnaire d’Antidote avec des dictionnaires open source, allant jusqu’à fouiller Wikipédia pour les noms propres. J’utilise le moteur [spaCy](https://fr.wikipedia.org/wiki/SpaCy) pour préciser le rôle de chaque mot. Avec [Morphalou](https://repository.ortolang.fr/api/content/morphalou/2/LISEZ_MOI.html), je remonte à leur lemme : toutes les flexions d’un mot rassemblées sous une même forme de base, par exemple « étais, étaient, est, es… » sous être.

Des heures plus tard, mon correcteur est beaucoup plus puissant que Grammalecte, même s’il est plus lent et moins précis que celui d’Antidote, qui tourne en temps réel grâce à un code compilé, alors que Finition tourne en TypeScript, le langage exigé pour les plugins [Obsidian](https://obsidian.md/).

En fin de journée, je me sens coupable. Je renonce à publier une nouvelle version de Finition, qui intègre en son cœur le modèle neuronal d’Antidote, construit par eux depuis des années.

### Lundi 19

Cinq heures du matin, je m’éveille avec les idées plus claires. Pourquoi ne pas proposer aux utilisateurs de créer leur propre modèle ? C’est un énorme travail : créer un dataset de dizaines de milliers de phrases fautives avec leur version correcte, puis entraîner un modèle sur une machine musclée, voire sur les serveurs de [Hugging Face](https://huggingface.co). En attendant, j’utilise [CamemBERT](https://huggingface.co/docs/transformers/model_doc/camembert), un modèle libre, dont la dernière itération date de 2025 : résultats moins bons qu’avec le modèle Antidote chargé dans Finition, mais satisfaisants, surtout quand, derrière, j’appelle à la rescousse la surpuissante correction IA.

Je pousse REA plus loin, il me remonte les dictionnaires d’Antidote : synonymes, antonymes, rimes… Je recherche en ligne des ressources libres pour les remplacer et fabrique un format standardisé pour les intégrer à Finition à la demande. Cette base est extensible.

Suis-je un voleur ? Est-ce que vous me volez quand vous lisez des passages de mes livres ? Non. REA n’a fait que lire le code d’Antidote. Si je transposais exactement ce code, je serais un plagiaire, surtout si je piquais le modèle de 40 Mo et les dictionnaires pour les publier, mais je ne les utilise qu’à titre de benchmark.

Il ne faudrait pas oublier comment cette histoire a commencé : par le pillage de tous les contenus accessibles publiquement, les miens compris. Ce pillage a rendu les IA possibles, qui permettent à leur tour le pillage des logiciels privatifs.

Mais pourquoi pas prolonger l’analogie avec la lecture. Si vous lisez un de mes livres et qu’il vous en inspire un autre, je ne vous accuserais pas de me plagier, je serais plutôt heureux, comme si vous me citiez, d’ailleurs. Je vais plus loin : si quelqu’un donne à un LLM mes livres pour en faire un livre meilleur, qui rendrait les miens inutiles, je le féliciterais, parce que nous n’avançons que grâce à ceux qui nous précèdent. Mais je suis un privilégié, je peux me permettre d’être généreux, alors que Druide a cent salaires à payer en fin de mois. Ma position d’expérimentateur est très confortable.

Il m’est facile de dire que je m’inspire d’Antidote, lui ajoutant des fonctions qu’il ne propose pas, en supprimant celles qui ne m’intéressent pas, le tout dans une interface différente qui tourne dans un cadre différent, puisque Finition est un plugin [Obsidian](https://obsidian.md/), secondé par des dictionnaires et des données disponibles sous licence libre. Il m’est facile de me réfugier [derrière la réglementation](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:62010CJ0406) : « Ni la fonctionnalité d’un programme d’ordinateur ni le langage de programmation et le format de fichiers de données utilisés dans le cadre d’un programme d’ordinateur pour exploiter certaines de ses fonctions ne constituent une forme d’expression de ce programme et ne sont, à ce titre, protégés par le droit d’auteur sur les programmes d’ordinateur au sens de cette directive. »

Mais je me sens mal parce que les fondations d’une industrie tremblent, et, plus que d’une industrie, du monde.

Quel avenir pour les éditeurs de logiciels ? Les entrepreneurs du domaine privatif feront tout pour conserver leurs privilèges : des systèmes de cryptage seront logés au cœur des processeurs, les logiciels tourneront à distance sur des serveurs pour se cacher, des armées d’avocats attaqueront REA et les petits malins qui l’utiliseront, mais la transparence me paraît la seule voie soutenable. Un changement de modèle économique s’impose, pas demain, mais là, tout de suite. En attendant, je crains que beaucoup d’employés se retrouvent au chômage et que nombre d’éditeurs de logiciels mettent la clé sous la porte.

Pour en revenir aux évènements du 17 octobre, je trouve moins grave de réécrire des logiciels jusque-là privatifs que de saccager l’espace public. Libérer du code, c’est militer pour l’extension du domaine public, plutôt que sa réduction sous le joug d’un État policier. Je suis favorable au libre pour les logiciels, les graines, les vaccins, la culture… Mon geste est avant tout politique.

Je me demande si les IA n’auront pas des conséquences sociétales inattendues, comme nous pousser à changer de modèle économique, à adopter le revenu de base, une des seules solutions viables pour accompagner la généralisation du libre. Je ne m’enflamme pas : j’ai cru au début des années 2000 qu’internet aurait un effet positif, et ce n’est pas le cas. Les méfaits technologiques dépassent souvent leurs bienfaits. Internet, en plus de nous asservir avec les réseaux sociaux aux mains [d’une caste de technofascistes](https://tcrouzet.com/books/livre-contre-attaque/), a permis de connecter nos connaissances pour que les LLM les avalent. Je reste méfiant, prudent, mais mes expériences me montrent un monde qui change à une vitesse époustouflante, et auquel les saccages du 17 octobre répondent d’une manière sourde.

Il y a de quoi avoir peur. Les prix des hydrocarbures ne sont qu’un symptôme anodin. Ma petite expérience n’est-elle pas une forme de révolte positive, une révolte saine, libératrice, constructive, tournée vers l’avenir, alors que les anciens mots d’ordre, inchangés depuis des décennies, rêvent d’un grand soir rétrograde qui n’arrivera jamais ? Et si nous commencions à poser les briques d’un avenir souhaitable ? Il est temps de tourner la page.

Mais je n’en ai pas terminé avec Finition. Je lui ajoute une fonction statistique qui reprend les mesures d’[Unshiter](https://github.com/tcrouzet/unshiter) et génère une note bourrée de données. Je peux ensuite uploader cette note dans Unshiter pour comparer le texte à ceux déjà en ligne sur [l’app web](https://tcrouzet.github.io/unshiter/). Et quand je vois que le correcteur neuronal laisse passer des fautes, je peux le signaler à Codex qui tente de trouver des solutions. J’arrive même à faire mieux qu’Antidote sur certains points, en évitant beaucoup de faux positifs.

Cette affaire me grise, mais il est temps que je publie mon article pour me retirer de la pression. Derrière mon écran, alors que j’écris ces dernières lignes, Codex tourne encore en silence, des datacenters dégagent de la chaleur, des hommes et des femmes ont peur pour leur avenir.

#netculture #obsidian #ia #y2026 #2026-10-19-20h00
