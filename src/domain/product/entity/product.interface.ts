export default interface ProductInterface {
  get id(): string;
  get name(): string;
  set name(name: string);
  get price(): number;
  set price(price: number);
}
