import React from "react"
import * as z from "zod"
import { Controller, Path, UseFormReturn } from "react-hook-form"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { FieldGroup } from "@workspace/ui/components/field"
import { cn } from "@workspace/ui/lib/utils"

import { RenderField } from "./render-field"
import { EntityFormConfig } from "./form-types"
import { Spinner } from "@workspace/ui/components/spinner"

export type EntityFormAction = {
  key: string
  label: string
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
  type?: "button" | "submit"
  disabled?: boolean
  loading?: boolean
  onClick?: () => void | Promise<void>
}

interface EntityFormProps<T extends z.ZodTypeAny> {
  form: UseFormReturn<z.infer<T>>
  config: EntityFormConfig
  initialData?: Partial<z.infer<T>>
  onSubmit: (values: z.infer<T>) => Promise<void>
  isSubmitting?: boolean
  actions?: EntityFormAction[]
}

export function EntityForm<T extends z.ZodTypeAny>({
  form,
  config,
  onSubmit,
  actions = [],
}: EntityFormProps<T>) {
  type FormValues = z.infer<T>

  async function handleSubmit(values: FormValues) {
    try {
      await onSubmit(values)
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
            <p className="hidden text-xs text-muted-foreground md:block">
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
              section.isLastField && "col-span-full"
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

      {/* FOOTER ACTIONS */}
      {actions.length > 0 && (
        <div className="sticky bottom-2 z-20 flex items-center justify-between rounded-2xl border bg-background/60 p-4 backdrop-blur">
          {/* Left Actions */}
          <div className="flex items-center gap-3">
            {actions
              .filter((action) => action.key === "previous")
              .map((action) => (
                <Button
                  key={action.key}
                  className="w-40"
                  type={action.type ?? "button"}
                  variant={action.variant ?? "default"}
                  disabled={action.disabled || action.loading}
                  onClick={
                    action.type === "submit"
                      ? form.handleSubmit(handleSubmit)
                      : action.onClick
                  }
                >
                  {action.loading ? <Spinner /> : action.label}
                </Button>
              ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {actions
              .filter((action) => action.key !== "previous")
              .map((action) => (
                <Button
                  className="w-40"
                  key={action.key}
                  type={action.type ?? "button"}
                  variant={action.variant ?? "default"}
                  disabled={action.disabled || action.loading}
                  onClick={
                    action.type === "submit"
                      ? form.handleSubmit(handleSubmit)
                      : action.onClick
                  }
                >
                  {action.loading ? <Spinner /> : action.label}
                </Button>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}
