---
sidebar_position: 4
---

# Pistes pour la conception

## Navigation

Un document HTML permet de faire des liens entre pages par le biai de liens :

```html
<a href="/play" name="Jouer">Jouer</a>
```

Cette balise crée un lien hypertexte qui va rediriger l'URL vers la route `/play`.

Vous devez donc donner des directives dans le serveur Flask pour interpréter cette route :

```python
@app.route("/play")
def play():
    # Traitement...
    # ...
    return render_template("play.html")
```


## Envoyer une donnée

L'utilisateur devra interagir avec l'application. On peut employer des formulaires HTML pour permettre l'envoi de données au serveur.

Un formulaire HTML peut envoyer des données à un point de montage du serveur (route) sous la forme d'une requête.

Typiquement, un formulaire HTML emploie la requête `POST` pour envoyer des données au serveur.

```html title="Exemple de formulaire POST"
<form action="/play" method="post">
  <label>Mon champ</label>
  <input type="text" id="mon_champ" name="mon_champ" />

  <button type="submit">Envoyer</button>
</form>
```

Dans l'exemple ci-dessus, lorsque l'utilisateur appuie sur le bouton Envoyer, une requête HTTP de type POST est émise, associée à son URL (ici `/play`).

Notre application Flask doit donc récupérer ces informations pour pouvoir effectuer un traitement :

```python
from flask import Flask, render_template, request # On pense à importer la fonction "request"

@app.route("/play", methods=["POST"])
def play():
    # La fonction play() peut à présent être employée avec une requpete GET (affichage classique dans le navigateur),
    # mais également pour les requêtes POST (envoi d'informations).

    if request.method == "POST":
        # On récupère les valeurs saisies dans le champ correspondant au name "mon_champ"
        mon_champ = request.form["mon_champ"]

        # Traitement
        # ...

    return render_template("play.html")
```
