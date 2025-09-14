import { HTMLAttributes, ReactNode } from "react"
import { Button } from "../ui/button"
import CircularLoader from "../circular-loader"

interface ButtonWithLoadingProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  isLoading?: boolean
  type?: "submit" | 'button'
}

const ButtonWithLoading = ({ children, isLoading = false, ...props }: ButtonWithLoadingProps) => {
  return (
    <Button
      {...props}
      className={`!bg-primary relative flex items-center justify-center ${props.className || ""}`}
      disabled={isLoading}
    >
      <span className={`${isLoading ? "invisible" : "visible"} transition-opacity`}>
        {children}
      </span>
      {isLoading && (
        <span className="absolute">
          <CircularLoader />
        </span>
      )}
    </Button>
  )
}

export default ButtonWithLoading
