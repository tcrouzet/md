# Projet bikepacking : Grand Tour de l’Hérault

En commençant à renseigner [la carte des traces bikepacking VTT en France](https://drive.google.com/open?id=1yhX8UbMwgdQmVS8TlahrtBmpcIwWLjAt&usp=sharing), j’ai découvert le très appétissant [tour de Charente à VTT](https://sportsdenature16.lacharente.fr/vtt/tour-charente-vtt), puis je me suis dit pourquoi ne pas faire la même chose dans nos autres départements. Alors je m’attaque à l’Hérault, et j’espère que [Patrick Lamarre](https://www.facebook.com/patrick.lamarre.94), [Jaywai Jaywai](https://www.facebook.com/jaywai.jaywai.5) et les autres bikepackers du coin m’aideront à préciser cette trace et à la tester au printemps prochain.

Voici comment je m’y suis pris pour ma première ébauche.

1. Pour la partie nord, j’ai utilisé le parcours de la [Grande Tarversée de l’Hérault](https://sitesvtt.ffc.fr/grandes-traversees/la-grande-traversee-de-lherault/), que j’ai par endroits croisé avec la [Via Toulosana](http://viatolosana.free.fr/vt_accueil.htm) et ma trace [Meditérranée-Atlantique](https://tcrouzet.com/2019/04/12/bikepacking-mediterranee-atlantique/) à la hauteur de la Salveta sur Agout.

2. Pour la partie ouest, de la Salveta à la mer, j’ai utilisé encore une fois un bout de la grande traversée, mais [le reste a été calculé par Komoot](https://tcrouzet.com/2019/09/11/vtt-gravel-bikepacking-que-vaut-le-routage-automatique/). Il faudra par la suite recouper cette trace avec celles des vététistes du coin et leur demander conseil.

3. Pour le bord de mer, je suis en territoire relativement connu, surtout entre Agde et Palavas. Sur cette partie les possibilités sont nombreuses, je me suis tenu assez près de la côte, bien que les meilleurs chemins VTT soient parfois un peu en retraits.

![GTH 1.0 sur Komoot](https://tcrouzet.com/images_tc/2019/09/gth-676x1200.png)

Cette première ébauche présente déjà des statistiques intéressantes avec 76 % de chemins et singles et seulement 16 % de routes, la plupart étant minuscules, le tout pour 550 km et 8 000 mètres de D+ ([stats Komoot](https://www.komoot.com/tour/94474341)). À titre de comparaison, le tour de Charente offre 65 % de chemins et singles, 30 % de routes, pour 667 km et 7 000 mètres de D+ (le dénivelé annoncé est de 10 500 mètres, donc bien supérieur à celui calculé par Komoot).

### Volet pratique (pour les geeks)

On me demande souvent d’expliquer plus en détail les différentes bidouilles pour ainsi créer des traces, celle-ci m’ayant en l’état demandé un après-midi de travail. En attendant une improbable vidéo, voici une esquisse de tutoriel.

Tout d'abord comment j'ai créé et met à jour [la carte de France](https://drive.google.com/open?id=1yhX8UbMwgdQmVS8TlahrtBmpcIwWLjAt&usp=sharing).

1. Depuis le menu de [Google Map/Vos adresses](https://www.google.fr/maps), je choisis l'option Cartes. Je peux ouvrir une carte existante ou en créer une, option disponible en bas de la liste des cartes.

![Gestionnaire de cartes](https://tcrouzet.com/images_tc/2019/09/gmap1.png)

2. Une fois une carte créée et nommée, je peux y créer des calques et dans ces calques je peux importer des traces au format GPX ou KMZ (l'option d'importation ne s'affiche que si le calque est vide).

![Un calque vide](https://tcrouzet.com/images_tc/2019/09/gmap2.png)

3. Une fois une trace importée, je la fais glisser dans un calque où je stocke toutes mes traces (le nombre de calques est limité à dix). Cette méthode d'archivage me permet de superposer des centaines de traces, donc de voir apparaître des boucles nouvelles. Goggle Map est l'un des seuls services de cartographie offrant cette possibilité.

![Superposition de traces](https://tcrouzet.com/images_tc/2019/09/gmap3-1600x841.png)

4. Chaque trace peut être colorée, illustrée, commentée (j'indique la source de la trace si je n'oublie pas).

5. Quand j'ai besoin d'une trace ou de plusieurs pour créer de nouveaux parcours, je les exporte (menu trois points verticaux situé à droite du titre de la carte). On peut exporter la totalité de la carte ou un calque en particulier. Pour exporter un choix de traces, je les déplace dans un calque vide (j'ai toujours un calque tmp dans mes cartes). L'exportation s'effectue en KMZ.

![Exportation en KMZ](https://tcrouzet.com/images_tc/2019/09/gmap4.png)

6. Pour utiliser les traces exportées dans un logiciel ou un GPS qui ne gère pas le KMZ, je les convertis avec [GPS Visualizer](https://www.gpsvisualizer.com/profile_input), qui en prime ajoute les informations d'altitude.

Voici maintenant comment je concocte une trace type GTH.

1. Je crée une nouvelle carte sur Google Map, j'y importe les traces qui m'intéresse, comme je l'ai fait pour [ma trace Méditerranée-Atlantique](https://tcrouzet.com/2019/04/12/bikepacking-mediterranee-atlantique/).

2. J'importe aussi la trace des [limites du département de l'Hérault](https://www.touraineverte.fr/kml-limites-contours-departement-34-HERAULT-france.html).

3. Sur Komoot, [je bouche les trous entre les traces](https://tcrouzet.com/2019/09/11/vtt-gravel-bikepacking-que-vaut-le-routage-automatique/) et exporte les fichiers en GPX, avant de les importer dans Google Map (en orange).

![Réseau de traces](https://tcrouzet.com/images_tc/2019/09/gmap5.png)

4. Quand mon réseau dessine le parcours désiré, j'exporte ma carte Google en KMZ et l'importe dans [Garmin Base Camp](https://www.garmin.com/fr-FR/shop/downloads/basecamp).

5. Pour mieux travailler sur Base Camp, je lui ajoute [la carte OSM de la France](https://www.freizeitkarte-osm.de/garmin/en/france.html). [L'installation n'est pas intuitive](https://www.freizeitkarte-osm.de/garmin/en/installation.html). Sur Mac, je décompresse le fichier téléchargé, puis l'installe avec [Garmin MapManager](https://www8.garmin.com/support/download_details.jsp?id=3825) (Fichier/Installer la carte…).

6. Sous Base Camp, je peux alors coudre mes traces pour créer la trace désirée.

7. Une fois la couture terminée, je transfère la trace à mon GPS ou l'exporte en GPX, pour l'importer dans Google Map et la partager.

![La trace sous Base Camp](https://tcrouzet.com/images_tc/2019/09/gmap6-1600x894.jpg)



Tags: 727, Born to Bike, GPS, une