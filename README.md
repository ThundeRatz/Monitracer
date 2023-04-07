# New MoniTracer

App developed in React-Native for constants controll, handling and test of the line follower robot Tracer.
## 🏃🏽‍♀️ Run project

To run on staging enviroment, run on project root:

```bash
npm run android:staging
```

To run on production enviroment, run on project root:

```bash
npm run android:prod
```

## 📱 Create release version for Play Store

To create the release version run:

```bash
cd android
```
```bash
./gradlew bundleRelease
```

These commnads will create the file `app-release.aab`, aveilable on the folder `android/app/build/outputs/bundle/release`. This file can be used on Google Play Console to generate a version of the app on Play Store.
