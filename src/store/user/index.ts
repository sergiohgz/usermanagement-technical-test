import { combineReducers } from '@reduxjs/toolkit';

import detail from './detail';
import remove from './remove';

export default combineReducers({
    detail,
    remove,
});
