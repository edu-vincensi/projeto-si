import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import z from "zod";
import { authFormSchema } from "../login-form-schema";

interface PasswordInputProps {
  form: UseFormReturn<z.infer<typeof authFormSchema>>

}

const PasswordInput = ({ form }: PasswordInputProps) => {
  return (
    <FormField
      control={form.control}
      name="password"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Senha</FormLabel>
          <FormControl>
            <Input type="password" placeholder="Insira sua senha" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default PasswordInput