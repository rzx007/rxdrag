import { IFieldSchema } from "@rxdrag/fieldy"
import { FieldType } from "@rxdrag/schema"
import { useMemo, useRef } from "react"
import { useFieldPath } from "../../../hooks/useFieldPath"

export function useCreateFieldSchema(name: string, type?: FieldType) {
  const parentPath = useFieldPath() || ""
  const fieldPath = useMemo(() => {
    return parentPath ? parentPath + "." + name : name
  }, [name, parentPath])

  const fieldPathRef = useRef(fieldPath)
  fieldPathRef.current = fieldPath
  const fieldSchema: IFieldSchema = useMemo(() => {
    return {
      path: fieldPath,
      type: type,
      name
    }
  }, [fieldPath, name, type])

  return fieldSchema
}