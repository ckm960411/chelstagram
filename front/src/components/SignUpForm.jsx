import { Alert, CircularProgress, FormControl, FormHelperText, TextField, useMediaQuery } from "@mui/material";
import { red } from "@mui/material/colors";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signUpRequest } from "store/userSlice";
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import styled from "styled-components";
import { closeError } from "store/userSlice";

const ErrorParagraph = styled.span`
  color: ${red[500]};
`;

const SignUpForm = () => {
  const { register, watch, formState: { errors }, handleSubmit } = useForm();
  const dispatch = useDispatch()
  const downSm = useMediaQuery(theme => theme.breakpoints.down("sm"))
  const { loading, error } = useSelector(state => state.user)

  const passwordRef = useRef();
  passwordRef.current = watch("password");

  const onSubmit = (data) => {
    dispatch(signUpRequest(data))
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <FormControl sx={{ margin: "10px 0" }} fullWidth={downSm}>
          <TextField
            label="name"
            variant="standard"
            error={errors.name && true}
            sx={downSm ? { width: '100%'} : { width: "558px" }}
            {...register("name", { required: true, maxLength: 20 })}
          ></TextField>
          <FormHelperText sx={{ marginLeft: 0 }}>
            {errors.name && errors.name.type === "required" && (
              <ErrorParagraph>This field is required</ErrorParagraph>
            )}
            {errors.name && errors.name.type === "maxLength" && (
              <ErrorParagraph>Your input exceed maximum length.</ErrorParagraph>
            )}
          </FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ margin: "10px 0" }} fullWidth={downSm}>
          <TextField
            label="nickname"
            variant="standard"
            error={errors.nickname && true}
            sx={downSm ? { width: '100%'} : { width: "558px" }}
            {...register("nickname", { required: true, maxLength: 10 })}
          ></TextField>
          <FormHelperText sx={{ marginLeft: 0 }}>
            {errors.nickname && errors.nickname.type === "required" && (
              <ErrorParagraph>This field is required</ErrorParagraph>
            )}
            {errors.nickname && errors.nickname.type === "maxLength" && (
              <ErrorParagraph>Your input exceed maximum length.</ErrorParagraph>
            )}
          </FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ margin: "10px 0" }} fullWidth={downSm}>
          <TextField
            label="email"
            type="email"
            variant="standard"
            error={errors.email && true}
            sx={downSm ? { width: '100%'} : { width: "558px" }}
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          ></TextField>
          <FormHelperText sx={{ marginLeft: 0 }}>
            {errors.email && errors.email.type === "required" && (
              <ErrorParagraph>This email field is required.</ErrorParagraph>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <ErrorParagraph>This is an invalid email format.</ErrorParagraph>
            )}
          </FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ margin: "10px 0" }} fullWidth={downSm}>
          <TextField
            label="password"
            type="password"
            variant="standard"
            error={errors.email && true}
            sx={downSm ? { width: '100%'} : { width: "558px" }}
            {...register("password", { required: true, minLength: 6 })}
          ></TextField>
          <FormHelperText sx={{ marginLeft: 0 }}>
            {errors.password && errors.password.type === "required" && (
              <ErrorParagraph>This field is required</ErrorParagraph>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <ErrorParagraph>
                Password must have at least 6 characters.
              </ErrorParagraph>
            )}
          </FormHelperText>
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ margin: "10px 0" }} fullWidth={downSm}>
          <TextField
            label="confirm password"
            type="password"
            variant="standard"
            error={errors.email && true}
            sx={downSm ? { width: '100%'} : { width: "558px" }}
            {...register("confirm_password", {
              required: true,
              validate: (value) => value === passwordRef.current,
            })}
          ></TextField>
          <FormHelperText sx={{ marginLeft: 0 }}>
            {errors.confirm_password &&
              errors.confirm_password.type === "required" && (
                <ErrorParagraph>This field is required</ErrorParagraph>
              )}
            {errors.confirm_password &&
              errors.confirm_password.type === "validate" && (
                <ErrorParagraph>The password do not match.</ErrorParagraph>
              )}
          </FormHelperText>
        </FormControl>
      </div>
      <LoadingButton
        type="submit"
        variant="contained"
        size="large"
        loading={loading}
        loadingIndicator={<span style={{ color: '#fff' }}>Loading... <CircularProgress color="inherit" size={16} sx={{ position: 'relative', top: '4px'}} /></span>}
        endIcon={<SendIcon />}
        sx={downSm ? { width: "100%", margin: "20px 0" } : { width: "558px", margin: "20px 0" }}
      >
        JOIN US
      </LoadingButton>
      {error && (
        <Alert 
          severity="error" 
          onClose={() => dispatch(closeError())}
          sx={downSm ? { width: "100%", margin: "20px auto" } : { width: "558px", margin: "20px auto" }}
        >
          {error.errorMessage}
        </Alert>
      )}
    </form>
  );
};

export default SignUpForm;
