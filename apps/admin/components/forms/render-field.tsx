"use client"
import { ControllerRenderProps } from "react-hook-form"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
  FieldTitle,
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
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import { Switch } from "@workspace/ui/components/switch"
import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"
import { MultiSelectField } from "./multi-select"
import { FieldConfig } from "./form-types"
import PhoneInputInput, { Country } from "react-phone-number-input/input"

interface RenderFieldProps {
  fieldConfig: FieldConfig
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: ControllerRenderProps<any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any
  countryCode?: string
}

export function RenderField({
  fieldConfig,
  field,
  error,
  countryCode,
}: RenderFieldProps) {
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

      {/* // Radio Group */}
      {fieldConfig.type === "radio-group" && (
        <RadioGroup
          value={field.value}
          onValueChange={field.onChange}
          disabled={fieldConfig.disabled}
          className="flex w-full flex-col gap-3 lg:flex-row"
        >
          {fieldConfig.options?.map((option) => {
            if (
              typeof option === "object" &&
              option !== null &&
              "value" in option
            ) {
              const id = `${fieldConfig.name}-${option.value}`
              const Icon = option.icon

              return (
                <FieldLabel key={option.value} htmlFor={id}>
                  <Field
                    orientation="horizontal"
                    className="h-30 cursor-pointer rounded-lg border p-4 transition-colors hover:bg-muted/50"
                  >
                    <FieldContent>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-2">
                          {Icon && <Icon />}
                          <FieldTitle>{option.label}</FieldTitle>
                          <FieldDescription className="text-xs">
                            {option.description}
                          </FieldDescription>
                        </div>
                        <div className="self-start">
                          <RadioGroupItem id={id} value={option.value} />
                        </div>
                      </div>
                    </FieldContent>
                  </Field>
                </FieldLabel>
              )
            }

            return null
          })}
        </RadioGroup>
      )}

      {/* PHONE NUMBER */}
      {fieldConfig.type === "phone-number-select" && (
        <PhoneInputInput
          international
          withCountryCallingCode
          country={countryCode as Country}
          value={field.value ?? ""}
          onChange={(value) => field.onChange(value ?? "")}
          disabled={fieldConfig.disabled}
          placeholder={fieldConfig.placeholder}
          className={cn(
            "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40"
          )}
        />
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
