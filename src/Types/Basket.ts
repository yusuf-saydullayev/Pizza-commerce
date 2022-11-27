import { z } from "zod";

const PizzaState = {
  globalId: z.string(),
  id: z.string(),
  imageUrl: z.string().url({ message: "Invalid url" }),
  title: z.string(),
  type: z.number(),
  size: z.number(),
  price: z.number(),
  category: z.number(),
  rating: z.number(),
  pizzaPrice: z.number(),
  count: z.number(),
}

const Basket = z.object({
  Basket: z.array(z.object(PizzaState)),
  TotalSum: z.number(),
  TotalPizza: z.number(),
})

export type IBasket = z.infer<typeof Basket>