# La trigonométrie du gravel

Quand j’étais gamin, nous adorions retourner les cintres moustache de nos vélos de course. Cette position nous permettait de rouler la tête relevée et le cintre se transformait en siège où nous pouvions caser un copain. Nous n’avions pas peur d’oser toutes les combinaisons qui nous traversaient l’esprit, mais j’ai l’impression que dans le monde du gravel, pourtant réputé cool, la fantaisie n’est pas de mise.<span id="more-64425"></span>

![Gravel taureau](https://tcrouzet.com/images_tc/2022/10/IMG_9627.jpeg)

Il m’a suffi [de publier des photos de mon nouveau gravel avec un cintre relevé excessivement](https://tcrouzet.com/2022/10/07/prise-en-main-du-gravel-canyon-grizl/) pour voir s’abattre sur moi une flopée d’Ayatollahs du vélo. J’aurais pu m’y attendre parce que plus ou moins les mêmes m’étaient tombés dessus quatre ans plus tôt lorsque j’avais publié des photos de mon Diverge avec un cintre relevé. On dirait que ces intégristes n’ont rien d’autre à faire que chercher les infractions à une loi qu’ils auraient pour mission divine de défendre.

### Un peu de trigo

Pour ma part, je recours à cette astuce de basculer le cintre avec mes nouveaux vélos quand je recherche ma position de confort. Cela m’évite de tout de suite changer la potence et m’aide même à déterminer la potence et le cintre qui me conviendront.

![Comparatif des cintres gravel](https://tcrouzet.com/images_tc/2022/10/gravel-drop-bars-geometry-diagram-1.png)

Je prends en compte trois paramètres (valeur du Canyon Grizl taille M).

- Reach du cintre : 70 mm.

- Reach cocottes : 40 mm (distance ajoutée au reach du cintre, dépend des cocottes et aussi de leur position sur le cintre).

- Inclinaisons du cintre : 0° par défaut (les drops parallèles au sol).

![Mesure de l'angle du cintre](https://tcrouzet.com/images_tc/2022/10/geo02.jpg)

Maintenant quand je bascule le cintre vers le haut, comme sur la photo ci-dessus, que se passe-t-il ? Les drops s’inclinent ce qui rend leur usage potentiellement inconfortable, mais, peu importe, puisque la manœuvre n’a pas pour but d’être définitive. En revanche, plus intéressant, le reach réel (mesuré à l’horizontale) diminue et les cocottes remontent.

- Reach réel=(Reach cintre+Reach cocottes)\*cos(rotation)

- Gain en hauteur=(Reach cintre+Reach cocottes)\*sin(rotation)

Dans mon cas, j’avais [pivoté le cintre de 40°](https://www.motionysis.com/) et donc réduit le reach d’environ 25 mm et gagné en hauteur 70 mm, des valeurs conséquentes, mais qui dès la première sortie ont confirmé les calculs effectués avant de commander le vélo (je reviens plus tard sur ces calculs).

Si ces réglages conviennent, il est alors possible de changer la potence, ou le cintre, ou les deux. Pour calculer les caractéristiques de la nouvelle potence, il faut prendre en compte de nouveaux paramètres (valeur du Canyon Grizl taille M).

- Longueur de la potence d’origine (PL)=80 mm

- L’angle de la potence (PA)=+6° (montée d’origine en -6°)

- L’angle du tube de fourche (FA)=72,25°

- L’angle de la potence par rapport au sol (PAS)=90°-FA+PA=23,75°

On peut alors calculer deux valeurs importantes.

- Reach réel potence=PL\*cos(PAS)=73 mm

- Gain hauteur réel potence=PL\*sin(PAS)=32 mm

Si je monte mon cintre à l'horizontale et, par exemple, veux aboutir à un gain en hauteur réel de 50 mm environ et un reach réel de 65 mm, j’aboutis à un système de deux équations, avec deux inconnues, la nouvelle longueur potence (NLP) et le nouveau angle (NPAS).

50=NPL\*sin(NPAS)

65=NPL\*cos(NPAS)

=&gt; 50/65=tg(NPAS) =&gt; NPAS=37,5°

La longueur de la nouvelle potence devrait dans l’idéal être de 82 mm et son angle de 37,5-90+78,5=26°. Bien sûr, ces valeurs sont indicatives, mais permettent de ne pas essayer des potences au hasard. Il est aussi possible de jouer avec des cintres qui possèdent un rise de 10 ou 15 mm ou un reach plus court.

### Davantage de trigo

Depuis des années, [et de manière plus précise depuis mon étude posturale](https://tcrouzet.com/2019/04/19/etude-posturale-payer-ou-non/), je connais mes paramètres de confort, même si avec le passage aux pédales plates, ma position n’a plus besoin d’être aussi stricte que par le passé.

![Mes données posturales](https://tcrouzet.com/images_tc/2022/10/postural2.jpg)

Je monte la selle à 717 mm de l’axe du pédalier (valeur à ajuster en fonction des selles, des pédales, des chaussures). Par ailleurs, la partie la plus large de la selle se situe 260 mm en retrait horizontal de l’axe du pédalier (de même cette valeur peut légèrement varier d’une selle à l’autre). Quand je croise ces valeurs avec les données géométriques du constructeur, [ou d'un site comme Bikeinsights](https://bikeinsights.com/compare?geometries=609eb44d1f13ce001e58f235,,), j'en déduis la hauteur de la selle par rapport au sol, ainsi que la longueur de sortie du tube de selle. [J’ai saisi les formules trigos dans une feuille de calcul.](https://docs.google.com/spreadsheets/d/1-KoPfKRMDTgX1ksOh_qJDmEIPD0iTOEv-w0WapHgrAY/edit?usp=sharing) Dans le cas du Canyon Grizl, j’ai pu déterminer la hauteur de selle, soit 748 mm, ce qui m’a pointé vers un cadre de taille S ou M.

![Hauteur de selle](https://tcrouzet.com/images_tc/2022/10/geo03.png)

Il est également possible de déterminer le drop entre la selle et les cocottes. Un coureur pro utilise un drop important pour maximiser la pénétration dans l’air. Pour ma part, je suis en position de confort avec un drop quasi nul, sinon j’ai mal aux cervicales et au bas du dos. Comme je me moque de la performance et que tout ce qui m’importe est de pouvoir rouler des journées entières, cette position est mon idéal.

De même, je n’apprécie pas d’être écartelé entre ma selle et les cocottes. J'aime avoir environ 825 mm entre la partie la plus large de la selle et les cocottes. Avec les années, je suis de moins en moins flexible, et il suffit d'un écart de 10 mm pour ne plus du tout me sentir bien sur un vélo. J’ai abouti à ces valeurs de drop et d’allongement autant grâce à l’étude posturale qu’empiriquement.

![Alignement](https://tcrouzet.com/images_tc/2022/10/john.jpg)

Sur les gravels, un dernier paramètre ergonomique est très important : [comme l'explique John Weirath](https://www.youtube.com/watch?v=O9jq4WBrKOY), si le poignet se casse au contact des cocottes, c'est-à-dire si l'avant-bras et le troisième métacarpe ne s'alignent pas, nous ressentons assez vite des fourmillements dans les mains (tout au moins, c'est mon cas).

![Mon positionnement cocottes](https://tcrouzet.com/images_tc/2022/10/IMG_9640.jpeg)

Pour éviter ce problème, on joue sur la position des cocottes et la rotation du cintre, [comme l'illustre Cyclingtips à l'aide de nombreuses photos](https://cyclingtips.com/2018/09/how-to-set-up-road-bike-drop-handlebars-tips-guidelines/). Pour ma part, je monte les cocottes de façon qu'elles s'alignent avec le haut du cintre. C'est ainsi que je me sens bien. Il me reste alors à pivoter le cintre pour aboutir à l'alignement avant-bras et troisième métacarpe (un niveau posé entre les cocottes et le cintre indique 20°).

La rotation du cintre dépend *in fine* du drop. Plus le drop augmente, plus le buste bascule en avant, plus le cintre tend vers l'horizontale pour que l'avant-bras s'aligne avec le troisième métacarpe. En revanche, moins j'ai de drop et plus je me redresse, plus je relève le cintre pour maintenir cet alignement. Il n'existe donc pas angle de rotation universel pour régler un cintre.

Avec ces données en main et avant d’acheter un nouveau vélo, je veux être sûr de pouvoir le régler selon mes désirs. Pour cela, au fil des années, [j’ai construit une feuille de calcul, dont je publie une version simplifiée](https://docs.google.com/spreadsheets/d/1-KoPfKRMDTgX1ksOh_qJDmEIPD0iTOEv-w0WapHgrAY/edit?usp=sharing).

![.](https://docs.google.com/spreadsheets/d/1-KoPfKRMDTgX1ksOh_qJDmEIPD0iTOEv-w0WapHgrAY/edit?usp=sharing)

J’y saisis mes paramètres physiologiques et la géométrie du vélo et calcule le drop et l’allongement. Pour les ajuster, je joue sur la potence ou le cintre ou les deux. Dans le cas du Canyon Grizl, j’ai tout de suite constaté que le cadre S me proposait un drop important qui serait difficile à combler, à moins d’installer une potence très raide. En revanche, avec le cadre M, je pouvais conserver la potence d’origine et me contenter de remplacer le cintre. J’ai bien sûr effectué quelques sorties avec le cintre relevé pour valider ces calculs.

En plus d'installer le cintre ergonomique [Deva Geta](https://dedaelementi.com/gera-alloy-handlebar) en 420 mm avec un reach de 55 mm et un rise de 10 mm, j'ai ajouté un [pad ergonomique](https://www.ergonbike.com/en/product-details.html?anr=42500090&s=bt&a=lenkerbaender) que j'ai enfoui sous une [guidoline gravel de 3 mm](https://www.ergonbike.com/en/product-details.html?anr=42500030&s=bt&a=lenkerbaender). Quand je suis monté sur le vélo, je me suis tout de suite senti chez moi, comme les calculs me l'avaient laissé deviner. Si dans quelques centaines de kilomètres, je me sens toujours aussi bien, je remplacerai la potence d'origine par une [Redshift 80 mm/6°](https://redshiftsports.com/products/shockstop-suspension-stem), pour accroître le confort, pour moi toujours moindre sur Gravel que sur VTT, même si je gonfle mes pneus de 45 mm à 1,8 bar.

J'utilise cette feuille de calcul chaque fois que j'envisage d'acheter un vélo. Certains n'ont aucune chance de pouvoir me convenir, d'autres comme le Canyon Grizl ne tombent pas loin de mon idéal. Il me suffit alors de quelques ajustements pour m'y trouver bien. Les mêmes calculs valent pour un VTT ou un vélo de course. Même si notre position change d'un vélo à l'autre, notre corps, lui, ne change pas, pas davantage que sa souplesse. Vous pouvez adapter le tableau pour vos mensurations et pour différents vélos. Si vous voyez des améliorations (voire des bugs), n'hésitez pas à me les signaler.

J’ai écrit cet article plus pour clarifier mon approche que pour mettre les points sur les i des Ayatollahs qui affirment avec autorité « ton cintre doit être à l'horizontale », « ton drop doit être beaucoup plus important », « ton ci doit être ça », et qui oublient de prendre en compte les particularités physiologiques de celui à qui ils s’adressent. Je ne cherche que mon bonheur sur le vélo. Tout le reste est secondaire.

Tags: Born to Bike, Gravel, une