// Interface & Type.
import type { AnyIterable, AnyIterableElement } from "@typedly/iterable";
import type { CollectionSettings, InferCollectionType } from "@typedly/collection";
import type { ConfigurableCollectionAdapter } from "@typedly/configurable-collection";
import type { InferAsyncOf } from "@typedly/data";
/**
 * @description Adaptable configurable collection adapter constructor, defining how to create instances of adaptable configurable collection adapters.
 * @export
 * @interface AdaptableConfigurableCollectionAdapterConstructor
 * @template {ConfigurableCollectionAdapter<C, T, E, S> | undefined} A The adaptable configurable collection adapter type, defining how the collection adapts to different data sources or configurations.
 * @template {CollectionSettings<T, E, S>} C The collection settings, defining its behavior and structure.
 * @template {AnyIterable<E>} [T=InferCollectionType<C, A>] The collection type, inferred from the settings and adapter if not provided.
 * @template [E=AnyIterableElement<T>] The element type, inferred from the collection type if not provided.
 * @template {boolean} [S=InferAsyncOf<[C, A]>] Whether the collection is asynchronous, inferred from the settings and adapter if not provided.
 */
export interface AdaptableConfigurableCollectionAdapterConstructor<
  A extends ConfigurableCollectionAdapter<C, T, E, S> | undefined,
  C extends CollectionSettings<T, E, S>,
  T extends AnyIterable<E> = InferCollectionType<C, A>,  
  E = AnyIterableElement<T>,
  S extends boolean = InferAsyncOf<[C, A]>,
> {
  new (
    settings: C,
    value?: T,
    ...elements: E[]
  ): A;
}
