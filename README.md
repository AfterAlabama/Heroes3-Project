# Heroes3-Project
This is a CSR React based project about the Heroes 3 Might & Magic, that is configured on Webpack. All animations are done with GSAP, all styles come from Material UI.



# About the project
1) Types folder contains all the [Properties](https://github.com/AfterAlabama/Heroes3-Project/tree/master/src/types/Enums) of the heroes. 
2) Styles folder contains all the [Default MUI styles](https://github.com/AfterAlabama/Heroes3-Project/tree/master/src/styles) for certain components.
3) The project uses Redux Toolkit and has one [Main slice](https://github.com/AfterAlabama/Heroes3-Project/blob/master/src/store/Reducers/MainSlice.ts) for the entire app. 
4) Heroes folder contains all the [Hero objects](https://github.com/AfterAlabama/Heroes3-Project/tree/master/src/heroes) in the OOP style. 
5) The project uses Cookies for [Registration](https://github.com/AfterAlabama/Heroes3-Project/tree/master/src/components/Form/RegisterForm) and [Authorization](https://github.com/AfterAlabama/Heroes3-Project/tree/master/src/components/Form/AuthForm). For the time being only one account is possible per computer. Cookie's expire date is one year. Helpers folder contains all the Cookie related functions. [Watch Cookies here...](https://github.com/AfterAlabama/Heroes3-Project/tree/master/src/helpers/Cookie)
6) The user can also [Change their password](https://github.com/AfterAlabama/Heroes3-Project/tree/master/src/components/Form/PasswordChangeForm) after registering.
7) The project uses Formik for form validation of [Auth](https://github.com/AfterAlabama/Heroes3-Project/blob/master/src/components/Form/AuthForm/AuthFormCard.tsx), [Reg](https://github.com/AfterAlabama/Heroes3-Project/blob/master/src/components/Form/RegisterForm/RegisterFormCard.tsx) and [PasswordChange](https://github.com/AfterAlabama/Heroes3-Project/blob/master/src/components/Form/PasswordChangeForm/PasswordChangeFormCard.tsx) forms. Helpers folder contains the [Validation conditions](https://github.com/AfterAlabama/Heroes3-Project/tree/master/src/helpers/FormValidation) for those forms. 
8) The project uses React Router for navigation. [Watch here...](https://github.com/AfterAlabama/Heroes3-Project/blob/master/src/components/AppRouter/AppRouter.tsx)
9) Everytime component loads it will have a neat looking [Load animation](https://github.com/AfterAlabama/Heroes3-Project/blob/master/src/components/Common/IsLoading/IsLoading.tsx)
10) The [Main page](https://github.com/AfterAlabama/Heroes3-Project/tree/master/src/components/MainPage) will depend on whether the user is authorized or not.
11) Navbar has a [Menu](https://github.com/AfterAlabama/Heroes3-Project/blob/master/src/components/Navbar/NavbarMenu.tsx) to navigate through the app. [Navbar content](https://github.com/AfterAlabama/Heroes3-Project/blob/master/src/components/Navbar/NavbarLogin.tsx) will also change if user registers.
12) [Heroes history](https://github.com/AfterAlabama/Heroes3-Project/blob/master/src/components/HeroesHistory/HeroesHistoryMenu/HistoryMenu.tsx) will display all the heroes in the game, and it has a small [Characterization](https://github.com/AfterAlabama/Heroes3-Project/blob/master/src/components/HeroesHistory/HeroesComponent/HeroComponent.tsx) of each hero in the form of a resume
13) Developer can see the bundle size of the project with an according NPM script


# NPM Scripts
To start a development server:
```bash
 npm run dev
#or
 yarn dev
```

To create a prod build:
```bash
 npm run build
#or
 yarn build
```

To launch a production server:
```bash
 npm run prod
#or
 yarn prod
```

To see the bundle size of the project:
```bash
 npm run bundle
#or
 yarn bundle
```

To run Tests:
```bash
 npm run test
 #or
 yarn test
```
