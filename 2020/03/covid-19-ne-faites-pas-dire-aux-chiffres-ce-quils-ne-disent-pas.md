# Statistiques Covid-19 : fin de partie

Je ne voulais plus parler de statistiques, de prévisions, non parce que mon passé d’ingénieur et mes accointances avec quelques épidémiologistes ne suffisent pas à me donner une quelconque légitimité en la matière, concept de légitimité dont je me fiche éperdument, mais parce que je suis bien décidé à vivre le confinement au jour le jour, de prendre ce qui m’est donné, comme ce matin un arc-en-ciel au bout de l’étang quand j’ouvre mes fenêtres. Mais les chiffres me rattrapent.

Le 15 mars, j’ai publié [une méthode d’estimation des cas réels](https://tcrouzet.com/2020/03/15/des-chiffres-expliquent-le-coronavirus-et-decredibilisent-les-elections/), puis [je l’ai ajustée le 18 mars](https://tcrouzet.com/2020/03/18/les-stats-me-soignent-du-coronavirus/), et il s’avère qu’elle prédit plutôt bien le nombre de morts quotidien, même effroyablement bien, au point de proposer un total exact sur les onze derniers jours. Ça ne démontre pas la validité de la méthode de calcul, mais juste qu’elle n’est pas foutraque, et que nous pouvons peut-être lui faire confiance sur une chose : le nombre estimé de cas réels, tout en considérant cette information avec beaucoup de précautions.

[Je résume le principe de l’algorithme :](https://tcrouzet.com/2020/03/15/des-chiffres-expliquent-le-coronavirus-et-decredibilisent-les-elections/) comme il faut en moyenne 17,3 jours pour qu’un contaminé décède et que nous disposons d’une estimation du taux de mortalité, tout au moins en Corée du Sud le pays qui a systématisé les tests, nous pouvons en déduire le nombre de personnes effectivement contaminées 17,3 jours plus tôt, ce qui permet de calculer les cas réels et non ceux mesurés.

Au sujet des cas mesurés, je ne comprends toujours pas pourquoi les médias commentent ces chiffres et en tirent des conclusions alors qu’ils ne dépendent que de nos capacités de test et ne reflètent en rien la progression de l’épidémie. Les seuls chiffres valables dont nous disposons sont ceux des victimes du coronavirus à l’hôpital.

De même, pourquoi le gouvernement a-t-il proclamé un confinement de deux semaines alors que le nombre de morts ne peut pas baisser significativement avant 17,3 jours, soit en gros avant le 3 avril ? Un manque de transparence ou la volonté de nous endormir ? Ou la peur ? La fébrilité ?

Enfin, quel est le nombre réel de morts en France ? Nous n'en savons rien, mais on peut supposer que, à cause d'un fort taux de mortalité dans les populations concernées, les personnes très âgées, ces morts non décomptés n'influencent guère la méthode de calcul du nombre de cas réels.

Quelques remarques sur [mon tableau](https://docs.google.com/spreadsheets/d/1PqMVPU0VYcDWrUnDh1CsGYr_A7Zk3iZco77X-vToS9Q/edit?usp=sharing).

- La durée entre contamination et mort était au moment de la création du tableau de 17,3 jours (une donnée dont il faudrait revérifier la validité et voir ce qu'il en est en France). Je l’ai arrondie à la valeur supérieure (un jour de gagné, c’est une approximation conservatrice).

- Avant -18 jours, ligne violette dans le tableau, le nombre cas réels est calculé d’après le nombre de morts. On découvre qu’il y a probablement en moyenne 50 fois plus de cas réels que de cas relevés, chiffre en phase avec ceux proposés par certains épidémiologistes (j’ai vu passer une source en ce sens, mais je n’arrive pas à remettre la main dessus).

- Au-delà de -18 jours, en dessous de la ligne violette, nous ne pouvons plus appliquer la même méthode de calcul, il nous faut donc prolonger la courbe du nombre de cas réels d’une manière ou d’une autre. Par exemple en proposant une croissance exponentielle jusqu’au jour du confinement, date à partir de laquelle on peut espérer que cette courbe change de trajectoire. J’avoue que j’ai un peu tout essayé. Quand j’applique la progression moyenne constatée sur les quatre jours précédents (donc on reste dans l’exponentiel, mais mesuré), j’arrive à un million de cas réels à la veille du confinement, avec presque 200 000 nouveaux cas ce jour-là. Je ne veux pas croire à ce dernier chiffre, parce qu’il implique 18 jours plus tard, le 3 avril, un bilan macabre de 1 300 victimes, soit plus que partout ailleurs.

- J’espère donc que les mesures barrières ont réussi à infléchir partiellement la courbe avant le confinement et que nous pouvons applique une atténuation à la croissance jusqu’au confinement, avant d’en appliquer une plus élevée après. Mais tout cela revient à regarder dans une boule de cristal. A posteriori, pour sûr, nous pourrons évaluer le niveaux de responsabilité individuelle des Français (et être très fâchés contre nous-mêmes si la croissance exponentielle n'a pas été enrayée assez tôt).

- Je me contente de régler les paramètres pour obtenir un pic de mortalité autour du 3 avril, ce qui nous amène à une situation comparable à l’Italie. On finirait tout de même avec plus de 10 000 mors dans les hôpitaux, ce qui n’est pas très agréable à entendre. Je me refuse à évoquer des réglages plus macabres qui seraient purement et simplement du catastrophisme. Le tableau étant en accès libre vous pouvez jouer avec.

Je ne suis pas très à l’aise d’avoir entamé cette réflexion. Des gens me posent sans cesse des questions au sujet du tableau, me demandent de l’améliorer, de le compléter. Je n’en ai plus envie, pas plus que de continuer à le commenter. J’espère que je pourrais rire de mes erreurs à la fin de la crise. Je n’espère que même mes estimations optimistes seront pessimistes.

![Projection nombre de cas réels](https://tcrouzet.comhttps://tcrouzet.com/images_tc/2020/03/coub2.png)

![Projection nombre de mort](https://tcrouzet.comhttps://tcrouzet.com/images_tc/2020/03/coub1.png)

![Total morts projeté](https://tcrouzet.comhttps://tcrouzet.com/images_tc/2020/03/coub3.png)

[Liens vers le tableau… je le mets à jour tous les soir.](https://docs.google.com/spreadsheets/d/1PqMVPU0VYcDWrUnDh1CsGYr_A7Zk3iZco77X-vToS9Q/edit?usp=sharing)

Tags: Covid, Politique, une