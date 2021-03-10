[![Build Status](https://api.travis-ci.org/repositories/gvaldambrini/react-simple-boilerplate.svg)](https://travis-ci.org/gvaldambrini/react-simple-boilerplate)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

On the top of CRA, it adds:
 - sass & (S)CSS modules
 - redux & redux-thunk
 - react-router
 - prettier & eslint
 - a travis integration
 - Storybook


 The filesystem structure is the following:
 - src
   - components, the "dumb" components
   - containers, the redux HOC
   - modules, the redux modules following the [ducks proposal](https://github.com/erikras/ducks-modular-redux)
 - scripts, with a simple cli to create the scaffoling for "dumb" components.
