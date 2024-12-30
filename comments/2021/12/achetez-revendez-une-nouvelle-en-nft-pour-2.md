[Achetez/revendez une nouvelle en NFT](../../../2021/12/achetez-revendez-une-nouvelle-en-nft-pour-2.md)

---
nancilevien74 @ 2021-12-26 15:29:38

J’ai voulu être le premier acheteur.

J’ai des eth sous la main, mais aucun sur un compte utilisable sur opensea.

Je crée un compte/wallet coinbase, je l’alimente par un transfert d’ETH ~20€ + 3€ de frais du réseau.

Et maintenant, il faut refaire un transfert sur la blockchain vers polygon avec 24 à 32 $ de frais de réseau pour 2.02$ à transférer ?

Peut-être je n’ai pas compris ce qu’implique le transfert d’un nft sur ethereum, mais je m’attendais à juste devoir faire une unique transaction de mon portefeuille d’origine vers un portefeuille spécifique géré par opensea pour ce nft.

Je n’étais pas au courant du niveau de frais actuel sur ethereum, il est vrai.

Mais donc bon, désolé, mais sans moi tant que ce n’est pas plus simple.

Pendant que j’y suis, une question sur la license des Silencieux.

Dans la partie Royalties : "Si l’acheteur commercialise l’œuvre sous forme de livres électroniques ou imprimés, il partagera ses bénéfices avec l’auteur."

Partager ça manque de précision.

Verser 0,01% et garder 99,99%, c’est un partage.

Peut-être pensiez-vous au partage 10%/90% de la phrase d’avant en cas de revente du nft. Mais si ce n’est pas clair, pas sûr que ce soit opposable.

Passez de bonnes fêtes.

---

Thierry Crouzet @ 2021-12-26 22:11:42

Tu as raison, c’est la merde ça. Je croyais que du moment qu’on avait des ETH on pouvait acheter. Je regarde ça.

---

Thierry Crouzet @ 2021-12-27 12:09:04

J’ai basculé sous la blockchain classique pour les ETH… du coup plus de frais.

---

ancilevien74 @ 2021-12-27 12:33:14

J’étais justement en train d’écrire un commentaire.

Aux niveaux de mes connaissances, je comprends relativement bien le fonctionnement d’une blockchain comme celle du bitcoin.

Je suis en phase d’exploration des smart contracts et des nft, je peux donc avoir des idées erronées sur le fonctionnement.

Une transaction standard d’eth (comme une transaction de bitcoin) aura toujours des frais de réseau, c’est ce qui dédommage les mineurs de leurs frais pour calculer les nouveaux blocs.

Je viens d’apprendre par exemple que les nft eth reposent sur les smart contracts.

La doc opensea explique l’intérêt de polygon car cela permet d’acheter ou vendre les nft sans frais. Polygon est lié à eth.

Maintenant, après avoir testé l’achat suite à votre modification, j’ai compris une chose.

Polygon utilise un smart contract, et l’achat d’un nft même directement en eth aussi.

Ce sont l’utilisation des smart contracts qui sont chers en ce moment à cause du prix du carburant (virtuel ?) pour le faire fonctionner.

Donc, transformer mes eth en polygon ou acheter directement le nft, cela nécessite de faire fonctionner un contract et c’est hors de prix (en ce moment ?).

Au contraire de la conversion en polygon, mon portefeuille eth coinbase wallet permet de modifier les paramètres d’exécution que j’autorise pour faire fonctionner le contrat qui correspondra à l’achat du livre/nft.

Les valeurs par défaut provoquent un coût de fonctionnement > 30$ pour une transaction de 2$.

Je n’ai pas encore réussi à trouver des réglages avec un surcout que je juge acceptable et qui soit accepté.

Le problème étant que moins on paie cher ce coût de fonctionnement, moins on est prioritaire, c’est normal, c’est le principe de fonctionnement.

---

ancilevien74 @ 2021-12-27 12:49:51

Apparemment j’ai réussi à lancer 2 fois l’achat ?.

