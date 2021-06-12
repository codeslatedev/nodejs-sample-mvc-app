let db = require('../config/db');



module.exports = class User {
    constructor(id, name, email, contact, active) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.active = active;
    }

    add() {
        const stmt = {
            text: `INSERT INTO users(name, email, contact) VALUES($1, $2, $3)`,
            values: [this.name, this.email, this.contact],
        }
        return db.query(stmt)
    }

    //static method can be accessed directly from class. eg. Users.fetchAll()
    static fetchAll() {
        return db.query('SELECT id, name, email, contact, active FROM users')
    }
}