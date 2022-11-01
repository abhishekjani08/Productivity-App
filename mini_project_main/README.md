

<h3 align="center"> Productivity tool. Give it a try <a href="https://fokusapp.netlify.app"> here. </a> </h3>
<p align="center">
  <img  src="https://img.shields.io/badge/name-fokus-yellow" alt="Game Ref" />
  <img  src="https://img.shields.io/badge/category-productivity-orange" alt="Application Category" />
  <img  src="https://img.shields.io/badge/language-javascript-blue" alt="Repo Main Language" />
  <img  src="https://img.shields.io/badge/bundler-webpack-blueviolet" alt="Module Bundler" />
</p>


> NOTE: the project is under development and I am making changees to the react state. As the state is being saved to localstorage, updating it might cause some changes to break for you. If you are facing any issues while loading the app, Please clear localstorage and refresh. Please raise an issue and I'll be happy to help. Thanks.

## screenshots :heart:

<img src="https://user-images.githubusercontent.com/34238240/115880633-90edf500-a468-11eb-91bd-b8a9c52a678c.png" alt="Fokus App">

<img src="https://user-images.githubusercontent.com/34238240/130842979-4ab26abd-d952-44ce-9b02-e7ee9e6d0717.png" alt="Fokus App">

<img src="https://user-images.githubusercontent.com/34238240/130842321-1b39a27a-93ab-4b29-8cb8-575e973c365f.png" alt="Fokus App">

<img src="https://user-images.githubusercontent.com/34238240/131602382-a3ed445c-89cc-4aa3-8869-a03736aff6a9.png" alt="Fokus App">

<img src="https://user-images.githubusercontent.com/34238240/131602377-c0dbf022-a81b-4cab-9bb7-4cecf281d903.png" alt="Fokus App">


# How to setup locally and run project

### 1. Clone repository

```
git clone https://github.com/pg07codes/fokus
```

### 2. Enter into cloned repo

```
cd fokus
```

### 3. To install dependencies

```
npm install
```

### 4. To run development server

```
yarn dev
```

### 5. To create distribution bundle

```
yarn build
```

# How to setup locally in Docker

### 1. Clone repository

```
git clone https://github.com/pg07codes/fokus
```

### 2. Enter into cloned repo

```
cd fokus
```

### 3. Build image

```
docker build -t fokus .
```

### 4. Start container

```
docker run -d --name fokus -p 3000:3000 fokus
```

NOTE: There is also an unofficially maintained docker image available at `registry.gitlab.com/brandonbutler/fokus-docker:latest`, see the [fokus-docker](https://gitlab.com/brandonbutler/fokus-docker) project for more information.

<br>
