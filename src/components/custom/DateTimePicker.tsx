import React from "react";
import { Input } from "../ui/input";
import { InputFieldProps } from "@/utils/types";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { cn } from "@/lib/utils";
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { TimePickerDemo } from '@/components/custom/TimePicker';



const CustomDateTime = (props: InputFieldProps) => {
  return (
    <FormField
      control={props.control}
      name={props.name as any}
      render={(renderField) => {
        const { field } = renderField;
        let { value, ...rest } = field;
        return (
          <div className={cn("space-y-2  w-full ", props.className)}>
            <FormItem className="flex flex-col w-full ">
              <FormLabel className="text-left">DateTime</FormLabel>
              <Popover>
                <FormControl>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? (
                        format(field.value, "PPP HH:mm:ss")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                </FormControl>
                <PopoverContent className="w-full p-0">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                  <div className="p-3 border-t border-border">
                    <TimePickerDemo
                      setDate={field.onChange}
                      date={field.value}
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </FormItem>
          </div>
        );
      }}
    />
  );
};

export default CustomDateTime;
