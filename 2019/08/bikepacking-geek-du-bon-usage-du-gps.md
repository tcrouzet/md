# Bikepacking geek : du bon usage du GPS

[Le premier jour de mon voyage dans les Appalaches](https://tcrouzet.com/2019/05/26/bikepacking-dans-les-smoky-mountains/), j’ai roulé, roulé, dans l’espoir d’enfin atteindre un point d’eau qui ne s’est jamais matérialisé sur l’écran de mon GPS. Pour cause, j’avais oublié d’y transférer les POI (points d’intérêt — aussi appelés waypoints). Quand j’ai compris mon erreur, j’avais dépassé le point d’eau de 20 km.<span id="more-52051"></span>

Pour [ma traversée Méditerranée-Atlantique](https://tcrouzet.com/2019/04/12/bikepacking-mediterranee-atlantique/), je n’ai pas envie de commettre la même erreur. J’ai donc cherché à mieux utiliser mon Garmin 820 (je suppose que cela fonctionne plus ou moins de la même façon avec les autres GPS de la marque et des autres marques).

### La trace ne suffit pas

[Comme je l’ai déjà raconté](https://tcrouzet.com/2019/03/21/randos-vtt-ou-autres-comment-creer-une-trace-gpx/), je prépare mes traces VTT/bikepacking sur Google Map où je les enrichis de POI (restaurants, épiceries, campings, fontaines, monuments…). Intérêt de la méthode : gratuite, performante, une infinité de POI préréférencés, la possibilité de superposer des centaines de traces, de créer des cartes partageables et accessibles sur tout type d'appareil.

![Carte enrichie de POI](https://tcrouzet.comhttps://tcrouzet.com/images_tc/2019/08/geek1-600x313.jpg)

Quand les traces deviennent trop complexes pour Google Map, je les exporte en KMZ pour les éditer sous [BaseCamp](https://www.garmin.com/fr-FR/shop/downloads/basecamp), le logiciel gratuit d’édition cartographique de Garmin. Souvent je découpe les traces en tronçons de moins de mille points (track points) que je réimporte dans Google Map pour les éditer au-dessus des images satellites (les traces de plus de mille points ne sont plus éditables sur Google Map). Je ne recolle les morceaux qu'au dernier moment sur BaseCamp.

**Astuce** Au final, je tente de n'avoir qu'un seul fichier pour ma trace, ce qui m'évite de me préoccuper du GPS en cours de voyage et permet d'avoir des stats globales. Le découpage en tronçons ne s'impose que si le fichier comporte plus de 10 000 track points (et cela dépend du GPS). Pour éviter que ce nombre ne gonfle, j'évite d'utiliser les traces issues de sortie, en général énorme avec parfois un track point tous les quelques mètres. Je les retrace à la main pour les optimisées. On peut tracer 1 000 km VTT avec 10 000 points (sur une telle distance, il arrive souvent de rencontrer des sections peu tortueuses qui nécessitent peu de points).

Pourquoi cette gymnastique ? Toutes les autres solutions que j'ai pu tester, bien qu'en apparence plus sexy et plus simples comme [OpenTraveller](https://www.opentraveller.net/) ou [Garmin Connect](https://connect.garmin.com/modern/courses), sont moins performantes. Dès que les traces grandissent, l'édition devient quasi impossible. Je resterai sur BaseCamp s'il savait afficher les images satellite de Google, mais il propose à la place une option payante et qui impose un pesant téléchargement des images, [BirdsEye](https://buy.garmin.com/fr-FR/FR/p/70144).

![Trace sur BaseCamp](https://tcrouzet.comhttps://tcrouzet.com/images_tc/2019/08/geek2-600x375.jpg)

![Assemblage des tronçons](https://tcrouzet.comhttps://tcrouzet.com/images_tc/2019/08/geek3-600x327.jpg)

La trace ainsi créée est parfaite pour me guider, mais elle ne comporte aucune information d’altitude, et donc le GPS ne peut pas tracer le profil. Pour ajouter ces informations au fichier KMZ, je passe par [GPSvisualizer](https://www.gpsvisualizer.com/map_input?form=googleearth) qui me génère un nouveau fichier KMZ comportant l’altitude de chacun des points (activer l'option Add DEM elevation data : best available source).

**Notes** Pour que les GPS puissent tracer automatiquement le profil d'une la trace ne l'intégrant pas, ils doivent être équipés d'une carte altimétrique. Malheureusement les cartes gratuite OSM (Open Street Map) que j'utilise ne comportent pas de courbes de niveau, bien qu'elles offrent le meilleur niveau de détail pour le VTT.

![Ajout des élévations](https://tcrouzet.comhttps://tcrouzet.com/images_tc/2019/08/geek4-600x291.jpg)

Quand j’ouvre mon nouveau fichier KMZ sur BaseCamp, je peux vérifier que les informations altimétriques sont présentes et visualiser le profil. Le calcul du dénivelé cumulé est souvent erroné (14 500 m pour ma trace Méditerranée-Atlantique). Je vérifie ce cumul en ouvrant ma trace sur Google Earth et en affichant le profil (8 500 m). J’obtiens d’autres évaluations via [Komoot](https://www.komoot.com/tour/84426566) (11 000 m), [OpenTraveller](https://www.opentraveller.net/) (9750 m) ou [Tracedetrail](https://tracedetrail.fr/) (qui n'aime pas les traces trop longues). Où est la vérité ? Komoot me semble le plus juste.

![Trace avec altitude sur BaseCamp](https://tcrouzet.comhttps://tcrouzet.com/images_tc/2019/08/geek5-600x402.jpg)

![Le profil sous Google Earth](https://tcrouzet.comhttps://tcrouzet.com/images_tc/2019/08/geek6-600x387.jpg)

![Profil sur Komoot](https://tcrouzet.comhttps://tcrouzet.com/images_tc/2019/08/geek7-600x376.jpg)

Depuis BaseCamp, je peux alors envoyer ma trace au GPS. Désormais, je peux savoir où je me situe sur le profil des montées interminables (à condition de choisir d'afficher l'écran d'élévation).

### Les POI

J’ai fini par comprendre que mon GPS gère les POI indépendamment des traces. À concurrence de 200 (valeur dépendant des modèles), ces POI de 32 caractères sont stockés dans le fichier *Locations.fit* situé dans le dossier *Garmin/Locations* du GPS. Détruire ce fichier n’efface pas les POI déjà présents, il faut les supprimer via BaseCamp, une fois le GPS connecté à l’ordinateur (quand les POI sont bien supprimés, le fichier *Locations.fit* occupe une poignée d'octets).

![Les POI du GPS](https://tcrouzet.comhttps://tcrouzet.com/images_tc/2019/08/geek8-600x375.jpg)

Depuis Google Map, j'exporte le calque où j'ai enregistré mes POI, puis réimporte le KMZ correspondant dans BaseCamp où je sélectionne les POI pour les envoyer au GPS exactement comme je le fais pour les traces. Les POI se surimposeront à la carte quand ma trace passera dans les environs.

**Note** En plus des track points et des waypoints, les GPS Garmin gèrent des course points, des points qui quand vous les atteignez vous donnent des indications de direction. Je n'en ai jamais vu l'intérêt. Quand je roule, je désactive toutes les options de mon GPS, notamment le routage automatique et le recalcul d'itinéraire, me contentant de suivre la trace en visuel (ce qui permet aussi d'économiser la batterie).

### La bonne carte

Sur mon GPS, je charge trois cartes :

- L’IGN de la France, au cas où, mais je ne l’active pas (c'est une carte altimétrique mais trop lourde pour le processeur du Garmin 820).

- [L’OSM de la France](https://www.freizeitkarte-osm.de/garmin/en/france.html), également en backup (en plus d’être gratuite, elle est souvent plus détaillée côté chemin que l’IGN — malheureusement, elle n'est pas altimétrique).

- L’OSM qui couvre mon trajet, [générée spécialement pour lui](http://garmin.openstreetmap.nl/). J’active uniquement cette carte. Tout en étant très légère en mémoire, elle est suffisamment détaillée pour m’aider à me repérer en cas de trace approximative.

![OSM sur mesure](https://tcrouzet.comhttps://tcrouzet.com/images_tc/2019/08/geekgps1-600x324.jpg)

En cas de galère, le minuscule écran de mon GPS n’est guère d’utilité, alors je bascule sur celui de mon iPhone où j’utilise [MapOut](https://mapout.app/) (la meilleure app de cartographie que j'ai testée). Voici comment je tire profit de MapOut.

1. Sur Google Map, je colle les points d’intérêts et ma trace dans un même calque que j’exporte en KMZ.

2. J’attache ce fichier à un mail et l’envoie à l'adresse mail personnalisée que me fournit MapOut.

3. Quelques secondes plus tard, je retrouve ma trace dans l’appli.

4. Je peux alors télécharger les tuiles OSM correspondant à ma trace. Ainsi, connexion ou pas, je me géolocalise, repère les POI, découvre d’éventuels bypass.

5. En chemin, je peux aussi estimer la distance restante avant un prochain POI tout en visualisant le profil.

6. Si mon GPS me lâche, MapOut peut aussi me guider.

![Liste des POI sur MapOut](https://tcrouzet.comhttps://tcrouzet.com/images_tc/2019/08/IMG_5661-253x450.jpg)

![Trace complète avec POI](https://tcrouzet.comhttps://tcrouzet.com/images_tc/2019/08/IMG_5662-253x450.jpg)

![Téléchargement gratuit des tuiles OSM](https://tcrouzet.comhttps://tcrouzet.com/images_tc/2019/08/IMG_5663-253x450.jpg)

![Visualisation 3D du relief](https://tcrouzet.comhttps://tcrouzet.com/images_tc/2019/08/IMG_5664-253x450.jpg)

### Note

Le bikepacking implique souvent de quitter les routes. Sans GPS, sans anticipation, il serait impossible d'effectuer la traversée Méditerranée-Atlantique à VTT. Improviser, c'est finir sur les routes. Utiliser des cartes n'est pas davantage viable sur de longues distances. Il faudrait des dizaines de cartes IGN, par ailleurs incomplètes pour le VTT. [Utiliser des services clé en main comme Komoot ou Locus n'est pas très sûr et ne procure en aucun cas la meilleure expérience possible](https://tcrouzet.com/2019/09/11/vtt-gravel-bikepacking-que-vaut-le-routage-automatique/). On me dit souvent que ma méthode est compliqué. J'aimerais en connaître une plus simple.

Tags: Born to Bike, GPS, une