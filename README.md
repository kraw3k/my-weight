## My Weight

It's a simple React app based on Google Firebase.
The main idea is simply control own weight.

Weight records are displayed in a list, including weight and exact time.
You can also see a simple chart representing Your weight.

App includes Firebase Auth and works as PWA.

## Live
https://kraw3k.github.io/my-weight

You can use test account (sign in with email):\
email: test@test.test\
password: 123456

## Firebase config

All You need to do is create Firebase project and connect it with this app.
Create config file **_firebase.js_** in app main folder.

###### firebase.js

```javascript
import firebase from "firebase";
const config = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "..."
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export default firebase;
```

In Firebase Console create Database and add **_users_** child.

