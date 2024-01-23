# Comprendre n’est pas prévoir

Depuis les Lumières, comprendre implique souvent prévoir. Newton découvrit comment prévoir les orbites planétaires. Laplace affirma la possibilité de tout prévoir. Ce dogme fut ébranlé par Poincaré en 1884 lorsqu’il montra l’impossibilité de solutionner analytiquement le problème des trois corps : nous avions beau connaître les lois de la gravitation, nous étions incapables de prévoir à long terme les orbites relatives de la Terre, de la Lune et du Soleil.

Aujourd’hui, nous comprenons de mieux en mieux les phénomènes complexes au point d’être capables de les simuler avec une grande fidélité. Par exemple, nous savons simuler la construction grain à grain d’un tas de sable. Nous comprenons donc ce qui se passe. Néanmoins nous sommes incapables de prédire la taille des avalanches qui se produiront.

Nous avons découverts que les avalanches suivaient une loi de puissance, nous avons découvert une structure, un pattern, mais il ne nous permet pas de prévoir l’avenir du tas de sable.

Dans le domaine social, nous savons simuler de nombreux comportements humains. Par exemple, nous comprenons pourquoi, lorsque beaucoup de gens marchent sur un trottoir, des lignes se créent. Si, pour éviter quelqu’un qui marche vers vous, vous faites un pas de côté et vous retrouvez derrière quelqu’un qui marche dans le même sens que vous, vous débutez une ligne. D’autres gens viendront la renforcer.

Dans les couloirs du métro, alors qu’aucune signalisation ne nous l’impose, nous marchons souvent en deux voies différenciées. Nous avons le don de nous auto-organiser et nous savons simuler ces comportements. Nous prévoyons que les lignes se forment, à partir de quelle densité de piétons elles se forment, mais, dans une situation particulière, nous ne savons pas à quel moment, ni où, ni combien de temps elles durent. Nous comprenons l’apparition de cette structure mais ne savons pas la prévoir, encore moins la contrôler.

### Zig-Zag-Zoug

Trois enfants forment une mêlée. Tête baissée, ils regardent leur pied droit qu’ils ont placé en avant. Soudain, l’un d’eux s’écrie « Zoug » et chacun doit alors choisir de retirer ou non son pied. Si un enfant n’a pas fait comme les deux autres, il est décrété chef.

