import React from "react";
import { Input } from "../ui/input";
import { InputFieldProps } from "@/utils/types";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

const CustomInput = (props: InputFieldProps) => {
  return (
    <FormField
      control={props.control}
      name={props.name as any}
      render={(renderField) => {
        const { field } = renderField;
        let { value, ...rest } = field;
        return (
          <>
            <FormItem className={(cn("space-x-2"), props.divclassName)}>
              <FormLabel className={cn(props.labelClassName)}>
                {props.label}
               </FormLabel>
              <Input
                {...rest}
                {...(props.type === "file" ? {} : { value: value })}
                disabled={props.disabled}
                className={cn(props.className)}
                placeholder={props.placeholder}
                type={props.type}
                onClick={props.onClick}
                onChange={(e) => {
                  props.onChange && props.onChange(e);
                  if (props.type === "number") {
                    field.onChange(e.currentTarget.valueAsNumber);
                  } else if (props.type === "file") {
                    field.onChange(e.target?.files ?? undefined);
                  } else {
                    field.onChange(e.currentTarget.value);
                  }
                }}
              />
              <FormMessage />
            </FormItem>
          </>
        );
      }}
    />
  );
};

export default CustomInput;
