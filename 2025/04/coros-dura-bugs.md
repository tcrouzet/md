# Le Coros Dura quasi inutilisable

![Duras planté](_i/2025-04-23-162558.webp)

À exactement deux semaines du départ du [o727 2025](https://727bikepacking.fr/727-Grand-Depart/), mon GPS Coros Dura m’inquiète, sa fiabilité laisse à désirer et Coros n’a effectué aucune mise à jour sérieuse depuis des mois. J’en veux aux influenceurs qui, durant 2024, ont vanté le Dura sans l’avoir testé. Bien heureux de ne plus subir leurs litanies mercantiles sur les réseaux sociaux (et je comprends pourquoi Coros a refusé de m’envoyer un GPS en test quand je le leur ai demandé en juin 2024 — l’honnêteté ne fait pas bon ménage avec le marketing).

En janvier, j’ai publié une [liste d’améliorations logicielles nécessaires pour que le Dura devienne un bon GPS pour l’aventure](https://tcrouzet.com/2025/01/24/coros-dura-bikepaxking/). Je leur ai envoyé le texte, ils m’ont dit qu’ils transmettaient à leurs développeurs et rien en retour, alors que si j’avais accès au code j’aurais effectué le job en quelques jours. C’est dire que ce produit n’est pas réellement suivi chez Coros et tous les acheteurs se retrouvent dans la plus grande incertitude.

Je ne vais pas revenir sur les déficiences déjà notées, mais compléter la liste.

### Blocage

Hier, je charge [la trace du o727](https://www.visugpx.com/fAPancmYz0?t=1) (646 km, 12 000 points, soit 1,5 Mo) et m’en vais en reconnaître le début. Je la quitte assez vite pour tester une variante et la trace finit par disparaître de l’écran. J’arrête l’activité, la relance, et le GPS se fige. Impossible de le débloquer. J’imagine la panique en bikepacking. Je ne réussis à reprendre la main qu’une fois chez moi (j’ai maintenu le bouton BACK appuyé jusqu’à ce qu’il se passe quelque chose — procédure qui n’avait pas fonctionné quand j’étais sur la trace). Voilà qui n’est pas rassurant. Ma sortie a néanmoins été enregistrée (tout fonctionnait normalement derrière l’écran figé).

![Boutons du Dura](_i/coros-buttons.png)

Quand j’explique la situation au support technique, ils me répondent très vite :

>1/ **Force Restart (Standard)**: Press and hold the CONFIRM button for at least 15 seconds.

>2/ **Alternate Attempt**: Hold down both buttons (CONFIRM + BACK) simultaneously for about 20–30 seconds.

Amusant : c’est exactement ce que j’ai fait sur le terrain, sans obtenir la moindre réaction du GPS (et c’est une longue pression sur BACK qui m’a tiré d’affaire).

Quand je demande au support quel est le nombre de points maximal pour un GPX, la réponse est amusante d’imprécision :

>The DURA can handle GPX routes with up to **200 waypoints** for optimal performance. While there isn't a hard limit on the number of points or file size, larger and more complex traces (e.g., very long distances or files exceeding 100MB) may slow down the device and potentially cause crashes, as you've experienced. For POIs (Points of Interest), there's no specific cap listed in our documentation, but keeping them reasonable within your route is recommended to avoid performance issues.

Ma trace qui ne comporte aucun waypoint (je n’ai jamais compris l’intérêt de ces trucs), aucun POI à ce stade et seulement 12 000 points pour 1,5 Mo n’aurait donc pas dû causer de problème, mais j’ai tout de suite senti le GPS ralentir furieusement. Avant le départ du o727, je découperai la trace pour éviter de faire chauffer le Dura, en espérant que ça tienne (reste à savoir ce que **reasonable** signifie).

Par la suite, le support Dura m’a pris pour un neuneu en me demandant si mon firmware était à jour (alors que leur appli effectue les mises à jour quasi automatiquement et qu’il est presque impossible de les rater).

### Trace terminée avant de commencer

Sur une trace qui commence et termine au même point, le Dura refuse parfois de lancer l’activité. Il me dit alors que j’ai atteint la fin du parcours. [J’ai eu ce problème en Espagne au départ de notre hôtel.](https://tcrouzet.com/2025/04/02/freiner-en-monte/) Heureusement que j’étais avec des copains équipés de Garmin. Je n’ai réussi à suivre la trace qu’une fois le départ et le retour séparés.

### Reroutage

![Of Route](_i/2025-04-24-111125.webp)

Le Dura ne dispose d’aucune fonction pour l’empêcher de nous dire que nous quittons la trace. Je rêve de pouvoir désactiver toutes les fonctions d’assistance. Je suis fatigué d’être pris pour un enfant. C’est insupportable. Je croyais que Garmin avait le pompon, mais Coros fait mieux dans la débilisation des utilisateurs. Tu payes pour un produit dont on ne te donne pas les clés.

![Re-route mode](_i/2025-04-24-124210.webp)

Quand je lance une trace, je dois, une fois que je l’ai sélectionnée, vérifier que je suis en Manual Re-route dans le menu Off-Route Settings. Ça évite qu’il m’impose un itinéraire, mais ça ne l’empêche pas d’afficher une boîte de dialogue dès que je quitte la trace. Il faut alors faire défiler le menu jusqu’à Cancel re-route, valider, ce qui n’empêche toujours pas l’écran de nous indiquer hors route, comme si nous étions aveugles et ne savions pas lire une carte (imaginez la manip dans un single à VTT). Fiche-moi donc la paix.

![Reroute](_i/2025-04-24-111447.webp)

D’une manière générale, le Dura n’aime pas que nous prenions des libertés avec la trace. Dès que nous nous en écartons, il perd ses moyens au point de parfois se paralyser (c’est très révélateur de la psychologie des développeurs derrière le produit).

### Trace inversée

Quand on s’amuse à prendre un bout de trace à l’envers, ce qui arrive souvent en bikepacking quand on revient sur ses pas, par exemple parce qu’on a repéré un point d’intérêt, le Dura finit par effacer la trace et ne la raffiche jamais. Il faut arrêter l’activité et tout relancer.

![Suite de la trace effacée](_i/2025-04-24-111857.webp)

### Zoom foireux

En début d’activité, il faut toujours zoomer manuellement pour arriver au zoom désiré, le zoom maximal pour moi parce que les autres niveaux n’ont aucune utilité. Le niveau maximal est censé être de 50 m. Dans la pratique, une section de 210 m sur le terrain occupe 31,5 mm sur l’écran, soit 6,67 m/mm sur écran. Le zoom est donc de l’ordre de 70 m, ce qui est très loin des 30 m souvent nécessaires pour un bon suivi des singles. Le zoom est d’autant plus défectueux que la cartographie est grossière et ne tient pas compte de la nature des terrains.

### Profil inversé

C’était encore en Espagne. J’ai eu droit à l’affichage des courbes de profils dans les descentes plutôt que dans les montées. Pas très utile (et surtout dangereux, car le profil masque 1/3 de l’écran alors qu’avec la vitesse nous avons besoin d’anticiper nos trajectoires).

### Non paramétrable

On peut se configurer des écrans, mais on ne contrôle pas grand-chose dans la pratique. En bas de l’écran, j’ai demandé l’heure, mais comme je suis dans le profil MTB, il m’indique à la place la distance du prochain POI (souvent le point d’arrivée). De même, quand j’attaque une grimpette référencée, il m’envoie à l’écran le profil, ce que je n’ai pas demandé. Le Dura décide souvent à notre place. Il nous prend pour des imbéciles.

Je partirai tout de même avec le Dura sur l’o727, en prenant un support Quadlock pour mon téléphone, en cas de défaillance. Si Coros avait l’intelligence de libérer son code et de nous laisser jouer avec, nous l’aurions déjà transformé le Dura en un merveilleux GPS. Si vous n’avez pas les moyens de développer le produit, offrez cette possibilité à la communauté.

#velo #gps #y2025 #2025-4-24-14h30
