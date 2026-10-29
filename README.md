# rn-normalize-colors-modern-alpha

React Native rejects two valid CSS Color 4 spellings: `hsl()` with a slash alpha, which `hsla()` accepts, and an alpha given as a percentage. This repository is [React Native's reproducer template](https://github.com/react-native-community/reproducer-react-native) (React Native 0.88.1) with one change, `ReproducerApp/App.tsx`: four 96×96 boxes on a white screen, painted `hsl(120 100% 25% / 0.5)`, `hsla(120 100% 25% / 0.5)`, `rgb(0 128 0 / 50%)` and `rgb(0 128 0 / 0.5)`, each beside its value.

## Steps

1. Clone and install:
   ```sh
   git clone https://github.com/YevheniiKotyrlo/rn-normalize-colors-modern-alpha
   cd rn-normalize-colors-modern-alpha/ReproducerApp
   yarn install
   ```
2. Build and install the app on an Android device: `yarn android`, or `cd android && ./gradlew assembleRelease` and `adb install -r app/build/outputs/apk/release/app-release.apk`.
3. Open it and compare the boxes.

Expected: all four boxes the same half-transparent green.

What I see on a Galaxy S23 (Android 14): the `hsla()` and `rgb(… / 0.5)` boxes are green (`#7fbf7f`), and the `hsl(… / 0.5)` and `rgb(… / 50%)` boxes are not painted.
