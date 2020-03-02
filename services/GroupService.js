const BaseService = require("./BaseService")
const { Group } = require("../core/Database").models
const HttpStatusCode = require("http-status-codes")


module.exports = class GroupService extends BaseService {
    constructor() {
        super(Group);
    }

    async create(group) {
        /*
        * A group can have multiple collections
        * A collection can belong to single group
        * */

        let { name, collectionIds } = group

        let collectionAlreadyAssociated = await Group.verifySingleCollection(collectionIds)
        if(collectionAlreadyAssociated > 0)
            throw { message: "A collection can only link to a single group", status: HttpStatusCode.CONFLICT }

        const newGroup = {
            name,
            collectionIds
        }
        return await super.create(newGroup)
    }
}