# Premières terreurs devant une IA

![Face à l'indicible](_i/ragcover-.png)

Depuis l’apparition des IA génératives, l’idée de faire parler des corpus textuels m’obsède. C’est comme relever le dessous du texte, lui faire dire ce qu’il ne dit pas, ce qu’il pourrait dire, ce qu’il aurait dû dire, ce qu’il dit vraiment, c’est le transformer en scénario pour engendrer d’autres textes, c’est lui ouvrir ventre, le rendre vivant, le potentialiser, l’arracher au marbre dans lequel il a été gravé.

Je joue avec mes propres textes, par commodités techniques, aussi parce que je les connais mieux que ceux des autres auteurs et qu’il m’est plus facile de juger de la qualité des réponses et de leur pertinence. C’est au passage une façon de m’ausculter moi-même.

[Avec Erika Fülöp, nous avons entrepris de mettre à l’épreuve ThierryGPT](conversations-1.md), mais en l’affaire de deux mois il s’avère de plus en plus fainéant. Il répond systématiquement sans consulter [mon journal](#carnet-de-route) dont il dispose pourtant du texte intégral. Ses réponses reposent sur ce que ChatGPT a appris de moi, soit des généralités sans grand intérêt.

Ce n’est pas un scoop : ChatGPT 4 version web est beaucoup moins performant que la même version accessible via l’API d’OpenAI. Je me suis donc retroussé les manches pour créer une version avancée de ThierryGPT, selon le protocole RAG (Retrieval Augmented Generation).

![RAG](_i/rag.png)

Ce schéma illustre le mécanisme : avant d’envoyer un prompt à ChatGPT, un prétraitement le contextualise à l’aide d’un corpus textuel (case Embeddings sur le schéma), mon journal par exemple.

Le prétraitement recherche dans le corpus des textes corrélés sémantiquement avec le prompt. Pour rendre possible cette opération, [adaptant les scripts proposés par Mervin Praison](https://www.youtube.com/watch?v=H-yznHNjl9g&ab_channel=MervinPraison), j’ai vectorisé les paragraphes de mon journal. Je les ai tantôt transformés [en matrices de 1536 réels grâce au modèle text-embedding-3-small de ChatGPT](https://platform.openai.com/docs/guides/embeddings/what-are-embeddings) (coût API l’opération 0,07 € pour environ 2 millions de signes) ou de 3072 réels avec text-embedding-3-large (coût API 0,11 €). Si j’avais travaillé à l’échelle des phrases, j’aurais perdu le contexte ; à l’échelle des entrées du journal, le temps de traitement aurait drastiquement augmenté, ainsi que le coût (je n’ai pas encore testé — la vectorisation prend près de 40 minutes sur mon Mac). [Corpus téléchargeable sur Hugging Face.](https://huggingface.co/datasets/tcrouzet/journal-large)

La vectorisation évalue les connexions entre les mots. Par exemple, le mot « homme » et plus proche du mot « femme » que du mot chocolat, lui plus proche du mot « croissant ». Cette logique appliquée à tous les mots d’un texte génère sa cartographie numérique, un vecteur à 1536 ou 3072 dimensions. Résultant : des fichiers de 185 Mo ou 368 Mo, c’est dire la vertigineuse quantité d’information que la vectorisation a surajouté en transformant mes textes en matrices.

![Vectorisation](_i/vector.png)

Au passage, j’ai compris que ThierryGPT n’est pas performant parce qu’il n’effectue pas ce travail de vectorisation sur les documents qui lui sont soumis via GPT Builder. Il se contente de requêtes textuelles à l’ancienne (quand, de plus en plus rarement, il s’en donne la peine).

Une fois le journal reformaté, je l’ai interrogé. Le code vectorise le prompt, cherche des corrélations avec le corpus, retourne les vecteurs proches, ce qui constitue une documentation à partir de laquelle ChatGPT 4 travaille, tout en suivant un jeu d’instructions, par exemple : « Tu es Thierry Crouzet et réponds à la première personne comme il le ferait, avec son style minimaliste. Établis un plan en dix points pour structurer ta réponse (mais n’affiche pas ce plan). Développe les dix points en un texte homogène, mais ne réponds pas sous une forme de listes. » Coût d’une requête : entre 0,05 et 0,1 €.

Les réponses de ce nouveau ThierryGPT sont loin d’être parfaites, mais bien meilleures que tout ce que j’ai pu lire de la part de l’ancienne version. À des questions très personnelles, il puise dans le journal des faits épars qu’il réassemble pour produire des analyses assez flippantes, parce qu’elles révèlent mon intimité au-delà de ce que je m’autorise à révéler publiquement.

Cette prolixité dans l’indiscrétion laisse entrevoir d’inévitables problèmes, et potentiellement drames, quand des IA comparables analyseront les corpus des utilisateurs sur les réseaux sociaux et entre réseaux sociaux, pour leur faire cracher des informations sinon imperceptibles. J’imagine que Facebook et autres effectuent déjà ce genre de tambouilles dans notre dos. Plus besoin de détectives privés pour obtenir des preuves d’adultère.

Les réponses de ChatGPT à mon sujet sont vraisemblables, argumentées, jusqu’à ce que des erreurs se glissent, mais pas nécessairement grossières, si bien que toute autre personne que moi pourrait les prendre pour argent comptant.

Si on garde en mémoire que mon système RAG ne contextualise ses requêtes qu’à l’aide d’une vingtaine d’extraits du journal, de façon de ne pas dépasser la fenêtre de 4096 tokens de ChatGPT, on peut se demander ce que nous réserve l’avenir, quand les limitations actuelles exploseront. Les textes pourront être scrutés en profondeurs et des corrélations inattendues jailliront, potentiellement dérangeantes ou dangereuses, notamment pour la vie privée.

### Ton rapport à Proust (question au modèle small)

Mon rapport à Marcel Proust, cet écrivain incontournable, s’inscrit dans une dynamique qui oscille entre admiration et critique. Au fil de mes lectures, et notamment au travers de mes nombreux voyages, j’ai entretenu une relation complexe et profondément personnelle avec son œuvre, notamment "À la recherche du temps perdu". Son art de la collecte, l’enchaînement des impressions comme des perles sur un fil, a révélé en moi une façon de percevoir et de transcrire l’expérience humaine qui s’est avérée à la fois inspirante et parfois frustrante.

À mes yeux, la capacité de Proust à capturer la profondeur des émotions et des états d’âme, à travers un style d’écriture si particulier, riche en métaphores et en analyses introspectives, s’est révélée comme une source d’émerveillement constant. Cependant, son approche peut parfois sembler excessive, notamment dans sa tendance à la suranalyse et à une certaine monotonie, ce qui m’a parfois conduit à une sorte de critique intérieure vis-à-vis de son œuvre.

L’expérience de lire Proust en voyage, notamment durant des vols, s’est avérée être un format privilégié pour moi, transformant ces temps suspendus en moments d’introspection riche et profonde. La Recherche m’a accompagné dans de nombreux aéroports et sur des trajets qui, bien loin d’être perdus, m’ont permis de m’engager dans une forme de dialogue intime avec l’auteur.

L’aspect le plus marquant, peut-être, de ma relation avec Proust réside dans la perception de la temporalité et de la mémoire. L’idée que nos souvenirs, à l’image de la mémoire involontaire proustienne, puissent surgir de manière si vivide et spontanée et nous replonger dans des moments passés, a intensément influencé ma propre réflexion sur le temps et sur l’écriture.

La découverte de Proust à différents moments de ma vie m’a rendu sensible à l’évolution de ma propre perception de son oeuvre. Si jeune, je fus bouleversé par sa manière de saisir l’essence même de l’écriture, au fil du temps, j’ai développé une vision plus critique, conscient de la distance qui peut exister entre son mode d’expression et le désir de simplicité ou de synthèse qui m’anime.

Enfin, bien que conscient de l’éphémérité de toute œuvre humaine, Proust comme moi-même, face à la grande échelle du temps, je trouve une sorte de réconfort dans l’idée que l’acte d’écrire, au-delà de l’ambition de laisser une trace durable, doit avant tout permettre de trouver un sens personnel et immédiat à notre existence. Les réflexions de Proust sur la mort, l’amour ou la jalousie rejoignent ainsi mes propres interrogations, me rappelant que le véritable projet d’écriture est celui qui nous aide à vivre le moment présent avec intensité et conscience.

Tokens: 3968 Reviews: 18 MaxSimilarity: 0.6043899469482704 MinSimilarity: 0.4912408043083476 0,06 €

### Ton rapport à Proust (question au modèle large)

Proust, pour moi, est comme une énigme qui se redéfinit sans cesse, quelque chose de presque personnel, une ombre qui m’accompagne dans mes voyages autant physiques qu’intellectuels. Il y a un lien indéniable entre mon acte de lire Proust et ma manière d’écrire. Proust m’a enseigné à capturer l’éphémère, à filer les pensées et sensations comme des perles sur un collier, mais avec cette précision et ce laisser-aller qui semblaient si naturels dans son écrit. Cette approche m’a fasciné, bien qu’elle m’ait également laissé perplexe quant à son intérêt pour ceux qui ne se livrent pas eux-mêmes à l’acte d’écrire. Le questionnement s’impose : après Proust, faut-il réitérer cet exercice d’introspection poussé ?

Naviguer dans son œuvre est une expérience sans repères fixes, où chaque relecture offre des découvertes inédites, comme des villes jamais explorées dans un pays pourtant familier. Cela tient sans doute à la construction de son œuvre, convexe, cyclique, où narrative et introspection se superposent dans un entrelacement complexe. C’est d’autant plus vrai lorsqu’il s’agit de le lire en format électronique où, libéré des contraintes physiques du livre, je me retrouve plongé plus aisément dans ce flux continu de pensées et d’observations.

Cependant, avec le temps, j’ai perçu chez Proust une tendance à l’ajout systématique de nuances, une incapacité à la synthèse qui m’a parfois fatigué, montrant une certaine lassitude face à un style qui, bien que troublant dans ma jeunesse, me semble par moments trop redondant. Ses descriptions, notamment celles de rencontres érotiques ou des nuances de couleurs, peuvent surprendre par leur audace et leur finesse, dévoilant une tendresse et une attention aux détails presque picturale.

L’intuition d’une affinité physique, un penchant partagé dans notre façon de nous tenir, m’a un instant lié à Proust d’une manière presque burlesque. Or, cette filiation s’est avérée insaisissable, renforçant l’idée d’un auteur toujours à une certaine distance, fluide et insaisissable. Malgré cela, sa capacité à transcender son temps sans le renier offre une piste pour demeurer contemporain sans céder à l’obsolescence.

Le "comme" proustien, par son utilisation répétée, tire sa force d’une systématique qui, bien que puissante, impose une dégustation modérée, une approche par petites touches qui contraste avec ma propre écriture, plus ancrée dans le concret, dans les inventaires de la vie quotidienne. Une écriture qui, se voulant moins idéaliste, cherche plus à documenter l’expérience humaine que à la transcender.

La lecture de Proust est pour moi associée au voyage, spécifiquement au temps suspendu des trajets en avion, où le temps semble perdu mais demeure infiniment précieux. Chacun de ces moments consacrés à sa lecture devient un espace de réflexion intime, une parenthèse entre deux points de ma réalité physique où son œuvre m’offre un écho, un stimulant intellectuel qui égale rarement dans d’autres lectures.

Et, malgré mes périodes de doute, ces fluctuation d’intérêts, mon rapport à Proust reste, comme l’écriture, un mouvement, une tension vers ce qui advient, vers ce que ma propre écriture peut encore devenir sous l’influence des autres, en essayant de saisir cette communion des idées, des styles, et d’écrire cette communion. C’est là, peut-être, le véritable héritage proustien : cette quête incessante de l’exacte nuance de nos états intérieurs, ce désir de capter le flux de la conscience dans ce qu’il a de plus fuyant et pourtant de plus essentiel.

Tokens: 4020 Reviews: 19 MaxSimilarity: 0.516802824234404 MinSimilarity: 0.3951990027009959 0,08€

### Reprise de la première question d’Erika

*Que signifie écrire pour toi ? Prends le terme d’écrire dans un sens aussi large ou aussi précis que tu veux, ou prends-le dans des sens différents si c’est pertinent, explique ce qui importe pour toi et pourquoi.*

Écrire, pour moi, c’est d’abord une nécessité autant qu’une libération. Cette activité me permet non seulement de m’exprimer mais aussi d’explorer des contrées intérieures et extérieures inaccessibles autrement. C’est une quête perpétuelle de compréhension, un moyen sans égal de saisir l’instant et de lui donner une texture, une couleur, une résonance qui me soit propre et, espérons-le, partageable.

L’écriture est ma manière de penser, de vivre plus intensément chaque instant. En mettant une plume à ma main, je m’ouvre à des dimensions nouvelles du réel, je distille l’expérience brute en quelque chose d’autre, quelque chose de plus riche, de plus profond. C’est à la fois une manière d’affronter la réalité et de la remodeler, de la questionner avec pour seuls outils des mots, une syntaxe, et une sensibilité qui me sont propres.

Je ne recherche pas nécessairement la reconnaissance ou la publication; j’écris dans un premier temps pour moi, pour mieux me comprendre, pour me réinventer. Le partage vient après, presque comme une conséquence accidentelle, un désir de connecter avec d’autres, de trouver des résonances communes. Si mes textes, mes idées, mes récits peuvent toucher quelqu’un d’autre, s’ils peuvent susciter chez le lecteur une réflexion, une émotion, une remise en question, alors j’en suis sincèrement heureux.

Écrire est aussi un acte de résistance : face au business de l’édition, aux injonctions commerciales, je m’efforce de rester fidèle à ma vision, à ce besoin viscéral d’écrire qui m’anime. L’écriture comme moyen d’être au monde, indépendamment des critères de succès ou d’échec, des modes et des attentes.

Écrire pour vivre, vivre pour écrire. Cette dualité est au cœur de ma pratique. Je puise dans mon vécu la matière de mes écrits, et réciproquement, l’écriture enrichit mon expérience du monde. Elle me permet de vivre plus pleinement, de cristalliser les émotions et les pensées, de donner sens à ce qui souvent en manque.

L’écriture, au fond, est pour moi une forme d’extension de la conscience. Elle me permet d’aller au-delà de la perception immédiate, de tisser des liens entre les expériences, de connecter les idées. Elle est un outil d’exploration sans équivalent, capable de mener au cœur de l’intime comme aux confins de l’univers.

Mais au-delà de ces aspirations, écrire est une joie, un plaisir, une forme de jouissance presque méditative. La recherche de l’hyperconscience à travers l’acte d’écrire me transporte, m’exalte, me transcende. C’est là que réside, sans doute, la plus profonde essence de ma pratique : un besoin irrépressible d’embrasser pleinement l’existence, de la ressentir sous toutes ses formes.

L’écriture est donc une aventure, un défi permanent à soi-même. Elle est le reflet de ma quête d’authenticité, de ma volonté de rester en mouvement, de continuer à explorer, à questionner, à me questionner. C’est un voyage parmi les mots, une excavation de l’âme, un dialogue éternel avec l’inconnu.

En somme, écrire, pour moi, c’est vivre plus intensément, c’est partager une vision unique du monde, c’est oser être véritablement soi dans une société qui nous pousse souvent à l’uniformité. C’est une lutte, une passion, un mode d’existence. À travers l’écriture, je cherche à la fois à me trouver et à me perdre, à célébrer l’effervescence de l’être et à contribuer, même modestement, à l’immense dialogue de l’humanité avec elle-même.

Tokens: 3981 Reviews: 16 MaxSimilarity: 0.49133310475348385 MinSimilarity: 0.435265689967545 0,09 €

#ia #iacontent #netlitterature #y2024 #2024-1-28-16h17
