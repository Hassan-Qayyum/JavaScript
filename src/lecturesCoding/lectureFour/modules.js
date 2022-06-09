/* Modules: Enable you to use code of one file to another 

Modules CheetSheet

Export                                                  Import
Name Export: export const name = 'value'                import {name} from '...'
Default Export: export default 'value'                  import anyName from '...'
Rename Export: export {name as newName}                 import {newName} from '...'
Export List + Rename: {                                 import {name as newName, newName2}
    name,
    name2 as newName2
}

*/