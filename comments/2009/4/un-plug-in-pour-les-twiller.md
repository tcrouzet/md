[Un plugin pour twiller !](../../../2009/4/un-plug-in-pour-les-twiller.md)

---
nCrouzet @ 2009-04-28 19:01:01

@TwitNovel Pour ceux qui sont sous WordPress, je viens de développer un plugin spécial twiller http://bit.ly/U5Iib

---

Anne- caroline @ 2009-05-04 20:10:33

Un grand merci Thierry. Je tente l’installation et je reviens de donner des nouvelles de mon affaire de twiller à plusieurs mains.

---

Anne- caroline @ 2009-05-05 16:03:18

Parse error: syntax error, unexpected T\_STRING, expecting T\_OLD\_FUNCTION or T\_FUNCTION or T\_VAR or ’}’ in /homez.131/sicelaco/www/wp-content/plugins/wp\_twiller/wp\_twiller.php on line 13

Voilà ce que cela donne lorsque j’active le plugin.

Ouppss, il y a visiblement un problème... J’ai repris le thème de Croisades et pourtant l’erreur demeure... Que dois-je faire ? Merci.

---

Thierry Crouzet @ 2009-05-05 17:15:10

Quelle version de PHP tourne sur ta machine ?

C’est la déclaration de variable qui merde.

---

Anne- caroline @ 2009-05-05 17:37:17

Super... J’ai mis un .htacess avec renvoi vers une version php 5 et hop, l’affaire est réglée. Merci. A plus pour la suite des aventures.

---

