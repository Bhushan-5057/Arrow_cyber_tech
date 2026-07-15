import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ALLOWED_SERVICES } from "@/utils/validation";

const initialState = {
  form: {
    name: "",
    email: "",
    company: "",
    service: ALLOWED_SERVICES[0],
    message: "",
  },
  status: "idle",
  errorMessage: null,
};

export const submitContactForm = createAsyncThunk(
  "contact/submit",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          companyName: formData.company,
          service: formData.service,
          message: formData.message,
        }),
      });

      let data = null;
      try {
        data = await response.json();
      } catch {
        return rejectWithValue("Unable to send email.");
      }

      if (!response.ok || !data?.success) {
        return rejectWithValue(data?.message || "Unable to send email.");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Unable to send email.");
    }
  }
);

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    updateField: (state, action) => {
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
        state.errorMessage = action.payload;
      });
  },
});

export const { updateField, resetForm } = contactSlice.actions;
export default contactSlice.reducer;
