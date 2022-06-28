import {ADD_PERSON} from '../constant'
//創建增加一個人的Action動作對象
export const createAddPersonAction = personObj =>({type:ADD_PERSON,data:personObj})