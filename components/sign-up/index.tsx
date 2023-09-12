import { useForm } from "react-hook-form";
import { Button, Paper, Stack, Typography } from "@mui/material";
import { FormField } from "../text-filed";
import { type UserSignup } from "../../store/useAuth";
import { emailPattern, mobilePattern, strongRegex } from "../../lib/patterns";
import { useSubmit } from "../../hooks/useSubmit";
import { DevTool } from "@hookform/devtools";

export function SignUpFields() {
  const { defaultValues, submit } = useSubmit();
  const { control, handleSubmit } = useForm<UserSignup>({ defaultValues });

  return (
    <div className="flex min-w-full justify-center pt-3">
      <Paper
        component="form"
        onSubmit={handleSubmit(submit)}
        elevation={12}
        className="flex min-w-[500px] max-w-[600px] flex-col  gap-3 p-8"
      >
        <Typography variant="h4" mb={2}>
          Sign Up
        </Typography>
        <Stack direction={"row"} columnGap={2}>
          <FormField
            control={control}
            name="fname"
            rules={{
              required: { value: true, message: "name is required" },
            }}
            type="text"
            label="Name"
            autoFocus
            fullWidth
          />
          <FormField
            control={control}
            name="lname"
            rules={{
              required: { value: true, message: "last name is required" },
            }}
            type="text"
            label="Last Name"
            fullWidth
          />
        </Stack>
        <Stack direction={"row"} columnGap={2}>
          <FormField
            control={control}
            name="phone"
            rules={{
              required: { value: true, message: "phone is required" },
              pattern: {
                value: mobilePattern,
                message: "mobiles format is wrong",
              },
            }}
            type="tel"
            label="Phone"
            fullWidth
          />
          <FormField
            control={control}
            name="user_name"
            rules={{
              required: { value: true, message: "user name is required" },
            }}
            type="text"
            label="User Name"
            fullWidth
          />
        </Stack>
        <FormField
          control={control}
          name="email"
          rules={{
            required: { value: true, message: "email is required" },
            pattern: {
              value: emailPattern,
              message: "emails format is wrong",
            },
          }}
          type="email"
          label="Email"
        />

        <FormField
          control={control}
          name="password"
          rules={{
            required: { value: true, message: "password is required" },
            minLength: { value: 8, message: "min length muse be 8 character" },
            pattern: {
              value: strongRegex,
              message:
                "password must consist at least an Uppercase and lowercase and special character(@,$,...) and numbers",
            },
          }}
          type="password"
          label="Password"
        />

        <Button fullWidth type="submit" variant="contained" role="button">
          Submit
        </Button>
      </Paper>
      <DevTool control={control} />
    </div>
  );
}
