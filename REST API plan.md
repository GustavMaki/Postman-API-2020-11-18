API FUNCTIONS

    Current base URL (test): http://localhost:3000

    ROUTES          VERB            DESCRIPTION
    /notes          GET             Get all notes   
    /notes/id       GET             Get a specific note by id
    /notes          POST            Add a new note
    /notes/id       PUT             Edit/update specific note by id
    /notes/id       DELETE          Delete a specific note by id


OBJECT DEFINITIONS

    notesdata:

        GET ALL NOTES:

            {
                "1": {
                    "title": "XXX",
                    "content": "YYY",
                    "id": 1
                },
                "2": {
                    "title": "XXX",
                    "content": "YYY",
                    "id": 2
                }
            }

        GET NOTES BY ID:

            {
                "title": "XXX",
                "content": "YYY",
                "id": 1
            }


    errorObject:

        {
            "code": "ERROR CODE",
            "description": "PROBLEM DESCRIPTION"
        }

    
