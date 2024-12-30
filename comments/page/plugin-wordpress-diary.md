[Plugin Wordpress Diary 1.0](plugin-wordpress-diary.md)

---
nKoz @ 2008-09-01 11:50:10

Hello Thierry ! Ton plugin m’intéresse sacrément, n’ayant aucune intention de voir un jour disparaître totalement mon blog par l’effet d’une mauvaise manipulation quelconque.

Malheureusement, il déclenche chez moi une erreur fatale et WP refuse donc de l’activer. Fonctionne-t-il chez d’autres en WP 2.6 comme moi ? Si ce n’est pas dû à moi, prévois-tu de le mettre à jour ?

---

Thierry Crouzet @ 2008-09-01 12:15:47

Tu peux me coller le message d’erreur... si message.

Je tourne aussi sur la 2.6.

On va essayer de régler ça.

---

Koz @ 2008-09-01 12:31:07

Yeap. La voilà :

Parse error: syntax error, unexpected T\_STRING, expecting T\_OLD\_FUNCTION or T\_FUNCTION or T\_VAR or ’}’ in /home/autonoma/koztoujours/wp-content/plugins/wpdiary/wpdiary.php on line 20

Merci à toi

---

Thierry Crouzet @ 2008-09-01 13:46:50

Strange. Cette ligne est juste un init. Il devrait pas pouvoir y avoir de bug là. Tu peut ouvrir wpdiary.php et regarder ce que tu as ligne 20.

Normalement : private $rtf\_complete = false;

Une idée : tu as quelle version de PHP sur ta bécane ?

---

Koz @ 2008-09-01 14:18:33

C’est bien ce que j’ai.

Pour la version de php, no sé. 

Je suis hébergé chez OVH... Je ne sais pas ce qu’ils ont, eux. Si bien sûr je ne me trompe pas, et que la bécane en cause, c’est le serveur.

---

Thierry Crouzet @ 2008-09-02 08:59:43

Je vois pas... me faudrait des retours d’autres installs. Je fais un essai sur un autre blog.

---

Koz @ 2008-09-02 09:31:57

J’aimerais autant que ce ne soit pas le cas, mais il y a un risque aussi que ce soit un conflit avec d’autres plugins, non ?

---

ekevin @ 2008-09-30 11:56:23

Bonjour,

Ne serait-ce pas tout simplement php4 qui bloque sur le mot private ?

Je vois que le site qui essaye ce plugin est chez ovh... que wordpress est compatible php4 et qu’ il faut forcer dans un fichier .htaccess chez ovh l’ utilisation de php5 du genre :

SetEnv PHP\_VER 5

source : http://guides.ovh.com/Php5ChezOvh

---

Manu @ 2010-02-28 12:27:49

Bonjour. Brillant plug-in et unique en son genre. Nous aurions un gros besoin pour notre prochaine édition de notre dico http://www.ddvqm.com. Malheureusement, il manque, pour notre usage la mention de l’auteur ainsi qu’une disposition en colonne pour tri dans Excell. J’ai jeté un cil au code, mais là ca me dépasse. Pouvez-vous faire qqch ?

Avec nos salutations

ps. je crois que nous partageons un lien commun à traver Réunion des Hommes

---

Thierry Crouzet @ 2010-03-01 15:01:40

Pas trop difficile à faire... mais pas motivé à l’instant :-) Je termine mon Twiller en ce moment. Relancez-moi début avril (si pas trop tard) et je vous ajoute ces fonctions.

---

Manu @ 2010-03-01 15:09:37

Je vous remercie. Je vais faire une pré extraction "à la main". J’attendrai votre intervention pour la grosse exportation. Merci encore et des pensées de Sylviane Drevon...

---

