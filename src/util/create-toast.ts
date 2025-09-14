import { toast } from "sonner"

export const createToast = {

  error: (title: string, description?: string) => toast.error(
    title,
    {
      description,
      descriptionClassName: "!text-white",
      className: "!bg-destructive !text-white !border-destructive",
    }
  ),

  info: (title: string, description?: string) => toast.info(title, { description }),

  loading: (title: string, description?: string) => toast.loading(title, { description }),

  success: (title: string, description?: string) => toast.success(title, {
    description,
    style: {
      color: "black"
    },
    descriptionClassName: "!text-black",
    className: "!bg-green-100 !text-black",
  }),
}