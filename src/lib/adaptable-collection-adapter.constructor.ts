// Interface & Type.
import type { AnyIterable, AnyIterableElement } from "@typedly/iterable";
import type { CollectionAdapterShape } from "@typedly/collection";
import type { InferAsync } from "@typedly/data";
/**
 * @description Adaptable collection adapter constructor, defining how to create instances of adaptable collection adapters.
 * @export
 * @interface AdaptableCollectionAdapterConstructor
 * @template {CollectionAdapterShape<T, E, S> | undefined} A The adaptable collection adapter type, defining how the collection adapts to different data sources or configurations.
 * @template {AnyIterable<E>} T The collection type, defining its structure and behavior.
 * @template [E=AnyIterableElement<T>] The element type, inferred from the collection type if not provided.
 * @template {boolean} [S=InferAsync<A>] Whether the collection is asynchronous, inferred from the adapter if not provided.
 */
export interface AdaptableCollectionAdapterConstructor<
  A extends CollectionAdapterShape<T, E, S> | undefined,
  T extends AnyIterable<E>,
  E = AnyIterableElement<T>,
  S extends boolean = InferAsync<A>
> {
  new (
    value?: T,
    ...elements: E[]
  ): A;
}
