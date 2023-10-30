import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addForm,
  getForms,
  getForm,
  updateForm,
  deleteForm,
  addAnswer,
  getAnswers,
  updateAnswer,
  deleteAnswer
} from "./dataActions";

const initialState = {
  forms : [],
  form : {},
  answers : [],
  answer: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder

          //----------------------- Add Form ---------------//
          .addCase(addForm.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(addForm.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            toast.success("New Form Added",{
              toastId : "form-added"
            });
          })
          .addCase(addForm.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload,{
              toastId : "error"
            });
          })

          //----------------------- Get Forms ---------------//
          .addCase(getForms.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getForms.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.forms = action.payload;
            // toast.success("Data Fetch Successful",{
            //   toastId : "getForms"
            // });
          })
          .addCase(getForms.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.forms = null;
            console.log(state.message)
            toast.error(action.payload,{
              toastId : "error"
            });
          })


          //----------------------- Get Form ---------------//
          .addCase(getForm.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getForm.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.form = action.payload;
            toast.success("Form details loaded.",{
              toastId : "getForm"
            });
          })
          .addCase(getForm.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.form = null;
            toast.error(action.payload,{
              toastId : "error"
            });
          })

          //----------------------- Update Form ---------------//
          .addCase(updateForm.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(updateForm.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            toast.success("Form Updated",{
              toastId : "updateForm"
            });
          })
          .addCase(updateForm.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload,{
              toastId : "error"
            });
          })

          //----------------------- Delete Form ---------------//
          .addCase(deleteForm.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(deleteForm.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            toast.success("Form Deleted",{
              toastId : "deleteForm"
            });
          })
          .addCase(deleteForm.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload,{
              toastId : "error"
            });
        })

        //----------------------- Add Answer ---------------//
          .addCase(addAnswer.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(addAnswer.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            toast.success("New Answer Submitted",{
              toastId : "answer-added"
            });
          })
          .addCase(addAnswer.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload,{
              toastId : "error"
            });
          })

        //----------------------- Get Answers ---------------//
          .addCase(getAnswers.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getAnswers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.answers = action.payload;
            toast.success("Answers Fetch Successful",{
              toastId : "getAnswers"
            });
          })
          .addCase(getAnswers.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.answers = null;
            toast.error(action.payload,{
              toastId : "error"
            });
          })
          
          //----------------------- Update Answer ---------------//
          .addCase(updateAnswer.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(updateAnswer.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            toast.success("Answer Updated",{
              toastId : "updateAnswer"
            });
          })
          .addCase(updateAnswer.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload,{
              toastId : "error"
            });
          })

          //----------------------- Delete Answer ---------------//
          .addCase(deleteAnswer.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(deleteAnswer.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            toast.success("Answer Deleted",{
              toastId : "deleteAnswer"
            });
          })
          .addCase(deleteAnswer.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload,{
              toastId : "error"
            });
        })
    }
})

export default dataSlice.reducer