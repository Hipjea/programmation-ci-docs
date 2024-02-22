---
sidebar_position: 2
---

# Sources du projet

Pour réaliser les travaux de la classe inversée, vous disposez de sources pour vous faciliter la mise en place.

### Adresse des sources

Les sources sont disponibles sur un dépôt Github : [https://github.com/Hipjea/sonate_pendu](https://github.com/Hipjea/sonate_pendu)

### Mise en place

Suivre la procédure décrite dans le fichier [README.md](https://github.com/Hipjea/sonate_pendu/blob/main/README.md#mise-en-place) du dépôt.

### Installation des dépendances

Suivre la procédure ***installation des bibliothèques*** décrite dans le fichier [README.md](https://github.com/Hipjea/sonate_pendu/blob/main/README.md#installation-des-biblioth%C3%A8ques) du dépôt.

```bash
cd sonate_pendu
pip install -r requirements.txt
```

Si l'étape s'est déroulée avec succès, vous devriez avoir un log similaire à ceci :

```
Successfully installed Flask-3.0.0 Jinja2-3.1.2 Werkzeug-3.0.1 blinker-1.7.0 click-8.1.7
```

### Lancement du serveur local

La commande suivante permet de lancer un serveur web local :

```bash
flask --app server run
```

Le terminal doit vous afficher un log contenant les informations suivantes :

```
* Serving Flask app 'server'
* Debug mode: off
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
* Running on http://127.0.0.1:5000
Press CTRL+C to quit
```

On peut ouvrir son navigateur à l'adresse indiquée pour accéder à l'application Flask : [http://127.0.0.1:5000](http://127.0.0.1:5000)

Les informations peuvent être décrites comme suit :

|Log|Description|
|---|-----------|
|`Serving Flask app 'server'`|Flask à démarré l'application nommée server en référence au fichier `server.py`|
|`Debug mode: off`|Le mode de debugging n'est pas actif (voir [Debug Mode](https://flask.palletsprojects.com/en/3.0.x/quickstart/#debug-mode)).|
|`WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.`|Indication que le serveur démarré est lancé par une commande destinée à un travail de développement. On utilise d'autres utilitaires comme Gunicorn pour faire fonctionner un serveur en production. Pour nos besoins, c'est suffisant.|
|`Running on http://127.0.0.1:5000`|Le serveur est actif et répond à l'URL [http://127.0.0.1:5000](http://127.0.0.1:5000) (5000 étant le port configuré par défaut). Vous pouvez cliquer sur le lien et ouvrir la page dans un navigateur web.|
|`Press CTRL+C to quit`|On peut mettre fin au processus en utilisant `CTRL + C`.|


### Fermeture du serveur

La commande `CTRL + C` permet de mettre fin à l'exécution du programme Flask et de retrouver le prompt dans le terminal.
