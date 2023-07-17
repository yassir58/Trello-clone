# Trello API Version 1.0 Tasks List
### Backend API v1 for the trello clone project, its connected to postgresql database using prisma ORM which handles all the data management operations

## Boards:

- [x] Handler for getting all the boards
- [x] Handler for getting all the board information by id including the lists
- [x] Handler for updating the board information might the be the visibility or name, description etc.
- [x] Handler for deleting a board by id ** after disconnecting all the users and list associated with that board
  

## Users:

- [x] Handler for getting all the users available
- [x] Handler for getting the user information
- [x] Handler for updating user information name or email, profilePicture
- [x] Handler for deleting a user by id ** before that the user should be disconnected from every card or table

## Lists:

- [x] Handler for getting all the lists available with cards included
- [x] Handler for getting list information
- [x] Handler for updating list information
- [x] Handler for deleting list by id ** before that we should remove any cards associated with list

## Cards:

- [x] Handler for getting the cards lists
- [x] Handler for displaying card information including comments, attachment, labels and list information
- [x] Handler for updating a card details
- [x] Handler for deleting card by id

## Labels:

- [x] Handler for creating label using nested cards route
- [x] Get label using nested cards route
- [x] Get the list of labels available

## Comments:

- [x] Handler for creating comment using nested cards route
- [x] Handler for getting comment using nested cards route
- [x] Handler for getting the list of comments available

## Attachments:

- [x] Handler for creating attachment using nested cards route
- [x] Handler for getting attachment using nested cards route
- [x] Handler for getting the list of attachments available

## Authentication

- [ ] Sign up route
- [ ] Login route
- [ ] Password reset route
- [ ] Logout route
- [ ] Implement rate limiting
- [ ] Add security headers
- [ ] Add authorization middleware

## Upload

- [ ] File upload functionality
- [ ] File validation

## Error Handling
- [x] Global error handling middleware
- [x] Global asynchronous function error handler
- [ ] Add custom error handler for database events based on the name
 
## Invite system
- [ ] Get invite information route
- [ ] Create a new invite
- [ ] Handler for accepting invites
- [ ] Handler for deleting an invite

## Validation
- [x] integrate a validation library to validate user input
- [ ] When deleting attachment check if the user performing the action belongs to the board
- [ ] Before updating or deleting a comment check if the user who's making the request own is the author of the comment