[WordPress 4.3 joue avec le feu](../../../2015/8/wordpress-4-3-petite-arnaque-au-passage.md)

---
nJeremy @ 2015-08-20 13:09:09

Bonjour Thierry !

Je travaille chez Automattic, l’entreprise en charge de l’extension Akismet.

Désolé de voir que vous avez rencontré quelques problèmes lors de la mise à jour vers WordPress 4.3. Akismet ne devrait en effet pas se désactiver lors de la mise à jour vers une version plus récente.

Si vous le souhaitez, vous pouvez nous contacter afin que nous essayions de comprendre ce qui s’est passé, et régler ce problème dans une prochaine version d’Akismet.

http://akismet.com/contact

Pour ce qui est de ce problème avec le champ CB dans le tableau de bord Akismet, nous sommes actuellement en train de remodeler l’ensemble du tableau de bord. D’ici quelques semaines, ce genre de confusion devrait disparaître !

Pour ce qui est de Markdown, il est bon de noter que WordPress ne supporte pas encore l’ensemble de la syntaxe Markdown; seuls quelques types de format sont acceptés pour le moment :

https://codex.wordpress.org/Version\_4.3#Posts

Si vous utilisez Markdown dans tous vos articles, il est fort probable que vous utilisiez des éléments de syntaxe que WordPress ne gère pas encore. Je pense qu’il serait donc plus simple de continuer à utiliser votre extension Markdown pour l’instant.

De plus, et comme vous l’avez remarqué, ce support de Markdown est ajouté directement dans TinyMCE, l’éditeur de texte intégré à WordPress. Lorsque vous utilisez cet éditeur par défaut votre syntaxe Markdown sera transformée en HTML, mais dès que vous utilisez un autre éditeur pour rédiger vos articles, rien ne sera pris en compte. Dans ce cas, il est donc préférable d’utiliser une extension qui va prendre en compte la syntaxe Markdown lors de la sauvegarde des articles, et non pas simplement lors de la rédaction.

---

Thierry Crouzet @ 2015-08-20 13:53:57

Heureux de voir que vous allez clarifier l’interface Akismet...

Les choses se sont passées comme décrites dans l’article.

J’ai découvert que ma clé était désactivée suite à la mise à jour 4.3 (elle devait avoir pas loin de dix ans l’ancienne). Quand j’ai voulu la réactiver, je suis tombé sur l’écran CB... et je n’ai même pas vu au départ qu’on pouvait ramener la somme à zéro... sinon je n’aurais même pas écrit cet article.

Il me paraît important que l’option gratuite soit clairement identifiée...

Oui, pour Makdown j’ai bien compris que c’était comme ça... ça serait bien de pousser la logique plus loin... TinyMCE est une antiquité, plus personne ne devrait utiliser un truc pareil... écrire directement en Markdown est plus rapide, plus intuitif :-) le wysiwyg est old scool. WP devrait pouvoir sauver en texte brut et non en HTML.

---

Jeremy @ 2015-08-20 14:09:30

Afin que nous puissions essayer de reproduire le problème, pourriez-vous répondre à ces quelques questions, soit via le formulaire de contact soit ici ?

- Comment avez-vous mis votre site à jour ?

- Pourriez-vous aussi me dire quelle était la version installée sur votre site avant la mise à jour ? 4.2.4 ?

- Quelle est la version d’Akismet installée sur votre site actuellement ?

- Avez-vous rencontré le problème sur ce site ou sur un autre ?

- Avez-vous reçu un message d’erreur après de la mise à jour, ou lorsque vous avez chargé la page de configuration d’Akismet ? 

Merci !

Pour ce qui est de Markdown et de TinyMCE, bien que Markdown soit attractif pour quelques personnes, cela reste tout de même un langage qui a été créé il y a plus de 10 ans et qui n’est jamais devenu vraiment populaire. Bien que quelques personnes comme vous et moi l’utilisions chaque jour, une majorité de personnes ont encore besoin de boutons clairs pour mettre leurs articles en forme.

Une grande partie de ces personnes ont aussi besoin de certains formats de mises en forme qui ne sont pas vraiment gérés par Markdown, comme les couleurs, les liens sur les images, ou les attributs de lien par exemple.

Pour toutes ces raisons, je ne pense pas que TinyMCE soit prêt de disparaître. :) Mais heureusement, ce ne sont pas les extensions et les apps qui manquent pour tous ceux parmi nous qui veulent utiliser un autre éditeur, ou qui veulent changer le comportement par défaut de l’éditeur de WordPress !

