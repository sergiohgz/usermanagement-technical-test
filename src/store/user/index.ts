import { combineReducers } from '@reduxjs/toolkit';

import detail from './detail';
import edition from './edition';
import remove from './remove';

export default combineReducers({
    detail,
    edition,
    remove,
});
