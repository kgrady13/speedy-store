"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const FormSchema = z.object({
  color: z.string({
    required_error: "Please select a color.",
  }),
  size: z.string({
    required_error: "Please select a size.",
  }),
});

export function ProductForm({ product }: { product: any }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      color: product.colors[0].name,
      size: product.sizes[2].name,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <h2 className="text-sm font-medium text-gray-900">Color</h2>
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="mt-2 flex items-center space-x-3"
                  >
                    {product.colors.map((color: any) => (
                      <FormItem key={color.name}>
                        <FormControl>
                          <RadioGroupItem
                            value={color.name}
                            id={`color-${color.name}`}
                            className="sr-only"
                          />
                        </FormControl>
                        <FormLabel
                          htmlFor={`color-${color.name}`}
                          className={cn(
                            color.selectedColor,
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400",
                            field.value === color.name && "ring-2"
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={cn(
                              color.bgColor,
                              "h-8 w-8 rounded-full border border-black border-opacity-10"
                            )}
                          />
                          <span className="sr-only">{color.name}</span>
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-gray-900">Size</h2>
            <a
              href="#"
              className="text-sm font-medium text-emerald-600 hover:text-emerald-500"
            >
              See sizing chart
            </a>
          </div>
          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="mt-2 grid grid-cols-3 gap-3 sm:grid-cols-6"
                  >
                    {product.sizes.map((size: any) => (
                      <FormItem key={size.name}>
                        <FormControl>
                          <RadioGroupItem
                            value={size.name}
                            id={`size-${size.name}`}
                            className="sr-only"
                            disabled={!size.inStock}
                          />
                        </FormControl>
                        <FormLabel
                          htmlFor={`size-${size.name}`}
                          className={cn(
                            size.inStock
                              ? "cursor-pointer focus:outline-none"
                              : "cursor-not-allowed opacity-25",
                            "flex items-center justify-center rounded-md border border-gray-200 bg-white px-3 py-3 text-sm font-medium uppercase text-gray-900 hover:bg-gray-50",
                            field.value === size.name &&
                              "border-transparent bg-emerald-600 text-white hover:bg-emerald-700",
                            "checked:ring-2 checked:ring-emerald-500 checked:ring-offset-2",
                            "sm:flex-1"
                          )}
                        >
                          {size.name}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-emerald-600 px-8 py-3 text-base font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          Add to cart
        </Button>
      </form>
    </Form>
  );
}
