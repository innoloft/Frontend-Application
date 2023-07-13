# Instructions 
Please stick to the following instructions on how to submit your application:
1. Read the **whole** README
2. Create a new repository on your Github Account. *Note: The repository has to be public.*
3. Add your solution **with all requirements** to your repository
4. Send a mail to application@innoloft.com with following information: 
   * Your Name
   * Link to **public** accessable repository on **GitHub**
   * How many hours it took to complete (roughly)

**Please do not spend much more than 6 hours for the whole task.** This is not a hard limitation but want to respect your time since we cannot hire every applicant. Also only start with the task if you think this is something you can do in the given time frame. 

### Additional Information to submit a successful application
- Make sure that your repository is public
- Only an application with [all requirements](#technical-requirements) can be considered
- Provide setup process if required
- Copied structures or code from other applications will be completely ignored

Thank you very much and have fun with the challenge!

# Challenge
Your task is to create a new dashboard with which you will be displaying and editing product information.

First you have to setup the main dashboard with the main structure:
- Header with [Innoloft Logo](https://img.innoloft.com/logo.svg)
- Navigation
  - Main Page
  - Product

This structure will be the same on all pages.


# Pages
The dashboard should have at least three pages. The main page, the view of the product and the editing of the product.

#### Mockups (Figma)
- [View](https://www.figma.com/file/ts85mGEzMBSTAmueJ0cN55/Frontend-Application?node-id=0%3A1)
- [Edit](https://www.figma.com/file/ts85mGEzMBSTAmueJ0cN55/Frontend-Application?node-id=1%3A2)

*Note: This is just an example. There is no need to have it exactly like in the mockup. But it's **highly** recommended.*

## Main (`/`)
It's not required that the main page has any content. **But it should be the default page on the root path `/`.**

## Product View (`/product`)
The product view should be used to display the single product information and should contain following elements:

- Main Section
  - Image
  - Title
  - Type
  - Description
- Details Section
  - Technologies/Categories
  - Business Models
  - [TRL](https://en.wikipedia.org/wiki/Technology_readiness_level)
  - Investment Effort / Cost
- Video Section
- User info should contain:
  - Image
  - Name
  - Company Name
- Map should display company address of the product

## Product Edit (`/product/edit`)
It should be possible to change the description, edit the attributes as well as add new ones. The categories and business-models should be editable with a simple text input and the TRL with a dropdown. For editing the description follow the WYSIWYG methodology.  
When saving the product a PUT request has to be made to the API. Please keep in mind that the API itself **will not save your request**.

# White-Labeling
In this step you will have to apply different configurations to the dashboard. Here you will have to add environment variables (f.e. with a `.env` file). Depending on the `APP_ID` environment variable. If **no** `.env` file is given, make sure to add a fallback to `APP_ID=1`.
A configuration will look like this:
```json
{
    "id": 1,
    "logo": "https://img.innoloft.de/logo.svg",
    "mainColor": "#272e71",
    "hasUserSection": true
}
```
With the api call `/configuration/:appId/` you get the configuration for your `APP_ID`. Possible appIds are `1` and `2`.
* In case `hasUserSection: false` - hide the user info section on the right.
* Apply main color to header and other elements to your taste

# API
In the task you will need to fetch some data from an API. The API base url is `https://api-test.innoloft.com`.  
Please use **exactly** these endpoints:
- Product
  - GET `/product/6781/`
  - PUT `/product/6781/`
- TRL List
  - GET `/trl/`
- APP Configuration
  - GET `/configuration/:appId/`

You can also download the [Postman collections](https://api-test.innoloft.com/postman_collection.json).  
*Note: If you have CORS issues, there must be something wrong on your end. Check the exact paths again.*
# Technical Requirements

The application should at the very least use the following:

- JavaScript **or** TypeScript
- React.js
- Redux
- Tailwind CSS
- (optional) Form handler (f.e. react-hook-form)
- (Optional) Linter
- (Optional) Prettier

Also make sure that the dashboard is responsive and works on mobile devices - TailwindCSS should help you here.