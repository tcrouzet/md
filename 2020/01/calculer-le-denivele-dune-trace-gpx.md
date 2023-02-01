# Calculer le dénivelé d’une trace GPX

Quand on ne dispose que d’une trace numérique, surtout quand nous venons de la dessiner, il est important de connaître sa distance et son [dénivelé positif cumulé](https://fr.wikipedia.org/wiki/D%C3%A9nivel%C3%A9_positif_cumul%C3%A9) (D+). Comme de nombreux outils proposent d’analyser des fichiers GPX, j’ai décidé de les tester avec la trace du [727 (version 2020)](https://tcrouzet.com/727tour/).

Si à quelques exceptions près ces services s’entendent sur la distance à parcourir, environ 500 km, il n’en va pas de même pour le D+, tout simplement parce que [ces services utilisent différents jeux de données pour leurs calculs](https://www.gpsvisualizer.com/tutorials/elevation_gain.html), aboutissant à des résultats pouvant aller du simple au triple. Pas facile de savoir à quoi on s’engage quand on est un peu aventurier, surtout si c’est pour plusieurs jours en bikepacking. Voici un petit comparatif non exhaustif.

**Note** Tracé à la main, mon GPX comporte moins de 10 000 points. Ma trace est donc moins précise que si un GPS l’avait relevée. Pour un long périple, nous n’avons pas besoin d’une trace millimétrique, il nous suffit qu’elle nous indique où tourner. Elle peut par exemple éviter de traquer le moindre méandre d’un single. Pour le test, j’ai importé la trace dans OpenRunner qui l’a horodatée et lui a ajouté les informations altimétriques, avant de la réexporter. On peut aussi horodater et ajouter les informations altimétrique avec [GPSVisualizer](https://www.gpsvisualizer.com/convert_input).

### [gpxviz](https://gpxviz.sisao.de/), 499 km, 10 129 D+

![gpxviz](https://tcrouzet.com/images_tc/2020/01/cp-gpxviz.jpg)

[gpxviz](https://gpxviz.sisao.de/) se contente d’analyser les données altimétriques du fichier GPX. [Si on modifie ces données](https://www.gpsvisualizer.com/convert_input), on fait varier le D+ résultant, ce qui suffit à démontrer qu’une estimation du D+ sera toujours approximative (reste à trouver la meilleure approximation).

### Utagawavtt, 503 km, 9 500D+

![Utagawavtt](https://tcrouzet.com/images_tc/2020/01/cp-ugawata.jpg)

[Utagawavtt](https://www.utagawavtt.com/randonnee-vtt-gps/GTH-Grand-Tour-de-l-Herault-24330) n’est pas réellement un service utilisable à la volée, mais il calcule le D+ des traces partagées.

### [TrackReport](https://www.trackreport.net/), 503 km, 8 965 D+

![TrackReport](https://tcrouzet.com/images_tc/2020/01/cp-trackreport.jpg)

[TrackReport](https://www.trackreport.net/) interprète les données du GPX et propose des courbes colorées en fonction des pourcentages. On y découvre qu’au kilomètre 230 il y a une côte à plus de 18 %, ça va faire mal.

### [OpenRunner](https://www.openrunner.com/r/10886124), 503 km, 8 363 D+

![OpenRunner](https://tcrouzet.com/images_tc/2020/01/cp-openrun.jpg)

Avec [OpenRunner](https://www.openrunner.com/r/10886124), l’estimation devient réaliste (basée sur les données IGN). On peut analyser la trace dans le détail et découvrir les sommets à franchir.

### [MapMyRide](https://www.mapmyride.com/workout/3980380900/), 505 km, 8 357 D+

![MapMyRide](https://tcrouzet.com/images_tc/2020/01/cp-mapmyride.jpg)

[MapMyRide](https://www.mapmyride.com/workout/3980380900/) propose un estimation sans fioriture.

### [Strava](https://www.strava.com/routes/23392415), 520 km, 8 168 D+

![Strava](https://tcrouzet.com/images_tc/2020/01/cp-strava.jpg)

Par expérience, lors de mes sorties, [Strava](https://www.strava.com/routes/23392415) surestime de 10 % environ mon D+ par rapport à mon GPS Garmin, ce qui nous ramène presque exactement à l’estimation de Komoot, celle que j’ai annoncée pour le 727, prenant un peu de marge en disant 7 500 m. Bien sûr, mon Garmin peut se tromper, son baromètre peut être déréglé, peut-être nous risquons d’escalader 8 000 m ou 8 300 m, mais je doute que ce soit beaucoup plus.

**Astuce** Pour importer une trace GPX dans Strava, il faut d’abord l’horodater, par exemple avec OpenRunner ou [GPS visualizer](https://www.gpsvisualizer.com/convert_input).

**Attention** Strava se permet de modifier la trace quand il croit qu’elle est erronée. [Voilà pourquoi il ajoute une vingtaine de kilomètres au 727](https://www.strava.com/routes/23392415). Par exemple, dès le départ, il introduit un détour, alors qu’il existe un passage à vélo que je prends presque à chacune de mes sorties. Avantage toutefois, Strava ajoute de nombreux points, la trace colle aux chemins, donc est plus précise, ce qui à se traduit par une meilleure estimation du D+. Si je réinjecte la trace GPX téléchargée depuis Strava dans [gpxviz](https://gpxviz.sisao.de/), j’obtiens un D+ de 8 552 m, presque 2 000 m inférieur à celui calculé à partir de la trace version OpenRunner. Réinjectée dans [Trackreport](https://www.trackreport.net/), on obtient 8 328 m, soit 600 m de moins qu’avec la trace initiale (mais beaucoup plus de sections noires). Ce petit jeu démontre que la précision de la trace influence la précision du D+, ce qui est logique.

![Trace Strava via Trackreport](https://tcrouzet.com/images_tc/2020/01/stravarev.png)

### [Komoot](https://www.komoot.com/tour/109739816), 509 km, 7 440 D+

![Komoot](https://tcrouzet.com/images_tc/2020/01/cp-komoot.jpg)

[Komoot](https://www.komoot.com/tour/109739816), en plus d’être précis, permet d’analyser la trace tronçon par tronçon tout en obtenant leur D+. Idéal pour calculer la longueur des étapes et leur difficulté. Mais attention, avec l’option d’importation coller à la trace initiale, Komoot modifie malgrès tout le GPX, y ajoute des points et des détours, un peu comme Strava.

### Google Earth, 433 km, 6886 D+

![Google  Earth](https://tcrouzet.com/images_tc/2020/01/cp-google.jpg)

C’est un peu comme si Google Earth perdait un morceau de la trace, sous-estimant la distance et donc le D+.

### [Garmin](https://connect.garmin.com/modern/activity/4436345504), 503 km, 6 646 D+

![Garmin Connect](https://tcrouzet.com/images_tc/2020/01/cp-garmin.jpg)

La solution [Garmin](https://connect.garmin.com/modern/activity/4436345504) sous-estime le D+.

### [Bikemap](https://www.bikemap.net/), 416 km, 5 590 D+

![Bikemap](https://tcrouzet.com/images_tc/2020/01/cp-bikemap.jpg)

[Bikemap](https://www.bikemap.net/) réussit même à se planter sur le kilométrage.

### [Maplorer](https://maplorer.com/view_gpx.html), 503 km, 4 814 D+.

![Maplorer](https://tcrouzet.com/images_tc/2020/01/cp-maplorer.jpg)

[Maplorer](https://maplorer.com/view_gpx.html) sous-estime gravement le D+, calculé à partir des données Google, mais, intéressant, colore sur la carte les sections en fonction de leur altitude. Dispose aussi d’une fonction de visualisation 3D.

### [RideWithGPS](https://ridewithgps.com/routes/31751412), 503 km, 4 436 D+

![RideWithGPS](https://tcrouzet.com/images_tc/2020/01/cp-ride.jpg)

Autant je trouvais [RideWithGPS](https://ridewithgps.com/routes/31751412) excellent aux US, autant il est catastrophique par chez nous (le profil affiché est plus qu’approximatif). Reste que son interface est sans doute la plus aboutie. Comme avec Komoot, on peut calculer dynamiquement le D+ des zones sélectionnées.

### [MountPass](https://www.mountnpass.com/itineraire-velo/gth/), 503 km, 3 448 D+

![MountPass](https://tcrouzet.com/images_tc/2020/01/cp_mountpass.jpg)

[MountPass](https://www.mountnpass.com/itineraire-velo/gth/) est à côté de la plaque.

### [Tracedetrail](https://tracedetrail.fr/)

[Tracedetrail](https://tracedetrail.fr/) ne sait pas calculer le profil de longues traces comme celle du 727.

### [Veloviewer](https://veloviewer.com/)

J’ai découvert [Veloviewer](https://veloviewer.com/) un an après l’écriture initiale de cet article. Service couplé à Strava qui propose de magnifiques cartographies 3D. Pour utiliser la version gratuite à partir d’un GPX horodaté, le charger dans Strava, le convertir en itinéraire, puis dans Veloviewer le sélectionner.

![Veloviewer](https://tcrouzet.com/images_tc/2020/01/veloviewer.jpg)

### Bonus

Voici un mini comparatif [sur une sortie familière](https://www.strava.com/activities/3016369938), assez facile à étalonner. Départ au bord de l’eau, retour au même endroit, et des escalades régulières pour 800 de D+ (Komoot très proche de mon GPS).

![Comparatif](https://tcrouzet.com/images_tc/2020/01/compa.png)

Conclusion : nous ne pouvons pas connaître le D+ exact, mais obtenir une fourchette d’estimations réalistes à l’aide de sites comme OpenRunner, Strava et Komoot. Les D+ ne peut qu’être indicatif.

![Profil du mini comparatif](https://tcrouzet.com/images_tc/2020/01/testdplus.png)