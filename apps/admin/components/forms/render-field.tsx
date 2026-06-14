"use client"
import { ControllerRenderProps } from "react-hook-form"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { Switch } from "@workspace/ui/components/switch"
import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"
import { MultiSelectField } from "./multi-select"
import { FieldConfig } from "./form-types"

interface RenderFieldProps {
  fieldConfig: FieldConfig
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: ControllerRenderProps<any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any
}

export function RenderField({ fieldConfig, field, error }: RenderFieldProps) {
  if (fieldConfig.type === "switch") {
    return (
      <Field
        orientation="horizontal"
        className="items-center justify-between rounded border p-4"
        data-invalid={!!error}
        data-required={fieldConfig.required ? true : false}
        style={{ gridColumn: fieldConfig.colSpan === 2 ? "span 2" : undefined }}
      >
        <div className="space-y-1">
          <FieldLabel>{fieldConfig.label}</FieldLabel>
          {fieldConfig.description && (
            <FieldDescription>{fieldConfig.description}</FieldDescription>
          )}
        </div>

        <Switch
          aria-label={fieldConfig.label}
          checked={field.value}
          onCheckedChange={field.onChange}
        />
      </Field>
    )
  }

  return (
    <Field
      data-invalid={!!error}
      className={cn(fieldConfig.colSpan === 2 && "md:col-span-2")}
    >
      <FieldLabel>{fieldConfig.label}</FieldLabel>

      {/* TEXT */}

      {fieldConfig.type === "text" && (
        <Input
          {...field}
          value={field.value ?? ""}
          disabled={fieldConfig.disabled}
          placeholder={fieldConfig.placeholder}
          {...fieldConfig.inputProps}
        />
      )}

      {/* TEXTAREA */}

      {fieldConfig.type === "textarea" && (
        <Textarea
          {...field}
          value={field.value ?? ""}
          disabled={fieldConfig.disabled}
          placeholder={fieldConfig.placeholder}
          className="min-h-28"
        />
      )}

      {/* SELECT */}
      {fieldConfig.type === "select" && (
        <Select
          key={field.value ?? "empty"}
          disabled={fieldConfig.disabled}
          value={field.value || ""}
          onValueChange={field.onChange}
          aria-label={fieldConfig.label}
        >
          <SelectTrigger className="w-full" aria-label={fieldConfig.label}>
            <SelectValue placeholder={fieldConfig.placeholder} />
          </SelectTrigger>

          <SelectContent>
            {fieldConfig.options?.map((option, index) => {
              // GROUPED OPTION
              if (
                typeof option === "object" &&
                option !== null &&
                "options" in option
              ) {
                const groupLabel =
                  "region" in option ? option.region : option.label

                return (
                  <SelectGroup key={`${groupLabel}-${index}`}>
                    <SelectLabel>{groupLabel}</SelectLabel>

                    {option.options.map((groupOption) => (
                      <SelectItem
                        key={groupOption.value}
                        value={groupOption.value}
                      >
                        {groupOption.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                )
              }

              // NORMAL OPTION
              return (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
      )}

      {/* MULTISELECT */}
      {fieldConfig.type === "multiselect" && (
        <MultiSelectField field={field} fieldConfig={fieldConfig} />
      )}

      {fieldConfig.description && (
        <FieldDescription className="text-sm">
          {fieldConfig.description}
        </FieldDescription>
      )}

      {error && <FieldError errors={[error]} />}
    </Field>
  )
}
