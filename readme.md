<header>
  <p align="center">
    <a href="https://ionicframework.com/docs/developing/starting/" target="blank"><img src="https://ionicframework.com/docs/logos/ionic-text-docs-light.svg" width="90" alt="Ionic Framework Logo" /></a>
    <h2 align="center">Splash-Screen</h2>
  </p>
  <section align="center">
  <a href="#"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="#"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="#"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=134%20Followers"></a>
  </section>
</header>
<hr/><br/>

<!-- %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% -->

## Development

```bash
# crete project
$ ionic start myApp tabs

```

<br/><hr/>

## Dependences
[• PWA-Elements](https://ionicframework.com/docs/v6/vue/your-first-app#pwa-elements)
[• @capacitor/assets --save-dev](https://capacitorjs.com/docs/guides/splash-screens-and-icons)
[• @capacitor/splash-screen](https://capacitorjs.com/docs/apis/splash-screen)


<br/><hr/>

## Utils

[• QuickType](https://app.quicktype.io/)

<br/><hr/>

## Others


<!-- %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% -->

<details><summary>Commands</summary>

```bash

# Create Splash Screen
resources/
├── icon-only.png
├── icon-foreground.png
├── icon-background.png
├── splash.png
└── splash-dark.png
$ npx capacitor-assets generate

# My Build
$ ionic cap build android
$ ionic cap sync android
$ ionic cap update android
$ ionic cap open android
$ ionic cap run android -l --external

## OBS:
1. Project Structure [TR] >  Verify Android Gradle Plugin Version (7.2.2 / 7.3.3)
2. Settings > Build > Build Tools > Gradle > Gradle JDK (17)

# Build
$ ionic cap build android $ ionic cap build ios $ ionic cap build android --prod --release $ ionic cap build ios --prod --release

# Implementations
$ ionic cap add android $ ionic cap add ios $ ionic cap copy android $ ionic cap copy ios $ ionic cap open android $ ionic cap open ios

# Sync and update
$ ionic cap sync android $ ionic cap sync ios $ ionic cap update android $ ionic cap update ios

# Run
$ ionic cap run android $ ionic cap run ios $ ionic cap run android -l --external $ ionic cap run ios -l --external


```

</details><br/>

<!-- %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% -->

<br/><hr/>

## Support

* Licence - [MIT licensed](LICENSE).
* Author - [James Diaz Lopez](https://www.linkedin.com/in/james-jalz/)
* Contact - [j4mes.delez@gmail.com](mailto:j4mes.delez@gmail.com)
