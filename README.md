[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

# TWEETER

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
    <img src="/public/images/logo/tweeter-medium.png" alt="Logo" width="200" height="200">
  </a>

  <p align="center">
    Bird is the word!
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

Use the `README.md` to get started.

### Built With

- [![React][react.js]][react-url]
- [![Firebase]][firebase-url]


<!-- GETTING STARTED -->

## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:kodmeron/tweeter.git
   ```
1. Install NPM packages
   ```sh
   npm install
   ```
1. Start
   ```js
   npm start
   ```

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b Epicname_taskname`)
3. Commit your Changes (`git commit -m 'Herosection:added become member form'`)
4. Push to the Branch (`git push`)
5. Open a Pull Request

## Git Branch Naming and Commit Structure

### Branch Naming
Branches should be named using the following format:

"Epicname_taskname"

For example:

"Epicname_taskname"
</br>
For example:</br>
Landingpage_herosection

### This how to structure the commit message

"taskname: what you changed, added or deleted"
</br>
For example: </br>
Herosection:added become member form


<!-- File Structure -->
## File Structure
The structure of Tweeter is simple </br>
in **src** we have a few folders, </br>
the most important are the following: </br>
📂components </br>
📂pages </br>

#### Components

The components folder contains exactly what its called, anything from reusable components <br/>
like **Accordion** to components like **Navbar** and can be used all over the project.


#### Pages

The pages folder contains a folder for each page represented on the forum, <br/>
including pages such as **Profile**, **Posts** & **Categories**



Here you can see the entire file structure <br/>

📦src </br>
 ┣ 📂auth </br>
 ┃ ┣ 📜AuthContextProvider.js </br>
 ┃ ┣ 📜Signin.js </br>
 ┃ ┣ 📜SigninModal.js </br>
 ┃ ┣ 📜Signup.js </br>
 ┃ ┗ 📜styles.js </br>
 ┣ 📂components </br>
 ┃ ┣ 📂banner </br>
 ┃ ┃ ┗ 📜tweeter-banner.png </br>
 ┃ ┣ 📜Accordion.js </br>
 ┃ ┣ 📜Category.js </br>
 ┃ ┣ 📜CommentPost.js </br>
 ┃ ┗ 📜Navbar.js </br>
 ┣ 📂firestore </br>
 ┃ ┣ 📜DataExport.js </br>
 ┃ ┣ 📜DataImport.js </br>
 ┃ ┗ 📜FirestoreLogic.js </br>
 ┣ 📂images </br>
 ┃ ┗ 📜LandingPage_picture.png </br>
 ┣ 📂pages </br>
 ┃ ┣ 📂Category </br>
 ┃ ┃ ┗ 📜DisplayCategories.js </br>
 ┃ ┣ 📂CreatePost </br>
 ┃ ┃ ┣ 📜CreatePost.js </br>
 ┃ ┃ ┗ 📜styles.js </br>
 ┃ ┣ 📂Posts </br>
 ┃ ┃ ┗ 📜Post.js </br>
 ┃ ┗ 📂Profile </br>
 ┃ ┃ ┣ 📂sections </br>
 ┃ ┃ ┃ ┣ 📂Posts </br>
 ┃ ┃ ┃ ┃ ┣ 📜Posts.js </br>
 ┃ ┃ ┃ ┃ ┗ 📜styles.js </br>
 ┃ ┃ ┃ ┣ 📂ProfileLeftSide </br>
 ┃ ┃ ┃ ┃ ┣ 📜ProfileLeftSide.js </br>
 ┃ ┃ ┃ ┃ ┗ 📜styles.js </br>
 ┃ ┃ ┃ ┗ 📂Settings </br>
 ┃ ┃ ┃ ┃ ┣ 📜Settings.js </br>
 ┃ ┃ ┃ ┃ ┗ 📜styles.js </br>
 ┃ ┃ ┣ 📜Profile.js </br>
 ┃ ┃ ┗ 📜styles.js </br>
 ┣ 📜App.js </br>
 ┣ 📜firebase.js </br>
 ┣ 📜index.css </br>
 ┗ 📜index.js </br>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/kodmeron/tweeter.svg?style=for-the-badge
[contributors-url]: https://github.com/kodmeron/tweeter/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kodmeron/tweeter.svg?style=for-the-badge
[forks-url]: https://github.com/kodmeron/tweeter/network/members
[stars-shield]: https://img.shields.io/github/stars/kodmeron/tweeter.svg?style=for-the-badge
[stars-url]: https://github.com/kodmeron/tweeter/stargazers
[issues-shield]: https://img.shields.io/github/issues/kodmeron/tweeter.svg?style=for-the-badge
[issues-url]: https://github.com/kodmeron/tweeter/issues
[product-screenshot]: images/screenshot.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
[Firebase]: https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase