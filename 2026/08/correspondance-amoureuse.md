---
metatitle: Une correspondance amoureuse avortée
metadescription: "La correspondance comme terrain d'essai pour le vibe-writing : jusqu'où une IA peut-elle tenir un personnage de fiction ?"
---

# Une correspondance amoureuse avortée

J’ai reçu un mail troublant. J’ai manqué le détruire comme je le fais souvent avec les messages suspects, avant d’y répondre.

---

Thierry,

Je m’excuse, mais je vais te tutoyer. Après t’avoir lu, j’ai l’impression de te connaître depuis longtemps. Dans ton carnet de juillet, tu écris que tu réponds aux lettres en style télégraphique, que tu n’as jamais correspondu avec personne et que la relation épistolaire reste pour toi un fantasme. Est-ce un défi pour tes lectrices ?

Tu ne me connais pas. Une amie à toi m’a confié le manuscrit de ton *Expérience humaine*. Je l’ai lu sans te demander si tu étais d’accord. Puis j’ai plongé dans tes textes publiés en ligne depuis la mort d’Isa.

Tu l’appelles la femme du futur. Je ne lui ressemble pas, je suis plus ordinaire. Plus je te lisais, plus je l’admirais, et plus elle m’agaçait. Les mortes irréprochables sont écrasantes.

Je t’en voulais de l’avoir si bien aimée, et je lui en voulais d’avoir été une femme qu’on pouvait aimer. C’est odieux : j’étais jalouse d’Isa et des femmes comme elle.

Puis je suis arrivée aux textes sur _Clair de femme_, le roman de Gary. La mourante s’appelle Yannick. Isa avait souligné : « Cette sœur inconnue, je veux que tu lui dises combien j’ai besoin d’elle. J’aurais aimé la rencontrer, lui sourire, l’embrasser. » Moi, une Yannick, tu imagines l’effet.

La coïncidence m’a quand même atteinte. Pendant quelques minutes, j’ai eu l’impression absurde que ton manuscrit se tournait vers moi. Je me suis surprise à vouloir être cette sœur inconnue, ou l’une des femmes après Isa. Je ne savais plus si je voulais te connaître ou seulement savoir ce que ça ferait d’être aimée comme elle.

Dans tes carnets de janvier et février 1999, Isa te répond qu’une de tes lettres est la plus belle qu’elle ait reçue depuis longtemps. Alors pourquoi tu dis que tu n’as jamais correspondu ? Ces lettres-là, tu ne les comptes pas ?

YQ

---

Yannick,

Je me suis demandé comment prononcer tes initiales : « i grec-cul » en français, pas très glorieux, ou « why-kyu » en anglais. J’imagine que tes amies t’appellent Whykyu ou un machin dans le genre. Pourquoi pas Yuki. C’était le nom de ma chienne quand j’étais gamin, un setter irlandais complètement dingue.

Je fais un effort pour ne pas te balancer une réponse lapidaire. Tu m’as posé une question. Je n’ai jamais envoyé de lettres manuscrites parce que mon écriture est illisible, sans doute pour cacher mes trop nombreuses fautes d’orthographe. Quand j’ai rencontré Isa en 1999, elle était aussi connectée que moi et je lui ai envoyé de longs mails. Puis j’ai vécu avec elle et n’ai plus eu besoin de lui écrire ; depuis, personne d’autre ne m’a arraché des lettres d’amour.

Je ne sais pas quoi faire de tes mots. Aucune femme n’a le droit de jalouser Isa. Elle ne jalousait personne. Si tu désires prendre sa place, ça n’a pas d’intérêt, et ça ne m’incite pas à poursuivre l’échange. Isa n’est pas remplaçable.

Je suis fatigué de tourner en rond. Je cherche à faire des trucs nouveaux ou délaissés depuis des années : aller au ciné, visiter des musées, partir en voyage, des petites choses rendues exceptionnelles par la maladie et la pesanteur du quotidien.

Tu crois que tu peux me surprendre ? M’ouvrir les yeux ? Me bouleverser ?

Je ne suis pas curieux de toi. Je ne suis curieux de personne. Je te parle d’expos, de cinés, de voyages, sans être sûr de vouloir tout ça.

