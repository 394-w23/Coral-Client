<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![MIT License][license-shield]][license-url]

<br />
<div align="center">
  <h1 align="center">MyCapsule README</h1>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

[![App Preview][app-preview]][app-preview]

Share all your best moments with your loved ones. MyCapsule organizes your most important details to guide your family and friends to celebrate your life and deliver messages into the future.

#### Who is it for?
MyCapsule is designed for everyone far away from home with memories to share or tasks loved ones can complete on their behalf.

#### Features 
1. Curate a capsule of digital memories 
2. Curate a contact list and set of instructions 
3. Manage administrative tasks such as canceling subscriptions
4. Assign key stakeholders to capsules

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This is what we used to build the project:

* [![React][React.js]][React-url]
* [![Tailwind][tailwindcss]][tailwindcss-url]
* [![Firebase][firebase]][firebase-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Download all the requirements by running install as such:
```
  npm install
```
Dependencies are listed in package.json for reference.

### Installation

##### Step 1: Create a new project
1. Go to [Firebase](https://console.firebase.google.com/u/0/project/_/database)
2. Follow instructions to create a new project

##### Step 2: Create a realtime database
1. Go to 'Build'
2. Click 'Realtime Database'
3. Click 'Create Database'
4. Follow the guidelines to create

##### Step 3: Add your data to firebase
1. Go to your new project's realtime database
2. Import JSON - choose the firebase-data.json file located in the repository
3. Use this outline to add data as needed!

##### Step 4: Create storage
1. Go to 'Build'
2. Click 'Storage'
3. Click 'Get Started'
4. Follow the guidelines to create

##### Step 5: Get config information
1. Go to Project settings
2. Click the web app logo under 'Add app'
3. Add a name
4. Copy the config information under 
``` 
const firebaseConfig 
``` 

##### Step 6: Create a .env file
1. Create a .env at the root of the project
2. Copy this outline:

VITE_API_KEY = 

VITE_AUTH_DOMAIN = 

VITE_DATABASE_URL = 

VITE_PROJECT_ID = 

VITE_STORAGE_BUCKET = 

VITE_MESSAGING_SENDER_ID =

VITE_APP_ID =

3. Put the corresponding values from firebaseConfig into the .env

##### Step 7: Run the project
1. To run the project, type into the terminal
```
  npm start
```
2. Copy the link provided into your browser

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/394-w23/Coral-Client?style=for-the-badge
[contributors-url]: https://github.com/394-w23/Coral-Client/graphs/contributors
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/394-w23/Coral-Client/blob/main/LICENSE
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[tailwindcss]: https://shields.io/badge/Tailwind-20232A?style=for-the-badge&logo=tailwindcss&logoColor=61DAFB
[tailwindcss-url]: https://tailwindcss.com/
[firebase]: https://shields.io/badge/Firebase-20232A?style=for-the-badge&logo=firebase
[firebase-url]: https://firebase.google.com/
[app-preview]: https://firebasestorage.googleapis.com/v0/b/clubbulletin-e6cf8.appspot.com/o/Screen%20Shot%202023-03-14%20at%207.41.56%20PM.png?alt=media&token=95ac0ad2-24f9-46d7-9f47-34df24b925f6