Je me contente personnellement de l’éditeur HTML de WordPress. Couplé au mode anti-distraction de WordPress et au module Markdown de l’extension Jetpack, je trouve que c’est un éditeur agréable pour mes besoins.

---

Thierry Crouzet @ 2015-08-20 14:20:37

C’est pas parce qu’une chose à dix ans qu’elle n’est pas bien :-)

Mais c’est pas le sujet.

J’ai jamais utilisé autre chose que plain text sur WP... même en HTML... défaut de codeur

J’avais la dernière version de WP (je suppose la 4.2.4), les mises à jour s’effectuent d’habitude automatiquement.

J’ai lancé celle-ci manuellement avec le bouton upgrade...

Akismet 3.1.3

Sur ce site, suis pas allé voir les autres WP...

Aucun message d’erreur.

---

Jeremy @ 2015-08-20 14:27:12

Ok, merci pour les détails ! Nous allons essayer de reproduire le problème, et fixer le bug dans la prochaine version d’Akismet.

Les mises à jour automatiques ne sont activées que pour les versions mineures de WordPress par défaut, il est donc normal que vous ayez dû utiliser le bouton Upgrade cette fois-ci.

---

Jeremy @ 2015-08-20 14:43:50

J’ai réussi à reproduire le problème sur un de mes sites de test.

Première étape vers un fix: check! :)

---

Thierry Crouzet @ 2015-08-20 14:49:20

Super... au moins ma mésaventure aura servi à quelque chose... j’étais pas loin de penser au complot :-)

---

Jeremy @ 2015-08-20 16:00:00

Pourriez-vous utiliser le formulaire de contact pour nous envoyer votre clé API Akismet ? Nous aimerions confirmer que le fix sur lequel nous travaillons aurait marché avec votre clé.

Merci !

---

Seb Guillet @ 2015-08-21 12:37:23

Akismet patauge en effet depuis quelques semaines. Plus moyen pour un primo-inscrivant de créer un compte sans CB. Je l’ai remplacé très avantageusement par Antispam Bee. C’est parfait, paramétrable et il y a moins d’étapes pénibles.

Je suis frustré depuis que WP intègre le mode Distraction-Free parce que je le trouve bien moins agréable que certains plugins qui désormais sont inactifs. Il reste ’Just Writing’, qui est pas mal.

Ah, il nous faudrait un module spécial "auteurs" pour WP, avec interface dédiée ! :-)

---

Jeremy @ 2015-08-21 12:48:19

@Seb Guillet Comme Thierry le souligne dans son article, il suffit de faire glisser le slider vers 0 pour faire disparaitre l’option CB.

Si ca ne fonctionne pas, et qu’Akismet vous intéresse encore, envoyez-nous un email. J’ai publié le lien vers notre formulaire de contact dans un commentaire précédent.

Pour ce qui est des interfaces dédiées aux auteurs, il y en a plusieurs sur le marché actuellement. Vous pourriez essayer une app comme StackEdit, ou Ulysses, ou Splitdown, l’éditeur de WordPress.com. Il y a aussi Mou ou iA Writer, qui ne permettent cependant pas de publier vers WordPress nativement, il vous faudra donc copier / coller, ou créer des macros pour faire le transfer à votre place.

---

Jeremy @ 2015-08-21 12:49:39

@Seb Guillet Comme Thierry le souligne dans son article, il suffit de faire glisser le slider vers 0 pour faire disparaitre l’option CB.

Si ca ne fonctionne pas, et qu’Akismet vous intéresse encore, envoyez-nous un email. J’ai publié le lien vers notre formulaire de contact dans un commentaire précédent.

Pour ce qui est des interfaces dédiées aux auteurs, il y en a plusieurs sur le marché actuellement. Vous pourriez essayer une app comme StackEdit, ou Ulysses, ou Splitdown, ou l’éditeur de WordPress.com. Il y a aussi Mou ou iA Writer, qui ne permettent cependant pas de publier vers WordPress nativement, il vous faudra donc copier / coller, ou créer des macros pour faire le transfer à votre place.

---

Seb Guillet @ 2015-08-21 12:55:05

@Jeremy. En effet le slider permet de créer un compte "comme avant", mais cela devient de plus en plus tordu... c’était le sens de mon message. 

Oui, il y a pas mal d’applis ou logiciels mais j’aime bien auto-héberger mes activités d’écriture ;) Il y a ZenPen aussi par exemple, mais sans le markdown, cher à Thierry.

Merci pour les conseils ;)

---

Seb Guillet @ 2015-08-21 13:01:04

Correctif: Si si zenpen permet l’export en markdown (je n’utilise que le txt). Au temps pour moi.

---

