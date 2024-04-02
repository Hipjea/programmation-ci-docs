---
sidebar_position: 1
---

# Feuilles de styles CSS

Pour appliquer des feuilles de styles CSS (Cascading Style Sheets), on crée un fichier séparé pour les déclarer.

Pour ranger les choses proprement, on crée un dossier `static` à la racine du projet et on y crée un fichier `style.css` :

```
sonate_pendu/
├─ static/
│  ├─ style.css
├─ templates/
│  ├─ layout.html
├─ .gitignore
├─ LICENCE
├─ README.md
├─ requirements.txt
├─ server.py
```

### Fichier style.css

Dans ce fichier, on va commencer par importer une police personnalisée via l'API de Google.

Vous pouvez opter pour une autre en fonction de vos choix sur le site [https://fonts.google.com/](https://fonts.google.com/)


```css title="Fichier static/style.css"
/* Import d'une police de caractères via l'API de Google */
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');


body {
  font-family: "Luckiest Guy", cursive;
  font-weight: 400;
  font-style: normal;
}
```

Maintenant, on doit déclarer notre feuille de styles CSS dans le layout HTML :

```html title="Fichier templates/layout.html"
<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{% block title %}Jeu du pendu{% endblock %}</title>
  <!-- On insère la feuille de styles CSS par l'ajout d'une balise <link> 
       et on utilise url_for de Flask pour déclarer le chemin -->
  <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
</head>

<body>
  ... reste de votre layout ici ...
</body>
</html>
```

Si tout s'est bien déroulé, on peut recharger la page et constater que la police de caractères n'est plus la même.

### Structure d'une déclaration CSS

En relisant ce qui a été créé dans le fichier `style.css`, on peut déduire les éléments de syntaxe :

```css
body {
  font-family: "Luckiest Guy", cursive;
  font-weight: 400;
  font-style: normal;
}
```

**Les éléments de la syntaxe de base :**

- `body` est un **sélecteur CSS**
- on insère les règles de styles à appliquer au sélecteur entre crochets `{ }`
- `font-family`, `font-weight` et `font-style` sont des **propriétés**
- chaque propriété doit s'accompagner d'une valeur, déclarée après `:`
- chaque règle se termine par un point-virgule `;`

### Appliquer des styles aux titres

Maintenant qu'on connaît les règles de base, on peut aller plus loin.

Appliquons notre choix de police aux balises HTML de titres (`<h1>`, `<h2>`, etc.) et non à l'ensemble du document.


```css title="Fichier static/style.css"
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');


body {
  font-family: Arial;
}

h1, h2, h3,
h4, h5, h6 {
  font-family: "Luckiest Guy", cursive;
  font-weight: 400;
  font-style: normal;
}
```

On constate que l'on peut enchaîner plusieurs **sélecteurs CSS** en les séparant par des virgules.

Le `<body>` du document HTML emploie donc la police `Arial` sauf dans le cas des balises `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` qui emploient `"Luckiest Guy"`. On profite de cette étape pour noter que `<h1>` jusqu'à `<h6>` représente l'intégralité des balises HTML de type *headings*.

### Cibler plus précisément

On peut poursuivre et décider d'appliquer une couleur particulière à la balise de titre principale `<h1>` :

On va employer une **classe CSS** dans le document HTML.

```html title="Fichier templates/layout.html"
<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{% block title %}Jeu du pendu{% endblock %}</title>
  <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
</head>

<body>
  <!-- On ajoute l'attribut "class" à la balise <h1> pour lui attribuer une classe nommée -->
  <h1 class="title">Jeu du pendu</h1>
</body>
</html>
```

On peut maintenant cibler cette classe depuis notre feuille de styles :

```css title="Fichier static/style.css"
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');


body {
  font-family: Arial;
}

h1, h2, h3,
h4, h5, h6 {
  font-family: "Luckiest Guy", cursive;
  font-weight: 400;
  font-style: normal;
}

/* On emploie un sélecteur de classe en préfixant son nom par un point */
.title {
  color: #FF0000;
}
```

Si on a fait les choses correctement, on doit donc avoir la balise `<h1 class="title">Jeu du pendu</h1>` qui est affichée en rouge dans le navigateur.

`#FF0000` est le code couleur hexadécimal pour une nuance de rouge. Il en existe une multitude, que vous pouvez ajuster assez simplement via VSCode en cliquant sur le carré de couleur qui doit apparaître à côté du code HEX.

