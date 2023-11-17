# Le coronavirus est-il région dépendant ?

Les chiffres « semblent » dire que plus la pandémie commence tard, moins elle est grave, et cela apparemment indépendamment des politiques de santé publique, comme si elles avaient que peu d’effet. Le moment compterait plus que tout autre paramètre.<span id="more-54069"></span>

[Suite à cette interrogation sur l’utilité ou non du confinement](https://tcrouzet.com/2020/04/20/une-preuve-de-linutilite-du-confinement/), des lecteurs se sont légitimement demandé si une analyse région par région nous donnerait d’autres enseignements. J’ai donc récupéré [les données détaillées de morbidité en France](https://www.eficiens.com/corostats/openstats/open_stats_coronavirus.csv), j’ai pondéré les chiffres en fonction des [populations des régions](https://www.insee.fr/fr/statistiques/fichier/4265429/ensemble.zip) et j’ai tracé les mêmes courbes que pour les pays.

### Morts/pop - linéaire

![Morts par région](https://tcrouzet.comhttps://tcrouzet.com/images_tc/2020/04/reg1.png)

Ce graphique nous montre ce que nous savons déjà, que le Grand Est et l’Île-de-France sont les plus touchées, que la Nouvelle-Aquitaine et l'Occitanie sont relativement épargnées. On observe aussi une différence de dynamique, plus une région est touchée plus la courbe monte rapidement, phénomène d’accélération qui ne semble jamais se produire dans les régions moins touchées.

### Morts/pop - logarithmique

![France en log](https://tcrouzet.comhttps://tcrouzet.com/images_tc/2020/04/reg2.png)

En logarithme, les écarts d'amplitude sont tassés, ce qui permet de mieux voir les tendances. Les débuts des courbes sont chaotiques parce que la pandémie commence lentement (effet chaotique invisible sur les pays à cause d’un grand nombre de cas). Mais on retrouve le même phénomène qu’avec les pays. Plus une région est touchée tardivement, moins elle monte haut (et réciproquement). En revanche, l'évolution est comparable (même courbe à l'échelle près, les courbes se croisent rarement).

Comme la politique de santé est la même partout, je ne peux pas tirer les mêmes conclusions que pour les pays, à savoir émettre l’hypothèse d’un tassement de la pandémie indépendamment des politiques de santé.

L’explication la plus probable reste que le confinement étant survenu plus tôt au regard du développement de la pandémie dans certaines régions, il y a freiné son développement. [Cela confirme que plus on confine tôt, plus c’est efficace.](https://tcrouzet.com/2020/04/09/quand-le-gouvernement-nous-ment-preuves/) Mais rien n’empêche qu’un autre phénomène soit en jeu (par exemple, plus le virus frapperait tard, moins il serait virulent).

Bien que partie tard en l’Île-de-France, la pandémie se rapproche au fil des jours de la situation dans le Grand Est, sans doute parce que la densité de population complique la distanciation sociale.

[Quand Olivier Véran affirme que nous n'avons pas assez ralenti la pandémie à cause d'un relâchement du confinement](https://www.voici.fr/news-people/actu-people/video-olivier-veran-qui-sont-les-nouveaux-cas-positifs-au-coronavirus-il-repond-678918), il se trompe probablement. Ou bien il faudrait que le même phénomène se soit produit de manière homogène dans toute la France, au même rythme, pour que les courbes restent alignées. C'est peu probable. La vérité est moins drôle : nous continuons à nous contaminer, parce que ce virus possède un R0 élevé. Et nous continuerons à le faire après le confinement.

### Avec la Lombardie

![Avec la Lombardie](https://tcrouzet.comhttps://tcrouzet.com/images_tc/2020/04/reg3.png)

![Avec la Lombardie](https://tcrouzet.comhttps://tcrouzet.com/images_tc/2020/04/reg4.png)

Est-ce un phénomène franco-français ? [Il suffit d'ajouter la Lombardie pour vérifier que non.](https://www.kaggle.com/sudalairajkumar/covid19-in-italy) Commencée beaucoup plus tôt, l'explosion italienne est partie comme une flèche, tout en suivant la même trajectoire que les régions françaises parties plus tard.

On peut imaginer que la trajectoire à Wuhan : Avec plus d'un mois d'avance, elle a dû être cataclysmique. Seuls les voisins de la Chine, habitués à ses mensonges, l'ont compris et se sont claquemurés assez tôt pour se protéger.

Que je sois clair, je ne vois toujours pas ce qu'on aurait pu faire d'autre que confiner au moment où la décision a été prise. Ne rien faire et attendre un miracle aurait été une folie. Un soignant soigne dès qu'il entrevoit une possibilité de le faire.

Les courbes US et suédoise n’en continuent pas moins de m’intriguer parce qu’elles ressemblent à celles des autres pays, et même des régions étudiées plus haut, malgré des politiques de confinement anarchiques ou inexistantes.

Sinon le confinement, quel miracle pourrait expliquer ce phénomène ? J’en suis réduit aux hypothèses.

1. Plus un pays entre tard dans l’épidémie, plus il le fait à l’approche des beaux jours, ce qui pourrait indiquer une saisonnalité ou virus.

2. Si le R0 était très élevé, peut-être que tout le monde ou presque serait déjà plus ou moins infecté, et qu’une immunité de groupe serait en train de s’installer (mais ça ne colle pas, aucune raison que le virus alors fasse moins de dégâts quand la pandémie commence plus tard).

3. Au contraire, si le R0 est relativement faible, il suffit d’une distanciation sociale approximative pour le faire passer en dessous de un et calmer la propagation (mais encore une fois la courbe n’aurait alors aucune raison d’être plus basse plus tard dans la saison).

4. Le virus peut-être mute au fur et à mesure qu’il se propage et perd de sa virulence, ce qui expliquerait que la morbidité atteigne assez vite un plateau.

Pas d’autres solutions que d’attendre et de voir comment les choses évolueront.

Tags: Covid, une