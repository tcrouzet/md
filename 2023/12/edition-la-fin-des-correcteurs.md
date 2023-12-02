# Édition : la fin des correcteurs ?

Je préfère écrire vite et réécrire des dizaines de fois plutôt que de pondre des phrases définitives (ce dont je suis incapable). J’adore travailler avec des correcteurs : ils m'offrent une nouvelle perspective sur mes textes. Ils me rappellent que je peux assembler ces puzzles de manières infinies. Depuis des années, mon processus d’écriture était réglé comme une horloge et tout est en train de changer avec ChatGPT.

Avant :

1. J’écrivais [avec Ulysses](https://tcrouzet.com/2015/04/02/revolutionner-lecriture-ou-comment-ecrire-avec-ulysses/).

2. Je corrigeais avec Antidote ([utilisant avec jouissance ses outils statistiques](https://tcrouzet.com/2016/03/26/tu-ecris-comme-qui/)).

3. Je collais le texte dans Gmail qui glanait encore quelques fautes (il y a de l’IA dans Gmail).

4. Pour les textes longs, je répétais ce processus plusieurs fois. Pour les billets de blog, un seul cycle me suffisait, sans perdre de temps sur Antidote.

Mais depuis l’arrivée de ChatGPT, j’ai ajouté une cinquième étape. Mon prompt [Multilingual Proofreader](https://chat.openai.com/g/g-mvRchQNzO-multilingual-proofreader-target-your-audience) ou [sa version optimisée pour le français](https://chat.openai.com/g/g-Va8wZpG1s-correcteur-stylistique-et-orthographique) me donnent parfois l’impression de travailler avec un professionnel de l’édition. Ils trouvent des fautes tout en suggérant les mots justes, les expressions appropriées, supprimant des relatives, simplifiant la syntaxe… J’aime leurs propositions, même si je ne les prends pas toujours en compte. Parfois elles m'inspirent, ce qui compense les nombreuses fois où elles déraillent. C’est un travail long, mais stimulant, même si je me garde d’obéir aveuglément, sous peine de me perdre dans des recommandations normatives.

![Multilingual Proofreader](https://tcrouzet.com/images_tc/2023/12/proof01.png)

J’ai développé mon prompt progressivement tout en écrivant *Le Code Houellebecq* (pas encore soumis aux éditeurs). Désormais, [grâce aux GPTs](https://gpt.tcrouzet.com/), je peux corriger un texte très vite.

1. J’ouvre [Multilingual Proofreader](https://chat.openai.com/g/g-mvRchQNzO-multilingual-proofreader-target-your-audience) ou [Correcteur stylistique et orthographique](https://chat.openai.com/g/g-Va8wZpG1s-correcteur-stylistique-et-orthographique) (abonnement à ChatGPT Plus nécessaire).

2. J’y copie/colle mon texte (mieux vaut ne pas dépasser les 4 000 caractères, sinon la qualité de la correction se dégrade).

3. Je lance la correction et la réponse s’affiche progressivement dans un bloc de code.

4. Je copie le résultat (bouton en haut du bloc de code).

5. Je vais coller le texte source et le texte corrigé dans [un comparateur de textes que j’ai adapté à mes besoins](https://diff.tcrouzet.com/) (c’est du JavaScript, aucune donnée transmise). Pour faciliter cette opération, j’utilise [Paste](https://pasteapp.io/), un presse-papier intelligent.

6. J’affiche le résultat.

7. Je répète l’opération de proche en proche pour les textes longs. Régulièrement, je crée de nouvelles sessions de chat, car la qualité des corrections se dégrade quand les textes s’accumulent.

8. Parfois, je réinjecte le texte corrigé dans le correcteur et généralement il est tout aussi prolixe, proposant de se corriger lui-même. Le risque est de partir en boucle et de ne jamais arrêter.

![Bloc de code](https://tcrouzet.com/images_tc/2023/12/proof02.png)

![La correction](https://tcrouzet.com/images_tc/2023/12/proof04.png)

Par défaut, le correcteur édite et corrige dans un style journalistique. Mais il est possible de lui demander d’être plus littéraire, plus scientifique, plus romantique ou je ne sais quoi. Il adapte alors ses corrections stylistiques (j’ai créé une commande /style pour le guider — j'ai beaucoup joué avec /style Michel Houellebecq).

![/style Michel Houellebecq](https://tcrouzet.com/images_tc/2023/12/proof05.png)

La puissance du système est bluffante. ChatGPT a été lancé il y a seulement un an et ses corrections s’approchent déjà d’un niveau professionnel. Le métier de correcteur est probablement condamné à brève échéance, comme bien d’autres. C’est tout l’objet de mon *Code Houellebecq*, où un éditeur décide de se passer des auteurs. On n’est plus dans la science-fiction.

Pour survivre, les correcteurs n’auront plus d’autre échappatoire que de devenir créatifs, ne plus se focaliser sur les détails syntaxiques, mais travailler sur la structure des œuvres. Il restera de la place pour des éditeurs, mais plus pour les petites mains invisibles qui travaillent dans la soute à charbon de l’édition (d’où les auteurs ne sont pas prêts de sortir, à moins que ChatGPT les en chasse aussi).

Pour ma part, je trouve passionnant le dialogue avec mon [Multilingual Proofreader](https://chat.openai.com/g/g-mvRchQNzO-multilingual-proofreader-target-your-audience). Il m’aide à prendre du recul sur mes textes, m’aide à les envisager sous de nouvelles perspectives, m’aide à voir les lourdeurs flagrantes. C’est un peu comme si je m’étais payé pour 20 €/mois un esclave éditorial (qui en prime m’aide pour une multitude d’autres tâches). [J’ai entendu Thomas Porcher sur France Inter douter de la réalité de la révolution de l’IA générative](https://www.radiofrance.fr/franceinter/podcasts/le-debat-economique/le-debat-eco-du-vendredi-01-decembre-2023-1895306). J'ai les mains dans le cambouis depuis un an et je suis tous les jours stupéfait.

![Ma collection de GPTs](https://tcrouzet.com/images_tc/2023/12/proof06.png)

### Chronique d’une vie au temps des IA

Mais pour goûter cette révolution, il ne suffit pas de vagues prompts. Il faut devenir prompt engineer, apprendre un nouvel art à mi-chemin entre écriture et programmation. Inutile d’écouter les cassandres qui n’ont pas osé se former.

Je ne suis pas arrivé à mon [Multilingual Proofreader](https://chat.openai.com/g/g-mvRchQNzO-multilingual-proofreader-target-your-audience) sans frôler la crise de nerfs. Pour commencer, malgré tous mes efforts, je n’ai jamais réussi à ce que ChatGPT affiche le texte corrigé avec les corrections visibles. Impossible d’effectuer une simple comparaison algorithmique entre deux versions d’un texte. Les affichages étaient toujours incomplets, les textes parfois barrés d’autres fois non, les textes modifiés en gras, parfois non. J’avais l’impression d’être face à un gamin souffrant de [TDAH](https://www.inserm.fr/c-est-quoi/minute-dattention-cest-quoi-le-tdah), brillant et distrait.

Il y a quelques jours, j’ai pensé trouver la solution. Dans les GPTs, on peut créer de longs prompts, mais aussi les connecter aux API respectant [la norme OpenAPI](https://www.openapis.org/) (interface de programmation ouverte). Par exemple, on peut interroger un service météo ou un service boursier pour récupérer des données et demander à ChatGPT de les interpréter. Les possibilités sont infinies, proprement vertigineuses.

Je me suis donc bravement lancé dans la création d’un OpenAPI. On lui envoie un texte original et un texte corrigé, il renvoie un texte en matérialisant les différences. N'ayant jamais créé d’API, j’ai passé trois jours à me battre avec ChatGPT pour comprendre sa logique. Mais là encore, l’IA avait le plus grand mal à transcrire correctement le texte formaté en Markdown ou en HTML renvoyé par l’API. J’ai fini par me résoudre à renvoyer des liens vers des fichiers PDF, Markdown et Docx. C’était parfait, même si le temps de traitement était vraiment long (et pas à cause de mon API).

Je croyais tenir ma solution. Sauf que quand j’ai saisi un premier texte de 3 000 caractères, ChatGPT s’est pris les pieds dans le tapis, accusant mon API de déconner. J’ai découvert non sans peine que l’erreur n’était pas de mon côté. ChatGPT ne peut générer des requêtes API que de 2 000 signes, ce qui ne pèse pas lourd, sachant qu’il faut envoyer deux versions du texte. Il était donc impossible de corriger avec ma logique des textes de plus de 1 000 signes (et même moins, car il faut tenir compte des signes nécessaires pour le protocole).

J’ai donc rangé mon API et retenu la solution présentée au début de cet article. Elle ne me convient pas totalement, puisqu’elle recourt à un service tiers, mais elle fonctionne plus rapidement et plus efficacement. Dans quelques semaines, à coup sûr, je devrai tout repenser. Peut-être que je pourrais lancer des requêtes API plus imposantes. Ou peut-être que je me résoudrai à créer une application de correction. Je sais déjà faire, le problème elle ne pourrait pas être gratuite (dans ce cas OpenAI facture les transactions). Mais pourquoi pas. Il me faudrait faire payer les corrections en fonction de la taille du texte. Si je ne le fais pas, d’autres s'en chargeront. Il sera possible de demander la correction de la totalité d’un manuscrit à une appli de ce genre.

Ces expériences me prennent du temps, beaucoup de temps, mais c’est le prix de l’apprentissage. Il me faut souvent coder, c’est loin d’être toujours intuitif, mais ChatGPT apporte son aide, même si son TDAH est plus qu’irritant. J’ai l’impression que l’époque d’avant est déjà très loin derrière moi.

*PS1 : Quand un texte contient des allusions litigieuses selon ChatGPT, il les découvre tout en les affichant et sans crier gare efface tout. Mais quand il affiche dans un bloc de code, il est possible de copier au cours du processus, ce qui permet de le récupérer avant la censure. Cette astuce m’a été précieuse pour certains passages du* Code Houellebecq*.*

*PS2 : J’ai généré l’illustration de ce texte avec mon [Post Illustrator](https://chat.openai.com/g/g-klBz7W0Gn-post-illustrator-maximize-ctr).*

Tags: édition, IA, une