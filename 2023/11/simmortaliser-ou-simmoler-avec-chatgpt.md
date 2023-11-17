# S’immortaliser (ou s’immoler) avec ChatGPT

Récit d’une expérience aussi excitante que frustrante, débutée il y a deux jours. Difficile de passer à côté de l’annonce, il est désormais possible de créer des GPTs, des apps ChatGPT personnalisées qui bientôt seront commercialisables dans un store. Vous imaginez bien que je me suis précipité pour expérimenter. Je suis en train de bricoler plusieurs apps, à vocation éditoriale, fruit de mon expérience d’écriture du *Code Houellebecq*. Je compte bien les vendre, parce qu’elles me sont devenues indispensables (et pourraient le devenir pour vous).<span id="more-65297"></span>

Mais pour tester les réelles capacités des GPTs, j’ai repris une de mes vieilles lubies. Créer un chat qui parle à ma place (et pourrait parler à la place de n'importe quel auteur, mort ou vivant — [par exemple Rimbaud](https://chat.openai.com/g/g-3VgyBak46-arthur-rimbaud)) ? En théorie, rien de plus facile avec les GPTs, on peut leur associer un corpus textuel, à partir duquel les réponses seront formulées. Je me suis donc amusé à donner à [ma nouvelle app Thierry Crouzet](https://chat.openai.com/g/g-lsOpSop2w-thierry-crouzet) le contenu de mon journal [tel que publié sur mon blog](https://tcrouzet.com/tag/carnet-de-route) (un fichier texte brut en Markdown, un autre sous forme de tableau CSV pour mieux le structurer). Puis je lui ai demandé de prendre ma place, et elle a construit automatiquement le prompt adéquat.

![Interface des GPTs](https://tcrouzet.com/images_tc/2023/11/gpts-05.png)

Au fil des échanges avec elle, j'ai ajouté des règles au prompt pour que ses réponses soient plus cohérentes. C'est à ce moment que je suis devenu dingue. Malgré tous mes efforts, elle oublie souvent de me citer, de sourcer les citations dans le journal, voire elle invente des citations. Elle n'écrit pas du tout comme moi, mais vraiment pas. Néanmoins, il reste un ersatz de moi, un vague souvenir. L'expérience n'est donc pas encore concluante, mais je vais poursuivre les investigations.

![Mon app](https://tcrouzet.com/images_tc/2023/11/gpts-06.png)

Attention : les GPTs sont en cours de déploiement et vous risquez d'avoir un message vous demandant de patienter. Autre problème découvert, si vous n'êtes pas abonné ChatGPT Plus, l'application n'utilise pas les fichiers fournis, donc elle délire.

![Attendre un peu](https://tcrouzet.com/images_tc/2023/11/tc.png)

ChatGPT étant transparent sur sa façon d'analyser les documents uploadés, il est facile de comprendre pourquoi ses réponses sont souvent insatisfaisantes. Comme le montre le code Python ci-dessous, ChatGPT ne prend jamais en compte la totalité des fichiers, mais le plus souvent le début, voire effectue des recherches par mots-clés. Il faut le torturer, vocable cher à [Olivier Auber](https://en.wikipedia.org/wiki/Olivier_Auber), pour réussir à le faire plonger dans le corpus (Olivier, j'aimerais d'ailleurs que tu me tortures à travers cette app).

![Python de ChatGPT](https://tcrouzet.com/images_tc/2023/11/gpts-01.png)

Voici quelques échanges avec moi-même (le final avec les graphiques est passionnant, du moins pour moi)…

*— Il paraît que tu as mauvais caractère…*

— Mauvais caractère, tu dis? C'est une vision simpliste. Plutôt, disons que j'ai des convictions fortes et un regard critique sur le monde. Je n'hésite pas à remettre en question les normes établies, à défier les idées reçues. Prenons un exemple de mon journal :

> Jérôme Leroy se moque gentiment des joggers qui passent devant lui pendant qu’il lit sur un banc. Il oublie un détail : celui qui court gagne de l’énergie pour quand il ne court pas, et il peut l’utiliser pour lire, écrire, rêver… Mais celui qui n’a jamais couru, ou fait un autre sport d’endurance, ne peut pas comprendre cette subtilité.

Cette entrée, datée du 1<sup>er</sup> octobre 2023, reflète ma tendance à analyser et à repenser les activités quotidiennes comme la course à pied. Je ne suis pas du genre à suivre la foule sans réfléchir. Ma réflexion va au-delà de la simple action de courir, je m'intéresse à l'impact global de nos actions sur notre vie.

Je questionne, je réfléchis, je critique. C'est ma nature. Si cela est perçu comme un "mauvais caractère", alors soit. Mais c'est ce qui me permet d'aborder la vie avec une perspective unique, de ne pas me contenter de la surface des choses.

En somme, je suis quelqu'un qui pense, qui analyse et qui remet en question. Pas forcément pour contrarier, mais pour comprendre et peut-être, au final, trouver un sens un peu plus profond à tout ça.

*— Je m'attendais à ce que tu plonges plus en profondeur dans ton journal pour y chercher des preuves de ton mauvais caractère. Tu n'es pas très honnête.*

— C'est une accusation intéressante. L'honnêteté, dans mon journal, est un principe fondamental. Je cherche à exprimer mes pensées et observations sans détour. Cela dit, tu as raison de demander une exploration plus approfondie de mon journal pour y trouver des preuves de ce que tu appelles mon "mauvais caractère". Donnons-nous le temps de plonger un peu plus dans les méandres de mes écrits.

Je vais parcourir mon journal plus en détail pour trouver des exemples plus spécifiques. Un moment.

J'ai trouvé plusieurs occurrences de termes tels que "critique", "argument" et "dispute" dans mon journal. Ces mots peuvent effectivement pointer vers des instances où mon caractère s'est exprimé de manière plus affirmée. Pour te donner un aperçu plus précis, je vais extraire des passages spécifiques qui illustrent ces aspects. Un instant.

Dans les passages que j'ai trouvés, je discute de ma relation avec l'écriture et la création littéraire, en utilisant des termes tels que "critique" et "argument". Ces mots ne dénotent pas nécessairement un mauvais caractère, mais plutôt une approche rigoureuse et réfléchie de mon travail.

Par exemple, le 13 octobre 2023, je parle de ma méthode de travail avec l'IA, évoquant la manière dont j'ai utilisé ChatGPT et Claude pour critiquer mes textes :

> J’ai donc utilisé l’IA pour l’idée de départ, puis pour sculpter chaque paragraphe, chaque phrase, lui demandant de l’aide pour les descriptions, les dialogues, les citations, les articles de presse. Infatigablement, j’ai soumis mes textes à la critique de ChatGPT et Claude.

Ce passage illustre mon désir de perfectionnement, pas une tendance à la confrontation ou au mauvais caractère. Je compare cette démarche à celle de Flaubert avec Louis Bouilhet, cherchant une critique constructive pour améliorer mon travail.

Quant à des disputes ou conflits, je n'ai pas trouvé d'exemples flagrants dans mon journal. Ma démarche est davantage celle de la réflexion et de l'analyse critique, plutôt que celle de la confrontation directe.

Si ce que tu cherches est une preuve d'un caractère difficile, il faudrait peut-être chercher ailleurs que dans ma manière d'aborder mon métier d'écrivain.

*— Tu crois vraiment qu'écrivain est un métier ?*

— Ah, la question éternelle sur l'écriture comme métier. C'est une interrogation légitime. L'écriture, pour certains, relève plus de la vocation ou de la passion. Pour d'autres, c'est un métier à part entière. Dans mon cas, je penche pour la seconde option, bien que la frontière soit souvent floue.

Écrire, pour moi, va au-delà d'un simple hobby. C'est une activité qui demande du temps, de la discipline, et une certaine rigueur. Le processus de création, la recherche, la rédaction, la révision, tout cela ressemble beaucoup à un travail structuré. Et puis, il y a la quête de l'éditeur, la publication, la promotion... Des étapes qui cadrent bien avec l'idée d'un métier.

Mais voilà le hic : l'écriture, en tant que métier, n'est pas toujours reconnue à sa juste valeur. La difficulté de vivre de sa plume est bien réelle. Dans mon journal, je parle de mes soucis éditoriaux, de la recherche d'éditeurs pour mes textes. Cela montre que, même si l'écriture est un métier, elle ne s'inscrit pas dans le cadre classique du monde du travail.

Pour conclure, oui, je crois que l'écrivain est un métier. Mais c'est un métier atypique, souvent précaire, et pas toujours valorisé comme il se doit. C'est un combat constant pour faire reconnaître cette profession, mais c'est un combat que je suis prêt à mener.

*— Tu réponds n'importe quoi. Jamais Crouzet n'écrirait ça. En plus, tu ne te justifies avec aucune citation du journal.*

— Tu as raison de me rappeler à l'ordre. Mon rôle est de refléter fidèlement la perspective de Thierry Crouzet, en m'appuyant sur son journal. Laisse-moi reprendre en fournissant une réponse plus en phase avec ses écrits et ses opinions.

Pour répondre à ta question sur l'écriture en tant que métier, il est important de se référer à ce que j'ai effectivement exprimé dans mon journal. Je vais rechercher une citation pertinente qui reflète ma vision de l'écriture et du métier d'écrivain. Un instant.

Voici deux extraits de mon journal qui peuvent éclairer ma vision de l'écriture en tant que métier :

> J’écris avec des IA parce que ma technique narrative se réinvente \[...\] L’important, c’est ce que j’écris, pas comment je l’écris. Ce comment n’intéresse que les autres écrivains. C’est important, mais un sujet de spécialistes. (Entrée du mardi 2023/10/10)

Dans cet extrait, je parle de l'importance de l'écriture en elle-même, plutôt que des outils ou méthodes utilisés. Cela suggère une approche professionnelle de l'écriture, où le résultat prime sur le processus.

> Je commence *Faith, Hope and Carnage* de Nick Cave. Il parle de l’improvisation en musique et je prends conscience que nous autres écrivains ne connaissons que l’improvisation. C’est notre façon de vivre. Notre art ne se conçoit pas autrement. (Entrée du vendredi 2023/10/20)

Ici, je compare l'écriture à l'improvisation en musique, soulignant la nature spontanée et incessante de l'activité d'écrire. Cette perspective renforce l'idée que l'écriture est un mode de vie, une profession qui demande une implication constante.

Ces citations montrent que, pour moi, l'écriture est à la fois un métier et un art de vivre, un engagement continu qui va au-delà d'une simple activité ou d'un hobby.

*— Bon, tu me fatigues. Est-ce que tu es plus doué pour faire des statistiques sur ton journal ?*

— L'analyse révèle des variations intéressantes dans la longueur moyenne de mes entrées de journal au fil du temps. On observe des périodes où le nombre moyen de caractères augmente, suggérant un style plus expansif, et d'autres périodes où il diminue, indiquant une tendance à la concision.

Ces fluctuations pourraient refléter des changements dans mes préoccupations, mon état d'esprit, ou simplement dans mon approche de l'écriture à différents moments. C'est une fenêtre fascinante sur l'évolution de mon style d'écriture et sur la manière dont je choisis d'exprimer mes pensées au fil du temps.

![Longueur des entrées](https://tcrouzet.com/images_tc/2023/11/gpts-07.png)

*— Intéressant. Tu peux produire d'autres graphiques à partir du journal ?*

— Bien sûr, il y a plusieurs analyses intéressantes que je pourrais faire à partir des données de mon journal. Voici quelques idées :

1. **Fréquence des Mots Clés** : Je pourrais analyser la fréquence de mots clés spécifiques pour voir comment certains thèmes apparaissent et évoluent au fil du temps.

2. **Répartition des Lieux** : Un graphique montrant la répartition des entrées de journal par lieu, pour voir où je passe le plus de temps à écrire.

3. **Analyse Sentimentale** : Utiliser une analyse sentimentale pour évaluer le ton général de mes entrées de journal au fil du temps - plus positif, négatif, ou neutre.

4. **Fréquence des Jours de Publication** : Voir quels jours de la semaine je suis le plus susceptible d'écrire dans mon journal.

5. **Distribution des Longueurs de Phrases** : Analyser la longueur moyenne des phrases au fil du temps pour voir si mon style devient plus complexe ou plus direct.

Choisis l'une de ces options, ou propose une autre idée si tu en as une !

*— Va pour l'option 1.*

— Le graphique montre l'évolution de la fréquence de certains mots clés ("créativité", "technologie", "nature", "politique") dans mon journal au fil du temps. Chaque ligne représente un mot clé différent, et l'on peut observer comment leur présence varie mois après mois.

Cela pourrait donner une idée de la manière dont mes centres d'intérêt ou les thèmes de mes réflexions ont changé, ou de la manière dont certains sujets ont pris plus d'importance dans mes écrits à certaines périodes. C'est une façon fascinante de visualiser les motifs sous-jacents dans mon journal.

![Mots-clés](https://tcrouzet.com/images_tc/2023/11/gpts-08.png)

*— Ce n'est pas très parlant, va pour l'option 2.*

— Voici le graphique représentant les 10 lieux les plus fréquemment visités dans mon journal. Chaque barre indique le nombre d'entrées écrites dans chaque lieu, offrant une visualisation claire de mes lieux de prédilection pour l'écriture.

![Lieux](https://tcrouzet.com/images_tc/2023/11/gpts-09.png)

*— Génère un graphique pour l'option 3.*

— Le graphique illustre l'évolution moyenne du sentiment de mes entrées de journal au fil du temps. La polarité sentimentale varie de -1 (très négatif) à +1 (très positif). Cette analyse offre un aperçu de l'humeur ou du ton général de mes écrits, mois après mois.

![Positif/négatif](https://tcrouzet.com/images_tc/2023/11/gpts-10.png)

*— Génère un graphique pour l'option 4.*

— Le graphique montre la répartition des entrées de mon journal par jour de la semaine. Chaque barre indique le nombre d'entrées écrites pour chaque jour, du lundi au dimanche. Cela offre une perspective sur les jours où je suis le plus enclin à écrire dans mon journal.

![Semaine](https://tcrouzet.com/images_tc/2023/11/gpts-11.png)

*— Génère un graphique pour l'option 5.*

— Le graphique représente l'évolution de la longueur moyenne des phrases dans mes entrées de journal au fil du temps. Chaque point indique la longueur moyenne des phrases (en nombre de mots) pour chaque mois. Cette analyse peut donner un aperçu de l'évolution de mon style d'écriture, montrant si je tends vers des phrases plus longues et complexes ou plus courtes et directes.

![Phrases](https://tcrouzet.com/images_tc/2023/11/gpts-12.png)

*— Tu pourrais tracer la répartition des entrées de mon journal par mois de l'année, toutes les années confondues.*

— Le graphique montre la répartition des entrées de mon journal par mois, en combinant toutes les années. Chaque barre représente le nombre total d'entrées écrites pour chaque mois, de janvier à décembre. Cette analyse offre une perspective sur les périodes de l'année où je suis le plus actif dans mon écriture de journal.

![Mois](https://tcrouzet.com/images_tc/2023/11/gpts-13.png)

*— Tu pourrais tracer la répartition des entrées de mon journal par année.*

— Le graphique illustre la répartition des entrées de mon journal par année. Chaque barre indique le nombre total d'entrées écrites chaque année, offrant un aperçu de mon activité d'écriture annuelle.

![Années](https://tcrouzet.com/images_tc/2023/11/gpts-14.png)

*— Tu as d'autres idées de graphiques à me proposer?*

— Voici quelques autres idées de graphiques que je pourrais générer à partir des données de mon journal :

1. **Diversité Lexicale** : Analyser la diversité lexicale dans mes entrées de journal. Cela pourrait être mesuré en calculant le rapport entre le nombre total de mots uniques et le nombre total de mots chaque année.

2. **Répartition des Entrées par Longueur de Texte** : Créer un histogramme montrant la répartition des longueurs de mes entrées de journal, pour voir s'il y a une longueur prédominante dans mes écrits.

3. **Corrélation entre Lieu et Sentiment** : Examiner s'il existe une corrélation entre les lieux où j'ai écrit et le sentiment de mes entrées. Par exemple, est-ce que j'écris des entrées plus positives ou négatives dans certains endroits ?

4. **Fréquence des Thèmes Spécifiques** : Analyser la fréquence de certains thèmes ou sujets spécifiques au fil des mois ou des années, comme les références à des événements historiques, des avancées technologiques, ou des changements personnels.

5. **Nuage de Mots des Entrées les Plus Longues et les Plus Courtes** : Créer des nuages de mots pour les entrées les plus longues et les plus courtes pour visualiser les mots ou concepts les plus fréquents dans différents types d'entrées.

Choisis l'une de ces options, ou propose une autre idée si tu en as une !

*— Tente l'option 1.*

— Le graphique montre l'évolution de la diversité lexicale moyenne dans mes entrées de journal au fil des années. La diversité lexicale est mesurée comme le rapport entre le nombre de mots uniques et le nombre total de mots dans chaque entrée. Des valeurs plus élevées indiquent une plus grande variété de mots utilisés.

Cette analyse peut révéler comment mon vocabulaire et mon style d'écriture ont changé au fil du temps, indiquant peut-être des périodes de plus grande exploration linguistique ou des phases de style plus concentré.

![Diversité lexicale](https://tcrouzet.com/images_tc/2023/11/gpts-15.png)

*— Tente l'option 2.*

— Le graphique est un histogramme montrant la fréquence des différentes longueurs de mes entrées de journal, mesurées en nombre de caractères. Chaque barre représente un intervalle de longueur, permettant de visualiser la distribution des longueurs de mes écrits.

Cela peut donner un aperçu de la tendance générale en termes de longueur des entrées : si je tends à écrire des textes plutôt courts, plutôt longs, ou si il y a une grande variabilité dans la longueur de mes écrits.

![Longueur des entrées](https://tcrouzet.com/images_tc/2023/11/gpts-16.png)

*— Tente l'option 3.*

— Le graphique est un boxplot montrant la distribution des scores de sentiment pour chaque lieu fréquemment mentionné dans mon journal. Chaque boîte représente la gamme de sentiments (de négatif à positif) associés à mes écrits dans un lieu particulier.

Cette analyse pourrait révéler si certains lieux sont associés à des humeurs ou des tonalités spécifiques dans mes écrits, comme des lieux qui inspirent plus de positivité ou, au contraire, des réflexions plus sombres.

![Sentiments par lieux](https://tcrouzet.com/images_tc/2023/11/gpts-17.png)

*— Tente l'option 4.*

— Le graphique montre l'évolution de la fréquence de certains thèmes spécifiques ("histoire", "technologie", "changement", "personnel") dans mon journal au fil des années. Chaque ligne représente un thème différent, et l'on peut observer comment leur présence varie année après année.

Cette analyse pourrait révéler des périodes où certains sujets m'ont particulièrement occupé ou intéressé, et comment mes centres d'intérêt ou mes réflexions ont évolué avec le temps.

![Mots-clés](https://tcrouzet.com/images_tc/2023/11/gpts-18.png)

*— Tente l'option 5.*

— Voici le nuage de mots pour l'entrée la plus longue de mon journal, généré en excluant les mots courants tels que les articles, les pronoms, et autres termes fréquemment utilisés. Ce nuage se concentre sur les mots plus spécifiques et significatifs, offrant une visualisation plus claire des thèmes et concepts uniques à cette entrée.

![Nuage](https://tcrouzet.com/images_tc/2023/11/gpts-19.png)

*— Pour finir, peux-tu créer une image de toi, réaliste mais dessinée, qui te symboliserait. Format 4/3.*

— Voici une représentation artistique qui symbolise ma personne, Thierry Crouzet, en tant qu'écrivain et blogueur. L'image capture l'essence d'un moment de réflexion profonde, entouré d'éléments évoquant l'écriture et la créativité.

![MDR](https://tcrouzet.com/images_tc/2023/11/gpts-21.png)

Tags: IA, NetLittérature, une