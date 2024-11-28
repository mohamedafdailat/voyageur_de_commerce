# Diagramme des bêtes à cornes

Voici un diagramme des bêtes à cornes pour votre application :

```mermaid
graph TD
    A["Qui a besoin de l'application ?"]
    B["Sur quoi agit l'application ?"]
    C["Dans quel but ?"]

    A -->|Un utilisateur (livreur ou commercial)| App
    B -->|Un ensemble de lieux à visiter, distances à minimiser| App
    C -->|Optimiser le trajet, réduire le temps ou les coûts| App
