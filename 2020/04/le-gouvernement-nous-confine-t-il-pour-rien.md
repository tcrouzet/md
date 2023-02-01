# Le gouvernement nous confine-t-il pour rien ?

Indépendamment de ce que déclare le gouvernement, c’est la réalité de la pandémie sur le terrain qui nous dira quand déconfiner. Pour me rassurer, ne pas trop gamberger et anticiper mes prochains voyages à vélo, je regarde les prévisions épidémiologiques comme d’habitude je regarde les prévisions météo.<span id="more-54020"></span>

![Projection au 17/4/2020](https://tcrouzet.com/images_tc/2020/04/graph-cov1.png)

J’ai tracé les courbes qui montrent l’évolution du nombre de cas réels estimés, des hospitalisations et des victimes. Il y a trois pics, c’est logique puisqu’on commence par tomber malade, puis parfois par être hospitalisé, puis parfois par décéder. La durée moyenne entre une infection et la mort éventuelle serait [comprise entre 20 et 25 jours d’après les dernières estimations](https://www.economist.com/graphic-detail/2020/04/11/why-a-study-showing-that-covid-19-is-everywhere-is-good-news).

Sur le graphique ci-dessus, j’ai choisi 21 jours entre la contamination et la mort, valeur dans la fourchette acceptable, valeur qui permet d’avoir le pic du nombre de cas réels estimés au jour du confinement, jour à partir duquel le nombre de contaminations est supposé avoir commencé à baisser. Mais attention, il s’agit d’une possibilité, cette valeur de 21 jours est paramétrable (elle recule plus ou moins la courbe bleue par rapport à la courbe rouge).

Jusqu’au 17 avril, ce graphique utilise le nombre quotidien de morts, pour la suite, je suppose que ce nombre continue de décroître selon la tendance constatée les trois derniers jours (cet intervalle peut être changé). J’applique en prime un paramètre d’atténuation qui me permet de jouer avec différents scénarios (différente pentes de décroissance de la morbidité). Avec une atténuation à 1 % (cas de l’illustration), j’ai une courbe sensiblement symétrique. La pandémie décroît comme elle a commencé. Mais encore une fois, on peut jouer sur ce paramètre pour dessiner différents avenirs.

Le graphique montre quand on devrait décompter le dernier mort (ou plus précisément quand le nombre de morts sera très faible, vers la mi-mai). Mais plus intéressant, il montre quand s’achève la courbe bleue du nombre de cas réels. Ce jour-là, la pandémie entre en phase de sommeil. Ça signifie que nous l’avons contenue. Sur le graphique, cette date tombe le 25 avril. Nous verrons où nous en serons dans la pratique (et si nos hôpitaux ne reçoivent plus de patients Covid). C’est l’idée qui compte : la fin de la contamination est en avance de 20 à 25 jours sur la fin de la morbidité.

Peu importe le jour où cet évènement surviendra, ce sera le jour où théoriquement le confinement devrait être levé. Le virus ne transitera alors pratiquement plus et attendre davantage pour nous déconfiner ne le fera pas disparaître pour autant. Nous n’y gagnerons rien.

Reste à savoir si nous pourrons déconfiner logistiquement à ce moment ? Si le gouvernement nous maintient confinés au-delà du nécessaire, ce sera une atteinte à nos libertés.

Le gouvernement est-il prudent ? Non, parce qu’il a annoncé le 11 mai sans savoir ce qu’il en sera. Changez les paramètres de ma simulation et vous verrez qu’elle peut nous amener bien plus loin. Par exemple, ci dessous, je calcule la pente initiale en faisant une moyenne sur les six derniers jours.

![Un seul paramètre modifié](https://tcrouzet.com/images_tc/2020/04/graph-cov2-1.png)

On peut faire dire presque ce qu’on veut à une projection (la preuve). Mon article a pour but d’aider à interpréter les courbes réelles pour pourvoir dire quand ce sera le moment de déconfiner. J’ai donné un exemple de lecture sur un cas possible (parmi une quasi infinité). Il faudra ainsi lire les courbes au jour le jour pour savoir quand le moment est venu, et non attendre que le gouvernement nous le dise.

### Précision sur mon modèle

Pour mes calculs, j’utilise [les données officielles](https://mapthenews.maps.arcgis.com/apps/opsdashboard/index.html#/5df19abcf8714bc590a3b143e14a548c) entrées dans [une Google Sheet](https://docs.google.com/spreadsheets/d/1PqMVPU0VYcDWrUnDh1CsGYr_A7Zk3iZco77X-vToS9Q/edit?usp=sharing).

Pour les victimes, je me limite aux chiffres des hôpitaux, parce que nous n’avons pas l’historique complet des victimes en EHPAD. Je suppose que si on avait l’historique complet, les tendances seraient les mêmes.

[Depuis le début](https://tcrouzet.com/2020/03/15/des-chiffres-expliquent-le-coronavirus-et-decredibilisent-les-elections/), j’ai essayé d’estimer les cas réels selon une approche simple : si on connaît la durée moyenne entre une infection et la mort éventuelle d’un malade, on peut en déduire le nombre de personnes qui ont été contaminées en même temps que lui et qui elles ne sont pas mortes. Cette astuce permet de remonter dans le temps.

![Jouez avec les paramètres](https://tcrouzet.com/images_tc/2020/04/graph-cov2.png)

L’autre donnée nécessaire au calcul est le taux de mortalité, [là encore on a beaucoup de doute](https://tcrouzet.com/2020/04/10/le-coronavirus-infecte-nos-cerveaux/). Comme je travaille dans une feuille de calcul, je peux changer ce paramètre à volonté (il n’a aucune influence sur la forme de la courbe bleue, juste sur sa hauteur).

Pour contredire Raoult, on voit que l’épidémie se tasse partout en France, pas seulement à Marseille et que c’est un effet du confinement et non de l’hydrochloroquine (que Raoult relève moins de nouveaux cas, pas étonnant donc). On voit aussi que si on ne s’était pas confiné, la courbe rouge de la mortalité aurait peut-être continué à croître vers [l’hypothétique ligne de l’immunité collective, ce qui aurait été dramatique](https://tcrouzet.com/2020/04/10/le-coronavirus-infecte-nos-cerveaux/).

J’entends sans cesse des gens dire que nous ne constatons pas de surmortalité suite au coronavirus. Encore une fois, il faut être prudents. Le graphique nous montre que la mortalité pré-confinement doit être relevée entre le premier mars et le 9 avril (12 000 victimes). Mais que se serait-il passé en avril sans confinement ? Vous ne pouvez pas négliger que nous sommes confinés et supposer que le confinement n’a aucun effet. Pour tenir de tels propos, [il faudrait supposer un taux de mortalité inférieur à 0,1 %](https://tcrouzet.com/2020/04/16/covid-19-pourquoi-cest-termine/), ce qui discréditerait d’autant plus les travaux de Raoult. Mais est-ce nécessaire ? Écoutez donc Hervé Seitz, chercheur au CNRS. Ses paroles de sagesses me font du bien. Et comme tous les jours, je me dis que c’est la dernière fois que j’écris sur cette affaire de confinement. Je ne suis pas encore guéri.

<div class="iframe" id="iframe18"></div>