# Comment suivre une trace GPS en bikepacking

L’affaire n’est pas aussi simple qu’il y paraît. Suivre une trace durant plusieurs jours en bikepacking ne se limite pas à maintenir une flèche sur une ligne au milieu de l’écran du GPS.<span id="more-58332"></span>

Une stratégie efficace implique :

1. De suivre la trace le plus simplement possible.

2. D’optimiser la consommation du GPS, surtout si on n’a pas de dynamo comme moi.

3. D’optimiser la réactivité du GPS, pour qu’il ne passe pas son temps à faire autre chose que nous guider.

4. De visualiser les points d’intérêt (POI/waypoints), par exemple pour ne pas manquer un point d’eau, qui peut se trouver à proximité de la trace.

5. De visualiser les variantes du parcours, par exemple pour éviter un secteur fréquemment inondé.

6. De trouver des itinéraires de secours, au cas où la trace s’avère impraticable, par exemple si les ronces l’envahissent ou une nouvelle barrière la bloque (parfois elles apparaissent du jour au lendemain, mésaventure constatée sur [mon tour du pays de Thau](https://tcrouzet.com/2020/12/14/gravel-le-tour-de-sete-agglopole-mediterranee/)).

Voici comment je m’apprête à résoudre ce cahier des charges [lors de la GTH](https://tcrouzet.com/gth/).

### 1. La qualité du fichier GPX

Il ne s’agit pas de juger du trajet, mais du fichier, à savoir du nombre de points qui le composent. Quand nous enregistrons une sortie, notre GPS sauvegarde un point tous les quelques mètres. Nous n’avons pas besoin d’autant d’informations pour suivre une trace. Il faut donc créer des fichiers allégés, sauf que les algorithmes de filtrage de traces que j’ai utilisés, notamment ceux de [Garmin BaseCamp](https://www.garmin.com/fr-FR/software/basecamp/), ne sont pas hyperefficaces. Je reconstitue donc les traces que je partage à la main. Loin d’être rébarbatif, cet exercice me permet d’étudier la carte en détail, souvent d’avoir des idées de nouvelles explorations.

Par exemple, la trace de la GTH, une trace VTT avec beaucoup de chemins et de singles, donc de tours et détours, nécessite moins de 10 000 points pour 530 km. Je pense que le ratio 10 000 points/500 km est un bon critère pour estimer la qualité technique d’une trace VTT ou gravel. Un GPS pouvant en général avaler une trace de 100 000 points, ça laisse de quoi voir venir, en un seul fichier.

Certains organisateurs d’évènements proposent des fichiers avec des ratios points/km beaucoup plus lourds, ce qui les oblige à segmenter leur parcours et nous impose de charger un nouveau segment quand nous en terminons un. Pour s’éviter cette corvée et ne pas s’occuper du GPS lors des voyages de plusieurs jours, il faut donc si possible utiliser un seul fichier optimisé. Je pense qu’il n’y a aucun problème à disposer d’un seul fichier pour la totalité d’une Tour Divide, par exemple (la trace totale étant ridiculement petite à cause des infinis bouts de droit).

Par ailleurs, une longue trace sans POI me paraît un travail ni fait ni à faire, surtout si elle est destinée à être partagée comme celle de la GTH et parcourue par des cyclistes de profils très différents. Quand j’effectue les reconnaissances, je découvre les points d’eau, les boulangeries, les restaurants… Il me paraît fondamental de les associer à la trace pour ne pas laisser les bikepackers dans le flou, par exemple en leur permettant d’estimer la quantité d’eau à transporter sur les différents secteurs. Je trouve d’autres POI en travaillant ma trace sur Google Map ou OSM (Open Street Map). Par exemple, OSM référence de nombreux point d’eau, mais de manière très incomplète. C’est en mixant diverses sources que j’enrichis ma carte avant le départ.

Des grincheux disent que l’aventure, c’est partir dans le flou. En plein été, je n’aimerais pas me retrouver sans eau sur les sommets de l’Espinouse ou au milieu du Larzac. Pour moi, l’aventure se prépare avec sérieux pour que je puisse la vivre avec le moins de pensées parasites. Aux US, j’ai vu des gars partir dans des raids sans se préparer et abandonner dès la première journée.

![Les POI essentiels sur la GTH](https://tcrouzet.com/images_tc/2021/03/gpsgth-07.jpg)

### 2. Ma solution de secours

Un GPS peut tomber en panne. Certains bikepackers partent avec deux GPS, just in case. Je ne suis pas aussi maniaque. J’ai mon téléphone en backup. Il peut me servir de GPS de guidage, mais m’offre bien plus de services qu’un GPS (pour un très long voyage, j’emporterais un support [Quad Lock](https://www.quadlockcase.com/) pour mon téléphone en plus du support GPS).

![Exportation KMZ depuis GoogleMap](https://tcrouzet.com/images_tc/2021/03/gpsgth-01.png)

Sur iPhone, je ne pourrais pas me passer de l’application [MapOut](https://mapout.app/). Avant tout voyage, je la charge avec la trace, ses variantes et ses points d’intérêt. Pour la GTH, j’exporte [la carte Google Map complète en KML](https://www.google.com/maps/d/edit?mid=1glqm485m-Oo25P1jFNsgr6k7Z5-bl8AD&usp=sharing). Pour cela, je clique sur les trois points à droite du titre de la carte et ouvre le menu où se trouve la commande d’exportation. Je choisis le format KML et attache le fichier généré à un mail que j’envoie à l’adresse à mon nom créée par MapOut. Je retrouve alors le tout sur mon téléphone, avec la possibilité de télécharger gratuitement les fonds de cartes OSM. MapOut m’aide a retrouver les points d’intérêt et à éventuellement découvrir des variantes, le tout en maintenant mon téléphone en mode avion. Je peux aussi analyser des secteurs en détails et visualiser leur profil.

![MapOut sur iPhone](https://tcrouzet.com/images_tc/2021/03/gpsgth-03.jpg)

En parallèle, j’ai longtemps utilisé l’application [TwoNav](https://www.twonav.com/fr/logiciels/app) sur laquelle je préchargeais les raster maps IGN (fichiers d’extension RMAP). Je la trouve lente, peu ergonomique, moins pratique que MapOut (transfert de fichier via FTP), mais parfois l’IGN est plus précise que l’OSM. En revanche, en cas de bug du GPS, TwoNav guide bien plus agréablement que MapOut. L’application peut-être connectée à de nombreuses plateformes de partage de traces (Wikiloc, GPSies, TraceGPS, OpenRunner, LaTrace, UtagawaVTT…). Pour suivre une trace si je n’ai pas de GPS ou le mien tombe en rade, je préfère toutefois Komoot (sur lequel je télécharge toujours ma trace avant le départ).

![TwoNav](https://tcrouzet.com/images_tc/2021/03/gpsgth-05.jpg)

À TwoNav, je préfère désormais [iPhiGéNie](http://xn--iphignie-f1a.com/), avec un abonnement pour la cartographie IGN. Cette app m’est surtout indispensable lors des reconnaissances. Je n’ai jamais eu à l’utiliser pour le guidage, même si d’après les copains elle fait très bien le job.

### 3. Configuration minimaliste

La suite est spécifique à mon Garmin 530, et d’une manière générale aux Garmin de la série 30. Bien que déjà familiarisé avec les Garmin, j’ai eu besoin de trois mois pour trouver une méthode qui me convienne pour les longues traces avec le 530. J’ai vite compris le problème lors d’une reconnaissance sur [la GTH](https://tcrouzet.com/gth/). Quand j’ai chargé la trace complète, mon GPS a mouliné durant près de 15 minutes d’avant d’être opérationnel.

En plus de plomber la batterie, ce calcul prépare le routage, de façon que le GPS puisse indiquer à l’avance quand tourner, alerter en cas de hors trace et ramener sur l’itinéraire. Entrer dans un sous-bois pour pisser suffit parfois à relancer un calcul. Pire, le 530 affiche en permanence sa trace de routage, en magenta, qui passe là où il lui semble judicieux de passer, snobant la trace désirée, tout cela parce que la cartographie Garmin ne connaît pas le magnifique single déniché par le traceur. En Gros, le Garmin tente de mimer un GPS automobile, sauf que je suis à vélo.

Pour éviter le problème des longs recalculs, beaucoup de bikepackers découpent leurs traces en segments. Encore une fois, je ne m’embête pas avec ça. Je démarre le GPS le matin et je pédale sans attendre. Je n’ai pas non plus envie qu’il recalcule chaque fois que je m’éloigne de la trace pour observer un point de vue, me ravitailler dans une boulangerie ou farnienter en terrasse de café. Si je sors de la trace, c’est que je le veux bien ou n’ai pas le choix. En général, je sais la retrouver en revenant sur mes pas, sinon j’utilise mon téléphone pour dénicher un chemin qui me convient, ne faisant pas confiance à l’algorithme de Garmin.

![Pas de recalcul sur mon Garmin](https://tcrouzet.com/images_tc/2021/03/gpsgth-04.jpg)

Si Garmin avait proposé tout simplement une option pour désactiver le recalcul d’itinéraire, je n’aurais pas pataugé durant plusieurs semaines avant de découvrir le bon stratagème.

1. Menu &gt; Settings &gt; Activity Profiles, je choisis mon profil, puis dans Navigation &gt; Routing, je fixe le Routing Mode à VTT, puis je désactive le recalcul du parcours quand je quitte la trace (cette option de désactivation n’est pas disponible avec tous les modes de routage, voilà pourquoi j’ai mis longtemps avant de la découvrir — il faut choisir un routage pour pouvoir désactiver le routage, je cherche plus à comprendre).

2. Menu &gt; Navigation &gt; Courses &gt; Course Options, je désactive Off Course Warnings, car cette option demande le recalcul de l’itinéraire même quand ce mode est désactivé. En général, je désactive aussi Turn Guidance.

Après ces réglages, [et bien d’autres](https://tcrouzet.com/2020/10/16/pourquoi-jai-rachete-gps-garmin/), ma trace s’affiche à l’écran et mon GPS me laisse tranquille. Le chargement d’un long parcours comme celui de la GTH est immédiat.

### Les variantes

Cette immédiateté est d’autant plus vitale si on veut suivre une variante. On peut arrêter la trace en cours, en charger une autre, la suivre, puis recharger la trace générale une fois arrivé au bout de la variante.

![Une trace en fond de carte](https://tcrouzet.com/images_tc/2021/03/gpsgth-06.jpg)

Mais comment savoir qu’il existe une variante ou un parcours pour éviter une difficulté ? Garmin propose une astuce intéressante (oui, c’est possible). Depuis le menu Find a Course, on choisi une trace et alors un menu s’affiche à partir duquel on peut lancer l’activité, mais aussi accéder au menu Settings qui permet de choisir l’option Always Dispay pour la trace choisie. Ainsi elle est toujours affichée à l’écran, même quand on ne la suit pas. On peut même choisir sa couleur. Elle se retrouve partie prenante du fond de carte. On voit ainsi apparaître les embranchements des variantes même quand on est sur la trace principale. On ne peut pas les confondre, car le trait est plus fin (un peu trop fin à mon goût).

### Le bon fond de carte

Garmin propose une carte OSM remachinée, que je n’apprécie guère. Je préfère rouler avec l’IGN en arrière-plan, parfois moins contrastée, mais qui facilite souvent le choix de la bonne voie lors des embranchements compliqués.

### Les POI

La plupart des GPS acceptent un nombre limité de POI/Waypoints, 200 pour les Garmin. Je ne charge sur mon GPS que les points d’eau et de ravitaillement, tous les autres étant disponibles sur MapOut.

La procédure n’est pas directe :

1. Depuis le Google Map de la GTH, j’exporte le calque KMZ correspondant aux POI à transférer.

2. J’ouvre ce fichier dans Garmin Base Camp.

3. Je le transfère vers le GPS, comme je le fais avec une trace ordinaire, mais en cochant l’option Waypoints.

Chez Garmin, les POI ne sont pas associés à la trace, mais au fond de carte, dont ils deviennent des repères, qui apparaissent quand on approche d’eux.

![Exportation des POI vers le GPS](https://tcrouzet.com/images_tc/2021/03/gpsgth-02.jpg)

En théorie, on peut envoyer en même temps la trace, les variantes et les POI au Garmin (mais chez moi cette procédure plante).

1. Depuis le Google Map de la GTH, exporter en KMZ la totalité de la carte.

2. Ouvrir ce fichier dans Garmin Base Camp.

3. Transférer le tout vers le GPS, comme pour une trace ordinaire, mais en cochant l’option Waypoints.

Tout cela reste bien compliqué. Les services de partage de traces, comme Komoot, OpenRunner ou UtagawavVTT ont encore beaucoup de progrès à effectuer. Suivant l’exemple de [RideWithGPS](https://ridewithgps.com/), service payant pour ses options les plus intéressantes, ils devraient accepter des traces avec POI pour commencer. Les créateurs d’épreuves pourraient ainsi rassembler leurs données en un seul endroit. Pour ma part, je continuerai à passer par Google Map tant que je n’aurais pas trouvé mieux.

J’avoue que je préfère me casser la tête avant le départ pour minimiser les emmerdes par la suite. Le minimalisme exige un long travail préparatoire, c’est le paradoxe.