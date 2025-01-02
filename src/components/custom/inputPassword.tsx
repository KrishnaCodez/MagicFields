import React, { useState } from "react";
import { Input } from "../ui/input";
import { InputFieldProps } from "@/utils/types";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import { Button } from "../ui/button";
import { EyeIcon, EyeOffIcon } from "lucide-react";

// import EyeOpen from "@/public/eye-svgrepo-com.svg";
// import EyeClose from "@/public/eye-slash-svgrepo-com.svg";

const CustomInputPassword = (props: InputFieldProps) => {
  const [InputType, setInputType] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  // const disabled =
  //   props.value === "" || props.value === undefined || props.disabled;

  // function handleEyeChange() {
  //   if (InputType === true) {
  //     setInputType(false);
  //   } else {
  //     setInputType(true);
  //   }
  // }

  return (
    <FormField
      control={props.control}
      name={props.name as any}
      render={(renderField) => {
        const { field } = renderField;
        let { value, ...rest } = field;
        return (
          <div
            className={cn(
              "space-y-2 ",
              props.cns?.container,
              props.divclassName
            )}
          >
            <FormItem className={cn(props.cns?.formItem, "relative")}>
              <FormLabel className={cn(props.cns?.label)}>
                {props.label}
              </FormLabel>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  {...rest}
                  // className={cn("hide-password-toggle pr-10")}
                  disabled={props.disabled}
                  className={cn("hide-password-toggle pr-10", props.className)}
                  placeholder={props.placeholder}
                  // type={props.type}
                  onClick={props.onClick}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <EyeIcon className="h-5.5 w-5.5" aria-hidden="true" />
                  ) : (
                    <EyeOffIcon className="h-5.5 w-5.5" aria-hidden="true" />
                  )}
                  <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                  </span>
                </Button>

                {/* hides browsers password toggles */}
                <style>{`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`}</style>
              </div>
              <FormMessage />
            </FormItem>
          </div>
        );
      }}
    />
  );
};

export default CustomInputPassword;
