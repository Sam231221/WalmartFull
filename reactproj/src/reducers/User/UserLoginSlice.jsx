import { createSlice } from "@reduxjs/toolkit";

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

export const UserLoginSlice= createSlice({
    name: "UserLogin",
    initialState: {
          loading: false,
          error:false, 
          userInfo:userInfoFromStorage
    },
    reducers: {
  
      //ACTION TYPE 1
      USER_LOGIN_REQUEST: (state, action) => {
            return {...state, loading:true} 
      },
  
      //ACTION TYPE 2
      USER_LOGIN_SUCCESS: (state, action) => {
        console.log('payload:',action.payload, ' state:', state)
        return {
          ...state,
          loading:false,
          userInfo:action.payload
      }
      },

      //ACTION TYPE 3
      USER_LOGIN_FAIL: (state, action) => {
        console.log('payload:',action.payload, ' state:', state)
        return {
          ...state,
          loading:false,
          error: action.payload
      }
      },

        //ACTION TYPE 3
      USER_LOGOUT: (state, action) => {
        return {
              ...state,
              userInfo:null
        }
        },

   

    }

});
  
export const { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT} = UserLoginSlice.actions;
export default UserLoginSlice.reducer;