J’ai raté un truc la première fois et je ne suis pas allé vérifier si une exécution était en attente.

Par contre j’ai clairement sous-payé les frais d’exécution donc je ne sais pas si quelqu’un considérera que c’est intéressant/rentable de faire tourner le contrat et donc de valider la vente.

Pour la seconde demande d’achat, normalement si la première est passée et donc le livre/nft a été transféré, opensea devrait refuser son exécution car le contrat n’est plus réalisable.

Au pire, ce n’est que 2€ et ça me permettra d’approfondir mes connaissances dans ce domaine.

Et si la demande d’achat expire au bout d’un moment (je ne sais pas comment ça marche de ce côté là, j’imagine que ça doit être configurable à la création du template de smart contract, là par opensea), j’essaierai à nouveau plus tard quand le réseau sera moins congestionné et donc moins cher.

---

Thierry Crouzet @ 2021-12-27 13:04:58

Merci, pour l’expérimentation de l’autre côté… J’ai noté un peu la même chose au moment de créer ma collection, les prix variaient d’un facteur 4… Tu nous diras combien te coûte effectivement la nouvelle.

---

Thierry Crouzet @ 2021-12-27 13:14:23

Pour les silencieux, c’est 50/50… je vais préciser

---

ancilevien74 @ 2021-12-27 13:44:26

Les 2 transactions d’achat.

Au moment de ce message, la 1e est en attente d’exécution, la seconde n’est pas encore trouvable par le site etherscan.io

https://etherscan.io/tx/0x4b32069349b73cf6374ed7db4f40bf9624d392dc82eac44062492c3ee7f70505

https://etherscan.io/tx/0xc55423b777ee0229a5acaada3a2f4bf63e944dfbd72b5a83402536889897478c

---

Thierry Crouzet @ 2021-12-27 15:13:10

On dirait que la première requête est passé de pending à dropped :-)

---

ancilevien74 @ 2021-12-27 15:52:39

La transaction 0x4b3… est repassée en pending sur etherscan.io. Je l’ai vu dropped sur etherscan.io avant d’écrire ce message. J’imagine que mon portefeuille l’a rediffusée.

La transaction 0xc55… elle est marquée en failed dans mon portefeuille. Apparemment elle n’a jamais été diffusée.

Je ne recommande pas coinbase wallet, il ne donne pas assez d’informations à mon goût.

Je vais jeter un œil à metamask que vous utilisez, et aux autres portefeuilles que permet opensea.

Pour le livre, on verra bien si la transaction 0x4b3… finit par être validée ou être définitivement dropped (ou un autre état). Je réessayerai sinon quand le prix du carburant aura baissé.

Et si quelqu’un achète le livre avant, je serai dans les acheteurs suivants.

Une question sur la remise en vente d’ailleurs, c’est un engagement moral, ou bien opensea permet d’obliger un acheteur à laisser un nft en vente avec des limites de prix (le max ×2 ici) ?

Idem pour les 10% sur les transactions, là j’imagine que c’est configurable lors de la création (mint) du nft sur opensea, mais ce n’est affiché nulle part.

Pour votre journal 2015-2021 sur mintable.app https://mintable.app/art/item/Crouzet-Diary-2015-2021-The-diary-convert-in-a-giant-painting-5mx5m/buKmUZJYsiO9bxn c’est clairement affiché.

---

Thierry Crouzet @ 2021-12-27 20:30:41

C’est moral, il n’y a aucune option pour ça. Un autre acheteur me dit qu’il a renoncé parce que la transaction lui revient à 70€!!!! Tu me dis si c’est le cas… faut que je trouve une autre plateforme, sinon l’idée de vendre très peu cher tombe à l’eau.

---

ancilevien74 @ 2022-01-02 10:21:12

Un article en anglais que je trouve intéressant sur ce qu’est un nft. Ça peut donner des idées pour le futur.

https://blog.erratasec.com/2021/03/deconstructing-that-69million-nft.html

---

