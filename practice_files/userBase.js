class UserBase {
    constructor (array) {
        this.users = array;
    };

    count() {
        return this.users.length;
    };

    getNames() {
        return this.users.map((record) => {
            return record.name
        });
    };

    getIntroductions() {
        return this.users.map((record) => {
            return `Hi, name is ${record.name}`
        });
    };
};

module.exports = UserBase;