// import { optionType, SelectFieldWithRenderFields } from "@/utils/types";
// import React, { useEffect, useState } from "react";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form";
// import { Button } from "@/components/ui/button";
// import { Check, ChevronsUpDown } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { useSession } from "next-auth/react";

// const CustomComboBox = (props: SelectFieldWithRenderFields) => {
//   const courseID = useSession()?.data?.user?.metaData?.courseID;
//   const [options, setOptions] = useState<optionType[]>([]);
//   const [isFetchingData, setIsFetchingData] = useState<boolean>(true);
//   const conditionalValue = props.conditionalOptions
//     ? props.form?.watch(props.conditionalOptions.fieldName)
//     : "";

//   useEffect(() => {
//     (async () => {
//       setIsFetchingData(true);
//       if (!props?.options) return () => {};

//       const options = await props.options();
//       if (!Array.isArray(options)) {
//         console.error("props.options() did not return an array");
//         setOptions([{ label: `No ${props.label} Found`, value: " " }]);
//         return () => {};
//       }
//       if (options.length === 0) {
//         setOptions([{ label: `No ${props.label} Found`, value: " " }]);
//         setIsFetchingData(false);
//         return () => {};
//       }
//       setOptions(options);
//       setIsFetchingData(false);
//     })();
//   }, [courseID]);

//   useEffect(() => {
//     (async () =>  {
//       if (!props.conditionalOptions) return () => {};

//       setIsFetchingData(true);

//       const options = await props.conditionalOptions.fn(
//         conditionalValue
//       );
//       const getCurrentValue = props.form?.getValues(props.name ?? "");
//       if(!options.find((option) => option.value === getCurrentValue)) {
//         props.form?.setValue(props.name, undefined);
//       }
//       if (!Array.isArray(options)) {
//         console.error("props.options() did not return an array");
//         setOptions([{ label: `No ${props.label} Found`, value: " " }]);
//         return () => {};
//       }
//       if (options.length === 0) {
//         setOptions([{ label: `No ${props.label} Found`, value: " " }]);
//         setIsFetchingData(false);
//         return () => {};
//       }
//       setOptions(options);
//       setIsFetchingData(false);

//     })()
//   },[conditionalValue])
//   return (
//     <FormField
//       control={props.control}
//       name={props.name as any}
//       defaultValue={props.defaultValue ?? ""}
//       render={({ field }) => {
//         return (
//           <FormItem className={cn(" flex flex-col", props.className)}>
//             <FormLabel>{props.label}</FormLabel>
//             <Popover>
//               <PopoverTrigger asChild>
//                 <FormControl>
//                   <Button
//                     variant="outline"
//                     role="combobox"
//                     className={cn(
//                       " justify-between",
//                       !field.value && "text-muted-foreground",
//                     )}
//                   >
//                     {field.value
//                       ? options.find((option) => option.value === field.value)
//                           ?.label
//                       : `Select ${props.label}`}
//                     <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//                   </Button>
//                 </FormControl>
//               </PopoverTrigger>
//               <PopoverContent className=" p-0">
//                 <Command>
//                   <CommandInput placeholder={`Search ${props.label}...`} />
//                   <CommandEmpty>No {props.label} found.</CommandEmpty>
//                   <CommandGroup>
//                     <CommandList>
//                       {isFetchingData && (
//                         <CommandItem>Fetching Data...</CommandItem>
//                       )}
//                       {options?.map((option) => {
//                         return (
//                           <CommandItem
//                             value={option.label?.toString()}
//                             key={option.value}
//                             onSelect={() => {
//                               field.onChange({
//                                 target: { value: option.value },
//                               });
//                             }}
//                           >
//                             <Check
//                               className={cn(
//                                 "mr-2 h-4 w-4",
//                                 option.value === field.value
//                                   ? "opacity-100"
//                                   : "opacity-0",
//                               )}
//                             />
//                             {option.label}
//                           </CommandItem>
//                         );
//                       })}
//                     </CommandList>
//                   </CommandGroup>
//                 </Command>
//               </PopoverContent>
//             </Popover>
//             <FormMessage />
//           </FormItem>
//         );
//       }}
//     />
//   );
// };

// export default CustomComboBox;