En 1997, [prolongeant les travaux de Robert Axelrod](http://blog.tcrouzet.com/2007/05/24/le-dilemme-du-prisonnier/), Yi-Cheng Zhang et Damien Challet de l’Université de Fribourg découvrirent à l’aide de ce jeu comment des joueurs égoïstes pouvaient coopérer en l’absence de communication.

Ils utilisèrent une version généralisée du Zig-Zag-Zoug, appelée [The Minority Game](http://www.unifr.ch/econophysics/minority/). À chaque tour de jeu, les joueurs, peu importe leur nombre, doivent choisir entre A et B. Ceux qui optent pour le choix minoritaire l’emportent.

Ce jeu, comme le raconte [Mark Buchanan](http://pagesperso-orange.fr/mark.buchanan/indexMB.html) dans [*The Social Atom*](http://www.amazon.com/Social-Atom-Cheaters-Neighbor-Usually/dp/1596910135), livre que je vous recommande, reprend et simplifie un problème proposé par Brian Arthur. En 1992, cet économiste entra au Santa Fe Institute. Le vendredi soir, lorsqu’il quittait le centre de recherche spécialisé dans l’étude de la complexité, il traversait parfois la rue pour entrer au El Farol Bar. Certains jours, il y avait foule, certains autres non.

Arthur se demandait toujours s’il devait entrer ou non. Il se trouvait dans la même situation que l’enfant qui doit retirer ou non son pied. Entrer dans le bar bondé, faire le choix majoritaire, c’était perdre. Tous les clients faisaient face à ce dilemme.

Arthur imagina les stratégies qu’ils appliquaient pour décider d’aller ou non au bar, pour prévoir s’il serait bondé ou non, en se basant sur ce qui s’était passé les semaines précédentes. Exemples de stratégie :

- Il y a de vendredi en vendredi autant de clients.

- Si le bar n’est pas bondé trois vendredis de suite, il le sera la quatrième.

- Si le bar est bondé un vendredi, il ne le sera pas le suivant.

Arthur lista un grand nombre de stratégies, il supposa que chacun des clients en utilisaient une dizaine alternativement et qu’ils les testaient de semaine en semaine pour voir lesquelles étaient les plus efficaces. Il ne restait plus qu’à lancer une simulation numérique. Arthur découvrit que ses clients virtuels se comportaient comme les clients réels. La fréquentation du bar virtuel variait comme celle du El Farol à Sante Fe.

Les clients changent de stratégie en même temps qu’ils perçoivent la façon dont varie l’affluence. Ils se placent dans la minorité jusqu’à ce qu’elle devienne majorité et ils changent alors de stratégie. Les clients apprennent et s’adaptent.

Après la publication de ses résultats en 1994, Arthur se demanda s’il ne pouvait pas de la même façon simuler l’évolution des marchés boursiers. Avec ses collègues, ils imaginèrent des stratégies d’investissement et lancèrent de nouvelles simulations. Ils réussirent à reproduire les variations erratiques des cours. Plus étonnant, le jeu de stratégies utilisé importait peu, chaque fois la simulation était réaliste (ils retrouvaient les structures mises en évidence par Mandelbrot en 1963).

D’une certaine façon, Arthur venait de comprendre la Bourse puisqu’il était capable de la simuler avec une grande fidélité. Il avait aussi compris les traders et leur façon de fonctionner, sans avoir eu besoin de réellement entrer dans leur intimité. Lorsque des centaines d’agent autonomes interagissent, ils obéissent à des patterns qui dépassent leur particularité. Arthur prouva que la sociologie pouvait devenir une science pour peu qu’elle cesse de se centrer sur le moi.

### The Minority Game

Mais comprendre n’est pas prévoir. Arthur n’avait pas découvert une martingale imparable. En tout cas jusqu’à ce que Yi-Cheng Zhang et Damien Challet reprennent ses travaux à l’aide de The Minority Game. Ils découvrirent qu’il existait deux situations.

- Tant qu’il y a peu de joueurs, ils ont peu de chance d’utiliser toutes les stratégies possibles. Certains patterns ne sont pas vus, aucun joueur ne cherche à les exploiter, ils se maintiennent. Il existe alors une possibilité de prévoir l’avenir à court terme.

- Quand le nombre de joueurs augmente, ils finissent par découvrir toutes les stratégies possibles. Aucun pattern ne peut se maintenir, il n’y a plus de prévision possible.

En 1998, Neil Johnson, un physicien de l’université d’Oxford, découvrit cette propriété avec stupeur. Il se demanda s’il n’existait des poches de prévisibilité dans les marchés financiers. Il suffirait que peu d’acteurs interagissent sur un cours pour qu’il soit ponctuellement prévisible, laissant certains patterns se perpétuer.

Johnson assigna des stratégies à des agents autonomes jusqu’à ce que ses simulations reproduisent les fluctuations du New York Stock Exchange. Lorsque des poches de prévisibilité apparaissaient, il réussissait à anticiper de quelques secondes les cours du Yen par rapport au dollar. Bien sûr, une fois la stratégie de Johnson connue, les traders l’adoptèrent, réduisant d’autant la durée de vie des poches de prévisibilités.

J’ai effectué ce long détour pour montrer que l’avenir était imprévisible dès que nous sommes dans des situations complexes, situations où les patterns ne se maintiennent pas.

Par chance, certains patterns réussissent à se maintenir. L’auto-organisation peut parfois s’ancrer, se renforcer, résister à l’influence de nombreuses variations, maintenant le monde dans une certaine stabilité. Lovelock supposa ainsi que Gaia régulait sa température pour la stabiliser au seuil idéal pour la vie. Mais hors de quelques poches de stabilité, souvent découvertes par hasard par quelques heureux joueurs, l’avenir nous est inconnu.

Ce grand blanc devant nous n’empêche pas les oracles de faire feu de prédictions en tous sens. D’ailleurs, moins nous comprenons une chose, plus nous cherchons à la prévoir. C’est étrange mais explicable. Comme personne ne comprend, personne ne peut démontrer aux oracles qu’ils délirent, alors ils s’en donnent à cœur joie, nous faisant croire que prévoir est possible, qu’en conséquence une sorte de vie rationnelle serait possible, confortant les positions conservatrices.

Je crois au contraire que, comme nous ne pouvons pas prévoir notre avenir, nous ne pouvons pas organiser notre vie de manière rationnelle. Nous n’avons pas d’autres choix que de prendre des risques. Nous sommes des joueurs, des intuitifs, des détecteurs de patterns, des artistes.

Tags: Connecteur, imprevisibilité