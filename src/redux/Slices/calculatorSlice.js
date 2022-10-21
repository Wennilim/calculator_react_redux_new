import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  num:'',
  ans:'',

};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {

    //backspace function
    del: (state) =>{
        state.num= [state.num[0].slice(0,state.num[0].length-1)];
        state.ans=''
    },
   
    //reset function
    clr: (state) =>{
        state.num = '';
        state.ans= '';
    },
    //show number function
    setNum: (state, action) => {
        state.num = action.payload;
      },

    //show answer
    shwAns: (state) => {
       try {
         state.ans=eval((state.num).toString())
           
       } catch (error) {
        state.ans='Syntax Error'
       }
      },    
  },
});

export const { setNum, del, clr,shwAns } = calculatorSlice.actions;
export default calculatorSlice.reducer;
