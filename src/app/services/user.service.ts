import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class UserService {
    constructor() { 

    }
    users = [
        { id: 1, name: 'John Smith', username: 'js', password: 'password1' },
        { id: 2, name: 'Jane Doe', username: 'jd', password: 'password2' },
        { id: 3, name: 'Alice Johnson', username: 'alice', password: 'password3' },
        { id: 4, name: 'Bob Miller', username: 'bob', password: 'password4' },
        { id: 5, name: 'Eva Brown', username: 'eva', password: 'password5' },
        { id: 6, name: 'Michael White', username: 'mike', password: 'password6' },
        { id: 7, name: 'Sara Davis', username: 'sara', password: 'password7' },
        { id: 8, name: 'Tom Anderson', username: 'tom', password: 'password8' },
        { id: 9, name: 'Emily Taylor', username: 'emily', password: 'password9' },
        { id: 10, name: 'Alex Turner', username: 'alex', password: 'password10' }
    ];
}

