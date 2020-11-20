API TESTS


TEST 1: GET (all)

    URL: http://localhost:3000/notes        VERB: GET

    INTENDED ACTION: Get all notes.

    INTENDED GUI OUTPUT(EX): Displaying all notes.

    {
        "1": {
            "title": "XXX",
            "content": "YYY",
            "id": "1"
        },
        "2": {
            "title": "XXX",
            "content": "YYY",
            "id": 2
        },
        "3": {
            "title": "XXX",
            "content": "YYY",
            "id": 3
        },
    }



TEST 2: GET (by ID)

    URL: http://localhost:3000/notes/id        VERB: GET

    INTENDED ACTION: Get a specific note by id.

    INTENDED GUI OUTPUT(EX): Displaying the note with the requested ID.

    {
        "title": "XXX",
        "content": "YYY",
        "id": "1"
    }



TEST 3: POST 

    URL: http://localhost:3000/notes        VERB: POST

    INTENDED ACTION: Add a new note.

    INTENDED GUI OUTPUT(EX): Displaying the added note.

    {
        "title": "XXX",
        "content": "YYY",
        "id": "1"
    }



TEST 4: PUT 

    URL: http://localhost:3000/notes/id        VERB: PUT

    INTENDED ACTION: Edit/update specific note by id.

    INTENDED GUI OUTPUT(EX): Displaying the updated note.

    {
        "title": "XXX",
        "content": "YYY",
        "id": "1"
    }



TEST 5: PUT 

    URL: http://localhost:3000/notes/id        VERB: DELETE

    INTENDED ACTION: Delete a specific note by id.

    INTENDED GUI OUTPUT(EX): Displaying delete message (will be changed...).

    "Note Deleted"



TEST 5: ERROR 404 (more coming for other error codes...)

    URL: http://localhost:3000/notes/  +  non existing ID        VERB: ANY

    INTENDED ACTION: Show error message when requested id doesnt exist

    INTENDED GUI OUTPUT(EX): Displaying a JSON structure with error code and description.

    {
        "code": "404",
        "description": "Requested note does not exist"
    }


more coming...



          