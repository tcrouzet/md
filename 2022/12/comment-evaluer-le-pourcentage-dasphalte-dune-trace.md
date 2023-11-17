# Comment évaluer le pourcentage d’asphalte d’une trace

J’aime les statistiques. J’en colle partout, même dans la littérature, et bien sûr dans le vélo. Quand je concocte mes traces, j’aime savoir qu’elle est leur part d’asphalte et de terre, de chemins et de singles. C’est une façon d’évaluer mon travail, de comparer mes traces à d’autres, de mieux les présenter à ceux qui voudraient les rouler.

J’ai découvert que quand on s’attaque à de longues distances, réduire la part d’asphalte est loin d’être simple, surtout quand on se refuse de faire tourner les participants en rond pour leur faire découvrir les moindres sentiers d’une région. Une trace longue distance prend tout son sens quand elle se tient à un objectif. La [French Divide](https://www.frenchdivide.com/) est exemplaire en ce sens. Elle traverse la France sans atermoiement. C'est la trace bikepacking de référence en France.

![Stats officielles de la French](https://tcrouzet.com/images_tc/2022/12/frenchhome-1024x480.jpg)

Mais combien d’asphalte, de chemins, de singles ? Sur la page de garde de la French, je découvre 18 % d’asphalte et 82 % de chemins. D’où viennent ces chiffres ? Comment les vérifier ? Comment les recalculer ? Il me semble qu’il serait bon que nous ayons une méthode relativement objective pour qualifier nos traces et ainsi communiquer à leur sujet en toute transparence, sans surenchères.

Je ne crois pas au déclaratif à vue de nez. Par expérience, quand les jours de VTT s’enchaînent, on a tendance à surévaluer la distance des passages hors asphalte et à minimiser celle des passages asphaltés. Je ne crois pas davantage aux chiffres de celui qui a passé des heures le nez sur une carte pour essayer à la mano de s’y retrouver. Je n’y crois pas parce que sa méthode ne vaut que pour lui et il faudrait lui faire confiance les yeux fermés. En tant que scientifique, je ne crois qu’aux méthodes reproductibles.

### Strava minimise l’asphalte

Si de nombreux outils aident à visualiser les traces, peu d’entre eux nous fournissent des statistiques intéressantes à leur sujet. Dans sa version premium, Strava nous propose le pourcentage d’asphalte, de chemins et de surfaces non spécifiées.

J’ai créé un [compte Strava Premium](https://www.strava.com/athletes/stats34) pour mon comparatif et rassemblé les chiffres dans un tableau. Les données estimées par Strava sont très différentes de celles communiquées officiellement par la French ([tracé 2021](https://www.visugpx.com/y6WRudiWm1)).

![Strava](https://tcrouzet.com/images_tc/2022/12/stravatab1.png)

Mais Strava est-il fiable ? J’ai analysé [la trace du 727](https://tcrouzet.com/727tour) transformée en itinéraire par Strava. Il prend quelques libertés, mais avec l’honnêteté de le signaler (contrairement à Komoot). Par exemple, il refuse un single hors carte pour proposer un contournement. Toutefois, ces altérations bien qu’embêtantes lorsqu’on roule ne faussent pas les statistiques. Strava n’ajoute au total que 3 km au 727 ce qui lui fait manquer quelques singles, mais de manière non significative sur la distance totale.

![Trace altérée](https://tcrouzet.com/images_tc/2022/12/strava02-1024x453.jpg)

Toujours en analysant le tracé Strava, je découvre qu’il ne différencie pas les pistes des singles et les qualifie invariablement de chemins. De même, les surfaces non spécifiées correspondent tantôt à des singles, tantôt à des chemins, tantôt (et très souvent) à de l’asphalte, donc le pourcentage d’asphalte annoncé est grandement minimisé, d’autant que Strava qualifie de chemins de nombreux secteurs asphaltés. Par exemple, la sortie de Sérignan, la sortie de Vendres, la traversée de Lespignan sont asphaltées et il les voit comme des chemins ou des secteurs non spécifiés. En revanche, les secteurs déclarés asphaltés me paraissent systématiquement l’être. La valeur d’asphalte de Strava doit donc être prise comme une fourchette basse.

![Strava bugue](https://tcrouzet.com/images_tc/2022/12/strava04-1024x470.jpg)

Un algo correctif brutal pourrait associer 1/3 des surfaces non assignées à l’asphalte, 1/3 aux chemins, 1/3 aux singles. Je ne crois pas qu’on puisse tirer beaucoup plus de Strava.

### Komoot plus précis

Si [Brouter](https://brouter.de/brouter-web/) et [RideWithGPS](https://ridewithgps.com/) proposent aussi des statistiques sur les surfaces, je ne les trouve pas plus pertinentes que celles de Strava, et j’en arrive à Komoot, l’outil que j’utilise en général, parce qu’il fournit des données détaillées, même si un peu cryptiques.

![Stats Komoot](https://tcrouzet.com/images_tc/2022/12/komoot01-1024x531.jpg)

Quand je charge une trace dans Komoot, il la modifie comme Strava et dans des proportions équivalentes, même quand on lui demande de ne pas la modifier (peut-être les deux services appellent le même API, par exemple [OpenRoute](https://openrouteservice.org/)). [J’ai déjà écrit à ce sujet](https://tcrouzet.com/2021/05/27/gaffe-komoot-est-bugue/), ce qui m’empêche de partager mes traces avec Komoot. Reste que j’utilise souvent Komoot pour ses statistiques, que je trouve plutôt fiables quand j’analyse la carte et compare les données affichées avec ma connaissance du terrain (quand on clique sur un type de terrain, les zones correspondantes passent en surbrillance sur la carte).

Les chiffres proposés me paraissent plus réalistes que ceux de Strava. Leur qualité dépend de la qualité de la carte OSM qui ne cesse de s’améliorer. Sur cette carte, les segments sont qualifiés par un type de voie (sentier, rue, route…) et de surface (terre, gravier, goudron…), avec parfois quelques incohérences. L'OSM considère de nombreux singles comme des chemins (les singles sont donc largement sous-estimés). En revanche, les routes asphaltées/goudronnées me semblent assez bien identifiées, en tout cas nettement mieux que sur Strava (qui pourtant lui aussi semble travailler à partir d'OSM).

Je communique les statistiques construites à partir des voies plutôt que des surfaces, ce qui me paraît plus fidèle à la réalité, en tout cas sur le 727. Pour la French, il y a peu de différences entre les deux approches. Pour calculer le total d’asphalte, je cumule les voies d’accès, les rues, les routes et je prends 50 % des pistes cyclables (même si la plupart sont asphaltées).

![Komoot](https://tcrouzet.com/images_tc/2022/12/komoottab1.png)

Quand je discute de ces chiffres, de nombreux French Riders me disent « Jamais de la vie, il n’y a pas plus de 25 % d’asphalte sur le French. » Je veux bien, mais la carte OSM dit le contraire, Strava dit le contraire. Je suis le premier à admettre l'imperfection de ces outils, mais ils ne sont pas totalement à côté de leurs pompes.

Par expérience, même autour de chez moi, créer des itinéraires VTT avec moins de 20 % d'asphalte est difficile, parce qu'il faut s'éloigner des agglomérations, emprunter des pistes cyclables, s'enfoncer dans la nature. L'asphalte est partout, malheureusement, et ma marotte est de le minimiser, sans pour autant transformer mes traces en plat de spaghetti.

Nous avons besoin d'une méthode objective de comparaison des traces pour que les participants sachent à quoi s’attendre quand ils passent d’une épreuve à une autre. Ça serait bien que tous ceux qui proposent des épreuves ou des randonnées s’entendent sur une méthode de calcul. J’ai expliqué la mienne. Je suis bien sûr prêt à en changer si quelqu’un trouve mieux.

### RideWithGPS

Très populaire outre atlantique, [RideWithGPS](https://ridewithgps.com/) est selon moi le site de partage de traces le plus avancé. Si ses statistiques sont sommaires, puisqu'il indique uniquement les surfaces asphaltées, non asphaltées et inconnues, ses résultats ne diffèrent guère de ceux de Komoot.

![Stats RideWithGPS](https://tcrouzet.com/images_tc/2022/12/rideWith.png)

### L'IBP, une autre approche

L'indice IBP permet quant à lui de comparer la difficulté des traces. [Le 727 a un indice de 743](https://www.ibpindex.com/ibpindex/ibp_analisis_completo.php?REF=38807814761510&LAN=en&MOD=BYC), [le x727 de 1528](https://www.ibpindex.com/ibpindex/ibp_analisis_completo.php?REF=38807802126204&LAN=en&MOD=BYC), [la French de 3091](https://www.ibpindex.com/ibpindex/ibp_analisis_completo.php?REF=38807813846665&LAN=en&MOD=BYC). Bien sûr, plus une épreuve est longue, et plus elle implique de dénivelés, plus son indice de difficulté est important. Il est logique que la French soit bien plus exigeante qu'un 727 ou un x727.

![IBP](https://tcrouzet.com/images_tc/2022/12/IBP-1024x208.png)

Pour gommer l'effet distance, mais sans réussir à gommer l'effet dénivelé, on peut diviser l'indice par la distance pour avoir une idée de la difficulté pure de la trace. On découvre ainsi que le x727 est alors d'une difficulté comparable à la French. Un autre paramètre m'intéresse davantage : le *Penalty trail's conditions* qui quand il est supérieur à 50 % pointe vers une trace VTT. On voit alors que le 727 et x727 sont beaucoup plus VTT que la French, ce qui confirme l'évaluation Komoot.

Loin de moi l'idée de vouloir créer la trace la plus VTT. Sur le 727 et x727, j'évite les secteurs dangereux ou trop engagés ou qui exigent que j'utilise ma selle télescopique (j'ai souvent préféré des bouts d'asphalte à des singles). Je recherche avant tout des expériences agréables de pilotage dans la nature. Je m'intéresse aux statistiques dans le seul but d'informer le plus clairement possible les futurs participants. J'ai écrit cet article quand des finishers de la French, au regard de ses 18 % d'asphalte annoncé, ont pensé qu'ils pourraient boucler sur un même rythme un 727, voire un x727, et surtout qu'ils pouvaient s'y engager avec des gravels.

Tags: Born to Bike, une