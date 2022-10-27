import mongoDbAdapter from '../_common/db-adapters/mongo/mongoDb-adapter';
import { AdapterType } from '../_common/db-adapters/mongo/types';
import Repository from '../_common/repository/Repository';


class AuthRepository extends Repository {
    constructor(collectionName: string, dataService: AdapterType) { super(collectionName, dataService) }
 
}


export default new AuthRepository('auth', mongoDbAdapter)