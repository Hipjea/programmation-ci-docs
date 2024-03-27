---
sidebar_position: 1
---

# La demande du client

Nous sommes une entreprise qui propose des solutions pédagogiques numériques. Nous souhaitons nous doter d'une version web du [jeu du pendu](https://fr.wikipedia.org/wiki/Pendu_(jeu)).

Le jeu devra s'intégrer dans notre environnement technologique existant, ce qui implique :
- d'être développé en **Python 3**
- d'utiliser le framework **Flask**

## Principe

Le principe du jeu à développer est le suivant :

1. Sur la page d'accueil, l'utilisateur est invité à saisir son nom et à cliquer sur un bouton "Démarrer"
2. Le programme tire un mot aléatoire parmi une liste de mots que nous vous fournirons
3. Le mot tiré est présenté à l'utilisateur sous forme d'indices, c'est à dire qu'on lui montre le nombre de caractères à trouver sans divulger les lettres du mot
4. L'utilisateur dispose de 5 vies et voit un compteur de ses vies restantes à l'écran
5. L'utilisateur voit un bouton pour chacune des lettres de l'alphabet à l'écran
6. Lorsque l'utilisateur clique sur une lettre de l'alphabet, sa tentative est envoyée au programme
7. Le programme contrôle la lettre saisie et détermine si elle fait partie ou non du mot à deviner
8. Le résultat est affiché à l'utilisateur :
    - si sa tentative est incorrecte, on lui retire une vie et on affiche l'état de la potence
    - si sa tentative est correcte, on ajoute la lettre trouvée au mot à deviner
9. Lorsque le compteur de vie est épuisé ou que le mot est deviné, on affiche le résultat et le mot à deviner à l'utilisateur

## Récapitulatif

| Élément | Description |
|---------|-------------|
| **Nom du joueur** | On souhaite que le joueur puisse rentrer son nom sur la page d'accueil, lorsqu'il arrive sur le site. |
| **Mot à deviner** | Chacun des mots à deviner provient d'un fichier *dictionnaire* qui est fourni au développeur. |
| **Mot indice** | Le mot à deviner doit être présenté sous forme d'indices au joueur. Par exemple, si le mot est `âge`, on affichera `_ _ _` au joueur. |
| **Vies** | Le joueur dispose de 5 vies par partie. Lorsque le compteur arrive à 0, la partie est perdue. Chaque tentative infructueuse retire 1 vie. |
| **Interface de saisie** | Lorsque le joueur démarre une partie, il dispose d'une interface de saisie pour envoyer la lettre qu'il souhaite deviner. Idéalement, on lui propose une bouton par lettre de l'alphabet, sur lesquels il peut cliquer. |
| **Indices** | Lorsque le joueur trouve une lettre faisant partie du mot à devinier, on l'indique dans le mot indice en remplaçant le `_` par le lettre trouvée. Par exemple, si le mot est `âge`, on affichera `_ g _` au joueur qui à rentré la lettre `g`.
| **Écran de fin** | La partie est terminée lorsque le nombre de vies tombe à 0 ou si le mot à deviner est trouvé. On doit afficher si la partie est réussie ou perdue à l'utilisateur et lui proposer de lancer une nouvelle partie. |
