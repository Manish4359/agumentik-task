import types from "./admin.types"

export const setCurrentAdmin=admin=>{

    return {
        type:types.SET_CURRENT_ADMIN,
        payload:admin
    }
}
