import { Data } from "@/types";

export const allDataTypes: Data[]  = [
  {
    id: "formData",
    name: "Form Data"
  }, {
    id: "json",
    name: "JSON"
  }, {
    id: "xml",
    name: "XML"
  }
];

export * from "@/components/HTTP/DataSelector"
export * from "@/components/HTTP/CodeEditor"
