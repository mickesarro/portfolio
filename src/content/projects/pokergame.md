---
title: "Poker Game"
order: 5
description: "A Java-based multiplayer Texas Hold’em poker game designed for online play with up to eight players. I built it using a custom server-client architecture, utilizing standard Java Sockets to manage the game state and process real-time player actions. The project evolved from a simple terminal-based prototype into a full graphical application using JavaFX. It also features a custom logic evaluator to automatically determine the strongest winning hand for each player. Overall, it was a great way to practice networked gaming logic, concurrency, and real-time client-server communication."
links: 
  - name: "GitLab"
    url: "https://gitlab.utu.fi/mosarr/pokergame"
  
tags: ["Java", "Game Development", "Networking", "Client-Server", "Sockets", "GUI"]
image: "pokergame.png"
---


## Multiplayer Texas Hold'em Poker

A Java-based multiplayer poker game designed for online play. This project demonstrates the implementation of networked gaming logic, real-time client-server communication, and a graphical user interface.

## Project Overview

The goal of this project was to create a functional Texas Hold'em experience that supports up to eight players simultaneously over a network. The development progressed from a terminal-based prototype to a full socket-based application with a dedicated UI.


## Key Features

Multiplayer Capability: Supports up to 8 players in a single online session.


Socket-Based Networking: Built using a server-client architecture where the server manages the game state and processes player actions.


Hand Evaluation: Includes a BestHandEvaluator to automatically determine the strongest hand for each player.


GUI: A graphical interface built with JavaFX.


## Core Technologies

Language: Java 


UI Framework: JavaFX


Networking: Java Standard Library Sockets (Socket, ServerSocket) 


I/O Handling: BufferedReader, BufferedWriter 


Concurrency: Runnable interface for handling multiple client connections 

Development Tools

JDK: Java Development Kit 
