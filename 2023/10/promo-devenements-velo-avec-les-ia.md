# Promouvoir le vélo avec les IA

![i727](_i/poster01.webp)

Depuis un an, j’utilise de plus en plus les IA pour sortir de ma zone de confort et créer des contenus qui jusque là impensables pour moi. J’ai commencé par coder [Geogram](https://geogram.tcrouzet.com/) durant l’hiver 2023, puis par écrire un roman et j’en arrive à tenter de créer des images pour promouvoir l’[i727 du 8 mai 2024](https://727bikepacking.fr/727-Grand-Depart/) ([avant le g727 du 28 septembre 2024](https://727bikepacking.fr/g727-Grand-Depart/)).

Même si je commence à maîtriser l’art d’interroger les IA, même si j’ai expérimenté de nombreuses techniques de prompt, j’ai l’impression de tout devoir réapprendre depuis que j’utilise ChatGPT Vision (c’est-à-dire la version de DALL-E 3 intégrée à ChatGPT plus, [version payante](https://chat.openai.com/), ou à Bing, [version gratuite](https://www.bing.com/images/create)).

### Premiers prompts

>Une affiche pour une épreuve de bikepacking appelée 727.

![DALL-E 3](_i/dalle01.png)

![DALL-E 3](_i/dalle02.png)

Pour ChatGPT, bikepacking = énormes sacs à dos. De même quand j’utilise le mot VTT ou MTB. Je n’ai trouvé aucune technique pour me débarrasser de ces sacs à coup sûr. Et j’y ai passé des heures. ChatGPT lui-même m’a suggéré de préciser : "Please ensure there are absolutely no backpacks in the image", mais rien n’y change.

>Le bikepacking implique des vélos, avec les bagages sur les vélos et non sur le dos des cyclistes. Le départ du 727 sera donné le 8 mai 2024.

![DALL-E](_i/dalle03.png)

![DALL-E](_i/dalle04.png)

![DALL-E](_i/dalle05.png)

![DALL-E](_i/dalle06.png)

![DALL-E](_i/dalle07.png)

Le rendu des textes est aléatoire. Parfois, la retouche est simple sur Photoshop, souvent il est plus rapide d’ajouter la typo a posteriori.

>Le 727 est une épreuve VTT, sur les chemins. Bagages sur le vélo. Rien sur le dos des cyclistes.

![DALL-E](_i/dalle08.png)

![DALL-E](_i/dalle09.png)

![DALL-E](_i/dalle10.png)

![DALL-E](_i/dalle11.png)

![DALL-E](_i/dalle12.png)

Ce n’est jamais parfait, mais il y a souvent quelque chose d’intéressant. Si j’étais graphiste, ce serait une immense source d’inspiration. Mais comme je ne suis pas graphiste, il me faut trouver le prompt qui me donnera pratiquement une image prête à l’emploi. Comme le rendu des textes était trop aléatoire, j’ai tenté de faire sans.

>Generate an image for : Cyclists on a mountain path amidst tall pine trees, with mountains in the background (south of France). Two cyclists in the forefront are female, and two in the back are male. All wear helmets and carry bikepacking gear on their mountain bikes. A beautiful spring day in May.

![DALL-E](_i/dalle13.png)

![DALL-E](_i/dalle14.png)

![DALL-E](_i/dalle15.png)

Je me suis battu avec les sacs à dos jusqu’à perdre patience. Impossible de poser des sacs sur les vélos.

>Photo: 6 cyclists of various genders and descents pedaling through untamed grassy fields as the golden hour bathes the scene. In the distance, the horizon offers a slight view of water. The sky, filled with delicate pastel colors, contrasts with the long shadows from the setting sun. Format: 4/3. Localization: South of France pine forest.

![DALL-E](_i/dalle16.png)

![DALL-E](_i/dalle17.png)

### Prompts structurés

Avec ChatGPT, on peut uploader une image et demander de créer le prompt correspondant, et ainsi générer des images semblables.

>Illustration (4/3 format): An overhead view of a detailed illustration of bikepacking essentials. In the center, a rugged mountain bike with attached bags. Surrounding it, meticulously arranged gear including a water bottle, camera, GPS device, tent, sleeping bag, first aid kit, trail map, and various cycling and camping tools, all on a grass background.

![DALL-E](_i/dalle18.png)

Là encore, je me suis retrouvé avec d’énormes sacs. J’ai donc essayé de construire des prompts plus structurés.

>Create a detailed and visually appealing illustration showcasing essential items for bike packing. The image should include:
>A mountain bike equipped with gear bags, surrounded with tools and equipment beneficial for a long journey, such as a:
>Multi-tool.
>Pump.
>Camera.
>Water bottle.
>Camping mug.
>Compass.
>Notebook.
>Sleeping bat.
>Food container.
>First aid kit.
>Shoes suitable for biking.
>Map.
>Emergency light.
>Portable electronic device with GPS capability.
>Ensure that the items are spread around the bicycle in a balanced manner and are easily distinguishable. Add labels or a guide for clarity if necessary. The overall design should be minimalist yet informative, avoiding any baroque elements. The color scheme should lean towards earthy and muted tones.

![DALL-E](_i/dalle19.png)

Toujours impossible de faire apparaître des sacs sur le vélo et de virer les sacs à dos, mais j’ai continué de jouer avec ce genre de prompt.

![DALL-E](_i/dalle20.png)

![DALL-E](_i/dalle21.png)

![DALL-E](_i/dalle22.png)

![DALL-E](_i/dalle23.png)

ChatGPT a été incapable de se tenir à ma liste d’objets.

### Prompts avancés

J’ai continué avec une technique très puissante, découverte durant les derniers mois par les prompt engineers (ingénieurs de requête) : le [Chain of Thought System Prompt](https://www.allabtai.com/dall-e-3-prompts/) qui a été adapté pour les images.

>You are a professional Poster designer. Your task is to take the user IDEA, take a deep breath and create 4 very detailed prompts for the most intriguing Posters. The style of the Posters must always include the following steps:
>  1. Pick a fitting style.
>  2. Pick Elements/Objects + the short BIG TEXT(s).
>  3. The short BIG TEXT(s) in a BOLD matching font and max 4 words.
>  4. Use popping colors to make the Posters really stand out and pop out of the screen.
>  5. Use 4:3 format or 1700x1274 (very important).
>Here are your ASSIGNMENTS:
>  6. Create a long, very detailed list of individual ideas we must complete before we start working on the detailed prompts.
>  7. Complete all the ideas on the list in a step-by-step way.
>  8. When all the individual ideas are generated we can craft the perfect long and very detailed prompts for the 4 Posters. Always start with the style first, then the text and the Elements/Objects.
>  9. Explain in detail why these prompts will create a high click through rate (CTR).
>  10. Evaluate each prompt with a very critical eye, suggest improvements to increase details and make sure the 4 Posters really pop out of the screen.
>  11. Always ENSURE THAT THE ORDER IS CORRECT in the prompts (style, text, Elements/Objects).
>  12. Always ENSURE THAT THE FORMAT IS CORRECT.
>  13. Craft the new long very detailed prompts by following the suggested improvements
>  14. Create the Posters.
>Hello, My idea: somewhere in a south of France pine forest, mountain bikers travelers arrive on a small path above a lake, The BIG title text “i727” (very important) in a BOLD matching Font and BIG title text “8 mai 2024” (very important) at the bottom in a BOLD matching Font. The bikers don’t have backpacks. Gears stand on the bikes only.

L’idée est de faire jouer un rôle à ChatGPT, puis lui imposer des règles de fonctionnement. Là Encore, je me suis battu avec les sacs à dos, mais j’ai obtenu quelques images intéressantes.

![DALL-E](_i/dalle24.png)

![DALL-E](_i/dalle25.png)

Une fois que ChatGPT a appris un rôle, il suffit de lui envoyer des prompts bien plus simples.

>Hello, My idea: near the Salagou Lake in the south of France, mountain bikers travelers arrive on a small path above the lake, The BIG title text “i727” (very important) in a BOLD matching Font and BIG title text “8 mai 2024” (very important) at the bottom in a BOLD matching Font. Nothing on the back o riders. Gears stand on the bikes only.

![DALL-E](_i/dalle26.png)

![DALL-E](_i/dalle27.png)

Comme je ne m’en sortais pas avec des cyclistes en mouvement, j’ai eu l’idée de demander de représenter des campements. J’ai enfin obtenu quelques images sans sac à dos.

![DALL-E](_i/dalle28.png)

![DALL-E](_i/dalle30.png)

![DALL-E](_i/dalle31.png)

![DALL-E](_i/dalle32.png)

![DALL-E](_i/dalle33.png)

![DALL-E](_i/dalle34.png)

![DALL-E](_i/dalle35.png)

![i727](_i/dalle37.png)

![DALL-E](_i/dalle38.png)

![DALL-E](_i/dalle39.png)

![DALL-E](_i/dalle40.png)

![DALL-E](_i/dalle41.png)

![DALL-E](_i/dalle42.png)

Me reste beaucoup d’expériences à mener, notamment à essayer d’adapter un prompt du type du [Professor Synapse](https://github.com/ProfSynapse/Synapse_CoR) à la génération d’images. Mais avant d’aller plus loin j’ai essayé de généré des affiches pour le g727.

![DALL-E](_i/dalle43.png)

![DALL-E](_i/dalle44.png)

![DALL-E](_i/dalle45.png)

Toujours les mêmes problèmes avec les textes et les sacs à dos.

![DALL-E](_i/dalle46.png)

![DALL-E](_i/dalle47.png)

Un truc amusant : il n’y a jamais de pédales sur les vélos.

#727 #bikepacking #velo #y2023 #2023-10-17-17h27
