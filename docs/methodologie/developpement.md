---
sidebar_position: 3
---

# Développement

## Afficher des templates

Dans le fichier d'exemple `server.py`, c'est une sortie en HTML brut qui est réalisée :

```python
from flask import Flask

app = Flask(__name__)


@app.route("/")
def home():
    return "<p>Hello, World!</p>"
```

La chaîne de caractères `"<p>Hello, World!</p>"` emploie un formatage HTML.

C'est fonctionnel mais pour réaliser des mises en forme plus complexes, on se retrouve très vite limité.

En effet, on a besoin d'une structure HTML de base égale pour toutes les pages : on parle de ***layout*** dans le domaine du développement web.

Un *layout* (en français *disposition*) est une page HTML structurée pour recevoir du contenu variable (corps de page). Le contenu de la page change en fonction d'où on se situe sur un site web, mais la structure (le layout) ne varie pas.

Par exemple, une entête avec un menu, un pied de page, sont des éléments qu'on peut intégrer dans un layout car ils restent souvent les mêmes, quelle que soit la page du site.

La première étape est de modifier le fichier `server.py` pour qu'il affiche des templates HTML (on parle de *rendering* en anglais) : [Rendering Templates](https://flask.palletsprojects.com/en/3.0.x/quickstart/#rendering-templates)

Le guide ci-dessus nous indique de faire 2 choses :

1. Modifier notre valeur retour de la sorte : 

```python
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("hello.html")
```

2. Créer un fichier `templates/hello.html` :

```html
<!doctype html>
<title>Hello from Flask</title>
<h1>Hello, World!</h1>
```

Par la suite, on redémmare le serveur avant de rafraîchir la fenêtre du navigateur : 

```shell
flask --app server run
```

## Éviter de devoir redémarrer le serveur à chaque changement

Le processus vu jusqu'ici impose de mettre fin au processus Flask (par la commande `CTRL + C`) et de le relancer pour qu'il prenne en compte les changements apportés aux templates et aux rendus.

Il existe une option pour permettre le *hot reload* (rechargement à chaud) afin d'éviter de devoir faire tout cela à chaque modification.

Il suffit de lancer le processus avec l'option `debug` par la commande suivante :

```shell
flask --app server --debug run
```

Pour la suite de vos travaux, il est donc conseillé d'utiliser cette commande là.

## Mettre en place un layout

Cette étape va permettre de tirer profit d'un fichier partagé possédant la structure du document HTML commun à chacune des pages de l'application.

Un document HTML doit respecter un certain formatage pour être syntaxiquement valide, indépendemment de l'aspect qu'il peut avoir dans le navigateur. C'est notamment important pour les robots d'indexation (moteurs de recherche) et les outils d'accessiblité (outils de lecture pour les mal voyants par exemple).


### Structure minimale

Voici la structure minimale à fournir :

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Titre du document</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  </head>

  <body>
    ...
  </body>
</html>
```

Le contenu de l'application, c'est à dire les informations qu'on apporte à l'utilisateur (textes, images, boutons, etc) sont à insérer dans la balise `<body></body>`.

Le layout de l'application va donc servir à encapsuler vos différents contenus dans cette balise.

### Création du layout

Il faut à présent créer un fichier employable par l'application Flask. On crée un fichier nommé `layout.html` dans le dossier `templates`.

```txt title="Aperçu de la structure du dossier du projet :"
sonate_pendu/
├─ templates/
│  ├─ layout.html
├─ .gitignore
├─ LICENCE
├─ README.md
├─ requirements.txt
├─ server.py
```

On renseigne la structure HTML attendue dans le fichier `templates/layout.html` :

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{% block title %}Sonate | Jeu du pendu{% endblock %}</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
  </head>

  <body>
    {% block content %}{% endblock %}
  </body>
</html>
```

### Création d'une page d'accueil

On crée à présent un template `home.html` pour la page d'accueil dans le dossier `templates` :

```txt title="Aperçu de la structure du dossier du projet :"
sonate_pendu/
├─ templates/
│  ├─ home.html
│  ├─ layout.html
├─ .gitignore
├─ LICENCE
├─ README.md
├─ requirements.txt
├─ server.py
```

Dans ce nouveau fichier, on doit fournir l'information qu'on emploie le layout précédemment créé avec l'instruction `{% extends 'layout.html' %}`, ainsi que la déclaration de `blocks` qui vont servir à Flask pour savoir où insérer les contenus.

```jinja
{% extends 'layout.html' %}

{% block title %}Accueil | Jeu du pendu{% endblock %}

{% block content %}
  <p>Contenu page d'accueil</p>
{% endblock %}
```

Ici, `{% block title %}Accueil | Jeu du pendu{% endblock %}` va remplacer le contenu de la balise du layout avec cette information pour la page d'accueil.

Au lieu d'afficher : 

`<title>Sonate | Jeu du pendu</title>` 

La page HTML affichera :

`<title>Accueil | Jeu du pendu</title>`

### Employer le template dans l'application

On doit à présent utiliser notre template `home.html` dans l'application Flask.

On ouvre `server.py` et on modifie la fonction `home()` :

```python
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html")
```

:::warning

Notez qu'on doit importer la fonction `render_template` de la bibliothèque `flask` lors de notre import, ce qui n'était pas le cas initialement :

```python
from flask import Flask, render_template
```

C'est la fonction qui est employée pour interpréter le template `home.html`.

:::


On redémmare le serveur pour prendre en compte les changements avant de rafraîchir la fenêtre du navigateur : 

```shell
flask --app server run
```
