# mean-all-about-chew

User Stories:
1.) Ability for users add pets to the database
2.) Ability to edit and delete pets that you've added
3.) Search for pets by location, breed, and shelter
4.) Get in contact with caretaker of animal you are interested in
5.) Save or favorite animals that you're interested in
6.) Send favorite animals to your friends/family


AngularJS = MVC framework for the front-end
  $scope = data models
Node =
  Express = Routing framework on Node
  NPM is a package library that comes automatically on NodeJs
  Package.json tells NPM what packages are required

  User auth
    express-session for session middleware
    passport-local for local authentication
    bcrypt-nodejs for creating password hashes

MongoDB - Document oriented database
  Pet Collection
  User Collection

To Do:
  Finish edit and delete
  Add Petfinder API
  User Interface
  Search


Tests:
  New users exist in database
  Users in database are able to signin
  Users in database are able to logout when they are signed in
  Users can create new pets
