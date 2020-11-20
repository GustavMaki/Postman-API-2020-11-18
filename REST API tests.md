API TESTS


TEST 1: GET (all)

    URL: http://localhost:3000/notes        VERB: GET

    INTENDED ACTION: Get all notes

    INTENDED GUI OUTPUT(EX):

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

    INTENDED ACTION: Get a specific note by id

    INTENDED GUI OUTPUT(EX):

    {
        "title": "XXX",
        "content": "YYY",
        "id": "1"
    }



TEST 3: POST 

    URL: http://localhost:3000/notes        VERB: POST

    INTENDED ACTION: Add a new note

    INTENDED GUI OUTPUT(EX):

    "New Note added!"



TEST 4: PUT 

    URL: http://localhost:3000/notes/id        VERB: PUT

    INTENDED ACTION: Edit/update specific note by id

    INTENDED GUI OUTPUT(EX):

    "Note updated!"



TEST 5: PUT 

    URL: http://localhost:3000/notes/id        VERB: DELETE

    INTENDED ACTION: Delete a specific note by id

    INTENDED GUI OUTPUT(EX):

    "Note deleted!"



TEST 5: ERROR 404

    URL: http://localhost:3000/notes/  +  non existing ID        VERB: ANY

    INTENDED ACTION: Show error message when requested id doesnt exist

    INTENDED GUI OUTPUT(EX):

    {
        "code": "404",
        "description": "Requested note does not exist"
    }


more coming...



          