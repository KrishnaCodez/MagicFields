"use client";
import React from "react";
import { Input } from "../ui/input";
import { InputFieldProps } from "@/utils/types";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";

const CustomDatePicker = (props: InputFieldProps) => {
  const CurrentYear = new Date().getFullYear();
  //
  return (
    <FormField
      control={props.control}
      name={props.name as any}
      render={(renderField) => {
        const { field } = renderField;
        const defValue = props.defaultValue;
        const value = field.value || defValue;

        return (
          <div
            className={cn(
              "space-y-2 mt-3",
              props.cns?.container,
              props.className
            )}
          >
            <FormItem className={cn("flex flex-col", props.cns?.formItem)}>
              <FormLabel className={cn(props.cns?.label)}>
                {props.label}
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full pl-3 text-left font-normal border border-gray-300",
                      !value && "text-muted-foreground",
                      props.cns?.input
                    )}
                  >
                    {value ? format(value, "PPP") : <span>Pick a date</span>}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="min-w-fit p-0" align="start">
                  <Calendar
                    captionLayout="dropdown-buttons"
                    fromYear={CurrentYear - 100}
                    toYear={CurrentYear}
                    classNames={{
                      caption_dropdowns:
                        "flex flex-col-reverse justify-end min-w-fit text-2",
                      caption_label: "hidden",
                      caption_between: "hidden",
                    }}
                    mode="single"
                    className="flex"
                    selected={value}
                    onSelect={field.onChange}
                    // disabled={(date) =>
                    //   date > new Date() || date < new Date("1900-01-01")
                    // }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          </div>
        );
      }}
    />
  );
};

export default CustomDatePicker;