Avant de rencontrer Isa, à 35 ans, je me sentais vieux. Dans trente ans, je me souviendrai de ce temps de mes 63 ans en me disant que j’étais encore jeune. Une femme m’accompagnera peut-être durant ces trente prochaines années. Elle me redonnera une forme de jeunesse et ouvrira un troisième volet dans ma vie.

J’ai le devoir d’écrire ce nouveau chapitre pour honorer Isa, nos enfants, et poursuivre notre exploration de l’expérience humaine. Je resterai en deuil. Ce n’est pas un état passager, une maladie curable, mais une tempête aux semonces erratiques, à accepter, avant d’explorer des chemins vierges.

Si j’étais capable de te décrire dans l’idéal, tu devrais différer en tout de cet idéal, seule condition pour me surprendre. J’attends un mystère. Isa était un mystère. Je n’anticipais jamais ses paroles. J’ai peur que tu sois prévisible.

Thierry

---

Il s’agit bien sûr d’une expérience. [Depuis que je vibe-code](https://tcrouzet.com/2026/07/09/stupefaction-devant-IA/), je gagne en créativité et la programmation se rapproche de plus en plus de l’écriture. Alors j’aimerais vibe-writer une histoire de SF : piloter une équipe de ghost writers, rebondir sur leurs propositions, les corriger, les reprendre, injecter mes idées, ne rien retenir. L’idée n’est pas d’aller plus vite dans l’écriture, mais de produire une histoire que je serais sinon incapable d’écrire. Je me suis dit : pourquoi ne pas commencer par vibe-coder une application de vibe-writing ?

J’ai travaillé sur un cahier des charges tout en essayant de le mettre en œuvre. Plus j’ai avancé, plus j’ai constaté que ce qui fonctionnait pour le code coinçait pour l’écriture de textes longs, ce qui explique pourquoi aucune application de vibe-writing ne s’est encore imposée en littérature, même si Sudowrite, Novelcrafter, NovelAI… génèrent une quantité industrielle de romances et de pulp sur Amazon.

### Le code est modulaire, le roman cumulatif

Une fonction reçoit des paramètres, produit des sorties. Une fois opérationnelle, on la traite comme une boîte noire – plus besoin de penser à ce qu’elle a dans le ventre. Un code accumule des fonctions indépendantes. Le contexte est la liste des fonctions, avec leurs entrées, leurs sorties, leurs appels réciproques. Le contexte est compressible, relativement petit même pour un code volumineux.

Dans un roman, rien n’est isolable : une information est souvent déterminante des chapitres plus tard. Le contexte pertinent, c’est le roman lui-même. On ne peut pas utiliser le résumé d’un chapitre. On ne peut pas dire « le personnage entre là et sort là ». Tout ce qui arrive compte pour la suite. Le contexte romanesque n’est pas compressible – sauf dans des romans simplistes.

### Le code est vérifiable, la prose non

Quand une IA écrit une fonction, elle peut la tester. Ça marche ou ne marche pas, auquel cas recommencer. Mais comment tester un passage narratif ? Une IA ne peut pas se mettre à la place d’un lecteur humain. Tester un texte ne se résume pas à vérifier un comportement attendu, mais à vivre l’expérience de la lecture. Chez OpenAI, Jason Wei appelle ça l’[asymétrie de vérification](https://www.jasonwei.net/blog/asymmetry-of-verification-and-verifiers-law) : la facilité à entraîner une IA sur une tâche est proportionnelle à la facilité de vérifier le résultat. Tout ce qui se mesure finira par être résolu. La lecture ne se mesure pas, d’autant que deux lecteurs réagissent différemment.

### Le coût de la relecture dépasse le coût de l’écriture

Quand on vibe-code, on n’est pas obligé de lire le code s’il passe les tests. C’est même le principe du vibe selon [Andrej Karpathy l’inventeur de l’expression vibe-coding](https://simonwillison.net/2025/Mar/19/vibe-coding/) : se laisser entraîner sans vérifier, sans relire.

En revanche, quand des IA génèrent un texte, il faut tout lire, et chaque demande de modification impose de tout relire encore, et comme les IA ne comprennent souvent rien à nos demandes, les relectures deviennent épuisantes et exaspérantes. Au lieu de faire gagner du temps, les IA en font perdre, d’autant plus qu’elles sont bavardes.

Une app de vibe-coding écrit pour d’autres machines (les utilisateurs ne testent que l’interface) ; une app de vibe-writing écrit pour des lecteurs. 

### Le style du code peut laisser à désirer, pas le style de la prose

Un code bavard ne pose aucun problème quand on n’y jette même pas un coup d’œil distrait ; une prose bavarde est insupportable. Les IA expliquent, reformulent, enfoncent les clous. On a beau leur demander d’être minimalistes, elles ne maîtrisent pas l’ellipse, notre arme littéraire de prédilection. Nous savons ce qui est nécessaire pour communiquer, les IA non, alors elles disent tout, c’est épuisant. Elles remplissent, et quand on commence à couper, il ne reste plus rien. Parce qu’elles n’ont rien à dire.

### L’absence d’ancrage dans le réel

Une IA ne sait pas vérifier la cohérence d’une scène. Elle produit du texte probable, sans créer des scènes probables. Elle génère souvent des détails sensoriels hors contexte. Lors d’un test, l’IA m’a dit qu’un personnage comptait les pattes d’une mouche posée sur une vitre à un mètre de distance. [Les modèles n’étant pas encore physiques comme le souhaite Yann Le Cun](https://openreview.net/pdf?id=BZ5a1r-kVsf), aucun prompt ne peut pallier ce genre de défaut.

### Un seul niveau de cohérence automatisable

- **Les faits vérifiables** (qui sait quoi, qui est où, qui est mort, quel âge a un personnage) : une IA peut gérer ça plus ou moins avec une bible. C’est très mathématique et voilà ce que font les apps d’écriture.
- **Le développement narratif** reste pour l’instant du ressort exclusif de l’auteur. Les IA sont plus fortes pour reformuler que pour proposer du neuf. Elles peuvent démontrer des théorèmes en math, ou même décrire un lieu, ou écrire un dialogue… à condition qu’on leur donne la direction (démmontre ça, décrit ça…).
- **La tenue d’un personnage** n’est ni un fait (qui est où) ni une dynamique d’intrigue (ce qui se passe), c’est une manière singulière de penser, de parler, d’agir…
- **La tenue d’un univers** implique de penser le monde de l’action sur les plans géographiques, politiques, philosophiques… Ça n’a rien de mathématique et donc n’est pas automatisable.

Nous autres humains nous immergeons dans les situations et les simulons en nous, c’est ainsi que nous validons la cohérence narrative. Les IA n’ont pas encore cette capacité d’incarnation faute d’un modèle du monde.

### Les IA continuent, nous brisons la continuité

Les IA cherchent la suite logique syntaxiquement, ce qui est très puissant avec du code ou des maths. Nous fonctionnons souvent par association d’idées, effectuons des sauts narratifs, de brusques demi-tours. Un roman est tout sauf prévisible, sinon la lecture serait emmerdante (les romans à succès me paraissent très prévisibles, comme s’ils évitaient de mettre en danger le lecteur). Au mieux, l’IA provoque en nous de nouvelles idées, c’est pas si mal.

### Un espoir du côté des formes littéraires modulaires ?

Puisque la prise en compte du contexte romanesque est difficile, pourquoi ne pas vibe-writer un roman comme [*One Minute*](https://tcrouzet.com/books/une-minute/), où chacun des chapitres est indépendant. J’ai tenté. L’expérience a vite tourné au fiasco : si les personnages changent à chaque chapitre, le monde reste le même. C’est encore trop demander aux IA.

Alors j’ai essayé de travailler un texte plus simple : une correspondance, d’où les deux lettres ci-dessus. Sur [Dust](https://app.dust.tt/), j’ai donné aux IA mes textes publiés depuis la mort d’Isa et leur ai demandé de m’écrire une lettre, en adoptant le profil d’une lectrice patiemment construit avec elles (âge, milieu social, style d’écriture…). Très vite, je me suis rendu compte que les IA étaient incapables de prendre en compte le profil qu’elles avaient elles-mêmes dessiné.

Après plusieurs tentatives et la coupe d’innombrables platitudes, poncifs, incohérences, j’ai fini par obtenir une première lettre. Elle a fait tilter [Pangram](https://tcrouzet.com/2026/08/06/are-you-human/), mais au moins la ligne narrative ne venait pas de moi, et c’est ce que j’attendais. Me mettre dans la situation d’une véritable correspondance.

J’ai retravaillé l’écriture, c’est-à-dire coupé et simplifié pour aboutir au texte publié en début d’article, qui lui apparaît 100 % humain pour Pangram. Alors j’ai répondu. Et l’IA m’a répondu. Voici quelques extraits non retouchés des diverses réponses…

>Sur Isa, je t’ai heurté. Je comprends pourquoi. J’ai écrit que je voulais être l’une des femmes après elle. C’était brutal et probablement idiot. Je n’ai jamais pensé qu’une place s’était libérée. Mais tu ne peux pas décréter qu’aucune femme n’a le droit d’être jalouse d’Isa parce qu’Isa n’était jalouse de personne. Ses qualités ne sont pas une discipline imposée aux suivantes. Tu peux trouver ma jalousie laide. Tu peux ne pas vouloir d’elle dans ta vie. Me demander de n’éprouver que ce qu’Isa aurait éprouvé serait une façon très exacte de me demander de la remplacer.

>Mardi 18 août à quinze heures, je serai au musée Fabre, devant _Le Bord de mer à Palavas_ de Courbet. Tu veux retourner dans les musées. Je veux voir si tu es aussi peu curieux que tu l’écris.

>J’ai eu beaucoup d’amants. J’ai souvent choisi ceux dont la vie les empêchait de me demander grand-chose. Quand l’un d’eux devenait disponible, je trouvais sa présence envahissante. Les bons jours, j’appelle encore cela ma liberté.

>Ce que j’ai envié en lisant ton manuscrit n’est pas la place d’Isa. C’est le temps que vous avez eu. Elle a connu les hommes que tu es devenu. Tu as connu les femmes qu’elle est devenue. Je n’ai laissé personne changer assez longtemps près de moi.

>À cinquante-cinq ans, je sais encore attirer un homme. Je ne sais pas rester quand je cesse de maîtriser ce qu’il pense de moi. Ton mail m’a retiré cette maîtrise. Je te réponds quand même.

Des réponses déconnectées, froides, changeantes, sans cohérence interne, sans chair, sans réel lien avec ma lettre. Un rendez-vous ? Comme si Yannick pouvait vraiment m’attendre dans un musée. Et ses histoires d’amants comme pour me dire toi aussi tu pourrais devenir mon amant. Je suis disponible, baisable. C’était pathétique.

J’aurais pu souffler des idées, mais ce n’était pas le but. Je voulais que ma réponse suffise à provoquer une surprise, et rien d’intéressant n’a surgi. Pourquoi ? Parce que ma réponse ajoutait des paramètres et des contraintes à la lettre d’ouverture. L’équation à résoudre devenait plus complexe et l’IA ne l’a pas résolue.

Conclusion : les IA sont encore incapables de tenir des personnages, de porter leur voix, de simuler des comportements humains. Dans leurs réponses, elles prolongent ce qui a été dit, souvent en reformulant, ou en ajoutant des clichés, et ma correspondante est vite devenue une tapineuse des plus grossières.

Je ne vois toujours pas à quoi pourrait ressembler une appli de vibe-writing – ça n’a peut-être aucun sens puisque le vibe implique de ne pas relire. Si les idées doivent venir de moi, si je dois passer des plombes à relire la prose indigente des IA, je ne vois pas en quoi ma créativité serait stimulée.

Des auteurs parviennent à utiliser les IA pour leurs bouquins, [comme H. M. Wolfe avec *Daggermouth*](https://www.goodreads.com/book/show/247928235-daggermouth), à 60 % IA d’après Pangram. J’y suis arrivé avec [*Le code Houellebecq*](https://tcrouzet.com/books/le-code-houellebecq/) parce que je mâchais le travail et micromanageait la machine, mais j’ai envie d’une pratique plus fluide : écrire un roman d’aventures, un texte que j’aimerais plus lire qu’écrire. Me retrouver à la tête d’une équipe de ghost writers diligents, obéissants, rapides et compétents. Me manque l’idée formelle compatible avec les possibilités techniques d’aujourd’hui. Un recueil de débuts de roman ?

*PS : texte écrit à Balaruc mais posté à Maillardou, la terre de cœur d’Isa.*

![Maillardou](_i/2026-08-14-164502.webp)

#netlitterature #ia #y2026 #2026-8-14-17h00
