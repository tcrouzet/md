# Optimiser le Lenovo Yoga 2 Pro

Le Lenovo est extraordinaire. Je suis sans réserve, je n’ai jamais eu une machine aussi sensuelle entre les mains, ne serait-ce que par la délicatesse de l’écran 3200x1600. Quant à la fonction « Transformer », elle m’est déjà indispensable. Reste que par sa nouveauté, son avance, la machine demande pas mal de doigté au moment de la prise en main.

Ce billet est destiné à évoluer au fur et à mesure que ma pratique du Yoga progressera. J’essaierai de consigner mes réglages et optimisations, pour les partager, aussi par mesure de sécurité si je devais un jour réinstaller de zéro.

### Bios

Quand j’ai touché au clavier pour la première fois, j’ai découvert avec agacement que les touches de fonction étaient recouvertes par les touches systèmes. Par exemple, un F1 coupe le son.

Pour revenir au mode habituel, il faut passer par le Bios, mais la machine boote si vite qu’il n’est pas question de saisir un raccourci pour y accéder. J’ai fini par découvrir, à côté du bouton de mise sous tension, une minuscule verrue sur laquelle on peut appuyer avec la pointe d’une clé pour que la machine au démarrage nous envoie dans le Bios. Et de fait, j'ai remis d'aplomb les touches de fonctions.

### Windows 8.1

Je suis incapable d’utiliser l'OS Microsoft sans l’utilitaire [Start8](http://www.stardock.com/products/start8/) qui me déroule un menu Windows old style. Ce n’est qu’ainsi que je lance simplement mes logiciels, accède au panneau de config ou à la commande Exécuter.

Le Lenovo boote en quelques secondes, tout ça pour voir Windows demander systématiquement un mot de passe. Je ne supporte pas. Pour virer cette mesure de sécurité débile, contournable par qui cherche deux secondes sur le Net, il faut exécuter la commande « control userpasswords2 » et décocher l’option.

![control userpasswords2 ](https://tcrouzet.com/images_tc/2013/11/lenovo2.png)

Mais comme souvent avec Microsoft, cette mesure est incomplète. Il faut aussi aller dans les options de gestion de l’énergie et décocher la demande du mot de passe à la sortie du mode veille.

![Pas de mot passe](https://tcrouzet.com/images_tc/2013/11/lenovo3.png)

### Écran

Je le savais avant d'acheter, l'écran a beaucoup de mal avec les jaunes, même après une première mise à jour du BIOS. Assez rageant quand je dessine ou manipule des images. Encore un espoir de voir un correctif logiciel, cet écran étant le même que celui du Samsung AtivBook 9 qui lui n'a pas de problème de jaune.

Vu la densité de pixel, 275 dpi, il faut tout grossir, le mode 225nbsp;% s’impose pour mes vieux yeux. Certaines applications comme Office ou InDesign en tiennent compte, d’autres pas encore comme Photoshop ou Antidote. Ce qui force parfois à revenir à une résolution plus classique pour un 13,3". J'espère que tout ça évoluera vite côté éditeurs, car cette jonglerie est plutôt désagréable.

![Zoom](https://tcrouzet.com/images_tc/2013/11/lenovo4.png)

La luminosité de l’écran répond à celle de l’environnement : problème l’écran influence cet environnement et cherche en permanence à s’ajuster à lui-même, surtout si on passe d’un fond noir à un fond lumineux. C’est pénible. Je ne vous dis pas dans le train.

Pour se tirer d’affaire, il faut ouvrir *Panneau de configuration\\Matériel et audio\\Options d’alimentation\\Modifier les paramètres du mode de gestion de l’alimentation* et désactiver la luminosité adaptative, cela pour tous les modes de gestion utilisés.

![Stabiliser l'affichage](https://tcrouzet.com/images_tc/2013/11/lenovo1.png)

### Chrome

J’ai bataillé avec le navigateur de Google. Les sites commencent par apparaître trop petits. Dans les paramètres, tout en bas, paramètres avancés, il est possible de régler le zoom sur toutes les pages. Le plugin [Zoom All](https://chrome.google.com/webstore/detail/zoom-all/bcdohnadaogihannocnmahifljmhdkoe) permettait de faire la même chose mais il n'est plus utile.

Presque tous les plugins ne supportent pas la mise à l’échelle (les 200 % de Windows). La plupart sont inutilisables. J’ai fini par basculer sur [Chrome Canary](https://www.google.com/intl/fr/chrome/browser/canary.html), la version alpha développeur, qui gère parfaitement la mise à l’échelle (toutes ces fonctions seront bientôt sur le Chrome standard).

Au passage, je découvre que les polices bavent. Pour régler ce problème, il faut activer une fonction cachée ([high-dpi-support](chrome://flags/)). Deux autres options améliorent la prise en compte du tactile : [touch-optimized-ui](chrome://flags/) et [touch-events](chrome://flags/).

### Bruit

Le ventilateur a la fâcheuse habitude de se mettre en route à 45° et de faire un bruit épouvantable (j'ai justement changé d'ordi parce mes deux anciennes machines me cassaient les oreilles). Les critiques lues avant l'achat ne m'avaient pas préparé à ce tumulte. Tout va bien au début, mais au fur et à mesure que j'ai ajouté des logiciels, ça s'est aggravé. Heureusement, il existe une solution : [NoteBook FanControl](http://www.computerbase.de/forum/showthread.php?t=1070494). Ce logiciel ne démarre le ventilateur que vers 58°. Pour le configurer, utilisez [le profil créé pour le Yoga 1](https://skydrive.live.com/?cid=ea2d96343f2fe4b6&id=EA2D96343F2FE4B6%214059&authkey=!AMCMtsEjpVHMnEY) en attendant une version plus spécifique.

### Tunning

![Intel Extreme Tunning](https://tcrouzet.com/images_tc/2013/11/lenovo5.png)

[Pour augmenter l’autonomie et les performances](http://forum.notebookreview.com/ideapad-essential/735546-undervolting-unleashing-thermal-headroom-yoga-pro-2-a.html), il faut optimiser les réglages du processeur avec [Intel Extreme Tuning Utility](http://www.intel.fr/content/www/fr/fr/motherboards/desktop-motherboards/desktop-boards-software-extreme-tuning-utility.html) (lancer l’installation en mode administrateur). Au préalable, il faut désactiver dans le bios le mode DPTF (Dynamic Platform &amp; Thermal Framework), sinon les réglages sont effacés à chaque boot.

Max turbo boost power : 25 W (qui, si j’ai bien compris, augmente la puissance).

Processor cache voltage offset, Dynamic CPU voltage offset et Processor Graphics voltage offset : -60 mv (réduit la consommation et augmente la durée de vie de la batterie).

Pour approfondir, lire les [forums Lenovos](http://forums.lenovo.com/) et le fil de [notebookreview.com](http://forum.notebookreview.com/ideapad-essential/735166-yoga-2-pro-owners-thread.html).

Tags: Cuisine, Lenovo, une