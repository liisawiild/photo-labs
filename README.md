# Photolabs  📸

The goal for this project was to create an photo application using the React Library. The application allows you to sort photos by topic, like photos anywhere across the application, and click on a photo to see a larger version of the image along with similar photos. 

This project provided the opportunity learn to use React components, hooks, states, custom hooks, all the while continuing to improve HTML, CSS, and JS skills. 

Stretch ideas for future: 
1. Close modal with outside-modal click
2. Open modal onClick of photo in similar photo section
3. Heart in navbar click provides all liked photos

*Photolabs Template Credits: [photolabs-starter](https://github.com/lighthouse-labs/photolabs-starter) by brainoflaraines.*


## Sneak Peek
#### Home Page
![Homepage of the Photolabs App](frontend/public/screenshots/homeRoute.png)

#### Topic Search
![Topic search/filter on the home page](frontend/public/screenshots/specificTopic.png)

#### Likes
![Likes on photos, and indicated on heart in the navbar](frontend/public/screenshots/likes.png)

#### Modal & Large Photo
![Modal open and large version of photo](frontend/public/screenshots/modalBigPhoto.png)

#### Similar Photo in Modal
![Modal open and similar photos in view](frontend/public/screenshots/similarAndLiked.png)


## Setup/Installation

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

### The following dependencies will be installed
#### Dependencies
- body-parser
- cors
- dotenv
- express
- helmet
- pg
- socket.io
- ws
- react
- react-dom
- react-scripts
- web-vitals

#### Developer Dependencies
- jest
- supertest
- sass

## Run Application
### [Frontend] Running Webpack Development Server (Client-Side)

```sh
cd frontend
npm start
```

### [Backend] Running Backend Server (API Server)

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
