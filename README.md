# hw-week-11-note-taker

<a img="">

## Description

I know for myself that I need many notes to keep track of every day life, events, plans, changes, etc. Having a note tacker to add and delete specific notes would be extremely useful for multiple reasons. This application allows each note to be created and deleted. Keeping track of life's many changes has never been easier.

Each note can be saved as the user wants it to be or deleted whenever the user chooses.

This application also uses an express backend and saves and retrieves note data from a JSON file.

- The following HTML routes have been created:

  - GET `/notes` - Should return the `notes.html` file.

  - GET `*` - Should return the `index.html` file

Use those parameters to complete each note that you would like created.

- The application has a `db.json` file on the backend that is used to store and retrieve notes using the `fs` module.

- The following API routes are created:

  - GET `/api/notes` - Reads the `db.json` file and returns all saved notes as JSON.

  - POST `/api/notes` - Receives a new note to save on the request body, adds it to the `db.json` file, and then returns the new note to the client.

  - DELETE `/api/notes/:id` - Receives a query parameter containing the id of a note to delete.

## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Deployed Application

This application will be deployed via Heroku.

---
