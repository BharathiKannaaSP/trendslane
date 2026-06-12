import React from "react"
import * as z from "zod"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { FieldGroup } from "@workspace/ui/components/field"
import { RenderField } from "./render-field"
import { cn } from "@workspace/ui/lib/utils"
import { EntityFormConfig } from "./form-types"
import { Controller, Path, UseFormReturn } from "react-hook-form"

interface EntityFormProps<T extends z.ZodTypeAny> {
  form: UseFormReturn<z.infer<T>>
  config: EntityFormConfig
  initialData?: Partial<z.infer<T>>
  onSubmit: (values: z.infer<T>) => Promise<void>
  reset: () => void
  isSubmitting?: boolean
  submitLabel?: string
  submittingLabel?: string
}

export function EntityForm<T extends z.ZodTypeAny>({
  form,
  config,
  initialData,
  onSubmit,
  reset,
  isSubmitting,
}: EntityFormProps<T>) {
  type FormValues = z.infer<T>

  async function handleSubmit(values: FormValues) {
    try {
      await onSubmit(values)
      reset()
    } catch (err) {
      console.error(err)
    }
  }

  function getField(name: string) {
    return config.fields.find((field) => field.name === name)
  }

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-lg font-bold tracking-tight">{config.title}</h1>
          {config.description && (
            <p className="tex-xs hidden text-muted-foreground md:flex">
              {config.description}
            </p>
          )}
        </div>
      </div>

      {/* SECTIONS */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {config.sections.map((section) => (
          <Card
            key={section.title}
            className={cn(
              "rounded-sm shadow-sm",
              section.isLastField ? "col-span-full" : null
            )}
          >
            <CardHeader className="flex items-center gap-2">
              {section.icon ? <section.icon /> : null}
              <div>
                <CardTitle>{section.title}</CardTitle>
                {section.description && (
                  <CardDescription className="text-xs">
                    {section.description}
                  </CardDescription>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <FieldGroup className="grid gap-6 md:grid-cols-2">
                {section.fields.map((name) => {
                  const fieldConfig = getField(name)

                  if (!fieldConfig) {
                    return null
                  }

                  return (
                    <Controller
                      key={fieldConfig.name}
                      name={fieldConfig.name as Path<FormValues>}
                      control={form.control}
                      defaultValue={fieldConfig.defaultValue ?? ""}
                      render={({ field, fieldState }) => (
                        <RenderField
                          fieldConfig={fieldConfig}
                          field={field}
                          error={fieldState.error}
                        />
                      )}
                    />
                  )
                })}
              </FieldGroup>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* FOOTER */}
      <div className="sticky bottom-2 z-20 flex items-center justify-end gap-3 rounded-2xl border bg-background/60 p-4 backdrop-blur">
        <Button type="button" variant="outline" onClick={() => reset()}>
          Reset
        </Button>
        <Button
          type="submit"
          disabled={isSubmitting}
          onClick={form.handleSubmit(handleSubmit)}
        >
          {isSubmitting
            ? initialData
              ? "Updating..."
              : "Creating..."
            : initialData
              ? (config.updateLabel ?? "Update")
              : (config.submitLabel ?? "Create")}
        </Button>
      </div>
    </div>
  )
}
