// 'use client';
// import { useEffect, useState } from 'react';
// import type React from "react";
// import { Input } from "@/components/ui/input";
// import { CsvFileToString, csvToJson } from "@/utils/csvToJson";
// import { toast } from "sonner";
// import { z } from "zod";
// import { ColumnDef } from "@tanstack/react-table";
// // import { DataTable } from '@/app/principal/viewFaculty/data-table-forViewFaculty';
// import { DynamicDataTable } from './DataTable';

// type typesforCsvInput<T extends z.ZodRawShape, U extends object> = {
//   ZodSchema: z.ZodObject<T>
//   columns: ColumnDef<U>[],
//   callBackData: (data: U[]) => void
// }

// const CsvInput = <T extends z.ZodRawShape, U extends object>({ ZodSchema, columns, callBackData }: typesforCsvInput<T, U>) => {
//   // const ZodSchema = z.object({
//   //   contactName: z.string(),
//   //   contactPhoneNumber: z.string(),
//   // });

//   const [data, setData] = useState<U[]>([]);

//   useEffect(() => {
//     callBackData(data)
//   }, [data])

//   const handleChange = async (
//     e: React.ChangeEvent<HTMLInputElement>,
//   ): Promise<any> => {
//     const csvString = await CsvFileToString(e.target.files);

//     if (!csvString) return toast.error("Invalid CSV file");
//     const json = await csvToJson(csvString, ZodSchema.array()) as any;
//     if (!json.data)
//       return toast.error(
//         "Invalid CSV file, please make sure the file is in correct format",
//       );
//     setData(json.data as any);
//   };

//   return (
//     <div>
//       <Input type={"file"} accept={".csv"} onChange={handleChange} />
//       {data.length !== 0 && <DynamicDataTable data={data} columns={columns} />}
//     </div>
//   );
// };
// export default CsvInput;
