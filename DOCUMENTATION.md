# Galactic Explorer: A Star Wars Spaceships and Pilots App

Welcome to our Star Wars Spaceships and Pilots app! Our React-based web app allows you to explore the vast universe of Star Wars by navigating among different spaceships and pilots.

Built using Gatsby, our app fetches data from a WebService API that provides information about the different Star Wars spaceships and pilots. With our app, you can browse through the details of each spaceship, including its name, model, manufacturer, and crew, and also check out the pilots who have flown them.

Our app is designed to provide an immersive and enjoyable experience for Star Wars fans and enthusiasts. You can easily navigate through different spaceships and pilots, view their images and details, and learn more about the Star Wars universe.

So why not take a break from the stock exchange and come explore the galaxy with us? Join our community of Star Wars fans and start your journey into the world of spaceships and pilots toda

## Table of Contents

* Prerequisites
* Installation
* Usage
* Components
* Contributing
* License

## Prerequisites

Before you begin, make sure you have the following software installed on your system:

Node.js 18.15 or higher
Gatsby CLI

## Installation

Here are the instructions on how to install the project locally.

1. Clone the Galactic Explorer repository to your local machine:

   ```bash
   git clone https://github.com/your-username/galactic-explorer.git
   ```
2. Navigate to the project directory:

   ```bash
   cd galactic-explorer
   ```
3. Install the dependencies:
    ```bash
    yarn
    ```
4. Navigate to the ``content`` directory:
5. Install the dependencies:

     ```bash
     yarn
     ```
6. Run the headless cms

     ```bash
     yarn develop
     ```
7. Set up the environment variables by creating a ``.env.development`` file in the root directory of the project. You will need to define the following variables(you can take example from the ``.env.example``):

   ```bash
   # Swapi link url
   GATSBY_SWAPI_BASE_URL=

   # Unsplash link url
   GATSBY_UNSPLASH_BASE_URL=
   GATSBY_UNSPLASH_SECRET_KEY=
   GATSBY_UNSPLASH_ACCESS_KEY=

   # Strapi api keys
   STRAPI_API=
   STRAPI_API_TOKEN=
   STRAPI_API_ASSETS=
   STRAPI_API_PAGES=

   # Localstorage assets
   LOCAL_STORAGE_LANGUAGE=
   ```
8. Start the Gatsby development server:

     ```bash
     yarn develop
     ```

## Usage

1. When you first open the app in your web browser, you'll see a landing page that presents an overview of the project.
2. To get started, click the "Get Started" button on the landing page.
3. This will take you to the homepage of the app, where you can browse through a list of spaceships.
4. Click on a spaceship  to view more details about them, including their name, model, manufacturer, and crew.
5. To navigate back to the homepage, simply click the "Star Wars" logo in the top center corner of the screen.
6. At the top left corner of the screen, you'll see a language button. Click on it to switch between different languages.
7. If you're a Star Wars fan, you'll enjoy exploring the different spaceships and pilots in the app and learning more about the Star Wars universe.
8. If you're a developer, you can use this project as a starting point to build your own React-based web app with Gatsby, a Strapi CMS, and .env variables.

A list of the components used in the project, along with brief descriptions and links to their documentation.

* `ComponentName`: A short description of the component. [Link to documentation](https://link-to-documentation.com/).

## Contributing

Instructions on how to contribute to the project, including guidelines for pull requests, code style, and testing.

Before you get started, please take a moment to read through our `CODE_OF_CONDUCT` to ensure a smooth and collaborative experience for everyone involved.

Here are some ways you can contribute to the project:

* Submitting bug reports or feature requests through the issue tracker
* Contributing code improvements or new features through pull requests
* Providing feedback on code changes or new features

To get started, please fork the repository and create a new branch for your changes. Once you've made your changes, submit a pull request and our team will review it as soon as possible.

We appreciate your time and effort in helping to improve Galactic Explorer and make it a better experience for all Star Wars fans. Thank you for your contribution

## License

The license under which the project is released.

The Galactic Explorer project is licensed under the MIT License.

MIT License

Copyright (c) 2023 Bill Somen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWAR
