#Namste React

- Create React App - is A Bundler which bundles up everything and makes production Ready
- Parcel, Webpack, Vite - All are Bundlers


#Parcel 

- Dev Build
- Local Server
- HMR Hot Module Replacement
- File watching Algorithm in C++ 
- Caching 
- Image Optimisation
- Minification
- Bundling
- Compressing
- ^ in package jon - it will automatically update minors but ~ will update majors hence not recommended

- Package Json - It will keep Approx version of Dependencies but Package-Lock keeps exact dependencies of code with integrety which is hash to keep track the exact dependencies are deployed in production which is in local

- consistent Hashing
- Code Splitting
- Diffrential Bundling - Tales care of brosers where out web app is running like old versions of explorer
- Tree Shaking - remove unused code



- Builds

- npx parcel filename -> Dev Build
- npx parcel build filename -> Prod Build

-   "scripts": {
    "start" : "parcel index.html",
    "build" : "parcel build index.html", 
    "test": "jest"
  },

  This has everything npm start will execute npx parcel index.html and npm build will do npx parcel build index.html 
  In industry to start or run any script just go and look to this package.json file




- JSX is HTML Like Syntax but not HTML inside Javascript
- JSX is transpiled by Parcel who manages Babel hence JSX is converted to a code React understands
- BAbel - JS compiler and Transpiler which coverts all JSX to HTML

- JSX -> React Element -> Js Object -> HTML element 

- React elements are wrapped using root.render(element)
- React components are wrapepd usning root.render(<Component/>)
- Compenent Composistion - Component inside Component

- Functional Component - A JS Function which returns JSX


- XSS

- Cross Site Scripting - A Attacker can run any JS code in your Browser - If you have a API
- const data = api.getData();
- And you render this data {data} in a component - the attacker can inject malicious data in ur browser
- The attacker can steal cookies, localStorage, sessionStorage, read information

- But JSX sanitises the data - It prevents XSS 



- Config Driven UI

- We dont want to build different UI doe Bangalore and Pune - If bangalore has some offers it will show to people in Bangalore and if Pune dont it will not show any offers to Pune peoples. so we have data in JSON {"Bangalore": {... other data}, {"Pune": {... other data }}}

- Configurable UI is driven by data coming from backend

- Keys in react is imp because whenever a new item is rendered so react knows that a new item is rendered if you are not using the key react wont know that a new item has come hence it will re render everything and another thing is we should not use key as index just because if we are using He as index then what if zeroth element is changed has all the rest of the element will be changed 


- /*
Header
 - Logo
 - NavLinks
Body 
 - Search
 - Restro Container
 - Restro Cards
Footer
 - Copyright
 - Links
 - Address
 - Contact
*/


- Named Export - Multiple Exports &&&&&& Default Export - Defaultly abd only one default export can be done

- Actual DOM - Tags 
- Virual DOM is representation of Actual DOM (Object)

- Diffing Algorithm - Finds the difference between previous and present virtual DOM and updates the actual based on the difference

- React Reconciliation is the process through which React updates the Browser DOM


## React Router DOM

- Whenever you create routes, you need to have routing configuration


## Two types of Routing 
- Client Side - No Network calls are made - It just loads the component - It is fast
- Server Side  - Network Call is made and hence the entire page is fetched  - It is slow



# Testing Developers
1. Unit - Test React Component in Isolation (Only one Component)
2. Integration - Testing the Integration (Multiple Components)
3. E2E - Testing (User Lands to User Leaves) - Similation of User


# Setup Testing 

- Install React Testing Lib
- Install Jest
- Install Babel Dependencies - Babel + Jest
- Configure Babel - Using Babel.config.js - Jest Website
- .parcelrc - Add Config to disable parcel babel's config as Parcel and Jest both uses Babel which can crwate a conflict - Parcel Website

- npm run test - To Run TestCases
- Jest Config  - npx jest --init

- Install - @babel/preset-react - To make JSX work in Tests
- Include @babel/preset-react inside babel config


module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}]
      ['@babel/preset-react', {runtime: "automatic"}]
    
    ],
  };


- Error - toBe is not a function - add one more lib - @testing-library/jest-dom


- If we console.log any elements after gettingByRole - We will get the - JSX -> React Element -> JS Object (Viryual DOM) 

- const inputs = screen.getAllByRole("textbox"); // This is Querying - Which Returns JSX -React Element- React Fibre Nodes

- describe() - To group Test cases - We can also have descripe() nested

- test() or it() - Both are same

- 6 Falsy Values in JS - "" NaN - Fasle 0 undefined null


- Jest Does not understand Redux Code  - It fails at useSelector in Header Component -Hence we need to wrap the component with <Provider> of React-Reduz In the test

- Hence same thing with React Router Dom -Hence Wrap with <BrowserRouter>


- get By Role is best
- Find Specific Button - screen.getByRole("button", {name: "Login"}) // If you have multiple buttons but only find a specific one by Role then 2nd Parameter in getByRole is important

-FireEvent in Jest is used to make events while testing