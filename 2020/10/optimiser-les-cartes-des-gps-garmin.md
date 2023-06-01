# Optimiser les cartes des GPS Garmin

J’utilise un GPS pour suivre des traces, que ce soit en bikepacking, ou lors de randonnées organisées par des tiers, ou même lorsque je trace mes propres parcours. Mon problème : la plupart des cartes disponibles pour Garmin sont surchargées d’informations et de couleurs, et la trace se confond souvent avec elles, surtout en plein soleil, et la suivre devient alors difficile. J’ai donc décidé de créer une carte optimisée.<span id="more-55815"></span>

### Rendu avec carte Garmin

![Rendu Garmin](https://tcrouzet.comhttps://tcrouzet.com/images_tc/2020/10/newmap-garmin.jpg)

Selon moi, la carte fournie par Garmin est trop colorée pour le suivi de trace (ce serait possible si Garmin offrait la possibilité de calibrer la taille de la trace, ce qui n’est pas le cas sur mon nouveau 530 et ne l’était pas davantage sur mon 820). On ne peut que changer la couleur de la trace (et cela fastidieusement au coup par coup). Notez que la capture d'écran effectuée sur BaseCamp est très flatteuse.

### Rendu avec carte OSM new style

![Rendu OSM new style](https://tcrouzet.comhttps://tcrouzet.com/images_tc/2020/10/newmap-newstyle.jpg)

Jusqu’alors ma favorite, [la version OSM téléchargeable gratuitement](https://garmin3.bbbike.org/) reste quelque peu baroque, avec notamment des routes souvent colorées.

### Rendu avec ma carte

![Rendu OSM minimaliste](https://tcrouzet.comhttps://tcrouzet.com/images_tc/2020/10/newmap-minimalist.jpg)

J’ai donc créé une trace OSM minimaliste, sans POI, sans texte, sans couleur ou presque. Au passage, j’ai fait passer le fichier France de 1,6 Go à 320 Mo, tout en incluant les données altimétriques.

[Vous pouvez télécharger la carte](https://mega.nz/file/19FliI6a#sCYLfnpTCWx99PMWHVEUaq-IARhWUgK21BnswbvXXjQ) (je ne vous garantis pas de la mettre à jour souvent). Pour l’installer, copiez le fichier dans le dossier Garmin de votre GPS. Si une carte du même nom existe, renommez-là. Il vous reste à dire au GPS d’utiliser de préférence la nouvelle carte (ce qui revient à désactiver les autres). Attention, cette carte n'est pas routable et ne sert que lors du suivi de traces (sur les nouveaux Garmin on peut créer des profils avec des cartes différentes).

### Rendu avec carte IGN

![Rendu IGN](https://tcrouzet.com/images_tc/2020/10/newmap-ign.jpg)

Sur le Garmin 820, je n’utilisais pas l’IGN parce que l’affichage se traînait tout en manquant de précision. Avec le 530, c’est nettement plus fluide et le contraste de la trace est bien meilleur que sur les cartes Garmin ou OSM. C’est une alternative onéreuse à mon bricolage.

### Geek only

Je résume comment je m’y suis pris pour fabriquer cette carte, tout en faisant hurler le Mac (la même manip marche sous Windows).

1. [Installer Java](https://www.java.com/fr/download/).

2. [Installer Java SE Development Kit](https://www.oracle.com/java/technologies/javase-jdk15-downloads.html).

3. Créer un dossier de travail (dans mon cas *~/Documents/GarminMaps/tools/*).

4. [Télécharger dans le dossier *tools* la dernière source OSM pour France](https://download.geofabrik.de/europe/france.html) ([possibilité de télécharger les régions, les départements, d’autres pays…](http://download.openstreetmap.fr/extracts/europe/)). Ce fichier a pour nom : *france-latest.osm.pbf*.

5. [Télécharger Splitter](http://www.mkgmap.org.uk/download/splitter.html), un logiciel qui découpera la carte OSM pour que le Mac puisse la digérer.

6. [Télécharger Mkgmap](http://www.mkgmap.org.uk/download/mkgmap.html), un logiciel qui recollera les bouts et créera une carte au format Garmin.

7. [Télécharger les styles de la nouvelle carte](https://mega.nz/file/RplyUa7L#DZtAnF6QgfrxCWEquqLv0rAyeDAopUPBH-De1C_xscY) (voilà qui m’a pris la tête et je suis loin d’être devenu un expert du sujet). Reste pas mal de boulot à faire pour créer la carte optimale.

8. Décompresser le dossier *mystyle*. Il contient les fichiers texte qui contrôlent le rendu de la carte.

9. Ouvrir le terminal et aller dans *tools* avec un *cd /Users/thierrycrouzet/Documents/GarminMaps/tools/*.

10. Exécuter Spliter avec *java -Xmx3000m -jar splitter/splitter.jar --max-nodes=1100000 france-latest.osm.pbf --output-dir=outputsplit*. Ça prend un bon moment.

11. Exécuter Mkgmap avec *java -Xmx3000m -jar mkgmap/mkgmap.jar --style-file=mystyle --output-dir=output --no-net --product-id=1 --overview-mapname="OSM minimalist" --family-name="OSM minimalist" --series-name="OSM minimalist" --description="OSM minimalist" --area-name="OSM minimalist" --gmapsupp -c outputsplit/template.args*. C’est reparti pour au moins aussi longtemps.

12. La carte *gmapsupp.img* se retrouve dans le dossier *output*.

13. J’ai dû picorer des infos [ici](https://wiki.openstreetmap.org/wiki/FR:Mkgmap) et [là](https://github.com/ligfietser/mkgmap-style-sheets) ou encore [là](https://www.cferrero.net/maps/guide_to_mkgmap_style_files.html) avant de m’en sortir, et aussi en tâtonnant beaucoup.