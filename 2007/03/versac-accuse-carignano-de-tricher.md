# Versac accuse Carignano de tricher

Parfois, surtout comme après la lecture du [billet de Versac](http://vanb.typepad.com/versac/2007/03/technorati_faci.html), je me demande pourquoi j’ai créé le petit robot de [bonVote](http://www.bonvote.com) (37 000 visiteurs unique rien pour la journée de hier tout de même). L’été dernier, pour essayer d’y voir clair dans la net politique (je dis bien la net politique car la blog politique n’est que la partie visible de cet univers), je voulais me servir de cet outil lors de la rédaction du [cinquième pouvoir](http://blog.tcrouzet.com/le-cinquieme-pouvoir/).

En fait, je m’en suis peu servi, justement parce que la net politique n'est pas aussi simple à résumer. Il ne suffit pas de connaître dix blogueurs à la mode pour faire le tour du phénomène. Il faut au contraire s’intéresser à chacun des nœuds du réseau, s’intéresser à la logique virale. Ce que j’ai essayé de faire, notamment dans mon chapitre sur la bataille de Borodino.

[Le classement bonVote](http://www.bonvote.com/topvote.php) est avant tout un petit gadget amusant, qui flatte l’égo de certains et en frustre d’autres, notamment quand des blogs se dépassent. Depuis des mois, je me dis que je vais améliorer la mécanique, ce que je repousse de jour en jour faute de temps.

Mon robot souffre des faiblesses de technorati. J’aurais aimé utiliser d’autres services d’analyse de la blogosphère mais technorati est le seul à proposer un API, donc le seul qui peut être intégré dans un outil comme le mien (si vous connaissez d’autres API je les intègre tout de suite).

Maintenant est-ce que [Carignano](http://carignano.blog.20minutes.fr/) ou [Page2007](http://www.page2007.com/) trichent comme le suppose Versac ? Est-ce tricher que vouloir être mieux référencé ? Cette question doit être étendue à bien d’autres sites, notamment à ceux des partis qui emploient les mêmes techniques. Sur le web, merci Google, les liens entrants sont le meilleur moyen de récupérer du trafic. « Plus tu as de liens, plus tu as de visiteurs. » Tous les sites professionnels consacrent des fortunes pour récupérer des liens.

On ne peut pas accuser les blogueurs de jouer au même jeu. Sur le web, le référencement est un outil marketing comme un autre. Si on veut attirer des visiteurs, c’est d’ailleurs la meilleure méthode.

Le problème avec tetchnorati c’est qu’il comptabilise bêtement le nombre de liens sans tenir compte de la qualité de ces liens (le nombre de liens pointant vers eux). C’est juste un indice comptable. Doper son ranking technorati avec des liens bidons (suffit de créer des blogs sur wordpress qui pointent vers son blog) ne sert pas à grand-chose (sauf bidonner technorati).

Du côté Google, ces liens n’ont aucun poids, ils n’influencent pas le trafic. Voilà peut-être pourquoi le site de Carignano a un trafic très faible ce qui n’est pas le cas de Page2007, qui reçoit près de 7 000 visiteurs uniques quotidiennement.

Mais Versac se plante un peu dans son analyse (malgré son superbe travail de fond), en tout cas concernant le classement technorati, donc celui de bonVote. Ce n’est pas le nombre de liens qui compte mais le nombre de sites qui pointent vers un site. C’est un peu différent. Si un même site pointe 10 000 fois vers un autre, technorati n’augmente son ranking que de 1.

Plusieurs personnes m’ont déjà signalé que Carignano trichait. Je suis un peu remonté dans l’historique technorati il y a déjà trois ou quatre mois, je n’ai pas trouvé de blogs bidons, sinon comme Versac quelques link farms. Mais pour gagner des centaines de positions, Carigano aurait dû s’enregistrer dans des centaines de sites de ce genre. Je ne les ai pas vus (si quelqu'un veut s'amuser à un inventaire, moi pas).

![](http://blog.tcrouzet.comhttps://tcrouzet.com/images_tc/200703versac1.gif) 

La véritable anomalie chez Carignano comme chez Page2007, c’est que Google voit vers chez eux moins de liens que technorati. Logiquement Google est beaucoup plus exhaustif (il voit les liens dans les blogs comme ailleurs). Pour Page2007, j’explique l’anomalie simplement : il utilise les tags microformat de technorati.

Pour Carigano, je ne vois pas la raison de ce décalage. Pire, Google voit moins de liens que technorati ne voit de sites référents (c’est totalement illogique). Je ne vois deux explications.

1. Est-ce parce que Carignano est référencé par des sites blacklistés chez Google ?

2. Est-ce que technorati oublie de supprimer les liens des sites qui disparaissent (ce que fait google) ?

En tout cas, cette faiblesse de la visibilité google de Carignano justifie la faiblesse du trafic de son blog. Je n'ai aucune preuve que Carignano triche.

Maintenant Versac pose une bonne question. Pour mesurer l’influence, comptabiliser les liens entrants ne suffit pas. Les outils comme [Blogpulse](http://www.blogpulse.com) ou [Google blogsearch](http://blogsearch.google.com) seraient en théorie plus judicieux mais je ne les trouve pas très fiables.

En fait, je le vois par rapport à mon blog car ils passent souvent à côté de la plupart des citations (ils confondent même souvent les liens internes avec les liens externes… du coup plus le blog est vieux, plus il a de billets, plus il a de liens).

À mon sens, pour évaluer l’influence, il faudrait :

1. Comptabiliser le nombre de liens externes dans l’absolu avec Google ou Yahoo ([avec la fonction link](http://www.google.fr/search?hl=fr&q=link%3Ahttp%3A%2F%2Fblog.tcrouzet.com&btnG=Rechercher&meta=)).

2. Pour chacun de ces liens, éliminer les blogrolls et autres liens en dur et scruter les nouveau billets publiés pour comptabiliser les citations.

3. Établir un baromètres qui donne en temps réel l’influence d’un blog.

À ma connaissance aucun outil ne fait ça (ou Blogpulse mais très mal). Du coup, les liens vieux de deux ans comptent comme ceux de la semaine précédente. L’influence doit se mesurer dans ce qui bouge, c'est-à-dire en analysant les articles, non pas les liens, qui au mieux peuvent donner une idée du trafic.