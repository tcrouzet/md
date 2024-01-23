# Twiller cookbook

La très prolixe Anne-Caroline Paucot ([L'entreprise en 2020](www.entreprise2020.fr), [Le futur au présent](), [Des romans et des polars pour les entreprises](http://www.hyaka.com), [Dictionnaire du futur](), [Contes à inventer demain](http://www.contesainventerlefutur.fr)) veut lancer un twiller à plusieurs mains qu’elle voudrait reconstituer automatiquement sur un site.

Je lui ai proposé de partir de mon montage WordPress utilisé pour [Croisade](http://twiller.tcrouzet.com). [Le template et le plug-in TwitterTools modifié peuvent être téléchargé et installés normalement.](http://blog.tcrouzet.com/files_tc/twiller.rar) Mais c’est pas vraiment un système portable. J’ai bidouillé un peu partout pour que ça fasse ce que je veux. C’est un point de départ.

Pour que mon affaire fonctionne, il faut créer deux catégories sous WordPress. La catégorie Chapitres (cat\_ID=3 dans le code) rassemble les posts qui correspondent au chapitres reconstitués du livre. La catégorie (cat\_ID=4 qui peut être définie dans les options de TwitterTools) rassemble les twitts au fur et à mesure de leur publication.

Maintenant, il faudra qu’Anne-Caroline bidouille pas mal TwitterTools pour gérer le plusieurs mains. En fait elle voudrait créer un tag de type #twiller sur Twitter et récupérer tous les messages comportant ce tag si je comprends bien. Ainsi tout le monde pourrait participer sans rien demander.

C’est une super idée sauf que TwitterTools est fait pour récupérer les twitts d’un seul fil. Il faut donc à mon avis créer un tout autre plugin, ou partir d’un autre produit et y injecter mes fonctions (elles commencent par tc\_ et qui reconstituent le texte intégral en temps réel).

Je vous une difficulté technique. TwitterTools interroge le fil twitter à intervalles réguliers. Mais comment faire quand plusieurs personnes peuvent poster en même temps ? Un auteur ne sait jamais quand un autre vient de publier et donc les phrases risquent se caramboler. Une solution doit être possible mais je la vois pas. J'avoue que suis pas un expert de l'API Twitter.

Tags: Croisade, noepub, Twiller