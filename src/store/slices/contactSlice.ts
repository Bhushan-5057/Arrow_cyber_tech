import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface ContactForm {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

interface ContactState {
  form: ContactForm;
  status: "idle" | "loading" | "success" | "error";
  errorMessage: string | null;
}

const initialState: ContactState = {
  form: {
    name: "",
    email: "",
    company: "",
    service: "penetration-testing",
    message: "",
  },
  status: "idle",
  errorMessage: null,
};

export const submitContactForm = createAsyncThunk(
  "contact/submit",
  async (formData: ContactForm, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      if (!formData.email.includes("@")) {
        throw new Error("Invalid email address.");
      }
      return formData;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to submit form.");
    }
  }
);

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ field: keyof ContactForm; value: string }>
    ) => {
      state.form[action.payload.field] = action.payload.value;
    },
    resetForm: (state) => {
      state.form = initialState.form;
      state.status = "idle";
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.status = "loading";
        state.errorMessage = null;
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.status = "success";
        state.errorMessage = null;
        state.form = initialState.form;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.status = "error";
        state.errorMessage = action.payload as string;
      });
  },
});

export const { updateField, resetForm } = contactSlice.actions;
export default contactSlice.reducer;
