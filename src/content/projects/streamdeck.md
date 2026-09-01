---
title: "Stream Deck Project"
order: 4
description: "A custom built touchscreen Stream Deck paired with a physical audio mixer. It uses a repurposed Samsung Galaxy S3 for the touch interface and an Arduino Nano paired with 4 potentiometers to physically control audio. The setup lets you independently mix the volume of specific PC apps like Discord, Firefox, and Spotify. A local Python Flask app connects the phone and PC, providing on-screen media controls, live volume sliders, and a dedicated Spotify dashboard. A more in-depth showcase can be found on the <a href='https://github.com/mickesarro/Stream-Deck-Project#showcase' target='_blank' style='color: var(--accent); text-decoration: underline;'>GitHub page</a>."
links: 
  - name: "GitHub"
    url: "https://github.com/mickesarro/Stream-Deck-Project"
tags: ["Python", "Flask", "Web UI", "JavaScript"]
image: "streamdeck.jpeg"
---

# Custom Stream Deck & Hardware Mixer

Custom-built touchscreen "Stream Deck" paired with a physical audio mixer. It uses a **repurposed rooted Samsung Galaxy S3** as the touchscreen interface, while the physical hardware mixer runs on the deej software using an Arduino Nano with four potentiometers.


 Features

* **App-Specific Volume Mixing:** Four physical knobs let you independently control the volume of specific applications (like Discord, Firefox, and Spotify).


* **Visual Mixer Display:** The Galaxy S3 screen shows which app is mapped to which knob, featuring live volume sliders and percentages.


* **Spotify Dashboard:** A dedicated media screen pulls live data from Spotify, displaying the track name, artist, album art, and a live progress bar.


* **Touchscreen Controls:** On-screen buttons allow you to quickly manage media (Play/Pause, Rewind, Skip) or execute quick actions like deafening Discord or switching audio outputs.

![Arduino Nano to VTX Wiring Diagram](/streamdeck-spotify.jpeg)


---

##  How It Works


* At bootup the `MixerApp.exe` launches in the background. Background threads start and monitor the PC's active applications, volume levels, and Spotify status.


*  Once the Galaxy S3 is plugged in via USB, the bundled Android Debug Bridge (`adb.exe`) detects it.


* The script uses ADB to automatically set up port forwarding or USB tethering, creating a private network bridge between the PC and the phone.


*  After the bridge is established, the Flask app starts hosting the local web app.



### The Display

*  The S3's web browser navigates to the local IP address where Flask serves up the HTML, CSS, and JavaScript interface.


*  The host PC provides the data in JSON format, where the phone reads it to make changes like move the volume sliders, update the song title, or change the album art.



### Actions

* For media and especially Spotify data, Windows' media session API is used to pull the info. This info is then cached in `audio_manager.py` to avoid unnecessary requests.


* Audio actions are handled using `nircmd.exe` to talk to the Windows Control Panel.


* Other actions like Discord are handled using keyboard shortcuts.

### Showcase

Currently the physical mixer and the smartphone are fitted into a cardboard box that's painted black. A  3D printed case would be the next addition to have a more finalized look. Other future additions would include a simple function to easily add/remove buttons and actions into the mixer.
