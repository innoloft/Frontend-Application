# Solution

I have completed my task and made it available for preview online, click [Here](https://innoloft-dashboard.vercel.app) to view.

# How this Dashboard can be improved in the future

There are many ways this dashboard can be improved, I'll be listing some of the ones I've discovered while I was working on it.

1. Better state management with Redux.

If I'd be working again on this project or one related to this, I'll make sure to manage the shared states with Redux.

2. Password Suggestion technology.

I'll implement a password suggestion technology that helps the user choose a strong password while typing. I've written an NPM package that handles that.

3. Security warning

I'll implement a technology that warns a user against the actions they're about to take, aside from technically doing this with JavaSCript, I'll also use colors like I used in the alert component to complement the message.

4. Update route meta tags

I'll work on the meta tags for each route components using Helmet npm package.

# Tools and Technologies I used

1. [create-react-app](https://facebook.github.io/create-react-app/)
2. [formik](https://jaredpalmer.com/formik/)
3. React router
4. prop-types
5. Custom CSS
6. Feather Icons (Custom icon components. Check `icons` folder inside the `components` folder).

# Task

Create a [React](https://reactjs.org) application that provides the features described in this document.
The basic requests of the task must be fulfilled. **Further creative approaches are of course always desired and a great bonus.**  

Please invest a **maximum of 6 hours** in this task.  

Good luck and have fun!

# Submitting

Just fork the repository and add your solutions to your fork, so that we can have a look at your work. Afterwards create a merge/pull request. 
Please also note down in the end how many hours it took to complete (roughly), as this can be an interesting matter of discussion.  
  
Thank you very much!

# Setting up the project

You can use [create-react-app](https://facebook.github.io/create-react-app/) in order to kickstart your assignment. 
If you prefer, you can setup [webpack](https://webpack.github.io) yourself as well, or use [Parcel](https://parceljs.org).

# Description

You are developing a new dashboard. Your task is to create a new dashboard with which the user can manage his account.
Of course, it is not supposed to be complete. We would like to limit ourselves to just one excerpt.

In this scenario, the form used to modify the user profile information has to be created. 
The form contains two tabs, as specified below and shown in the mockup.

The user wants to be able to switch between the two tabs and to enter the following information:

In the first tab (Account Settings):

- Change e-mail address
- Change Password
- The password must have certain properties:
  - "Password" and "Password repeat" fields need to be identical (including an indicator for this equality)
  - The password field should accept Uppercase letters, lowercase letters, numbers and special characters
  - A password strength indicator should be implemented
- Button to update the user data

In the second tab (User Information):

- Change first name
- Change Last Name
- Change address (street, house number, postal code)
- Change country (Germany, Austria, Switzerland are available)
- Button to update the user data

The form also needs a button to submit the information through a fake AJAX call.

It is important that the user receives feedback if his input is incorrect, correct, his data has not been saved and his data has been successfully saved.

The layout also contains a header and a sidebar, which are not functioning in this test.

# Layout

Please do not use Bootsrap or similar frameworks for CSS, just create new CSS from scratch.

Please note that this dashboard should be responsive, and **be usable on mobile and tablets** as well.

When styling, you can decide for yourself what this dashboard should look like, make it look as nice as you can.

However, bonus points are awarded if the styles resemble those of [innoloft.com](https://innoloft.com/home) and could fit as seamlessly as possible within that website.

# Code structure

The application should at the very least use the following:

- React.js framework
- A CSS pre-compiler (SASS, LESS, SCSS) or other CSS approaches (CSS modules, Styled components)
- Redux

You can use external modules like [informed](https://joepuzzo.github.io/informed/), [formik](https://jaredpalmer.com/formik/), and whatever you think is necessary.

In React, the application is to be assembled into suitable, reusable React components.

Possible components would be:

- Header
- Footer
- User
- UserInputTabs
- Aside

It is however up to you to provide the structure you think works best in a production-level app.

Bonus points would be awarded for setting up and using linters (eslint, stylelint) and Prettier.
