import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import z from "zod";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { authFormSchema } from "../login-form-schema";

interface EmailInputProps extends HTMLAttributes<HTMLDivElement> {
  form: UseFormReturn<z.infer<typeof authFormSchema>>

}

const EmailInput = ({ form, className, ...props }: EmailInputProps) => {
  return (
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem className={cn(className, "col-span-6")} {...props}>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input placeholder="Insira seu email" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default EmailInput