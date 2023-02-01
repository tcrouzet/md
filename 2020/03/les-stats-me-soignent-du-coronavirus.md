# Les stats me soignent du coronavirus

Regarder les chiffres, jouer avec les statistiques est sans doute une de mes façons de vivre la pandémie, de l’accepter. Je sais que ces jeux n’ont que peu de rapport avec la situation réelle, mais ils m’aident à en comprendre la gravité. Chacun sa névrose.<span id="more-53617"></span>

[Plus je consulte d’études](https://www.huffingtonpost.fr/entry/coronavirus-pourquoi-si-le-confinement-fonctionne-lepidemie-risque-de-revenir_fr_5e70ccecc5b6eab7793cae0a), plus je me dis que [ma première proposition](https://tcrouzet.com/2020/03/15/des-chiffres-expliquent-le-coronavirus-et-decredibilisent-les-elections/) n’est pas satisfaisante quand on la prolonge ni en accord avec les données dont nous disposons.

Voilà ce qu’il me paraît nécessaire de changer.

- J’étais parti sur un taux de mortalité initial de 0,5 %, je pense qu’il faut utiliser le 0,86 % mesuré en Corée du Sud qui effectue un dépistage systématique tout en disposant d’un des meilleurs systèmes de santé au monde, [avec deux fois plus de lits en soins intensifs pour mille habitants que nous](https://www.latribune.fr/economie/france/covid-19-la-france-n-a-que-trois-lits-en-soins-intensifs-pour-1-000-habitants-pour-mener-la-guerre-842488.html). Il est plus que probable que nous ne ferons pas mieux, et sans doute moins bien ([avec toutefois l’espoir d’un premier traitement](https://www.liberation.fr/checknews/2020/03/17/la-chloroquine-est-elle-finalement-utilisee-en-france-pour-traiter-le-covid-19_1781865)).

- Pour calculer le nombre de cas réels 17 jours en arrière, je conserve [la même méthode](https://tcrouzet.com/2020/03/15/des-chiffres-expliquent-le-coronavirus-et-decredibilisent-les-elections/) (zone située en dessus de la ligne violette dans le tableau ci-dessous). En revanche, pour calculer les cas réels après cette date, supposer une pure progression exponentielle n’a pas beaucoup de sens. Je préfère appliquer la même croissance que celle constatée sur le terrain. Cela pose pas mal de problèmes parce que nous ne testons que les cas extrêmes, mais on ne dispose pas d’autres données.

- Pour aller vers l’avenir, au-delà de la ligne rouge, une première possibilité : appliquer la dernière progression constatée sur le terrain et la répéter de jour en jour. Malheureusement ainsi toute la population est très vite infectées comme le montre le graphique ci-dessous.

![Projection irréaliste](https://tcrouzet.com/images_tc/2020/03/prev1b.png)

- Je pense qu’il faut donc appliquer un facteur d’atténuation à partir de date de confinement (17/3), qui prend en compte les mesures de distanciation sociale et aussi le fait que peu à peu de plus en plus de gens sont immunisés, ce qui est très bien expliqué [dans un article du *Washington Post*](https://www.washingtonpost.com/graphics/2020/world/corona-simulator/). On peut ainsi prolonger la simulation plus loin dans le temps. Bien sûr, je ne peux pas savoir quand la croissance se stabilisera ou s’infléchira (sans doute au bout d’une semaine minimum, temps d’incubation avant premiers symptômes). Je suis parti sur un modèle en cloche, mais on peut imaginer tout ce que l’on veut sauf la perpétuelle croissance exponentielle.

![Autre possibilité](https://tcrouzet.com/images_tc/2020/03/prev2b.png)

- Le nombre de cas réels étant calculé en fonction du taux de mortalité supposé, toute erreur dans le calcul du nombre de morts projeté impliquera de revoir le taux de mortalité (qui malheureusement augmentera en même temps que le système de santé approchera de la saturation).

- Le nombre de morts sur les 17 prochains jours est calculé en fonction du taux de mortalité et des données officielles publiées 17 jours plus tôt. Il ne dépend guère de la projection de la courbe vers le futur. Si on suppose qu’après le confinement il n’y a plus de nouveaux cas (improbable bien sûr), on obtient une courbe beaucoup plus rassurante, avec néanmoins un nombre de morts total conséquents de 20 000 (deux fois une grippe saisonnière). C’est sans doute le scénario le plus optimiste et je le trouve déjà assez terrible.

- Je mets à 0 le nombre projeté de cas relevés car il n’a aucun sens vu qu’il ne dépend que de notre capacité à dépister.

- L’estimation du nombre de cas en réanimation est pas très bonne, donc difficile de savoir quand le système hospitalier saturera.

![Confinement hyper efficace](https://tcrouzet.com/images_tc/2020/03/prev3.png)

[Liens vers le tableau… je le mets à jour tous les soir.](https://docs.google.com/spreadsheets/d/1PqMVPU0VYcDWrUnDh1CsGYr_A7Zk3iZco77X-vToS9Q/edit?usp=sharing)

<div class="iframe" id="iframe7"></div>