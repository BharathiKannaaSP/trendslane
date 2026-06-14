import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@workspace/ui/components/combobox"
import { flattenSelectOptions } from "./form-utils"
import { memo, useMemo } from "react"
import { ControllerRenderProps } from "react-hook-form"
import { FieldConfig } from "./form-types"

export const MultiSelectField = memo(function MultiSelectField({
  field,
  fieldConfig,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: ControllerRenderProps<any>
  fieldConfig: FieldConfig
}) {
  const anchor = useComboboxAnchor()
  const items = useMemo(
    () =>
      flattenSelectOptions(fieldConfig.options).map((option) => option.label),
    [fieldConfig.options]
  )

  return (
    <Combobox
      multiple
      autoHighlight
      items={items}
      disabled={fieldConfig.disabled}
      value={field.value ?? []}
      onValueChange={field.onChange}
      aria-label={fieldConfig.label}
    >
      <ComboboxChips ref={anchor} className="w-full">
        <ComboboxValue placeholder={fieldConfig.placeholder}>
          {(values: string[]) => (
            <>
              {Array.isArray(values) &&
                values.map((value) => (
                  <ComboboxChip key={value}>{value}</ComboboxChip>
                ))}

              <ComboboxChipsInput
                placeholder={values?.length ? "" : fieldConfig.placeholder}
              />
            </>
          )}
        </ComboboxValue>
      </ComboboxChips>

      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No items found.</ComboboxEmpty>

        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
})
