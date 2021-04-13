## Instructions
Please stick to the following instructions on how to submit your application:
1. Read the whole README
2. Fork our repository
3. Add your solution to your repository
4. Create a pull request to our repository

Also note down in the end how many hours it took to complete (roughly). **Please do not spend more than 6 hours for the whole task.**

Thank you very much!

## Main Task
You are developing a new dashboard. Your task is to create a new dashboard with which you will be displaying and editing product information following

First you have to setup the main dashboard with the main structure:
- Header with [Innoloft Logo](https://img.innoloft.de/logo.svg)
- Navigation
  - Main Page
  - Product

This structure will be the same on all pages

It's not required that the main page has any content. **But it should be the default page on the root path `/`.**

### Product Page (`/product`)
- Product image
- Product main info should contain
  - title
  - type
- 2 tab buttons to switch/change the tab content
  - Description
  - Attributes
- Description tab should contain product description
- Attributes tab should contain:
  - categories (name only, free text input when adding/editing)
  - business models (name only, free text input when adding/editing)
  - [TRL](https://en.wikipedia.org/wiki/Technology_readiness_level) (single choice field)
- User info should contain:
  - user image
  - user name
  - user company name
- Map should display company address on Google maps (bonus)

For editing follow WYSIWYG methodology. When saving the product a PUT request has to be made to the API. Please keep in mind that the API itself **will not save your request**.
### Example Mockup
![mockup](mockup.jpg)

## API
In the task you will need to fetch some data from an API. The API base url is `https://api-test.innoloft.com`
- Product
  - GET `/product/6781/`
  - PUT `/product/6781/`
- TRL List
  - GET `/trl/`
  
You can also download the [Postman collections](https://api-test.innoloft.com/postman_collection.json).

## Technical Requirements

The application should at the very least use the following:

- React.js framework
- Redux
- CSS
  - Your own CSS structure
  - **Do not** use any CSS frameworks (f.e. Bootstrap)
  - A CSS pre-compiler (SASS, LESS, SCSS) or other CSS approaches (CSS modules, Styled components)
- The dashboard should be responsive. It should **be usable on mobile and tablets**. There are no mockups for mobile and table views, adapt it to your taste.

When styling, you can decide for yourself what this dashboard should look like (even the structure-wise), make it look as nice as you can.

## Bonus
Bonus points are awarded if the styles resemble those of [innoloft.com](https://innoloft.com/home) and could fit as seamlessly as possible within that website.
Other points that are optional but give additional credit:
- White-Labeling the application [see section below](#White-Labeling-Bonus)
- Map (like written in the [main task](#Main-Task))

## White-Labeling (Bonus)
In this step you will have to apply different configurations to the dashboard. Here you will have to add environment variables (f.e. with a `.env` file). Depending on the `APP_ID` environment variable. If **no** `.env` file is given, make sure to add a fallback to `APP_ID=1`.
A configuration will look like that:
```json
{
    "id": 1,
    "logo": "img.innoloft.de/logo.svg",
    "mainColor": "#272e71",
    "hasUserSection": true
}
```
With the api call `/configuration/:appId/` you get the configuration for your `APP_ID`. Possible appIds are `1` and `2`.
* In case `hasUserSection: false` - hide the user info section on the right.
* Apply main color to header and other elements to your taste 
